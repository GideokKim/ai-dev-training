#pragma once

#include <cstddef>
#include <cstdint>
#include <memory_resource>
#include <span>

namespace graystats {
using Pixel = std::uint16_t;

class ImageView {
public:
    ImageView(std::span<const Pixel> pixels, std::size_t width,
              std::size_t height, std::size_t stride, std::uint32_t max_value);
    std::size_t width() const { return width_; }
    std::size_t height() const { return height_; }
    std::size_t pixel_count() const { return width_ * height_; }
    std::span<const Pixel> row(std::size_t y) const {
        return pixels_.subspan(y * stride_, width_);
    }

private:
    std::span<const Pixel> pixels_;
    std::size_t width_, height_, stride_;
};

struct Statistics {
    std::size_t width{}, height{}, pixel_count{};
    Pixel minimum{}, maximum{};
    double mean{};
    bool operator==(const Statistics&) const = default;
};

using Compute = Statistics (*)(const ImageView&, std::pmr::memory_resource*);
Statistics copied_buffer(const ImageView&, std::pmr::memory_resource*);
Statistics row_reductions(const ImageView&, std::pmr::memory_resource*);
Statistics fused_pass(const ImageView&, std::pmr::memory_resource*);
} // namespace graystats
