<template>
  <Header> </Header>
  <main class="max-w-[1230px] mx-auto">
    <section class="mt-20">
      <div class="ml-7 flex lg:ml-[0px] lg:flex items-center gap-[5px]">
        <p class="font-medium text-[13px] uppercase">Shopping bag</p>
        <img src="../../assets/like.png" alt="like">
        <p class="text-[11px] uppercase">favourites</p>
      </div>
      <div class="hidden lg:block lg:border border-[#C9C9C9] max-w-[712px] my-[15px]"></div>
    </section>
    <section>
  <div class="flex flex-col items-center lg:flex-row justify-between lg:items-start w-full pb-20">
    <div class="grid grid-cols-1 gap-6 justify-items-center lg:grid-cols-2 lg:gap-[62px] items-start">
    <div class="flex" v-for="(shirt, index) in clothes" :key="index">
        <div>
          <div class="relative">
          <img class="h-[274px] lg:w-[265px] h-[314px]" :src="shirt.img" alt="shirt.img">
            <img @click="btnLike" class="absolute bottom-0 right-0" src="../../assets/like.png" alt="like">
          </div>
          <div class="flex justify-between">
            <div>
              <p class="font-medium text-[12px] text-[#000000A8] pt-2.5">{{ shirt.title }}</p>
              <p class="font-medium text-[14px] text-[#000000] pt-1">{{ shirt.name }}</p>
            </div>
            <p class="font-medium text-[14px] text-[#000000] pt-8 flex gap-[4px]">{{shirt.currency}}{{ shirt.totalPrice }}</p>
          </div>
        </div>
        <div class="pl-[15px]">
          <img src="../../assets/vector.png" alt="vector">
          <p class="pt-[68px] font-medium text-[14px]">{{ shirt.size }}</p>
          <div class="w-[25px] h-[25px] bg-[#1B1B1D] mt-3"></div>
          <div class="flex flex-col pt-[15px]">
            <button @click="plus(index)" class="border border-[#8A8A8A] w-[25px] h-6">+</button>
            <button class="border border-[#8A8A8A] w-[25px] h-6">{{shirt.amount}}</button>
            <button @click="minus(index)" class="border border-[#8A8A8A] w-[25px] h-6">-</button>
          </div>
          <img class="mt-5 mx-auto" src="../../assets/turnover.svg" alt="turnover">
        </div>
      </div>
    </div>

    <order :subtotal="subtotal" :shipping="shipping" :total="total" />
  </div>
    </section>
  </main>
</template>
<script setup>
import order from "./orderSummary.vue"
import Header from "./clothesHeader.vue"
import nike from "../../assets/nike.png"
import supreme from "../../assets/supreme.png"
import adidas from "../../assets/adidas.png"
import { ref } from "vue"

let shipping = ref(0)
let subtotal = ref(0)
let total = ref(0)

let clothes = ref([
  {
    img: nike,
    title: "Cotton T Shirt",
    name: "Full Sleeve Zipper",
    cash: 89,
    currency: "$",
    size: "L",
    amount: 0,
    totalPrice: 0
  },
  {
    img: supreme,
    title: "Cotton T Shirt",
    name: "Basic Slim Fit T-Shirt",
    cash: 199,
    currency: "$",
    size: "XL",
    amount: 0,
    totalPrice: 0
  },
  {
    img: adidas,
    title: "Cotton T Shirt",
    name: "ABSTRACT PRINT SHIRT",
    cash: 99,
    currency: "$",
    size: "M",
    amount: 0,
    totalPrice: 0
  }
])

function calcTotals() {
  let sum = 0
  for (let i = 0; i < clothes.value.length; i++) {
    sum += clothes.value[i].totalPrice
  }
  subtotal.value = sum
  total.value = subtotal.value + shipping.value
}

function plus(index) {
  let product = clothes.value[index]
  if (product.amount < 20) {
    product.amount++
    product.totalPrice = product.amount * product.cash
    calcTotals()
  }
}

function minus(index) {
  let product = clothes.value[index]
  if (product.amount > 0) {
    product.amount--
    product.totalPrice = product.amount * product.cash
    calcTotals()
  }
}
function btnLike() {

}
</script>

+
