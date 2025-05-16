// File: src/components/Banner.tsx
"use client";

import { Carousel } from "react-responsive-carousel";

// Bạn có thể thay các ảnh này bằng ảnh thực tế từ hệ thống CMS hoặc thư mục public
const bannerImages = [
  {
    src: "/images/banner1.jpg",
    alt: "KIA Banner 1",
  },
  {
    src: "/images/banner2.jpg",
    alt: "KIA Banner 2",
  },
  {
    src: "/images/banner3.jpg",
    alt: "KIA Banner 3",
  },
];

export default function Banner() {
  return (
    <section className="relative">
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        showArrows={true}
        interval={5000}
        transitionTime={800}
      >
        {bannerImages.map((image, idx) => (
          <div key={idx}>
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-[calc(100vh-80px)] object-cover"
            />
          </div>
        ))}
      </Carousel>
    </section>
  );
}
