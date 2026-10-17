"use server";

import { placeOrder } from "@/lib/orders";
import type { OrderLine } from "@/lib/api";

export async function checkout(email: string, lines: OrderLine[]) {
  const order = await placeOrder(email, lines);
  return { id: order.id, status: order.status };
}
