<template>
  <div class="grid grid-cols-10 gap-y-10 my-10 items-center">
    <p v-if="loading">loading...</p>
    <div v-else v-for="user in home">
      <RouterLink :to="`/user/${user.id}`" class="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md transition duration-300 ease-in-out">
        {{user.title}}
      </RouterLink>
    </div>
  </div>




</template>
<script setup>
import {onMounted, ref} from "vue";
let loading = ref(false);
let home = ref([])
async function fetchData (){
  try{
    loading.value = true
    let data = await fetch("https://fakerestapi.azurewebsites.net/api/v1/Books")
    let json = await data.json()
    home.value = json
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