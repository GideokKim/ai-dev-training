#include "statistics.hpp"

#include <algorithm>
#include <limits>
#include <numeric>
#include <stdexcept>
#include <vector>

namespace graystats {
ImageView::ImageView(std::span<const Pixel> pixels, std::size_t width,
                     std::size_t height, std::size_t stride, std::uint32_t max_value)
    : pixels_(pixels), width_(width), height_(height), stride_(stride) {
    if (!width || !height || stride < width || !max_value || max_value > 65535)
        throw std::invalid_argument("invalid image dimensions, stride or maximum");
    const auto size_limit = std::numeric_limits<std::size_t>::max();
    if (height > size_limit / width || (height - 1) > (size_limit - width) / stride)
        throw std::overflow_error("image dimensions overflow");
    if (pixel_count() > std::numeric_limits<std::uint64_t>::max() / max_value)
        throw std::overflow_error("intensity sum may overflow");
    if (pixels.size() < (height - 1) * stride + width)
        throw std::invalid_argument("image storage is shorter than its extent");
    // Like GrayImage construction, validate once outside timed computation.
    for (std::size_t y = 0; y < height; ++y)
        for (const auto value : row(y))
            if (value > max_value) throw std::invalid_argument("pixel exceeds maximum");
}

static Statistics finish(const ImageView& image, Pixel minimum, Pixel maximum,
                         std::uint64_t sum) {
    return {image.width(), image.height(), image.pixel_count(), minimum, maximum,
            static_cast<double>(sum) / static_cast<double>(image.pixel_count())};
}

Statistics copied_buffer(const ImageView& image, std::pmr::memory_resource* resource) {
    // A literal port of the Python flattening strategy, not discovered C++ legacy.
    std::pmr::vector<Pixel> values(resource);
    values.reserve(image.pixel_count());
    for (std::size_t y = 0; y < image.height(); ++y) {
        const auto row = image.row(y);
        values.insert(values.end(), row.begin(), row.end());
    }
    return finish(image, *std::min_element(values.begin(), values.end()),
                  *std::max_element(values.begin(), values.end()),
                  std::accumulate(values.begin(), values.end(), std::uint64_t{0}));
}

Statistics row_reductions(const ImageView& image, std::pmr::memory_resource*) {
    Pixel minimum = std::numeric_limits<Pixel>::max(), maximum = 0;
    std::uint64_t sum = 0;
    for (std::size_t y = 0; y < image.height(); ++y) {
        const auto row = image.row(y);
        minimum = std::min(minimum, *std::min_element(row.begin(), row.end()));
        maximum = std::max(maximum, *std::max_element(row.begin(), row.end()));
        sum += std::accumulate(row.begin(), row.end(), std::uint64_t{0});
    }
    return finish(image, minimum, maximum, sum);
}

Statistics fused_pass(const ImageView& image, std::pmr::memory_resource*) {
    Pixel minimum = std::numeric_limits<Pixel>::max(), maximum = 0;
    std::uint64_t sum = 0;
    for (std::size_t y = 0; y < image.height(); ++y) {
        for (const auto value : image.row(y)) {
            minimum = std::min(minimum, value);
            maximum = std::max(maximum, value);
            sum += value;
        }
    }
    return finish(image, minimum, maximum, sum);
}
} // namespace graystats
