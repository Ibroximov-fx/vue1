<template>
  <header class="bg-slate-200">
    <div  class="rounded-[10px] w-[1360px] mx-auto bg-[#FFFFFF]">
    <div class="flex items-center justify-between mx-[30px] pt-[15px]">
      <div class="flex items-center gap-[18px]">
        <div class=" bg-[#EBEEF6] rounded-[6px]">
          <p class="my-[5px] ml-[22px] mr-[9px] text-[#000000] text-[12px]"> Hotline 24/7</p>
        </div>
        <p class="text-[#000000] text-[12px] font-bold ">(025) 3886 25 16</p>
      </div>
      <div class="flex items-center gap-[51px]">
        <div class="flex items-center gap-[19px]">
          <p class="text-[14px] text-[#000000]">Sell on Swoo</p>
          <p class="text-[14px] text-[#000000]">Order Tracki</p>
        </div>
        <div class="flex items-center">
          <p class="text-[14px] text-[#000000] mr-[4px]"> USD </p>
          <img src="../assets/chevronBtn.svg" alt="chevron">
          <div class="h-[21px] w-[1px] bg-[#EBEEF6] mx-[10px]"></div>
          <img src="../assets/language.png" alt="language" class="mr-1">
          <p class="text-[14px] text-[#000000] mr-[4px]"> Eng </p>
          <img src="../assets/chevronBtn.svg" alt="chevron">
        </div>
      </div>
    </div>
      <Contact></Contact>
    </div>
  </header>
</template>
<script setup>
import Contact from "./main/mainRegister/contact.vue";
</script>