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
    <div class="grid grid-cols-3 gap-10">
    <div class="max-w-[300px] bg-white rounded-2xl shadow-lg overflow-hidden">
      <div class="max-w-[400px] ">
  <swiper :navigation="false" :modules="[Navigation]" class="mySwiper">
    <swiper-slide><img src="../assets/portfolio/homePhone.png" alt="homePhone"></swiper-slide>
    <swiper-slide><img src="../assets/portfolio/menuPhone.png" alt="menuPhone"></swiper-slide>
    <swiper-slide><img src="../assets/portfolio/childrenPage.png" alt="childrenPage"></swiper-slide>
    <swiper-slide><img src="../assets/portfolio/compPage.png" alt="compPage"></swiper-slide>
    <swiper-slide><img src="../assets/portfolio/gamesPage.png" alt="gamesPage"></swiper-slide>
  </swiper>
      </div>
  <div class="p-4 space-y-2">
    <p class="text-lg font-bold text-gray-800">Sayt zakaz qilish</p>
    <p class="text-gray-600">Landing page tayyorlash</p>
    <p class="text-gray-600">Internet magazin yaratish</p>
    <p class="text-gray-600">Korporativ sayt</p>
    <p class="text-gray-600">SEO optimizatsiya</p>
  </div>
    </div>
    <div class="max-w-[300px] bg-white rounded-2xl shadow-lg overflow-hidden">
      <div class="max-w-[400px]  h-[251px] ">
        <swiper
            :direction="'vertical'"
            :modules="[Mousewheel, Pagination]"
            class="mySwiper h-full"
        >
          <swiper-slide><img src="../assets/portfolio/homePhone.png" alt="homePhone"></swiper-slide>
          <swiper-slide><img src="../assets/portfolio/menuPhone.png" alt="menuPhone"></swiper-slide>
          <swiper-slide><img src="../assets/portfolio/childrenPage.png" alt="childrenPage"></swiper-slide>
          <swiper-slide><img src="../assets/portfolio/compPage.png" alt="compPage"></swiper-slide>
          <swiper-slide><img src="../assets/portfolio/gamesPage.png" alt="gamesPage"></swiper-slide>
        </swiper>
      </div>
      <div class="p-4 space-y-2">
        <p class="text-lg font-bold text-gray-800">Sayt zakaz qilish</p>
        <p class="text-gray-600">Landing page tayyorlash</p>
        <p class="text-gray-600">Internet magazin yaratish</p>
        <p class="text-gray-600">Korporativ sayt</p>
        <p class="text-gray-600">SEO optimizatsiya</p>
      </div>
    </div>
    </div>

    <div class="text-center">
      <p class="font-bold text-[30px]">ZedGroupda kelgan va ZedGroup uquvchilari</p>
      <canvas id="myChart" class="max-w-[400px] h-[400px]"></canvas>
    </div>
  </main>

</template>
<script setup>
import { onMounted } from "vue"
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Navigation, Mousewheel, Pagination } from 'swiper/modules'

import Chart from 'chart.js/auto'

const config = {
  type: 'doughnut',
  data: {
    labels: ['ZedGroup', 'AlfaGroup'],
    datasets: [{
      data: [3, 2],
    }]
  },
}

onMounted(() => {
  const ctx = document.getElementById("myChart")
  new Chart(ctx, config)
})
</script>
