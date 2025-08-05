<template>
  <div class="p-8">
    <!-- 3 ustunli grid -->
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      <div
          v-for="(fruit, index) in fruits"
          :key="index"
          class="bg-white rounded-2xl shadow-lg p-4 text-center"
      >
        <img :src="fruit.img" alt="fruit" class="w-full h-40 object-cover rounded-xl mb-4" />
        <p class="text-lg font-semibold">{{ fruit.name }}</p>
        <p class="text-gray-600">{{ fruit.cash }}</p>
        <p class="text-gray-500 text-sm">{{ fruit.from }}</p>

        <!-- Delete tugmasi -->
        <button
            @click="deleteFruit(index)"
            class="mt-4 px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg transition duration-300"
        >
          Delete
        </button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      fruits:[
        {
          img:"https://media.post.rvohealth.io/wp-content/uploads/2021/05/apples-1200x628-facebook.jpg",
          name:"apple",
          cash:"1kg 10000UZS",
          from:"tashkent"
        },
        {
          img:"https://cdn.pixabay.com/photo/2017/05/28/14/46/avocado-2351191_1280.jpg",
          name:"avakado",
          cash:"1kg 50000UZS",
          from:"madakaskar"
        }
      ]
    }
  },
  methods:{
      deleteFruit(index) {
        this.fruits.splice(index, 1);
      }
    }
}
</script>