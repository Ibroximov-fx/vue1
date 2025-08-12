<template>
  <div class="flex justify-between mt-20 pl-[50px] pr-[53px] items-start">
    <div class="grid grid-cols-3 gap-[62px] items-center">
      <div class="flex" v-for="(shirt, index) in clothes" :key="index">
        <div class="">
          <img class="w-[265px] h-[314px]" :src="shirt.img" alt="shirt.img">
          <div class="flex justify-between">
            <div>
              <p class="font-medium text-[12px] text-[#000000A8] pt-2.5">{{ shirt.title }}</p>
              <p class="font-medium text-[14px] text-[#000000] pt-1">{{ shirt.name }}</p>
            </div>
            <p class="font-medium text-[14px] text-[#000000] pt-8 flex gap-[4px]">{{shirt.currency}}{{ shirt.cash }}</p>
          </div>
        </div>
        <div class="pl-[15px]">
          <img src="../../assets/vector.png" alt="vector">
          <p class="pt-[68px] font-medium text-[14px]">{{ shirt.size }}</p>
          <div class="w-[25px] h-[25px] bg-[#1B1B1D] mt-3"></div>
          <div class="flex flex-col pt-[15px]">
            <button @click="plus(index)" class="border border-[#8A8A8A] border-[1px] w-[25px] h-6">+</button>
            <button class="border border-[#8A8A8A] border-[1px] w-[25px] h-6">{{shirt.amount}}</button>
            <button @click="minus(index)" class="border border-[#8A8A8A] border-[1px] w-[25px] h-6">-</button>
          </div>
          <img class="mt-5 mx-auto" src="../../assets/turnover.svg" alt="turnover">
        </div>
      </div>
    </div>
    <div class="border border-[#D9D9D9] pt-3 pb-[37px]">
      <div class="pl-10 pr-9">
      <p class="font-medium text-[14px] pt-[51px]">ORDER SUMMARY</p>
      <div class="flex justify-between pt-[22px]">
        <p class="font-medium text-[12px]">Subtotal</p>
        <p class="font-medium text-[12px]">${{subtotal}}</p>
      </div>
      <div class="flex justify-between pt-[5px]">
        <p class="font-medium text-[12px]">Shipping</p>
        <p class="font-medium text-[12px]">${{shipping}}</p>
      </div>
      <div class="border border-[#D9D9D9] mt-[18px]"></div>
      <div class="flex justify-between items-center pt-6">
        <p class="font-medium text-[16px] text-[#1E1E1E] uppercase">Total <span class="font-medium text-[12px] uppercase text-[#0000008C]">(Tax incl.)</span></p>
        <p>${{total}}</p>
      </div>
      <div class="flex gap-2 pt-9 items-center">
        <input class="w-[17px] h-[18px] border border-[#8A8A8A]" type="checkbox">
        <p class="text-[11px]">I agree to the Terms and Conditions</p>
      </div>
      <button class="bg-[#D9D9D9] py-[10px] w-full mt-[15px]">Continue</button>
    </div>
  </div>
  </div>
</template>
<script setup>
import nike from "../../assets/nike.png"
import supreme from "../../assets/supreme.png"
import adidas from "../../assets/adidas.png"

import {ref} from "vue";

let shipping = ref(0)
let total = ref(0)
let subtotal = ref(0)

function plus(index) {
  let product = clothes.value[index]
  if(product.amount < 20) {
    product.amount++
    product.cash += product.cash
    subtotal.value = product.cash
    total.value = subtotal.value
  }
}
function minus(index) {
  let product = clothes.value[index]
  if(product.amount >0) {
    product.amount--
    product.cash -= product.cash
    subtotal.value = product.cash
    total.value = subtotal.value
  }
}
let clothes =ref([
  {
    img: nike,
    title: "Cotton T Shirt",
    name: "Full Sleeve Zipper",
    cash: 89,
    currency: "$",
    size: "L",
    amount: 0
  },
  {
    img: supreme,
    title: "Cotton T Shirt",
    name: "Basic Slim Fit T-Shirt",
    cash: 199 ,
    currency: "$" ,
    size: "XL",
    amount: 0,
  },
  {
    img: adidas,
    title: "Cotton T Shirt",
    name: "ABSTRACT PRINT SHIRT",
    cash: 99,
    currency: "$",
    size: "M",
    amount: 0
  }
])
</script>
<!--<script setup>-->
<!--import nike from "../../assets/nike.png"-->
<!--import supreme from "../../assets/supreme.png"-->
<!--import adidas from "../../assets/adidas.png"-->
<!--import { ref } from "vue"-->

<!--let shipping = ref(0)-->
<!--let subtotal = ref(0)-->
<!--let total = ref(0)-->

<!--let clothes = ref([-->
<!--  {-->
<!--    img: nike,-->
<!--    title: "Cotton T Shirt",-->
<!--    name: "Full Sleeve Zipper",-->
<!--    cash: 89,-->
<!--    currency: "$",-->
<!--    size: "L",-->
<!--    amount: 0-->
<!--  },-->
<!--  {-->
<!--    img: supreme,-->
<!--    title: "Cotton T Shirt",-->
<!--    name: "Basic Slim Fit T-Shirt",-->
<!--    cash: 199,-->
<!--    currency: "$",-->
<!--    size: "XL",-->
<!--    amount: 0,-->
<!--  },-->
<!--  {-->
<!--    img: adidas,-->
<!--    title: "Cotton T Shirt",-->
<!--    name: "ABSTRACT PRINT SHIRT",-->
<!--    cash: 99,-->
<!--    currency: "$",-->
<!--    size: "M",-->
<!--    amount: 0-->
<!--  }-->
<!--])-->

<!--function calcTotals() {-->
<!--  let sum = 0-->
<!--  for (let i = 0; i < clothes.value.length; i++) {-->
<!--    sum += clothes.value[i].amount * clothes.value[i].cash-->
<!--  }-->
<!--  subtotal.value = sum-->
<!--  total.value = subtotal.value + shipping.value-->
<!--}-->

<!--function plus(index) {-->
<!--  let product = clothes.value[index]-->
<!--  if (product.amount < 20) {-->
<!--    product.amount++-->
<!--    calcTotals()-->
<!--  }-->
<!--}-->

<!--function minus(index) {-->
<!--  let product = clothes.value[index]-->
<!--  if (product.amount > 0) {-->
<!--    product.amount&#45;&#45;-->
<!--    calcTotals()-->
<!--  }-->
<!--}-->
<!--</script>-->
