<template>
  <section class="bg-[#0b0d10]">
    <Category @filterCategory="filterData" />
  </section>
<div class="max-w-[1360px] mx-auto ">
  <div class="grid grid-cols-3 gap-x-[30px] gap-y-[30px]">
    <div v-for="project in filteredData" :key="project.id">
      <ChildrenProduct :project='project'/>
    </div>
  </div>
</div>
</template>
<script setup>
import {ref} from "vue";
import ChildrenProduct from "./childrenProduct.vue";
import {PortfolioData} from  "../../data/portfolio.js"
import Category from "./category.vue";
const filteredData = ref([...PortfolioData])

function filterData(category) {
  if (category === "all") {
    filteredData.value = PortfolioData
  } else {
    filteredData.value = PortfolioData.filter(
        item => item.category === category
    )
  }
}
</script>