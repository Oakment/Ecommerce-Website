<script setup lang="ts">
import { ref, onMounted,watch } from 'vue';
import NavBar from './components/NavBar.vue'; 
import ProductList from './components/ProductList.vue';
import { useCartStore } from './stores/cart';

const cart = useCartStore();

onMounted(() => {
  cart.load();
});

const isDark = ref(localStorage.getItem("theme") === "dark");

watch(isDark, (val) => {
  const html = document.documentElement;
  if (val) {
    html.classList.add("dark");
    localStorage.setItem("theme", "dark");
  } else {
    html.classList.remove("dark");
    localStorage.setItem("theme", "light");
  }
});



</script>

<template>
  <div class="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        <NavBar />
  <div class="max-w-6xl mx-auto px-4 py-6">
    <router-view />
  </div>
</div>
</template>