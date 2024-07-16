import { notFound } from "next/navigation";
import { Product } from "../definitions";

const API_URL = process.env.API_URL;

export async function getProductById(id: string): Promise<Product> {
  try {
    const response = await fetch(`${API_URL}/products/${id}`);
    const product = await response.json();
    return product;
  } catch (error) {
    notFound();
  }
}
