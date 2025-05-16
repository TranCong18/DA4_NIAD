// File: src/components/NewsSection.tsx
"use client";

const newsItems = [
  {
    title: "KIA EV5 chính thức ra mắt tại Việt Nam",
    image: "/images/news/ev5.jpg",
    date: "12/04/2025",
    summary:
      "Mẫu xe điện EV5 với thiết kế ấn tượng và công nghệ mới nhất vừa ra mắt...",
    link: "#",
  },
  {
    title: "Ưu đãi tháng 5 – lên tới 100 triệu đồng",
    image: "/images/news/uudai.jpg",
    date: "05/05/2025",
    summary: "Cơ hội sở hữu xe KIA với ưu đãi cực hấp dẫn trong tháng này.",
    link: "#",
  },
  {
    title: "KIA Carnival 2025 có gì mới?",
    image: "/images/news/carnival.jpg",
    date: "30/04/2025",
    summary: "Cùng khám phá những điểm thay đổi nổi bật trên Carnival 2025.",
    link: "#",
  },
];

export default function NewsSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center mb-10">
        Tin tức & Sự kiện
      </h2>
      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
        {newsItems.map((item, idx) => (
          <div
            key={idx}
            className="bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition-shadow duration-300"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <p className="text-sm text-gray-500 mb-1">{item.date}</p>
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600 mb-4">{item.summary}</p>
              <a
                href={item.link}
                className="text-red-600 hover:underline text-sm font-medium"
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
