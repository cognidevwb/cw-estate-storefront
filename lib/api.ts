import axios from "axios";

/** One client for every estate API; the base URL is the gateway in front of the services. */
export const api = axios.create({
  baseURL: process.env.API_BASE_URL ?? "http://localhost:5002",
  timeout: 8000,
  headers: { Accept: "application/json" },
});

export interface Product {
  id: string;
  sku: string;
  name: string;
  price: number;
}

export interface OrderLine {
  productId: string;
  quantity: number;
}

export interface Order {
  id: string;
  customerEmail: string;
  status: string;
  placedAt: string;
  lines: Array<OrderLine & { sku: string; unitPrice: number }>;
}
