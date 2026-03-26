"use client";

import { useState } from "react";
import ProductCard from "./components/ProductCard";
import { products, categories } from "./data/products";

export default function Home() {
  const [activeCategory, setActiveCategory] = useState("semua");

  const filteredProducts =
    activeCategory === "semua"
      ? products
      : products.filter((p) => p.category === activeCategory);

  const handleCategoryClick = (categoryId) => {
    setActiveCategory(categoryId);
    const el = document.getElementById("products");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[100dvh] flex items-center bg-gradient-to-br from-white via-pink-50 to-white overflow-hidden">
        {/* Decorative Shapes */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-pink-100/50 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-pink-200/30 rounded-full blur-3xl" />
        <div className="absolute top-1/3 left-1/4 w-4 h-4 bg-pink-300 rounded-full animate-float" />
        <div className="absolute top-1/4 right-1/3 w-3 h-3 bg-pink-200 rounded-full animate-float delay-200" />
        <div className="absolute bottom-1/3 right-1/4 w-5 h-5 bg-pink-100 rounded-full animate-float delay-400" />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
          <div className="max-w-2xl mx-auto">
            <div className="animate-fade-in-up">
              <span className="inline-block px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] bg-pink-100 text-pink-500 rounded-full mb-6 border border-pink-200">
                ✨ Brand dari Sukabumi
              </span>
            </div>

            <h1
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-pink-400 animate-fade-in-up delay-100"
              style={{
                fontFamily: "var(--font-display)",
                animationFillMode: "backwards",
              }}
            >
              cuteclothessly
            </h1>

            <h2
              className="mt-6 text-xl sm:text-2xl md:text-3xl font-bold text-neutral-800 animate-fade-in-up delay-200"
              style={{ animationFillMode: "backwards" }}
            >
              Fashion Estetik Mulai dari Sukabumi
            </h2>

            <p
              className="mt-4 text-base md:text-lg text-neutral-500 leading-relaxed max-w-lg mx-auto animate-fade-in-up delay-300"
              style={{ animationFillMode: "backwards" }}
            >
              Koleksi baju pilihan untuk tampilan harianmu yang lebih cute. 💕
            </p>

            <div
              className="mt-8 flex flex-wrap justify-center gap-3 animate-fade-in-up delay-400"
              style={{ animationFillMode: "backwards" }}
            >
              <button
                onClick={() => {
                  const el = document.getElementById("products");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                className="px-8 py-3.5 bg-pink-400 text-white text-sm font-semibold rounded-full hover:bg-pink-500 transition-all duration-300 hover:shadow-lg hover:shadow-pink-200 cursor-pointer"
              >
                🛍️ Belanja Sekarang
              </button>
              <a
                href="https://www.instagram.com/cuteclothessly?igsh=YzJwN2w1eXkxaDAz"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3.5 border-2 border-pink-300 text-pink-500 text-sm font-semibold rounded-full hover:bg-pink-400 hover:text-white hover:border-pink-400 transition-all duration-300"
              >
                📷 Follow Instagram
              </a>
            </div>

            {/* Trust */}
            <div
              className="mt-10 flex flex-wrap justify-center items-center gap-6 text-neutral-400 animate-fade-in-up delay-500"
              style={{ animationFillMode: "backwards" }}
            >
              {[
                { emoji: "🚚", text: "COD Tersedia" },
                { emoji: "💯", text: "100% Original" },
                { emoji: "⏰", text: "07.00 - 21.00 WIB" },
                { emoji: "📍", text: "Sukabumi" },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-2">
                  <span>{item.emoji}</span>
                  <span className="text-xs font-medium">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
          <div className="w-6 h-10 border-2 border-pink-300 rounded-full flex justify-center pt-2">
            <div className="w-1 h-3 bg-pink-300 rounded-full" />
          </div>
        </div>
      </section>

      {/* Features Bar */}
      <section className="bg-pink-400 py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 text-center">
            {[
              { emoji: "🚚", text: "COD Sukabumi" },
              { emoji: "💕", text: "Cute & Trendy" },
              { emoji: "♻️", text: "Thrift Available" },
              { emoji: "💬", text: "Fast Response WA" },
            ].map((item) => (
              <div key={item.text} className="flex items-center justify-center gap-2">
                <span className="text-lg">{item.emoji}</span>
                <span className="text-xs font-medium text-white">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Catalog */}
      <section id="products" className="py-16 md:py-24 scroll-mt-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-pink-400">
              ✨ Katalog Kami
            </span>
            <h2
              className="mt-3 text-3xl md:text-4xl font-bold text-neutral-800"
              style={{ fontFamily: "var(--font-display)" }}
            >
              <span className="text-pink-400">Koleksi</span> Pilihan
            </h2>
            <p className="mt-3 text-neutral-400 max-w-md mx-auto text-sm">
              Temukan fashion cute dan trendy yang cocok untuk kamu.
            </p>
          </div>

          {/* Category Filter — horizontal scroll on mobile */}
          <div className="mb-10 -mx-4 px-4 md:mx-0 md:px-0">
            <div className="flex md:justify-center overflow-x-auto scrollbar-hide gap-2 p-1.5 bg-pink-50 rounded-full snap-x snap-mandatory md:flex-wrap md:overflow-visible">
              {categories.map((cat) => (
                <button
                  id={cat.id}
                  key={cat.id}
                  onClick={() => handleCategoryClick(cat.id)}
                  className={`px-5 py-2 text-xs font-semibold rounded-full transition-all duration-300 cursor-pointer whitespace-nowrap shrink-0 snap-start ${
                    activeCategory === cat.id
                      ? "bg-pink-400 text-white shadow-md shadow-pink-200"
                      : "text-neutral-500 hover:text-pink-500 hover:bg-pink-100"
                  }`}
                >
                  {cat.emoji} {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Product Grid */}
          <div
            key={activeCategory}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6"
          >
            {filteredProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>

          {/* Empty State */}
          {filteredProducts.length === 0 && (
            <div className="text-center py-20">
              <p className="text-neutral-400 text-sm">Belum ada produk di kategori ini. 💕</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-pink-50 via-pink-100 to-pink-50 py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className="text-3xl md:text-4xl text-pink-400"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Mau tanya-tanya dulu? 💬
          </h2>
          <p className="mt-4 text-neutral-500 max-w-lg mx-auto">
            Chat langsung dengan admin cuteclothessly via WhatsApp. Kami ready
            bantu kamu dari jam 07.00 - 21.00 WIB!
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href="https://wa.me/6285721125067?text=Halo%20admin%20cuteclothessly!%20Saya%20lihat%20koleksi%20bajunya%20di%20website%20dan%20tertarik%20untuk%20pesan.%20Boleh%20tanya-tanya%20dulu%3F"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-pink-400 text-white text-sm font-semibold rounded-full hover:bg-pink-500 transition-all duration-300 hover:shadow-lg hover:shadow-pink-200"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Chat via WhatsApp
            </a>
            <a
              href="https://www.instagram.com/cuteclothessly?igsh=YzJwN2w1eXkxaDAz"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 border-2 border-pink-300 text-pink-500 text-sm font-semibold rounded-full hover:bg-pink-400 hover:text-white hover:border-pink-400 transition-all duration-300"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
              Follow Instagram
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
