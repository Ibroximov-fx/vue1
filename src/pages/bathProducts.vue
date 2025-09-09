<template>
    <form>
      <div class="grid grid-cols-3 mt-10 gap-5">
        <input v-model="title" class="w-full max-w-md px-4 py-2 border border-gray-300 rounded-xl outline-none  border-green-400 shadow-sm" placeholder="add title">
        <input v-model="description" class="w-full max-w-md px-4 py-2 border border-gray-300 rounded-xl outline-none  border-green-400 shadow-sm" placeholder="add description">
        <input v-model="image_url" class="w-full max-w-md px-4 py-2 border border-gray-300 rounded-xl outline-none  border-green-400 shadow-sm" placeholder="add image_url">
        <select v-model="condition" class="w-full max-w-md px-4 py-2 border border-gray-300 rounded-xl outline-none  border-green-400 shadow-sm">
          <option>new</option>
          <option>used</option>
          <option>broken</option>
        </select>
        <select v-model="category" class="w-full max-w-md px-4 py-2 border border-gray-300 rounded-xl outline-none  border-green-400 shadow-sm" >
          <option>electronics</option>
          <option>books</option>
          <option>home</option>
        </select>
        <button @click="addProduct"
                class=" mt-3 bg-green-600 hover:bg-green-700 text-white font-semibold px-5 py-2 rounded-xl shadow-md transition duration-300">add product</button>
      </div>
    </form>
  <div v-for="books in bookStore.home?.results">
    <img class="w-[300px] h-[300px] my-2 " :src="books.image_url" alt="image_url">
    <div class="pl-2">
      <p class="text-xl font-bold text-gray-800">
        {{ books.title }}
      </p>

      <p class="text-gray-600 text-sm mt-1">
        {{ books.description }}
      </p>

      <p class="text-gray-500 italic mt-2">
        Category: {{ books.category }}
      </p>

      <p class="mt-1 font-medium text-green-600 pb-2">
        Condition: {{ books.condition }}
      </p>
    </div>
  </div>
</template>
<script setup>
import {useCounterStore} from "../store/fetchBook.js";
import {onMounted} from "vue";

const bookStore = useCounterStore()

onMounted(() => {
  bookStore.fetchData()
})
function addProduct() {
  bookStore.postData()
}
</script>