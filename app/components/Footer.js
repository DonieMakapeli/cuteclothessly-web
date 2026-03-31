"use client";

import { useState } from "react";
import InfoModal from "./InfoModal";

const shopLinks = ["Atasan", "Outerwear", "Skirts"];
const infoLinks = ["Tentang Kami", "Cara Pemesanan", "Kebijakan Pengembalian", "FAQ"];

export default function Footer() {
  const [activeModal, setActiveModal] = useState(null);

  const handleShopClick = (category) => {
    const filterBtn = document.querySelector(
      `button[data-category="${category.toLowerCase()}"]`
    );
    if (filterBtn) {
      filterBtn.click();
    } else {
      const el = document.getElementById("products");
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <footer className="bg-gradient-to-b from-pink-50 to-white border-t border-pink-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Footer */}
          <div className="py-12 md:py-16 grid grid-cols-1 md:grid-cols-4 gap-10">
            {/* Brand */}
            <div className="md:col-span-1">
              <h2
                className="text-3xl text-pink-400 mb-3"
                style={{ fontFamily: "var(--font-display)" }}
              >
                cuteclothessly
              </h2>
              <p className="text-sm text-neutral-500 leading-relaxed">
                Fashion estetik dari Sukabumi. Koleksi baju pilihan untuk tampilan harianmu yang lebih cute. 💕
              </p>
            </div>

            {/* Shop */}
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-widest text-pink-400 mb-4">
                Belanja
              </h3>
              <ul className="space-y-3">
                {shopLinks.map((item) => (
                  <li key={item}>
                    <button
                      onClick={() => handleShopClick(item)}
                      className="text-sm text-neutral-500 hover:text-pink-500 transition-colors cursor-pointer bg-transparent border-none p-0"
                    >
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Info */}
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-widest text-pink-400 mb-4">
                Informasi
              </h3>
              <ul className="space-y-3">
                {infoLinks.map((item) => (
                  <li key={item}>
                    <button
                      onClick={() => setActiveModal(item)}
                      className="text-sm text-neutral-500 hover:text-pink-500 transition-colors cursor-pointer bg-transparent border-none p-0"
                    >
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-widest text-pink-400 mb-4">
                Hubungi Kami
              </h3>
              <ul className="space-y-4">
                {/* Jam Operasional */}
                <li className="flex items-center gap-3 text-sm text-neutral-500">
                  <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center shrink-0">
                    <svg className="w-4 h-4 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <span className="font-medium text-neutral-700">Jam Operasional</span>
                    <br />07.00 - 21.00 WIB
                  </div>
                </li>
                {/* WhatsApp */}
                <li className="flex items-center gap-3 text-sm text-neutral-500">
                  <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center shrink-0">
                    <svg className="w-4 h-4 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                  </div>
                  <a href="https://wa.me/6285721125067" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition-colors">
                    085721125067
                  </a>
                </li>
                {/* Alamat */}
                <li className="flex items-center gap-3 text-sm text-neutral-500">
                  <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center shrink-0">
                    <svg className="w-4 h-4 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                  </div>
                  Sukabumi, Indonesia
                </li>
                {/* Instagram */}
                <li className="flex items-center gap-3 text-sm text-neutral-500">
                  <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center shrink-0">
                    <svg className="w-4 h-4 text-pink-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                    </svg>
                  </div>
                  <a
                    href="https://www.instagram.com/cuteclothessly?igsh=YzJwN2w1eXkxaDAz"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-pink-500 transition-colors"
                  >
                    @cuteclothessly
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-pink-100 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-neutral-400">
              &copy; 2026 cuteclothessly. All rights reserved. 💖
            </p>
            <div className="flex gap-6">
              <button
                onClick={() => setActiveModal("Kebijakan Pengembalian")}
                className="text-xs text-neutral-400 hover:text-pink-400 transition-colors cursor-pointer bg-transparent border-none p-0"
              >
                Syarat & Ketentuan
              </button>
              <button
                onClick={() => setActiveModal("FAQ")}
                className="text-xs text-neutral-400 hover:text-pink-400 transition-colors cursor-pointer bg-transparent border-none p-0"
              >
                Kebijakan Privasi
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* Info Modal */}
      {activeModal && (
        <InfoModal title={activeModal} onClose={() => setActiveModal(null)} />
      )}
    </>
  );
}
