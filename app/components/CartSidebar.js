"use client";

import Image from "next/image";
import { useCart } from "../context/CartContext";

export default function CartSidebar() {
  const {
    cart,
    isOpen,
    closeCart,
    totalItems,
    totalPrice,
    formatPrice,
    updateQty,
    removeFromCart,
    clearCart,
    checkoutViaWA,
  } = useCart();

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-[60] transition-opacity"
          onClick={closeCart}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-96 bg-white z-[70] shadow-2xl transform transition-transform duration-300 ease-out flex flex-col ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-pink-100">
          <div>
            <h2 className="text-lg font-bold text-neutral-800">
              Keranjang Belanja 🛒
            </h2>
            <p className="text-xs text-neutral-400 mt-0.5">
              {totalItems} item
            </p>
          </div>
          <button
            onClick={closeCart}
            className="p-2 rounded-full hover:bg-pink-50 text-neutral-400 hover:text-pink-500 transition-all cursor-pointer"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {cart.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <div className="w-20 h-20 bg-pink-50 rounded-full flex items-center justify-center mb-4">
                <span className="text-3xl">🛍️</span>
              </div>
              <p className="text-neutral-500 font-medium">Keranjang kosong</p>
              <p className="text-neutral-400 text-sm mt-1">
                Yuk tambah produk cute ke keranjangmu!
              </p>
              <button
                onClick={closeCart}
                className="mt-6 px-6 py-2.5 bg-pink-400 text-white text-sm font-semibold rounded-full hover:bg-pink-500 transition-all cursor-pointer"
              >
                Mulai Belanja
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-3 p-3 bg-pink-50/50 rounded-xl border border-pink-100"
                >
                  {/* Image */}
                  <div className="relative w-20 h-20 rounded-lg overflow-hidden bg-pink-50 shrink-0">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                      sizes="80px"
                    />
                  </div>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-semibold text-neutral-800 truncate">
                      {item.name}
                    </h3>
                    <p className="text-xs text-pink-500 font-bold mt-0.5">
                      {item.price}
                    </p>

                    {/* Qty Controls */}
                    <div className="flex items-center gap-2 mt-2">
                      <button
                        onClick={() => updateQty(item.id, item.qty - 1)}
                        className="w-7 h-7 rounded-full bg-white border border-pink-200 text-pink-500 flex items-center justify-center hover:bg-pink-100 transition-all cursor-pointer text-sm font-bold"
                      >
                        −
                      </button>
                      <span className="text-sm font-semibold text-neutral-700 w-6 text-center">
                        {item.qty}
                      </span>
                      <button
                        onClick={() => updateQty(item.id, item.qty + 1)}
                        className="w-7 h-7 rounded-full bg-white border border-pink-200 text-pink-500 flex items-center justify-center hover:bg-pink-100 transition-all cursor-pointer text-sm font-bold"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  {/* Remove */}
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="self-start p-1 text-neutral-300 hover:text-red-400 transition-colors cursor-pointer"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                    </svg>
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {cart.length > 0 && (
          <div className="px-6 py-5 border-t border-pink-100 bg-pink-50/30 space-y-4">
            {/* Total */}
            <div className="flex items-center justify-between">
              <span className="text-sm text-neutral-500">Total ({totalItems} item)</span>
              <span className="text-lg font-bold text-pink-500">
                {formatPrice(totalPrice)}
              </span>
            </div>

            {/* Checkout Button */}
            <button
              onClick={checkoutViaWA}
              className="w-full py-3.5 bg-pink-400 text-white text-sm font-semibold rounded-full hover:bg-pink-500 transition-all duration-300 hover:shadow-lg hover:shadow-pink-200 flex items-center justify-center gap-2 cursor-pointer"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Checkout via WhatsApp
            </button>

            {/* Clear */}
            <button
              onClick={clearCart}
              className="w-full py-2.5 text-xs text-neutral-400 hover:text-red-400 transition-colors cursor-pointer font-medium"
            >
              Kosongkan Keranjang
            </button>
          </div>
        )}
      </div>
    </>
  );
}
