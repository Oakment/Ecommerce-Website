<script setup lang="ts">
import { ref, onMounted } from 'vue';
import NavBar from './components/NavBar.vue'; 
import ProductList from './components/ProductList.vue';
import { useCartStore } from './stores/cart';

const cart = useCartStore();

onMounted(() => {
  cart.load();
});



</script>

<template>
  <NavBar />
  <router-view />

  <main>
    </main>
</template>