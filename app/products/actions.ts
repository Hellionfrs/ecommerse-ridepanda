"use server";

import { notFound } from "next/navigation";
import { Products } from "./definitions";

const API_URL = process.env.API_URL;

export async function getProducts(
  
): Promise<Products> {
  const response = await fetch(`${API_URL}/products`);
  const products = await response.json();
  return products;
}

