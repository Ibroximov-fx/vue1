<template>
  <div class="w-[1360px] bg-[#FFFFFF] my-4 mx-auto rounded-[10px] pb-[63px]">
  <div class="flex items-end justify-between">
    <div>
  <div
      class="flex mt-[48px] ml-[64px] bg-[#FAFAFA] w-[832px] rounded-10px"
      v-for="(product, index) in products"
      :key="index"
  >
    <img src="../../../assets/phone.png" alt="product" class="" />
    <div class="ml-5">
      <p class="mt-[35px] ml-[70px] text-[13px] text-[#666666]">({{ product.max }})</p>
      <h3 class="font-bold text-[14px] text-[#000000] mt-2">
        {{ product.name }}
      </h3>
      <p class="font-semibold text-[18px] text-[#F1352B] mt-4">{{ product.price }}</p>

      <div
          class="mt-4 flex rounded-[10px] items-center border border-gray-400 text-center justify-center font-bold text-[#000000] w-[129px]"
      >
        <button
            @click="decrement(index)"
            :disabled="product.count <= 1"
            class="w-8 disabled:opacity-50"
        >-</button>
        <span class="py-2 w-[70px] text-[13px] text-center">{{ product.count }}</span>
        <button
            @click="increment(index)"
            :disabled="product.count >= product.max"
            class="w-8 disabled:opacity-50"
        >+</button>
      </div>

      <p class="text-sm bg-green-100 text-green-600 inline-block px-2 py-1 rounded mt-5">
        FREE SHIPPING
      </p>
      <div class="flex items-center mt-[7px] gap-[8px]">
        <img src="../../../assets/accept.png" alt="accept" class="w-4 h-4" />
        <p>In stock</p>
      </div>
    </div>
  </div>
    </div>
    <div class="border border-[#1ABA1A] rounded-[10px] mb-[-15px] mr-[48px]">
      <div class="p-[31px]">
      <p class="font-bold text-[16px] text-[#000000]">Order Summary</p>
      <div class="flex w-[339px] items-center justify-between">
        <p class="my-[15px] text-[14px] text-[#666666]">Sub Total:</p>
        <p class="font-bold text-[14px] text-[#000000]">${{orderTotal}}</p>
      </div>
      <div class="h-[1px] w-[339px] bg-[#CCCCCC]"></div>
      <div class="flex w-[339px] items-center justify-between">
        <p class="my-[15px] text-[14px] text-[#666666]">Shpping estimate:</p>
        <p class="font-bold text-[14px] text-[#000000]">$0.00</p>
      </div>
      <div class="h-[1px] w-[339px] bg-[#CCCCCC]"></div>
      <div class="flex w-[339px] items-center justify-between">
        <p class="my-[15px] text-[14px] text-[#666666]">Tax estimate:</p>
        <p class="font-bold text-[14px] text-[#000000]">$0.00</p>
      </div>
      <div class="h-[1px] w-[339px] bg-[#CCCCCC]"></div>
      <div class="flex w-[339px] items-center justify-between mt-[15px]">
        <p class="font-bold text-[16px] text-[#000000]">Order total:</p>
        <p class="font-bold text-[14px] text-[#000000]">${{orderTotal}}</p>
      </div>
      <button class="bg-[#1ABA1A] rounded-[10px] py-[16px] px-[43px] font-[medium] text-[12px] uppercase text-[#FFFFFF] mt-[31px] ml-[93px]">checkout</button>
    </div>
  </div>
  </div>
  </div>
</template>


<script setup>
  import { reactive, computed } from "vue";

  const products = reactive([
  {
    name: "5ROK Smart Phone 128GB, Oled Retina",
    price: "$579.00",
    max: 101,
    count: 1,
  },
  {
    name: "aPod Pro Tablet 2023 LTE + Wifi, GPS Cellular 12.9 Inch, 512GB",
    price: "$979.00",
    max: 17,
    count: 1,
  },
  {
    name: "GalaxySamsung Galaxy X6 Ultra LTE 4G/128 Gb, Black Smartphone",
    price: "$659.00",
    max: 5,
    count: 1,
  },
  ]);
  function parsePrice(price) {
  return parseFloat(price.replace("$", ""));
}
  const orderTotal = computed(() => {
    return products.reduce((sum, product) => {
      return sum + parsePrice(product.price) * product.count;
    }, 0);
  });


  function increment(index) {
  if (products[index].count < products[index].max) {
  products[index].count++;
}
}

  function decrement(index) {
  if (products[index].count > 1) {
  products[index].count--;
}
}
</script>


