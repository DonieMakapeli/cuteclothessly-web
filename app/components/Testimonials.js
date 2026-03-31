"use client";

const testimonials = [
  {
    id: 1,
    name: "Rina Anggraini",
    initial: "RA",
    rating: 5,
    text: "Cardigan pink bow-nya super cute! Bahannya lembut dan pita hitamnya bikin keliatan mahal. Harga cuma 30rb, worth it banget! Pengiriman COD juga cepat. 💕",
    product: "Cardigan Knit Pink Bow",
    color: "bg-pink-400",
  },
  {
    id: 2,
    name: "Dinda Putri",
    initial: "DP",
    rating: 5,
    text: "Beli blouse floral biru dan rok ruffle-nya sekaligus. Kondisi barang sesuai deskripsi, 9/10 mulus semua. Admin juga ramah dan fast response di WA. Recommended!",
    product: "Blouse Floral Biru Ruched",
    color: "bg-pink-500",
  },
  {
    id: 3,
    name: "Siti Nurhaliza",
    initial: "SN",
    rating: 4,
    text: "Jaket butterfly putihnya bagus banget, patch kupu-kupunya lucu! Bahan fleece-nya tebal tapi nggak gerah. Cuma pengiriman ke luar kota agak lama, tapi overall puas!",
    product: "Jaket Putih Butterfly Patch",
    color: "bg-pink-300",
  },
];

function StarRating({ rating }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={`w-4 h-4 ${star <= rating ? "text-amber-400" : "text-neutral-200"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-16 md:py-24 bg-gradient-to-b from-white via-pink-50/30 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-pink-400">
            💬 Apa Kata Mereka
          </span>
          <h2
            className="mt-3 text-3xl md:text-4xl font-bold text-neutral-800"
            style={{ fontFamily: "var(--font-display)" }}
          >
            <span className="text-pink-400">Testimoni</span> Pelanggan
          </h2>
          <p className="mt-3 text-neutral-400 max-w-md mx-auto text-sm">
            Review asli dari pelanggan setia cuteclothessly ✨
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((testi, index) => (
            <div
              key={testi.id}
              className="bg-white rounded-2xl p-6 border-2 border-pink-100 hover:border-pink-300 hover:shadow-lg hover:shadow-pink-100/50 transition-all duration-500 animate-fade-in-up opacity-0 group"
              style={{
                animationDelay: `${index * 0.15}s`,
                animationFillMode: "forwards",
              }}
            >
              {/* Top — Avatar & Rating */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div
                    className={`w-11 h-11 ${testi.color} rounded-full flex items-center justify-center text-white text-sm font-bold shadow-md group-hover:scale-110 transition-transform duration-300`}
                  >
                    {testi.initial}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-neutral-800">{testi.name}</h4>
                    <p className="text-[11px] text-neutral-400">Membeli: {testi.product}</p>
                  </div>
                </div>
              </div>

              {/* Stars */}
              <StarRating rating={testi.rating} />

              {/* Quote */}
              <div className="mt-3 relative">
                <svg
                  className="absolute -top-1 -left-1 w-6 h-6 text-pink-100"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H0z" />
                </svg>
                <p className="text-sm text-neutral-500 leading-relaxed pl-4">
                  &ldquo;{testi.text}&rdquo;
                </p>
              </div>

              {/* Verified Badge */}
              <div className="mt-4 pt-3 border-t border-pink-50 flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-[10px] font-semibold text-green-600 uppercase tracking-widest">
                  Pembeli Terverifikasi
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
