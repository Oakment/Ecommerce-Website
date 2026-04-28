// src/router/index.ts
import { createRouter, createWebHistory } from "vue-router";
import ProductList from "@/components/ProductList.vue";
import ProductDetail from "@/views/ProductDetail.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: ProductList,
  },
  {
    path: "/product/:id",
    name: "product-detail",
    component: ProductDetail,
    props: true, // important
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;