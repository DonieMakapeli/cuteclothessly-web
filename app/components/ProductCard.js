"use client";

import { useState } from "react";
import Image from "next/image";
import { useCart } from "../context/CartContext";
import ProductModal from "./ProductModal";

export default function ProductCard({ product, index = 0 }) {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const isSoldOut = product.stock === 0;

  const waMessage = `Halo admin cuteclothessly! Saya lihat koleksi bajunya di website dan tertarik dengan *${product.name}* (${product.price}). Boleh tanya-tanya dulu?`;
  const waLink = `https://wa.me/6285721125067?text=${encodeURIComponent(waMessage)}`;

  const handleAddToCart = (e) => {
    e.stopPropagation();
    if (isSoldOut) return;
    addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1200);
  };

  return (
    <>
      <div
        className="group bg-white rounded-2xl overflow-hidden transition-all duration-500 animate-fade-in-up opacity-0 border-2 border-pink-100 hover:border-pink-300 hover:shadow-lg hover:shadow-pink-100/50 cursor-pointer"
        style={{ animationDelay: `${index * 0.08}s`, animationFillMode: "forwards" }}
        onClick={() => setShowModal(true)}
      >
        {/* Image */}
        <div className="relative aspect-[3/4] overflow-hidden bg-pink-50/50">
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            className={`object-cover transition-transform duration-700 group-hover:scale-105 ${isSoldOut ? "grayscale-[30%]" : ""}`}
            priority={index < 4}
          />

          {/* Sold Out Badge */}
          {isSoldOut && (
            <div className="absolute inset-0 bg-black/20 z-[3] flex items-center justify-center">
              <span className="px-4 py-2 text-xs font-bold uppercase tracking-[0.15em] bg-red-500/90 text-white rounded-full shadow-lg transform -rotate-6">
                Sold Out
              </span>
            </div>
          )}

          {/* New Badge */}
          {product.isNew && !isSoldOut && (
            <div className="absolute top-3 left-3 z-[4]">
              <span className="px-3 py-1 text-[10px] font-bold uppercase tracking-widest bg-pink-400 text-white rounded-full shadow-md">
                New ✨
              </span>
            </div>
          )}

          {/* Kondisi Badge (for thrifting items) */}
          {product.kondisi && product.kondisi !== "Baru / New" && !isSoldOut && (
            <div className="absolute top-3 right-3 z-[4]">
              <span className="px-2.5 py-1 text-[9px] font-bold bg-amber-400/90 text-amber-900 rounded-full shadow-md">
                {product.kondisi.split(" ")[0]}
              </span>
            </div>
          )}

          {/* Hover Overlay — hidden if sold out */}
          {!isSoldOut && (
            <div className="absolute inset-0 bg-pink-900/0 group-hover:bg-pink-900/5 transition-all duration-500 flex items-end justify-center pb-4 opacity-0 group-hover:opacity-100 z-[4]">
              <div className="flex gap-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <button
                  onClick={handleAddToCart}
                  className="px-4 py-2.5 bg-white text-pink-500 text-xs font-semibold rounded-full hover:bg-pink-400 hover:text-white transition-all duration-300 shadow-lg cursor-pointer"
                >
                  {added ? "✓ Ditambahkan!" : "🛒 + Keranjang"}
                </button>
                <a
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="px-4 py-2.5 bg-pink-400 text-white text-xs font-semibold rounded-full hover:bg-pink-500 transition-all duration-300 shadow-lg"
                >
                  💬 WA
                </a>
              </div>
            </div>
          )}
        </div>

        {/* Info */}
        <div className="p-4">
          <h3 className="text-sm font-semibold text-neutral-800 truncate group-hover:text-pink-500 transition-colors">
            {product.name}
          </h3>
          <p className="mt-1 text-xs text-neutral-400 line-clamp-1">
            {product.description}
          </p>

          {/* Ukuran compact */}
          <div className="mt-2 flex items-center gap-2 text-[10px] text-neutral-400">
            {product.ld && product.ld !== "-" && <span>LD: {product.ld}</span>}
            {product.ld && product.ld !== "-" && product.pj && <span>•</span>}
            {product.pj && <span>PJ: {product.pj}</span>}
          </div>

          <div className="mt-3 flex items-center justify-between gap-2">
            <p className={`text-sm font-bold ${isSoldOut ? "text-neutral-400 line-through" : "text-pink-500"}`}>
              {product.price}
            </p>
            {isSoldOut ? (
              <span className="px-3 py-1.5 text-xs font-semibold rounded-full border-2 border-neutral-200 text-neutral-400 cursor-not-allowed">
                Habis
              </span>
            ) : (
              <button
                onClick={handleAddToCart}
                className={`px-3 py-1.5 text-xs font-semibold rounded-full transition-all duration-300 cursor-pointer ${
                  added
                    ? "bg-pink-400 text-white border-2 border-pink-400"
                    : "border-2 border-pink-200 text-pink-500 hover:bg-pink-400 hover:text-white hover:border-pink-400"
                }`}
              >
                {added ? "✓ Added" : "+ Keranjang"}
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Product Detail Modal */}
      {showModal && (
        <ProductModal product={product} onClose={() => setShowModal(false)} />
      )}
    </>
  );
}
