"use client";

import { useState } from "react";
import Image from "next/image";
import { useCart } from "../context/CartContext";

export default function ProductModal({ product, onClose }) {
  const { addToCart } = useCart();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [added, setAdded] = useState(false);

  if (!product) return null;

  const images = product.images || [product.image];
  const isSoldOut = product.stock === 0;

  const waMessage = `Halo admin cuteclothessly! Saya lihat koleksi bajunya di website dan tertarik dengan *${product.name}* (${product.price}). Boleh tanya-tanya dulu?`;
  const waLink = `https://wa.me/6285721125067?text=${encodeURIComponent(waMessage)}`;

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % images.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);

  const handleAddToCart = () => {
    if (isSoldOut) return;
    addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1200);
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[80] animate-fade-in"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="fixed inset-0 z-[90] flex items-center justify-center p-4">
        <div
          className="relative bg-white rounded-3xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto animate-modal-in"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center text-neutral-400 hover:text-pink-500 hover:bg-pink-50 transition-all shadow-md cursor-pointer"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Carousel Section */}
            <div className="relative aspect-square md:aspect-auto md:min-h-[500px] bg-pink-50/50 overflow-hidden rounded-t-3xl md:rounded-l-3xl md:rounded-tr-none">
              {/* Sold Out Overlay */}
              {isSoldOut && (
                <div className="absolute inset-0 bg-black/30 z-[5] flex items-center justify-center">
                  <span className="px-6 py-3 bg-red-500/90 text-white text-lg font-bold uppercase tracking-widest rounded-full shadow-lg transform -rotate-12">
                    Sold Out
                  </span>
                </div>
              )}

              {/* Image */}
              <Image
                src={images[currentSlide]}
                alt={`${product.name} - foto ${currentSlide + 1}`}
                fill
                className="object-cover transition-all duration-500"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />

              {/* Carousel Controls */}
              {images.length > 1 && (
                <>
                  <button
                    onClick={prevSlide}
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center text-neutral-600 hover:bg-white hover:text-pink-500 transition-all shadow-md cursor-pointer z-10"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button
                    onClick={nextSlide}
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center text-neutral-600 hover:bg-white hover:text-pink-500 transition-all shadow-md cursor-pointer z-10"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>

                  {/* Dots */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                    {images.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setCurrentSlide(i)}
                        className={`w-2.5 h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                          i === currentSlide
                            ? "bg-pink-400 w-7"
                            : "bg-white/70 hover:bg-white"
                        }`}
                      />
                    ))}
                  </div>
                </>
              )}

              {/* Image Counter */}
              <div className="absolute top-4 left-4 px-3 py-1.5 bg-black/40 backdrop-blur-sm text-white text-xs font-medium rounded-full z-10">
                {currentSlide + 1} / {images.length}
              </div>
            </div>

            {/* Detail Section */}
            <div className="p-6 md:p-8 flex flex-col">
              {/* Category Badge */}
              <div className="flex items-center gap-2 mb-3">
                <span className="px-3 py-1 text-[10px] font-bold uppercase tracking-widest bg-pink-100 text-pink-500 rounded-full">
                  {product.category}
                </span>
                {product.isNew && (
                  <span className="px-3 py-1 text-[10px] font-bold uppercase tracking-widest bg-pink-400 text-white rounded-full">
                    New ✨
                  </span>
                )}
                {isSoldOut && (
                  <span className="px-3 py-1 text-[10px] font-bold uppercase tracking-widest bg-red-500 text-white rounded-full">
                    Sold Out
                  </span>
                )}
              </div>

              {/* Name & Price */}
              <h2 className="text-xl md:text-2xl font-bold text-neutral-800">{product.name}</h2>
              <p className="mt-1 text-2xl font-bold text-pink-500">{product.price}</p>

              {/* Description */}
              <p className="mt-3 text-sm text-neutral-500 leading-relaxed">{product.description}</p>

              {/* Ukuran & Kondisi */}
              <div className="mt-5 grid grid-cols-3 gap-3">
                <div className="bg-pink-50 rounded-2xl p-3 text-center border border-pink-100">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-pink-400 mb-1">Lingkar Dada</p>
                  <p className="text-sm font-bold text-neutral-700">{product.ld || "-"}</p>
                </div>
                <div className="bg-pink-50 rounded-2xl p-3 text-center border border-pink-100">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-pink-400 mb-1">Panjang</p>
                  <p className="text-sm font-bold text-neutral-700">{product.pj || "-"}</p>
                </div>
                <div className="bg-pink-50 rounded-2xl p-3 text-center border border-pink-100">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-pink-400 mb-1">Kondisi</p>
                  <p className="text-sm font-bold text-neutral-700">{product.kondisi || "-"}</p>
                </div>
              </div>

              {/* Stock Info */}
              <div className="mt-4">
                {isSoldOut ? (
                  <p className="text-sm font-semibold text-red-500 flex items-center gap-1.5">
                    <span className="w-2 h-2 bg-red-500 rounded-full" />
                    Stok Habis
                  </p>
                ) : (
                  <p className="text-sm font-semibold text-green-600 flex items-center gap-1.5">
                    <span className="w-2 h-2 bg-green-500 rounded-full" />
                    Stok tersisa: {product.stock} pcs
                  </p>
                )}
              </div>

              {/* Action Buttons */}
              <div className="mt-6 flex flex-col gap-3 mt-auto">
                <button
                  onClick={handleAddToCart}
                  disabled={isSoldOut}
                  className={`w-full py-3.5 text-sm font-semibold rounded-full transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer ${
                    isSoldOut
                      ? "bg-neutral-200 text-neutral-400 cursor-not-allowed"
                      : added
                      ? "bg-pink-500 text-white"
                      : "bg-pink-400 text-white hover:bg-pink-500 hover:shadow-lg hover:shadow-pink-200"
                  }`}
                >
                  {isSoldOut ? "🚫 Stok Habis" : added ? "✓ Ditambahkan ke Keranjang!" : "🛒 Masukkan Keranjang"}
                </button>

                {isSoldOut ? (
                  <button
                    disabled
                    className="w-full py-3.5 text-sm font-semibold rounded-full border-2 border-neutral-200 text-neutral-400 cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    💬 Pesan via WA
                  </button>
                ) : (
                  <a
                    href={waLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3.5 text-sm font-semibold rounded-full border-2 border-pink-300 text-pink-500 hover:bg-pink-400 hover:text-white hover:border-pink-400 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    💬 Pesan via WA
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
