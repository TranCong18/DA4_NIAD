// File: src/components/ProductSection.tsx
// ✅ Đường dẫn: src/components/ProductSection.tsx

"use client";
import { useState } from "react";
import { categories, products } from "@/data/products";
import { Fuel, Settings2, Users } from "lucide-react";

export default function ProductSection() {
  const [activeCategory, setActiveCategory] = useState("SUV");
  const filtered = products.filter((p) => p.category === activeCategory);
  const product = filtered[0];

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
                onClick={() => setActiveCategory(cat)}
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
            <p className="text-gray-400 text-base">
              Sắc màu thời trang - Khẳng định phong cách
            </p>
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
          </div>
        </div>
      )}
    </section>
  );
}
