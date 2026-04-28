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
  <div class="border p-4 cursor-pointer" @click="goToDetail">
    <img :src="product.thumbnail" :alt="product.title" />
    <h2>{{ product.title }}</h2>
    <p>${{ product.price }}</p>
  </div>
</template>