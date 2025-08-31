<template>
  <div class="max-w-[1200px] mx-auto ">
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
      <button v-if="all" @click="submitForm"
              class=" mt-3 bg-green-600 hover:bg-green-700 text-white font-semibold px-5 py-2 rounded-xl shadow-md transition duration-300">add product</button>
      <button v-else @click="updateBtn()"
              class=" mt-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 py-2 rounded-xl shadow-md transition duration-300">update product</button>
    </div>
    </form>


    <div class="grid grid-cols-3">
      <p v-if="loading">loading...</p>
      <div class="border borer-grey-400 max-w-[300px] border-[2px] rounded-[20px] my-10" v-else
           v-for="products in data.results"
           :key="products.id">
        <img class="w-[300px] h-[300px] my-2 " :src="products.image_url" alt="image_url">
        <div class="pl-2">
          <p class="text-xl font-bold text-gray-800">
            {{ products.title }}
          </p>

          <p class="text-gray-600 text-sm mt-1">
            {{ products.description }}
          </p>

          <p class="text-gray-500 italic mt-2">
            Category: {{ products.category }}
          </p>

          <p class="mt-1 font-medium text-green-600 pb-2">
            Condition: {{ products.condition }}
          </p>
        </div>
        <div class="flex justify-between">
          <button @click="deleteBtn(products.id)" class="bg-red-600 w-[80px] ml-2 mb-2 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300">
            delete
          </button>
          <button @click="editBtn(products.id)" class="bg-yellow-600 w-[80px] mr-2 mb-2 hover:bg-yellow-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300">
            edit
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import {onMounted, ref} from "vue";

let loading = ref(true);
let data = ref([]);
let title = ref("");
let description = ref("");
let image_url = ref("");
let category = ref("");
let condition = ref("");
let all = ref(true)
let selectId = ref(null)

async function getData() {
  try {
    loading.value = true;
    let fetchData = await fetch("https://effective-mobile.duckdns.org/api/ads/")
    let json = await fetchData.json()
    data.value = json
  } catch (err) {
    console.log(err)
  } finally {
    loading.value = false;
  }
}
async function postData() {
  try {
  let fetchPost = await fetch("https://effective-mobile.duckdns.org/api/ads/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      category: category.value,
      condition: condition.value,
      title: title.value,
      description: description.value,
      image_url: image_url.value,
    })
  })
  let post = await fetchPost.json();
  if (post.ok){
   alert("succes your post")
    title.value = ""
    description.value = ""
    image_url.value = ""
    category.value = ""
    condition.value = ""
    getData()
  }else {
    alert("error your post")
  }
  }catch(err) {
    console.log(err)
  }
}
async function deleteData(id) {
  try {
    let fetchDelete = await fetch(`https://effective-mobile.duckdns.org/api/ads/${id}/`, {
      method: "DELETE",
    })
    if (fetchDelete.ok) {
      alert("succes your delete")
      getData()
    }else {
      alert("error your delete")
    }
  }catch (error) {
    console.log(error)
  }
}
 async function updateData(id) {
  try {
    let fetchUpdate = await fetch(`https://effective-mobile.duckdns.org/api/ads/${id}/`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        category: category.value,
        condition: condition.value,
        title: title.value,
        description: description.value,
        image_url: image_url.value,
      })
    })
    if (fetchUpdate.ok) {
      alert("succes your update")
      selectId.value = null
      getData()
    }else {
      alert("error your update")
    }
  }catch(err) {
    console.log(err)
  }
 }
function submitForm(e) {
  e.preventDefault();
  postData()
}
function deleteBtn(id) {
deleteData(id)
}
function editBtn(id) {
  let product = data.value.results.find(item =>{
    return item.id === id
  })
  if (product) {
    title.value = product.title;
    description.value = product.description;
    image_url.value = product.image_url;
    category.value = product.category;
    condition.value = product.condition;
    selectId.value = id;
  }
  all.value = false
}
function updateBtn() {
if(selectId.value){
  updateData(selectId.value)
}
all.value = true
}
onMounted(() => {
  getData()
})
</script>

