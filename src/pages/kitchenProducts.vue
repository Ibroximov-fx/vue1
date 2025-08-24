<script setup>

import Buttons from "../buttons/buttons.vue";
</script>

<template>
  <main class="min-h-screen w-full
  bg-gradient-to-br from-orange-50 via-white to-green-50
  flex flex-col items-center justify-center gap-12 p-10 font-sans">
    <div class="flex items-center gap-4 text-black">
      <RouterLink to="/" class="font-bold text-[20px]">home</RouterLink>
      <RouterLink to="/balloon" class="font-bold text-[20px]">balloon</RouterLink>
      <RouterLink to="/bathProduct" class="font-bold text-[20px]">bathProducts</RouterLink>
      <RouterLink to="/headlight" class="font-bold text-[20px]">headlight</RouterLink>
      <RouterLink to="/kitchenProduct" class="font-bold text-[20px]">kitchenProducts</RouterLink>
    </div>
    <buttons>
      Game out
    </buttons>
    <!-- Section 1 -->
    <section class="w-full max-w-3xl bg-white rounded-3xl shadow-lg p-12 border border-orange-100">
      <h2 class="text-3xl font-extrabold text-orange-600 mb-4">
        Meva va Sabzavotlar
      </h2>
      <p class="text-gray-600 leading-relaxed text-lg">
        Yangi uzilgan mevalar va vitaminlarga boy sabzavotlar — sog‘lom hayot uchun.
      </p>
    </section>

    <!-- Section 2 -->
    <section class="w-full max-w-3xl bg-white rounded-3xl shadow-lg p-12 border border-green-100">
      <h2 class="text-3xl font-extrabold text-green-600 mb-4">
        Oshxona Asboblari
      </h2>
      <p class="text-gray-600 leading-relaxed text-lg">
        Pichoqlar, idishlar, tovoqlar va zamonaviy oshxona texnikalari.
      </p>
    </section>

    <!-- Section 3 -->
    <section class="w-full max-w-3xl bg-white rounded-3xl shadow-lg p-12 border border-red-100">
      <h2 class="text-3xl font-extrabold text-red-500 mb-4">
        Maxsus Takliflar
      </h2>
      <p class="text-gray-600 leading-relaxed text-lg">
        Oilaviy to‘plamlar, chegirmalar va aksiyalar — oshxonangiz uchun kerakli hamma narsa.
      </p>
    </section>

  </main>

</template>

<style scoped>

</style>