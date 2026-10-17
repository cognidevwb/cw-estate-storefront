import { api, type Product } from "./api";

export async function listProducts(categoryId?: string): Promise<Product[]> {
  const res = await api.get<Product[]>("/api/products", { params: categoryId ? { categoryId } : undefined });
  return res.data;
}

export async function getProduct(id: string): Promise<Product | null> {
  try {
    const res = await api.get<Product>(`/api/products/${id}`);
    return res.data;
  } catch {
    return null;
  }
}
