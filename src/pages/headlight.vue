<template>
  <main class="min-h-screen w-full
  bg-gradient-to-br from-gray-900 via-black to-gray-800
  flex flex-col items-center justify-center gap-12 p-10 font-sans">
<buttons>
  form
</buttons>
    <!-- Section 1 -->
    <section class="w-full max-w-3xl bg-gray-900 rounded-2xl shadow-2xl p-12 border border-gray-700">
      <h2 class="text-3xl font-extrabold text-yellow-400 mb-4 uppercase tracking-wide drop-shadow-lg">
        LED Faralar
      </h2>
      <p class="text-gray-300 text-lg leading-relaxed">
        Energiya tejovchi, uzoq muddatli va yorqin LED faralar. Kechasi yo‘lda xavfsizlik.
      </p>
    </section>

    <!-- Section 2 -->
    <section class="w-full max-w-3xl bg-gray-900 rounded-2xl shadow-2xl p-12 border border-gray-700">
      <h2 class="text-3xl font-extrabold text-blue-400 mb-4 uppercase tracking-wide drop-shadow-lg">
        Xenon Faralar
      </h2>
      <p class="text-gray-300 text-lg leading-relaxed">
        Kuchli oq-ko‘kimtir yorug‘lik. Sport va premium mashinalar uchun ideal yechim.
      </p>
    </section>

    <!-- Section 3 -->
    <section class="w-full max-w-3xl bg-gray-900 rounded-2xl shadow-2xl p-12 border border-gray-700">
      <h2 class="text-3xl font-extrabold text-white mb-4 uppercase tracking-wide drop-shadow-lg">
        Halogen Faralar
      </h2>
      <p class="text-gray-300 text-lg leading-relaxed">
        Arzon va ishonchli variant. Kundalik foydalanish uchun qulay va samarali.
      </p>
    </section>

  </main>


</template>
<script setup lang="ts">
import Buttons from "../buttons/buttons.vue";
</script>