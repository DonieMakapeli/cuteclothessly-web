"use client";

const infoContent = {
  "Tentang Kami": {
    icon: "💕",
    content: (
      <div className="space-y-4">
        <p className="text-neutral-600 leading-relaxed">
          <strong>cuteclothessly</strong> adalah toko fashion online berbasis di Sukabumi yang menyediakan koleksi pakaian estetik, trendy, dan affordable untuk kamu yang ingin tampil cute setiap hari.
        </p>
        <p className="text-neutral-600 leading-relaxed">
          Kami menyediakan berbagai jenis pakaian mulai dari atasan, bawahan, outerwear, skirts, hingga koleksi thrifting pilihan dengan kualitas terjamin. Setiap produk kami seleksi dengan teliti untuk memastikan kualitas terbaik sampai ke tangan kamu.
        </p>
        <div className="bg-pink-50 rounded-2xl p-4 border border-pink-100">
          <p className="text-sm font-semibold text-pink-500 mb-2">📍 Lokasi</p>
          <p className="text-sm text-neutral-600">Sukabumi, Jawa Barat, Indonesia</p>
        </div>
        <div className="bg-pink-50 rounded-2xl p-4 border border-pink-100">
          <p className="text-sm font-semibold text-pink-500 mb-2">⏰ Jam Operasional</p>
          <p className="text-sm text-neutral-600">Setiap hari, 07.00 - 21.00 WIB</p>
        </div>
        <div className="bg-pink-50 rounded-2xl p-4 border border-pink-100">
          <p className="text-sm font-semibold text-pink-500 mb-2">📱 Sosial Media</p>
          <p className="text-sm text-neutral-600">Instagram: @cuteclothessly</p>
        </div>
      </div>
    ),
  },
  "Cara Pemesanan": {
    icon: "🛒",
    content: (
      <div className="space-y-4">
        <p className="text-neutral-500 text-sm mb-4">
          Berikut langkah-langkah mudah untuk memesan di cuteclothessly:
        </p>
        {[
          {
            step: "1",
            title: "Pilih Produk",
            desc: "Jelajahi katalog kami dan pilih produk yang kamu suka. Klik produk untuk melihat detail ukuran, kondisi, dan foto lengkap.",
          },
          {
            step: "2",
            title: "Hubungi Admin via WhatsApp",
            desc: 'Klik tombol "Pesan via WA" pada produk yang kamu inginkan, atau kirim pesan langsung ke nomor 085721125067.',
          },
          {
            step: "3",
            title: "Konfirmasi & Pembayaran",
            desc: "Admin akan mengkonfirmasi ketersediaan stok dan mengirimkan total pembayaran. Transfer ke rekening yang diberikan.",
          },
          {
            step: "4",
            title: "Pengiriman / COD",
            desc: "Pesanan akan dikirim setelah pembayaran dikonfirmasi. COD tersedia khusus area Sukabumi dan sekitarnya.",
          },
        ].map((item) => (
          <div key={item.step} className="flex gap-4 items-start">
            <div className="w-10 h-10 bg-pink-400 text-white rounded-full flex items-center justify-center text-sm font-bold shrink-0">
              {item.step}
            </div>
            <div>
              <h4 className="text-sm font-bold text-neutral-800">{item.title}</h4>
              <p className="text-sm text-neutral-500 mt-1 leading-relaxed">{item.desc}</p>
            </div>
          </div>
        ))}
        <div className="mt-4 p-4 bg-pink-50 rounded-2xl border border-pink-100">
          <p className="text-xs text-pink-500 font-semibold">💡 Tips</p>
          <p className="text-xs text-neutral-500 mt-1">
            Sertakan nama produk, ukuran, dan alamat lengkap saat menghubungi admin agar proses pemesanan lebih cepat!
          </p>
        </div>
      </div>
    ),
  },
  "Kebijakan Pengembalian": {
    icon: "📋",
    content: (
      <div className="space-y-4">
        <div className="p-4 bg-red-50 rounded-2xl border border-red-100">
          <p className="text-sm font-bold text-red-500 flex items-center gap-2">
            ⚠️ No Retur / No Refund
          </p>
          <p className="text-sm text-neutral-600 mt-2 leading-relaxed">
            Semua pembelian di cuteclothessly bersifat <strong>final</strong>. Kami tidak menerima pengembalian barang (retur) maupun pengembalian uang (refund) setelah transaksi selesai.
          </p>
        </div>
        <div className="space-y-3">
          <h4 className="text-sm font-bold text-neutral-800">Mengapa No Retur / No Refund?</h4>
          <ul className="space-y-2">
            {[
              "Setiap produk sudah dilengkapi foto detail dan keterangan ukuran (LD, PJ, Kondisi) yang akurat.",
              "Untuk produk thrifting/preloved, kondisi sudah dijelaskan secara transparan.",
              "Pembeli diharapkan sudah yakin sebelum melakukan pemesanan.",
              "Admin selalu siap menjawab pertanyaan sebelum kamu memutuskan beli.",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-neutral-600">
                <span className="text-pink-400 mt-0.5">•</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="p-4 bg-amber-50 rounded-2xl border border-amber-100">
          <p className="text-sm font-bold text-amber-600 flex items-center gap-2">
            📦 Pengecualian
          </p>
          <p className="text-sm text-neutral-600 mt-2 leading-relaxed">
            Kami akan bertanggung jawab jika terdapat kesalahan pengiriman (produk tidak sesuai pesanan). Silakan hubungi admin dalam waktu <strong>1×24 jam</strong> setelah barang diterima, sertakan foto dan video unboxing sebagai bukti.
          </p>
        </div>
      </div>
    ),
  },
  FAQ: {
    icon: "❓",
    content: (
      <div className="space-y-3">
        {[
          {
            q: "Apakah bisa COD?",
            a: "Bisa! COD tersedia khusus untuk area Sukabumi dan sekitarnya. Untuk area lain, kami menggunakan jasa pengiriman (JNE, J&T, SiCepat).",
          },
          {
            q: "Bagaimana cara mengetahui ukuran yang cocok?",
            a: "Setiap produk sudah dilengkapi keterangan Lingkar Dada (LD) dan Panjang Baju (PJ). Silakan ukur baju kamu yang sudah pas, lalu bandingkan dengan ukuran yang tertera.",
          },
          {
            q: "Apa itu produk thrifting?",
            a: "Produk thrifting adalah pakaian preloved/secondhand yang masih dalam kondisi baik. Kami selalu mencantumkan kondisi produk (misal: 9/10 Mulus, 8/10 Ada sedikit fading) agar kamu tahu kualitasnya sebelum membeli.",
          },
          {
            q: "Berapa lama pengiriman?",
            a: "Untuk COD Sukabumi biasanya 1 hari. Untuk pengiriman luar kota, estimasi 2-4 hari kerja tergantung jasa ekspedisi dan lokasi.",
          },
          {
            q: "Apakah bisa request model/warna tertentu?",
            a: "Untuk saat ini kami hanya menjual koleksi yang tersedia di katalog. Tapi kamu bisa follow Instagram @cuteclothessly untuk update koleksi terbaru!",
          },
        ].map((faq, i) => (
          <details key={i} className="group bg-pink-50/50 rounded-2xl border border-pink-100 overflow-hidden">
            <summary className="px-4 py-3.5 text-sm font-semibold text-neutral-700 cursor-pointer flex items-center justify-between hover:text-pink-500 transition-colors list-none">
              <span className="flex items-center gap-2">
                <span className="w-6 h-6 bg-pink-400 text-white rounded-full flex items-center justify-center text-xs font-bold shrink-0">
                  {i + 1}
                </span>
                {faq.q}
              </span>
              <svg className="w-4 h-4 text-pink-400 transition-transform duration-200 group-open:rotate-180 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <div className="px-4 pb-4 text-sm text-neutral-500 leading-relaxed border-t border-pink-100 pt-3 ml-8">
              {faq.a}
            </div>
          </details>
        ))}
      </div>
    ),
  },
};

export default function InfoModal({ title, onClose }) {
  const info = infoContent[title];
  if (!info) return null;

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
          className="relative bg-white rounded-3xl shadow-2xl max-w-lg w-full max-h-[85vh] overflow-hidden animate-modal-in"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="sticky top-0 bg-white/95 backdrop-blur-sm px-6 py-5 border-b border-pink-100 flex items-center justify-between z-10">
            <div className="flex items-center gap-3">
              <span className="text-2xl">{info.icon}</span>
              <h2 className="text-lg font-bold text-neutral-800">{title}</h2>
            </div>
            <button
              onClick={onClose}
              className="w-9 h-9 rounded-full flex items-center justify-center text-neutral-400 hover:text-pink-500 hover:bg-pink-50 transition-all cursor-pointer"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Content */}
          <div className="px-6 py-6 overflow-y-auto max-h-[calc(85vh-80px)]">
            {info.content}
          </div>
        </div>
      </div>
    </>
  );
}
