<template>
  <header class="bg-[#15161b]">
    <div class="max-w-[1200px] mx-auto">
      <div class="flex items-center justify-between pt-[17px] pb-[19px]">
        <div>
          <p class="font-medium text-[#FFFFFF] text-[30px] leading-[50px]">Logo</p>
        </div>
        <div class="flex items-center gap-4">
          <RouterLink to="/" class="font-bold text-[20px] text-[#FFFFFF]">home</RouterLink>
          <RouterLink to="/balloon" class="font-bold text-[20px] text-[#FFFFFF]">balloon</RouterLink>
          <RouterLink to="/bathProduct" class="font-bold text-[20px] text-[#FFFFFF]">bathProducts</RouterLink>
          <RouterLink to="/headlight" class="font-bold text-[20px] text-[#FFFFFF]">headlight</RouterLink>
          <RouterLink to="/kitchenProduct" class="font-bold text-[20px] text-[#FFFFFF]">kitchenProducts</RouterLink>
        </div>

        <div class="flex items-center">
          <div>

          </div>
          <div class="ml-10">
            <p class="font-bold text-[20px] text-[#FFFFFF]">+998 93 232-09-20</p>
            <p class="font-bold text-[14px] text-[#FFFFFF]">ibrohimov91@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
<script>

import {defineComponent} from "vue";
import Balloon from "../../pages/balloon.vue";
import BathProducts from "../../pages/bathProducts.vue";
import KitchenProducts from "../../pages/kitchenProducts.vue";

export default defineComponent({
  components: {KitchenProducts, BathProducts, Balloon}
})
</script>