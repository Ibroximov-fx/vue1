
<template>
  <div class="mt-10 border border-[#D9D9D9] lg:border border-[#D9D9D9] pt-3 pb-[37px] w-[306px] lg:mt-[0px]">
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
        <p class="font-medium text-[16px] text-[#1E1E1E] uppercase">
          Total
          <span class="font-medium text-[12px] uppercase text-[#0000008C]">(Tax incl.)</span>
        </p>
        <p>${{total}}</p>
      </div>
      <div class="flex gap-2 pt-9 items-center">
        <input class="w-[17px] h-[18px] border border-[#8A8A8A]" type="checkbox">
        <p class="text-[11px]">I agree to the Terms and Conditions</p>
      </div>
      <button class="bg-[#D9D9D9] py-[10px] w-full mt-[15px]">Continue</button>
    </div>
  </div>
</template>
<script setup>
defineProps({
  subtotal: Number,
  shipping: Number,
  total: Number
})
</script>
