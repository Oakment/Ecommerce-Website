<script setup lang="ts">
import { useRouter } from "vue-router";
import type { Product } from "@/types/product";

const props = defineProps<{ product: Product }>();
const router = useRouter();

const goToDetail = () => {
  router.push(`/product/${props.product.id}`);
};
</script>

<template>
<div class="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1 cursor-pointer p-4" @click="goToDetail">
  
  <img
    :src="product.thumbnail"
    :alt="product.title"
    class="w-full h-40 object-cover rounded-xl mb-3"
  />

  <h2 class="font-semibold text-lg mb-1 line-clamp-1">
    {{ product.title }}
  </h2>

  <p class="text-gray-600 dark:text-gray-400 text-sm line-clamp-2 mb-2">
    {{ product.description }}
  </p>

  <p class="text-blue-600 font-bold text-lg">
    ${{ product.price }}
  </p>

</div>
</template>