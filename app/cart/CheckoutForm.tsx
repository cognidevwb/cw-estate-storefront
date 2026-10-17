"use client";

import { useState } from "react";
import { checkout } from "./actions";

export function CheckoutForm() {
  const [email, setEmail] = useState("");
  const [result, setResult] = useState<string | null>(null);
  const submit = async () => {
    const lines = JSON.parse(localStorage.getItem("cart") ?? "[]");
    const order = await checkout(email, lines);
    localStorage.removeItem("cart");
    setResult(`Order ${order.id} is ${order.status}`);
  };
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        void submit();
      }}
    >
      <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" />
      <button type="submit">Place order</button>
      {result && <p>{result}</p>}
    </form>
  );
}
