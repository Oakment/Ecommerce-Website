import axios from "axios";
import type { ProductResponse } from "@/types/product";

export const getProducts = async (): Promise<ProductResponse> => {
  const res = await axios.get("https://dummyjson.com/products");
  return res.data;
};