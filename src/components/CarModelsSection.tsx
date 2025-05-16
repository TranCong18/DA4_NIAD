// File: src/components/CarModelsSection.tsx
// ✅ Đường dẫn: src/components/CarModelsSection.tsx

"use client";

import { useRef } from "react";

const carModels = [
  {
    name: "KIA Seltos",
    image: "/cars/seltos.jpg",
  },
  {
    name: "KIA Sportage",
    image: "/cars/sportage.jpg",
  },
  {
    name: "KIA Sonet",
    image: "/cars/sonet.jpg",
  },
  {
    name: "KIA Sorento",
    image: "/cars/sorento.jpg",
  },
  {
    name: "KIA Carnival",
    image: "/cars/carnival.jpg",
  },
  {
    name: "KIA K3",
    image: "/cars/k3.jpg",
  },
];

export default function CarModelsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    const container = scrollRef.current;
    if (container) {
      const scrollAmount = direction === "left" ? -300 : 300;
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section id="models" className="py-12 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          🚗 Dòng xe nổi bật
        </h2>

        <div className="relative">
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow rounded-full p-2 hidden md:block"
          >
            ◀
          </button>

          <div
            ref={scrollRef}
            className="flex overflow-x-auto space-x-4 pb-4 scrollbar-hide"
          >
            {carModels.map((car, idx) => (
              <div
                key={idx}
                className="min-w-[200px] md:min-w-[250px] bg-white rounded-xl shadow hover:shadow-lg transition"
              >
                <img
                  src={car.image}
                  alt={car.name}
                  className="w-full h-40 object-cover rounded-t-xl"
                />
                <div className="p-3 text-center font-medium text-gray-800">
                  {car.name}
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow rounded-full p-2 hidden md:block"
          >
            ▶
          </button>
        </div>
      </div>
    </section>
  );
}
