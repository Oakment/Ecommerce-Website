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
  <div  class="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6">
    <p v-if="loading">Loading...</p>
    <p v-else-if="error">{{ error }}</p>

    <div v-else-if="product" class="grid md:grid-cols-2 gap-8">
  <!-- Image -->
  <img
    :src="product.thumbnail"
    class="w-full rounded-2xl shadow-md"
  />

  <!-- Info -->
  <div>
    <h1 class="text-3xl font-bold mb-4">
      {{ product.title }}
    </h1>

    <p class="text-gray-600 dark:text-gray-400 mb-4">
      {{ product.description }}
    </p>

    <p class="text-2xl text-blue-600 font-bold mb-6">
      ${{ product.price }}
    </p>

    <button
      @click="add"
      class="bg-blue-600 hover:bg-blue-700 active:scale-95 transition text-white px-6 py-3 rounded-xl"
    >
      Add to Cart
    </button>
  </div>
    </div>
  </div>
</template>