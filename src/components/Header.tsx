// File: src/components/Header.tsx
"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-red-600">
          <img
            src="/images/test2-removebg-preview.png"
            alt="KIA Logo"
            className="h-8"
          />
        </Link>

        <nav className="hidden md:flex gap-6 text-sm font-medium">
          <Link href="#about" className="hover:text-red-600">
            Giới thiệu
          </Link>
          <Link href="#models" className="hover:text-red-600">
            Dòng xe
          </Link>
          <Link href="#news" className="hover:text-red-600">
            Tin tức
          </Link>
          <Link href="#promo" className="hover:text-red-600">
            Khuyến mãi
          </Link>
          <Link href="#contact" className="hover:text-red-600">
            Liên hệ
          </Link>
        </nav>

        <button className="md:hidden" onClick={toggleMenu}>
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white px-4 pb-4 space-y-2">
          <Link href="#about" className="block hover:text-red-600">
            Giới thiệu
          </Link>
          <Link href="#models" className="block hover:text-red-600">
            Dòng xe
          </Link>
          <Link href="#news" className="block hover:text-red-600">
            Tin tức
          </Link>
          <Link href="#promo" className="block hover:text-red-600">
            Khuyến mãi
          </Link>
          <Link href="#contact" className="block hover:text-red-600">
            Liên hệ
          </Link>
        </div>
      )}
    </header>
  );
}
