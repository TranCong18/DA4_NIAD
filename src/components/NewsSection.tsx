// File: src/components/NewsSection.tsx
// ✅ Đường dẫn: src/components/NewsSection.tsx

const newsList = [
  {
    title: "Ra mắt xe chở tiền chống đạn phiên bản 2025",
    description: "Dòng xe mới đạt tiêu chuẩn EN1063 cấp độ B6 chống đạn.",
    image: "/news/cash-news1.jpg",
    date: "12/05/2025",
  },
  {
    title: "Ký kết hợp tác với ngân hàng quốc tế",
    description: "Cung cấp 50 xe vận chuyển tiền cho hệ thống ATM toàn quốc.",
    image: "/news/cash-news2.jpg",
    date: "05/05/2025",
  },
  {
    title: "Hội thảo “An ninh vận chuyển tài chính 4.0”",
    description: "Giải pháp tích hợp GPS, camera AI và cảnh báo xâm nhập.",
    image: "/news/cash-news3.jpg",
    date: "25/04/2025",
  },
];

export default function NewsSection() {
  return (
    <section id="news" className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-8">
          📰 Tin tức & Sự kiện
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsList.map((news, index) => (
            <div
              key={index}
              className="bg-gray-50 border rounded-xl shadow hover:shadow-md overflow-hidden transition"
            >
              <img
                src={news.image}
                alt={news.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <p className="text-sm text-gray-500 mb-1">{news.date}</p>
                <h3 className="text-lg font-semibold text-gray-800">
                  {news.title}
                </h3>
                <p className="text-sm text-gray-600 mt-2">{news.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
