#include "statistics.hpp"

#include <algorithm>
#include <bit>
#include <chrono>
#include <fstream>
#include <iomanip>
#include <iostream>
#include <stdexcept>
#include <string>
#include <vector>

using namespace graystats;

class BufferTracker final : public std::pmr::memory_resource {
public:
    std::size_t allocations = 0, live = 0, peak = 0;
private:
    void* do_allocate(std::size_t bytes, std::size_t alignment) override {
        void* pointer = std::pmr::new_delete_resource()->allocate(bytes, alignment);
        ++allocations; live += bytes; peak = std::max(peak, live);
        return pointer;
    }
    void do_deallocate(void* pointer, std::size_t bytes, std::size_t alignment) override {
        live -= bytes;
        std::pmr::new_delete_resource()->deallocate(pointer, bytes, alignment);
    }
    bool do_is_equal(const std::pmr::memory_resource& other) const noexcept override {
        return this == &other;
    }
};

struct Candidate { const char* name; Compute compute; };
static constexpr Candidate candidates[] = {
    {"copied_buffer", copied_buffer}, {"row_reductions", row_reductions},
    {"fused_pass", fused_pass}
};
static volatile std::uint64_t result_sink = 0;

static double batch(const Candidate& candidate, const ImageView& image,
                    std::size_t iterations, const Statistics& expected) {
    Statistics last;
    std::uint64_t checksum = 0;
    const auto begin = std::chrono::steady_clock::now();
    for (std::size_t i = 0; i < iterations; ++i) {
        last = candidate.compute(image, std::pmr::new_delete_resource());
        checksum ^= std::bit_cast<std::uint64_t>(last.mean) + last.pixel_count +
                    last.minimum + last.maximum + i;
    }
    const auto end = std::chrono::steady_clock::now();
    result_sink = checksum;
    if (last != expected) throw std::runtime_error("timed result changed");
    return std::chrono::duration<double, std::nano>(end - begin).count() / iterations;
}

static void print_statistics(const Statistics& result) {
    std::cout << "{\"width\":" << result.width << ",\"height\":" << result.height
              << ",\"pixel_count\":" << result.pixel_count
              << ",\"minimum\":" << result.minimum << ",\"maximum\":" << result.maximum
              << ",\"mean\":" << result.mean << '}';
}

int main(int argc, char** argv) {
    try {
        if (argc != 7) throw std::invalid_argument("usage: benchmark MODE FILE WIDTH HEIGHT STRIDE MAX");
        const std::string mode = argv[1];
        if (mode != "--check" && mode != "--bench") throw std::invalid_argument("invalid mode");
        const auto width = std::stoull(argv[3]), height = std::stoull(argv[4]);
        const auto stride = std::stoull(argv[5]);
        const auto max_value = static_cast<std::uint32_t>(std::stoul(argv[6]));
        std::ifstream input(argv[2], std::ios::binary);
        if (!input) throw std::runtime_error("cannot open fixture");
        std::vector<Pixel> pixels;
        char pair[2];
        while (input.read(pair, 2)) {
            pixels.push_back(static_cast<Pixel>(
                (static_cast<unsigned char>(pair[0]) << 8) |
                 static_cast<unsigned char>(pair[1])));
        }
        if (input.gcount() != 0) throw std::runtime_error("odd fixture byte count");
        const ImageView image(pixels, width, height, stride, max_value);
        const auto expected = copied_buffer(image, std::pmr::new_delete_resource());
        std::cout << std::setprecision(17) << "{\"results\":[";
        for (std::size_t i = 0; i < 3; ++i) {
            BufferTracker tracker;
            const auto result = candidates[i].compute(image, &tracker);
            if (result != expected || tracker.live != 0)
                throw std::runtime_error("candidate mismatch or live temporary allocation");
            if (i) std::cout << ',';
            std::cout << "{\"variant\":\"" << candidates[i].name << "\",\"statistics\":";
            print_statistics(result);
            std::cout << ",\"temporary_buffer_allocations\":" << tracker.allocations
                      << ",\"temporary_buffer_peak_bytes\":" << tracker.peak << '}';
        }
        std::cout << ']';
        if (mode == "--bench") {
            std::size_t iterations = 1;
            // Use one common batch size, calibrated for the fastest candidate.
            for (const auto& candidate : candidates) {
                for (int i = 0; i < 12; ++i) candidate.compute(image, std::pmr::new_delete_resource());
                std::size_t count = 1;
                while (count < (1u << 20) && batch(candidate, image, count, expected) * count < 5000000.0)
                    count *= 2;
                iterations = std::max(iterations, count);
            }
            std::cout << ",\"iterations\":" << iterations << ",\"samples\":[";
            bool first = true;
            for (int round = 0; round < 21; ++round) {
                for (int position = 0; position < 3; ++position) {
                    const auto& candidate = candidates[(round + position) % 3];
                    const double elapsed = batch(candidate, image, iterations, expected);
                    if (!first) std::cout << ',';
                    first = false;
                    std::cout << "{\"round\":" << round << ",\"position\":" << position
                              << ",\"variant\":\"" << candidate.name
                              << "\",\"ns_per_call\":" << elapsed << '}';
                }
            }
            std::cout << ']';
        }
        std::cout << "}\n";
    } catch (const std::exception& error) {
        std::cerr << error.what() << '\n';
        return 1;
    }
}
