import { defineStore } from "pinia";
import type { Product } from "@/types/product";

export const useCartStore = defineStore("cart", {
  state: () => ({
    items: [] as Product[],
  }),

  actions: {
    addToCart(product: Product) {
      this.items.push(product);
      this.save();
    },

    removeFromCart(id: number) {
      this.items = this.items.filter(p => p.id !== id);
      this.save();
    },

    save() {
      localStorage.setItem("cart", JSON.stringify(this.items));
    },

    load() {
      const data = localStorage.getItem("cart");
      if (data) this.items = JSON.parse(data);
    },
  },
});