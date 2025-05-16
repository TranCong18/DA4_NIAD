// File: src/components/ModelShowcase.tsx
"use client";

const carModels = [
  {
    name: "KIA Seltos",
    image: "/images/cars/seltos.jpg",
    link: "#",
  },
  {
    name: "KIA K3",
    image: "/images/cars/k3.jpg",
    link: "#",
  },
  {
    name: "KIA Sportage",
    image: "/images/cars/sportage.jpg",
    link: "#",
  },
  {
    name: "KIA Carnival",
    image: "/images/cars/carnival.jpg",
    link: "#",
  },
];

export default function ModelShowcase() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-10">
        Các dòng xe nổi bật
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {carModels.map((model, idx) => (
          <div
            key={idx}
            className="relative group overflow-hidden rounded-lg shadow hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src={model.image}
              alt={model.name}
              className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white">
              <h3 className="text-xl font-semibold">{model.name}</h3>
              <a
                href={model.link}
                className="mt-2 px-4 py-1 bg-red-600 rounded hover:bg-red-700 text-sm"
              >
                Xem chi tiết
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
