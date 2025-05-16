// File: src/components/AboutCTA.tsx
"use client";

export default function AboutCTA() {
  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-4">
            Khám phá trải nghiệm tại KIA Việt Nam
          </h2>
          <p className="text-gray-700 mb-6">
            Chúng tôi cam kết mang đến cho bạn trải nghiệm mua xe chuyên nghiệp,
            hiện đại và tiện nghi nhất. Từ khâu tư vấn đến hậu mãi, tất cả đều
            được tối ưu để phục vụ khách hàng tốt nhất.
          </p>
          <a
            href="#"
            className="inline-block bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700 transition"
          >
            Đặt lịch lái thử
          </a>
        </div>
        <div>
          <img
            src="/images/about/showroom.jpg"
            alt="Showroom KIA"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
