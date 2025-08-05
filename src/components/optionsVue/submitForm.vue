<template>
<form class="flex gap-4 items-center" @submit.prevent="submit">
  <input type="text" class="border rounded-[10px] border-green-500 mt-5 py-3 px-5 hover:border-yellow-400" placeholder="create name" v-model="name">
  <input type="email" class="border rounded-[10px] border-green-500 mt-5 py-3 px-5 hover:border-yellow-400" placeholder="create email" v-model="email">
  <button class="px-2 py-1 border border-[#000000] rounded-[10px] mt-5 cursor-pointer hover:bg-[#000000] hover:text-[#FFFFFF]">click</button>
</form>
</template>
<script>
export default {
  data() {
return{
  name: "",
  email: ""
}
  },
  methods:{
    submit() {
      console.log(this.name)
      console.log(this.email)

      this.name = ""
      this.email = ""
    }
  }
}
</script>
