// File: src/components/ProductSection.tsx
// ✅ Đường dẫn: src/components/ProductSection.tsx

"use client";
import { useState } from "react";
import { categories, products } from "@/data/products";
import {
  Fuel,
  Settings2,
  Users,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

export default function ProductSection() {
  const [activeCategory, setActiveCategory] = useState("SUV");
  const [currentIndex, setCurrentIndex] = useState(0);

  const filtered = products.filter((p) => p.category === activeCategory);
  const total = filtered.length;
  const product = filtered[currentIndex];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % total);
  };

  return (
    <section className="w-screen h-screen relative bg-white overflow-hidden flex flex-col justify-center md:px-16">
      {/* Tabs */}
      <div className="ml-[-850px] flex justify-center mb-6">
        <div className="flex bg-white shadow-md rounded-full px-2 py-2 gap-2">
          {categories.map((cat) => {
            const count = products.filter((p) => p.category === cat).length;
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => {
                  setActiveCategory(cat);
                  setCurrentIndex(0); // reset index when changing category
                }}
                className={`px-6 py-2 rounded-full font-semibold text-sm transition-all border-b-2 ${
                  isActive
                    ? "text-black border-black"
                    : "text-gray-700 border-transparent hover:text-black"
                }`}
              >
                {cat} ({count})
              </button>
            );
          })}
        </div>
      </div>

      {/* Product */}
      {product && (
        <div className="w-full grid md:grid-cols-2 gap-6 items-center flex-1">
          {/* Left Info */}
          <div className="w-auto space-y-4 px-6">
            <h2 className="text-4xl font-bold uppercase">{product.name}</h2>
            <p className="text-gray-400 text-base">{product.desc}</p>
            <p className="text-2xl font-bold">{product.price}</p>
            <button className="mt-4 px-6 py-2 bg-black text-white rounded-md hover:bg-gray-800">
              Xem tất cả
            </button>
          </div>

          {/* Right - Image + Info */}
          <div className="relative">
            {/* Nền xiên màu xanh đậm */}
            <div className="absolute inset-0 bg-[#0d1b2a] skew-x-[-12deg] origin-left z-0 rounded-md"></div>

            {/* Ảnh xe */}
            <img
              src={product.image}
              alt={product.name}
              className="relative z-10 w-full h-auto object-contain ml-[-250px]"
            />

            {/* Thông số kỹ thuật */}
            <div className="absolute top-6 right-6 z-20 text-white space-y-4">
              <div className="flex items-center gap-2">
                <Fuel size={16} />
                <span className="text-sm">Xăng, 1.25L</span>
              </div>
              <div className="flex items-center gap-2">
                <Settings2 size={16} />
                <span className="text-sm">Hộp số tự động 4 cấp (4AT)</span>
              </div>
              <div className="flex items-center gap-2">
                <Users size={16} />
                <span className="text-sm">5 chỗ</span>
              </div>
            </div>

            {/* Mũi tên điều hướng */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 flex items-center gap-4">
              <button
                onClick={handlePrev}
                className="bg-white rounded-full p-2 shadow hover:bg-gray-100"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={handleNext}
                className="bg-white rounded-full p-2 shadow hover:bg-gray-100"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
