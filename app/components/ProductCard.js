"use client";

import Image from "next/image";

export default function ProductCard({ product, index = 0 }) {
  const waMessage = `Halo admin cuteclothessly! Saya lihat koleksi bajunya di website dan tertarik dengan *${product.name}* (${product.price}). Boleh tanya-tanya dulu?`;
  const waLink = `https://wa.me/6285721125067?text=${encodeURIComponent(waMessage)}`;

  return (
    <div
      className="group bg-white rounded-2xl overflow-hidden transition-all duration-500 animate-fade-in-up opacity-0 border-2 border-pink-100 hover:border-pink-300 hover:shadow-lg hover:shadow-pink-100/50"
      style={{ animationDelay: `${index * 0.08}s`, animationFillMode: "forwards" }}
    >
      {/* Image */}
      <div className="relative aspect-[3/4] overflow-hidden bg-pink-50">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          priority={index < 4}
        />

        {/* New Badge */}
        {product.isNew && (
          <div className="absolute top-3 left-3">
            <span className="px-3 py-1 text-[10px] font-bold uppercase tracking-widest bg-pink-400 text-white rounded-full shadow-md">
              New ✨
            </span>
          </div>
        )}

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-pink-900/0 group-hover:bg-pink-900/5 transition-all duration-500 flex items-end justify-center pb-4 opacity-0 group-hover:opacity-100">
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 bg-white text-pink-500 text-xs font-semibold rounded-full hover:bg-pink-400 hover:text-white transition-all duration-300 shadow-lg translate-y-4 group-hover:translate-y-0"
          >
            💬 Pesan via WA
          </a>
        </div>
      </div>

      {/* Info */}
      <div className="p-4">
        <h3 className="text-sm font-semibold text-neutral-800 truncate group-hover:text-pink-500 transition-colors">
          {product.name}
        </h3>
        <p className="mt-1 text-xs text-neutral-400 line-clamp-1">
          {product.description}
        </p>
        <div className="mt-3 flex items-center justify-between">
          <p className="text-sm font-bold text-pink-500">
            {product.price}
          </p>
          <button
            onClick={() => window.open(waLink, "_blank")}
            className="px-4 py-1.5 text-xs font-semibold border-2 border-pink-300 text-pink-500 rounded-full hover:bg-pink-400 hover:text-white hover:border-pink-400 transition-all duration-300 cursor-pointer"
          >
            Detail
          </button>
        </div>
      </div>
    </div>
  );
}
