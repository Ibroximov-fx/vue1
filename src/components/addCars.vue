<template>
  <form class="gap-[15px] flex mt-5" @submit.prevent="myForm">
    <input v-model="image" class="w-[250px] h-8 border border-blue-500 rounded-[15px] pl-4 py-5" placeholder="add image">
    <input v-model="cash" class="w-[250px] h-8 border border-blue-500 rounded-[15px] pl-4 py-5" placeholder="add cash">
    <input v-model="color" class="w-[250px] h-8 border border-blue-500 rounded-[15px] pl-4 py-5" placeholder="add color">
    <input v-model="model" class="w-[250px] h-8 border border-blue-500 rounded-[15px] pl-4 py-5" placeholder="add model">
    <input v-model="year" class="w-[250px] h-8 border border-blue-500 rounded-[15px] pl-4 py-5" placeholder="add year">
    <div v-if="a === true">
      <button class="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300">
        add product
      </button>
    </div>
    <div v-else>
      <button @click="updateBtn" class="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
        update
      </button>
    </div>
  </form>
  <div class="mt-10 grid grid-cols-3 gap-4">
    <div
        v-for="(item, index) in products"
        :key="index"
        class="w-[400px] bg-white rounded-[10px] shadow-lg hover:shadow-2xl transition duration-300"
    >
      <img :src="item.image" alt="cars" class="w-full h-[250px] ">
      <p class="text-xl font-semibold mb-2 pl-3">{{ item.cash }}</p>
      <p class="text-gray-600 mb-1 pl-3">{{ item.color }}</p>
      <p class="text-gray-600 mb-1 pl-3">{{ item.model }}</p>
      <p class="text-gray-600 mb-4 pl-3">{{ item.year }}</p>
      <div class="flex justify-between pb-3 px-2">
        <button @click="deleteBtn(index)" class="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition">
          delete
        </button>
        <button @click="editBtn(index)" class="bg-yellow-600 text-white px-6 py-2 rounded-lg hover:bg-yellow-700 transition">
          edit
        </button>
      </div>
    </div>
  </div>
</template>
<script setup>
let editingIndex = ref(null)
let a = true
import { ref, onMounted } from 'vue'
let image = ref('')
let cash = ref('')
let color = ref('')
let model = ref('')
let year = ref('')

let products = ref([])

onMounted(() => {
  const stored = localStorage.getItem('products')
  if (stored) {
    products.value = JSON.parse(stored)
  }
})

function myForm() {
  addProducts()
}
function addProducts() {
  const product = {
    image: image.value,
    cash: cash.value,
    color: color.value,
    model: model.value,
    year: year.value
  }

  products.value.push(product)

  localStorage.setItem('products', JSON.stringify(products.value))

  image.value = ''
  cash.value = ''
  color.value = ''
  model.value = ''
  year.value = ''
}
function deleteBtn (index){
  products.value.splice(index,1)
  localStorage.setItem('products', JSON.stringify(products.value))
}
function editBtn(index){
  let carsArray = products.value[index]
  image.value = carsArray.image
  cash.value = carsArray.cash
  color.value = carsArray.color
  model.value = carsArray.model
  year.value = carsArray.year
  editingIndex.value = index
  a = false
}
function updateBtn(index){
  if (editingIndex.value !== null) {
    let updatedProduct = {
      image: image.value,
      cash: cash.value,
      color: color.value,
      model: model.value,
      year: year.value
    }

    products.value[editingIndex.value] = updatedProduct
    localStorage.setItem('products', JSON.stringify(products.value))

    image.value = ''
    cash.value = ''
    color.value = ''
    model.value = ''
    year.value = ''

    a = true
    editingIndex.value = null
  }
a = true
}
</script>