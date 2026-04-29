<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import axios from "axios";
import type { Product } from "@/types/product";
import { useCartStore } from "@/stores/cart";

const cart = useCartStore();

const add = () => {
  if (product.value) {
    cart.addToCart(product.value);
  }
};

const route = useRoute();
const product = ref<Product | null>(null);
const loading = ref(true);
const error = ref<string | null>(null);

onMounted(async () => {
  try {
    const id = route.params.id;
    const res = await axios.get(`https://dummyjson.com/products/${id}`);
    product.value = res.data;
  } catch (e) {
    error.value = "Failed to load product";
  } finally {
    loading.value = false;
  }
});
</script>

<template>
  <div class="p-6">
    <p v-if="loading">Loading...</p>
    <p v-else-if="error">{{ error }}</p>

    <div v-else-if="product">
      <img :src="product.thumbnail" :alt="product.title" class="w-64" />
      <h1 class="text-2xl font-bold">{{ product.title }}</h1>
      <p class="text-gray-600">{{ product.description }}</p>
      <p class="text-lg font-semibold">${{ product.price }}</p>
    </div>
    <button @click="add" class="bg-blue-500 text-white p-2 mt-4">
      Add to Cart
  </button>
  </div>
</template>