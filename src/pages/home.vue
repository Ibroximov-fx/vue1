<template>
  <main class="min-h-screen w-full
  bg-gradient-to-br from-gray-900 via-black to-gray-800
  flex flex-col items-center justify-center gap-12 p-10 font-sans">
<buttons>
  Game over
</buttons>
    <!-- Section 1 -->
    <section class="w-full max-w-4xl bg-gradient-to-r from-gray-800 to-gray-700
    rounded-2xl shadow-2xl p-12 border border-gray-600">
      <h2 class="text-4xl font-extrabold text-white tracking-wide mb-4 uppercase">
        Premium Cars
      </h2>
      <p class="text-gray-300 leading-relaxed text-lg">
        Eng so‘nggi modellardagi mashinalarimizni ko‘rib chiqing va o‘zingizga mosini tanlang.
      </p>
    </section>

    <!-- Section 2 -->
    <section class="w-full max-w-4xl bg-gradient-to-r from-gray-800 to-gray-700
    rounded-2xl shadow-2xl p-12 border border-gray-600">
      <h2 class="text-4xl font-extrabold text-yellow-400 tracking-wide mb-4 uppercase">
        Special Offers
      </h2>
      <p class="text-gray-300 leading-relaxed text-lg">
        Maxsus chegirmalar va kredit dasturlari orqali orzuingizdagi avtomobilga ega bo‘ling.
      </p>
    </section>

    <!-- Section 3 -->
    <section class="w-full max-w-4xl bg-gradient-to-r from-gray-800 to-gray-700
    rounded-2xl shadow-2xl p-12 border border-gray-600">
      <h2 class="text-4xl font-extrabold text-blue-400 tracking-wide mb-4 uppercase">
        Trusted Dealers
      </h2>
      <p class="text-gray-300 leading-relaxed text-lg">
        Biz faqat ishonchli dilerlar bilan ishlaymiz, shuning uchun mashinalar sifatiga 100% kafolat beramiz.
      </p>
    </section>

  </main>


</template>
<script setup lang="ts">
import Buttons from "../buttons/buttons.vue";
</script>