<template>
<p v-if="loading">loading...</p>
  <div v-else v-for="user in home" class="max-w-md mx-auto bg-white shadow-lg rounded-xl p-6 space-y-3 border border-gray-200 my-10">
    <h2 class="text-2xl font-bold text-gray-800">{{ user.title }}</h2>
    <p class="text-sm text-gray-500">ID: {{ user.id }}</p>
    <p class="text-gray-700">{{ user.description }}</p>
    <p class="text-sm text-gray-600"><b>Page count:</b> {{ user.pageCount }}</p>
    <p class="italic text-gray-500">{{ user.excerpt }}</p>
    <p class="text-xs text-gray-400">{{user.publishDate}}</p>
  </div>
</template>
<script setup>
import {useRoute} from "vue-router";
let route = useRoute();
let booksId = route.params.id
import {onMounted, ref} from "vue";
let loading = ref(false);
let home = ref([])
async function fetchData (){
  try{
    loading.value = true
    let data = await fetch(`https://fakerestapi.azurewebsites.net/api/v1/Books/${booksId}`)
    let json = await data.json()
    home.value = [json]
  }catch(error){
    console.log(error)
  }finally{
    loading.value = false
  }

}
onMounted(()=>{
  fetchData()
})
</script>