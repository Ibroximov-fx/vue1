<script setup>
import Category from "./portfolioSections/category.vue";
import Products from "./portfolioSections/products.vue";
import Order from "./portfolioSections/order.vue";
</script>

<template>
  <main>
    <section class="bg-[#0b0d10]">
      <Products/>
    </section>
    <section class="bg-[#0f1014] pb-[80px]">
      <Order/>
    </section>
  </main>
</template>

<style scoped>

</style>