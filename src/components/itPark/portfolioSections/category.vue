<template>
  <div class="max-w-[1200px] mx-auto ">
    <div class="pt-20 flex flex-col items-center text-center pb-10">
      <p class="font-bold text-[36px] text-[#FFFFFF]">Bajargan loyihalarimiz</p>
      <div
          class="mt-10 bg-[#11131780] border border-[#4E4E4E] rounded-[90px] flex items-center gap-[60px] justify-center">
        <button
            @click="all"
            :class="[numbers === 1 ? 'font-bold text-[16px] text-[#DADADA] py-[18px] px-[51px] bg-[#4a11a8] rounded-[30px]' : 'font-bold text-[16px] text-[#DADADA] py-[18px] pl-[35px]']"
        >
          Barchasi
        </button>
        <button
            @click="site"
            :class="[numbers === 2 ? 'font-bold text-[16px] text-[#DADADA] py-[18px] px-[51px] bg-[#4a11a8] rounded-[30px]' : 'font-bold text-[16px] text-[#DADADA] pl-[22px]']"
        >
          Veb sayt
        </button>
        <button
            @click="design"
            :class="[numbers === 3 ? 'font-bold text-[16px] text-[#DADADA] py-[18px] px-[51px] bg-[#4a11a8] rounded-[30px]' : 'font-bold text-[16px] text-[#DADADA] pl-[35px]']"
        >
          Veb dizayn
        </button>
        <button
            @click="smm"
            :class="[numbers === 4 ? 'font-bold text-[16px] text-[#DADADA] py-[18px] px-[51px] bg-[#4a11a8] rounded-[30px]' : 'font-bold text-[16px] text-[#DADADA] pl-[35px]']"
        >
          SMM
        </button>
        <button
            @click="mobil"
            :class="[numbers === 5 ? 'font-bold text-[16px] text-[#DADADA] py-[18px] px-[51px] bg-[#4a11a8] rounded-[30px]' : 'font-bold text-[16px] text-[#DADADA] pr-[36px]']"
        >
          Mobil ilova
        </button>
      </div>
    </div>
  </div>
</template>
<script setup>
let emits = defineEmits(
    [
        "searchCategory",
    ]
)
import {ref} from "vue";

let numbers = ref(1)
function all() {
numbers.value = 1
  emits("filterCategory", "all")
}
function site() {
  numbers.value = 2
  emits("filterCategory", "Veb sayt")
}
function design() {
  numbers.value = 3
  emits("filterCategory", "Veb dizayn")
}
function smm() {
  numbers.value = 4
  emits("filterCategory", "SMM")
}
function mobil() {
  numbers.value = 5
  emits("filterCategory", "Mobil ilova")
}
</script>