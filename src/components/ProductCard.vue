<script setup lang="ts">
import type { Product } from "@/types/product";

defineProps<{
  product: Product;
}>();
</script>

<template>
  <div class="border p-4">
    <img :src="product.thumbnail" />
    <h2>{{ product.title }}</h2>
    <p>${{ product.price }}</p>
  </div>
</template>