<template>
  <main class="min-h-screen w-full
  bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-100
  flex flex-col items-center justify-center gap-12 p-10 font-sans">
    <div class="flex items-center gap-4 text-black">
      <RouterLink to="/" class="font-bold text-[20px]">home</RouterLink>
      <RouterLink to="/balloon" class="font-bold text-[20px]">balloon</RouterLink>
      <RouterLink to="/bathProduct" class="font-bold text-[20px]">bathProducts</RouterLink>
      <RouterLink to="/headlight" class="font-bold text-[20px]">headlight</RouterLink>
      <RouterLink to="/kitchenProduct" class="font-bold text-[20px]">kitchenProducts</RouterLink>
    </div>
    <buttons>
      submit
    </buttons>

    <!-- Section 1 -->
    <section class="w-full max-w-3xl bg-white rounded-3xl shadow-xl p-12 border border-teal-100">
      <h2 class="text-3xl font-extrabold text-teal-700 mb-4">
        Hammom Aksessuarlari
      </h2>
      <p class="text-gray-600 leading-relaxed text-lg">
        Yumshoq sochiqlar, gigiyenik aksessuarlar va hammom uchun kerakli barcha buyumlar.
      </p>
    </section>

    <!-- Section 2 -->
    <section class="w-full max-w-3xl bg-white rounded-3xl shadow-xl p-12 border border-blue-100">
      <h2 class="text-3xl font-extrabold text-blue-600 mb-4">
        Tozalash Mahsulotlari
      </h2>
      <p class="text-gray-600 leading-relaxed text-lg">
        Yuqori sifatli sovun, shampun va dush geli. Tozalik va sog‘lomlik uchun.
      </p>
    </section>

    <!-- Section 3 -->
    <section class="w-full max-w-3xl bg-white rounded-3xl shadow-xl p-12 border border-cyan-100">
      <h2 class="text-3xl font-extrabold text-cyan-600 mb-4">
        Maxsus Takliflar
      </h2>
      <p class="text-gray-600 leading-relaxed text-lg">
        Hammom mahsulotlariga chegirmalar va aksiyalar. Oilaviy to‘plamlar yanada arzonroq.
      </p>
    </section>

  </main>

</template>
<script setup lang="ts">
import Buttons from "../buttons/buttons.vue";
</script>