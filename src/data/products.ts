// File: src/data/products.ts
// ✅ Đường dẫn: src/data/products.ts

export const categories = ["SUV", "HYBRID", "Sedan", "Hatchback"];

export const products = [
  // === SUV ===
  {
    id: 1,
    name: "Tiền Mặt Vận Chuyển A1",
    category: "SUV",
    price: "1,299,000,000đ",
    image: "/images/test2-removebg-preview.png",
    desc: "Dòng xe chuyên dụng vận chuyển tiền mặt, bảo mật cao.",
  },
  {
    id: 2,
    name: "SUV Chống Đạn A2",
    category: "SUV",
    price: "1,359,000,000đ",
    image: "/images/test2-removebg-preview.png",
    desc: "Chống đạn cấp độ B6, hệ thống giám sát GPS.",
  },
  {
    id: 3,
    name: "SUV Ngân Hàng Di Động A3",
    category: "SUV",
    price: "1,420,000,000đ",
    image: "/images/test2-removebg-preview.png",
    desc: "Trang bị két sắt và máy POS tích hợp.",
  },
  {
    id: 4,
    name: "SUV Cảnh Vệ A4",
    category: "SUV",
    price: "1,489,000,000đ",
    image: "/images/test2-removebg-preview.png",
    desc: "Dùng cho đội cảnh vệ ngân hàng.",
  },
  {
    id: 5,
    name: "SUV Bọc Thép A5",
    category: "SUV",
    price: "1,550,000,000đ",
    image: "/images/test2-removebg-preview.png",
    desc: "Bọc thép toàn phần, phục vụ vận chuyển giá trị cao.",
  },

  // === HYBRID ===
  {
    id: 6,
    name: "Tiếp Quỹ Tự Động B1",
    category: "HYBRID",
    price: "1,199,000,000đ",
    image: "/images/test2-removebg-preview.png",
    desc: "Xe tiếp quỹ hiện đại cho ngân hàng di động.",
  },
  {
    id: 7,
    name: "Xe Hybrid Bọc Kín B2",
    category: "HYBRID",
    price: "1,270,000,000đ",
    image: "/images/test2-removebg-preview.png",
    desc: "Kết hợp năng lượng sạch và khả năng chống trộm.",
  },
  {
    id: 8,
    name: "Hybrid Chống Ồn B3",
    category: "HYBRID",
    price: "1,310,000,000đ",
    image: "/images/test2-removebg-preview.png",
    desc: "Vận hành êm ái, tiết kiệm nhiên liệu.",
  },
  {
    id: 9,
    name: "Hybrid Tích Hợp ATM B4",
    category: "HYBRID",
    price: "1,365,000,000đ",
    image: "/images/test2-removebg-preview.png",
    desc: "Hỗ trợ triển khai ATM di động nhanh chóng.",
  },
  {
    id: 10,
    name: "Hybrid An Ninh B5",
    category: "HYBRID",
    price: "1,420,000,000đ",
    image: "/images/test2-removebg-preview.png",
    desc: "Xe ngân hàng sử dụng năng lượng kép và hệ thống khóa vân tay.",
  },

  // === Sedan ===
  {
    id: 11,
    name: "Xe Chuyên Dụng C1",
    category: "Sedan",
    price: "1,099,000,000đ",
    image: "/images/test2-removebg-preview.png",
    desc: "Dòng xe nhỏ gọn dùng trong đô thị.",
  },
  {
    id: 12,
    name: "Sedan Tài Chính C2",
    category: "Sedan",
    price: "1,150,000,000đ",
    image: "/images/test2-removebg-preview.png",
    desc: "Dành cho nhân viên kiểm soát tài chính lưu động.",
  },
  {
    id: 13,
    name: "Sedan Văn Phòng Di Động C3",
    category: "Sedan",
    price: "1,230,000,000đ",
    image: "/images/test2-removebg-preview.png",
    desc: "Trang bị bàn làm việc và két nhỏ.",
  },
  {
    id: 14,
    name: "Sedan Chống Rung C4",
    category: "Sedan",
    price: "1,280,000,000đ",
    image: "/images/test2-removebg-preview.png",
    desc: "Di chuyển êm ái bảo vệ tài sản bên trong.",
  },
  {
    id: 15,
    name: "Sedan Giao Dịch C5",
    category: "Sedan",
    price: "1,340,000,000đ",
    image: "/images/test2-removebg-preview.png",
    desc: "Xe phục vụ giao dịch ngân hàng lưu động.",
  },

  // === Hatchback ===
  {
    id: 16,
    name: "Xe Chở Tiền D1",
    category: "Hatchback",
    price: "999,000,000đ",
    image: "/images/test2-removebg-preview.png",
    desc: "Xe chở tiền chuyên dụng, bảo mật 2 lớp.",
  },
  {
    id: 17,
    name: "Hatchback Mini D2",
    category: "Hatchback",
    price: "950,000,000đ",
    image: "/images/test2-removebg-preview.png",
    desc: "Phù hợp di chuyển ngõ hẹp, khu đông dân.",
  },
  {
    id: 18,
    name: "Hatchback Tự Động D3",
    category: "Hatchback",
    price: "1,030,000,000đ",
    image: "/images/test2-removebg-preview.png",
    desc: "Vận hành dễ dàng, bảo vệ bằng mã PIN.",
  },
  {
    id: 19,
    name: "Hatchback Giao Hàng D4",
    category: "Hatchback",
    price: "1,080,000,000đ",
    image: "/images/test2-removebg-preview.png",
    desc: "Chuyên giao tài liệu và hồ sơ ngân hàng.",
  },
  {
    id: 20,
    name: "Hatchback Tài Chính D5",
    category: "Hatchback",
    price: "1,120,000,000đ",
    image: "/images/test2-removebg-preview.png",
    desc: "Xe phụ trợ kiểm đếm và vận chuyển tài chính.",
  },
];
