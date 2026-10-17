"use client";

import { useState } from "react";

export function AddToCart({ productId }: { productId: string }) {
  const [added, setAdded] = useState(false);
  const add = () => {
    const cart = JSON.parse(localStorage.getItem("cart") ?? "[]") as Array<{ productId: string; quantity: number }>;
    const line = cart.find((l) => l.productId === productId);
    if (line) line.quantity += 1;
    else cart.push({ productId, quantity: 1 });
    localStorage.setItem("cart", JSON.stringify(cart));
    setAdded(true);
  };
  return (
    <button type="button" onClick={add}>
      {added ? "Added" : "Add to cart"}
    </button>
  );
}
