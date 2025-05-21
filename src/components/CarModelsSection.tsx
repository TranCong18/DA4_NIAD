// File: src/components/CarModelsSection.tsx
// ✅ Đường dẫn: src/components/CarModelsSection.tsx

const cashTruckModels = [
  {
    name: "Xe Chở Tiền Bọc Thép 1 Tấn",
    description: "Thiết kế gọn gàng, an toàn cao, phù hợp di chuyển nội thành.",
    image: "/cars/truck1.jpg",
  },
  {
    name: "Xe Chở Tiền Hai Ngăn Độc Lập",
    description: "Tối ưu an ninh khi tách biệt tiền mặt và nhân sự.",
    image: "/cars/truck2.jpg",
  },
  {
    name: "Xe Vận Chuyển Tài Liệu Mật",
    description: "Trang bị hệ thống giám sát, định vị và chống trộm.",
    image: "/cars/truck3.jpg",
  },
];

export default function CarModelsSection() {
  return (
    <section id="cash-trucks" className="py-12 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-8">
          🚛 Dòng Xe Chở Tiền Nổi Bật
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cashTruckModels.map((model, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow hover:shadow-md transition overflow-hidden"
            >
              <img
                src={model.image}
                alt={model.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{model.name}</h3>
                <p className="text-sm text-gray-600 mt-2">
                  {model.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
