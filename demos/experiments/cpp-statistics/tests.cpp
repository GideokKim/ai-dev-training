#include "statistics.hpp"

#include <iostream>
#include <limits>
#include <stdexcept>
#include <string>
#include <vector>

using namespace graystats;

static void require(bool condition, const std::string& message) {
    if (!condition) throw std::runtime_error(message);
}

int main() {
    try {
        const Compute functions[] = {copied_buffer, row_reductions, fused_pass};
        std::size_t checks = 0;
        // These literals catch missing pixels, wrong dimensions and mean division.
        const std::vector<Pixel> pixels{0, 10, 20, 30};
        const ImageView image(pixels, 2, 2, 2, 255);
        for (auto compute : functions) {
            require(compute(image, std::pmr::new_delete_resource()) ==
                    Statistics{2, 2, 4, 0, 30, 15.0}, "2x2 six-field contract");
            ++checks;
        }

        // A padded ROI must ignore sentinel pixels outside the active width.
        const std::vector<Pixel> padded{1, 2, 65535, 65535, 3, 4};
        const ImageView roi(padded, 2, 2, 4, 255);
        for (auto compute : functions) {
            require(compute(roi, std::pmr::new_delete_resource()) ==
                    Statistics{2, 2, 4, 1, 4, 2.5}, "padding must not enter statistics");
            ++checks;
        }

        const std::vector<Pixel> high{65535};
        const ImageView single(high, 1, 1, 1, 65535);
        for (auto compute : functions) {
            require(compute(single, std::pmr::new_delete_resource()) ==
                    Statistics{1, 1, 1, 65535, 65535, 65535.0}, "16-bit maximum");
            ++checks;
        }

        // More than UINT32_MAX total intensity catches a narrow accumulator.
        const std::vector<Pixel> bright(1024 * 256, 65535);
        const ImageView large(bright, 1024, 256, 1024, 65535);
        for (auto compute : functions) {
            require(compute(large, std::pmr::new_delete_resource()) ==
                    Statistics{1024, 256, 262144, 65535, 65535, 65535.0},
                    "sum must not overflow 32 bits");
            ++checks;
        }

        auto rejects = [&](auto create, const char* label) {
            bool rejected = false;
            try { create(); } catch (const std::invalid_argument&) { rejected = true; }
            require(rejected, label); ++checks;
        };
        rejects([&] { ImageView bad({}, 0, 1, 1, 255); }, "empty width");
        rejects([&] { ImageView bad({}, 1, 0, 1, 255); }, "empty height");
        rejects([&] { ImageView bad(pixels, 2, 2, 1, 255); }, "short stride");
        rejects([&] { ImageView bad(pixels, 2, 3, 2, 255); }, "short storage");
        rejects([&] { ImageView bad(pixels, 2, 2, 2, 0); }, "zero maximum");
        rejects([&] { ImageView bad(pixels, 2, 2, 2, 65536); }, "large maximum");
        rejects([&] { ImageView bad(high, 1, 1, 1, 255); }, "pixel out of range");
        bool overflow = false;
        try {
            ImageView bad({}, std::numeric_limits<std::size_t>::max(), 2,
                          std::numeric_limits<std::size_t>::max(), 255);
        } catch (const std::overflow_error&) { overflow = true; }
        require(overflow, "dimension multiplication overflow"); ++checks;
        std::cout << "PASS " << checks << " contract checks\n";
    } catch (const std::exception& error) {
        std::cerr << "FAIL: " << error.what() << '\n';
        return 1;
    }
}
