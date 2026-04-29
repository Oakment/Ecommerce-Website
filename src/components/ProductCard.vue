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
<div class="bg-white rounded-xl shadow-md hover:shadow-lg transition p-4 cursor-pointer" @click="goToDetail">
  <img
    :src="product.thumbnail"
    :alt="product.title"
    class="rounded-lg mb-3"
  />
  <h2 class="font-semibold text-lg line-clamp-1">
    {{ product.title }}
  </h2>
  <p class="text-gray-600 text-sm line-clamp-2">
    {{ product.description }}
  </p>
  <p class="text-blue-600 font-bold mt-2">
    ${{ product.price }}
  </p>
</div>
</template>