<script setup>

import Buttons from "../buttons/buttons.vue";
</script>

<template>
  <main class="min-h-screen w-full
  bg-gradient-to-br from-gray-900 via-black to-gray-800
  flex flex-col items-center justify-center gap-12 p-10 font-sans">
    <buttons>
      click
    </buttons>
    <!-- Section 1 -->
    <section class="w-full max-w-3xl bg-gradient-to-r from-gray-800 to-gray-700
    rounded-2xl shadow-2xl p-10 border border-gray-600">
      <h2 class="text-3xl font-extrabold text-white mb-4 uppercase tracking-wider">
        Premium Tires
      </h2>
      <p class="text-gray-300 text-lg leading-relaxed">
        Eng yuqori sifatli yozgi va qishki balonlar. Har qanday yo‘l sharoitida ishonchli.
      </p>
    </section>

    <!-- Section 2 -->
    <section class="w-full max-w-3xl bg-gradient-to-r from-gray-800 to-gray-700
    rounded-2xl shadow-2xl p-10 border border-gray-600">
      <h2 class="text-3xl font-extrabold text-red-500 mb-4 uppercase tracking-wider">
        Discount & Offers
      </h2>
      <p class="text-gray-300 text-lg leading-relaxed">
        Maxsus chegirmalar va mavsumiy aksiyalar — shinalarni eng yaxshi narxda sotib oling.
      </p>
    </section>

    <!-- Section 3 -->
    <section class="w-full max-w-3xl bg-gradient-to-r from-gray-800 to-gray-700
    rounded-2xl shadow-2xl p-10 border border-gray-600">
      <h2 class="text-3xl font-extrabold text-blue-400 mb-4 uppercase tracking-wider">
        Trusted Brands
      </h2>
      <p class="text-gray-300 text-lg leading-relaxed">
        Michelin, Bridgestone, Pirelli va boshqa ishonchli brendlarning keng assortimenti.
      </p>
    </section>
  </main>
  <div class="flex justify-between max-w-[750px] mx-auto my-5">
    <RouterLink to="/balloon/cars" class="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300">
      cars
    </RouterLink>
    <RouterLink to="/balloon/jobs" class="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300">
      jobs
    </RouterLink>
    <RouterLink to="/balloon/students" class="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300">
      students
    </RouterLink>

  </div>
  <RouterView></RouterView>
</template>

<style scoped>

</style>