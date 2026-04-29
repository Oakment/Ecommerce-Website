<script setup lang="ts">
import { ref, onMounted } from "vue";
import { getProducts } from "@/services/productService";
import type { Product } from "@/types/product";
import ProductCard from "@/components/ProductCard.vue";
import  {computed} from "vue";

const products = ref<Product[]>([]);
const loading = ref(true);
const search = ref("");

const filteredProducts = computed(() =>
  products.value.filter(p =>
    p.title.toLowerCase().includes(search.value.toLowerCase())
  )
);

onMounted(async () => {
  try {
    const data = await getProducts();
    products.value = data.products;
  } finally {
    loading.value = false;
  }
});
</script>

<template>
<input
  v-model="search"
  placeholder="Search products..."
  class="w-full mb-6 px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
/>

<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
  <ProductCard
    v-for="p in filteredProducts"
    :key="p.id"
    :product="p"
  />
</div>
</template>