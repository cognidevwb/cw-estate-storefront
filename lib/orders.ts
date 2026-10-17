import { api, type Order, type OrderLine } from "./api";

export async function placeOrder(customerEmail: string, lines: OrderLine[]): Promise<Order> {
  const res = await api.post<Order>("/api/orders", { customerEmail, lines });
  return res.data;
}

export async function getOrder(id: string): Promise<Order> {
  const res = await api.get<Order>(`/api/orders/${id}`);
  return res.data;
}

export async function myAccount(email: string) {
  const res = await api.get<{ email: string; orders: number; spent: number }>("/api/customers/me", {
    headers: { "X-Customer-Email": email },
  });
  return res.data;
}
