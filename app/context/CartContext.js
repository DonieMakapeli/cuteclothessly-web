"use client";

import { createContext, useContext, useState, useEffect, useCallback } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load cart from localStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem("cuteclothessly-cart");
      if (saved) {
        setCart(JSON.parse(saved));
      }
    } catch (e) {
      console.error("Failed to load cart:", e);
    }
    setIsLoaded(true);
  }, []);

  // Save cart to localStorage on change
  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem("cuteclothessly-cart", JSON.stringify(cart));
    }
  }, [cart, isLoaded]);

  const addToCart = useCallback((product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      }
      return [...prev, { ...product, qty: 1 }];
    });
  }, []);

  const removeFromCart = useCallback((productId) => {
    setCart((prev) => prev.filter((item) => item.id !== productId));
  }, []);

  const updateQty = useCallback((productId, qty) => {
    if (qty <= 0) {
      setCart((prev) => prev.filter((item) => item.id !== productId));
    } else {
      setCart((prev) =>
        prev.map((item) =>
          item.id === productId ? { ...item, qty } : item
        )
      );
    }
  }, []);

  const clearCart = useCallback(() => {
    setCart([]);
  }, []);

  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);

  // Parse price string like "Rp 45.000" to number 45000
  const parsePrice = (priceStr) => {
    return parseInt(priceStr.replace(/[^\d]/g, ""), 10) || 0;
  };

  const totalPrice = cart.reduce(
    (sum, item) => sum + parsePrice(item.price) * item.qty,
    0
  );

  const formatPrice = (num) => {
    return "Rp " + num.toLocaleString("id-ID");
  };

  const openCart = useCallback(() => setIsOpen(true), []);
  const closeCart = useCallback(() => setIsOpen(false), []);
  const toggleCart = useCallback(() => setIsOpen((prev) => !prev), []);

  const checkoutViaWA = useCallback(() => {
    if (cart.length === 0) return;

    const itemList = cart
      .map((item) => `• ${item.name} x${item.qty} — ${item.price}`)
      .join("\n");

    const message = `Halo cuteclothessly! Saya mau pesan:\n\n${itemList}\n\nTotal: ${formatPrice(totalPrice)}\n\nMohon info stoknya ya. Terima kasih! 🙏`;

    const waLink = `https://wa.me/6285721125067?text=${encodeURIComponent(message)}`;
    window.open(waLink, "_blank");
  }, [cart, totalPrice]);

  return (
    <CartContext.Provider
      value={{
        cart,
        isOpen,
        isLoaded,
        totalItems,
        totalPrice,
        formatPrice,
        addToCart,
        removeFromCart,
        updateQty,
        clearCart,
        openCart,
        closeCart,
        toggleCart,
        checkoutViaWA,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
