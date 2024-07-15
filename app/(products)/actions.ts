"use server";

import { Products } from "./definitions";

const API_URL = process.env.API_URL;

export async function getProducts(): Promise<Products> {
  const response = await fetch(`${API_URL}/products`);
  const products = await response.json();
  return products;
}

export async function getProductById(id: string): Promise<Products> {
  const response = await fetch(`${API_URL}/products/${id}`);
  const product = await response.json();
  return product;
}
