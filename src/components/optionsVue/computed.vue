
<template>
    <div>
      <p>{{ fullName }}</p>
    </div>
</template>
<script>
export default {
  data() {
    return {
      firstName:"ahmad",
      lastName:"ibroximov",
      fullName:"0"
    }
  },
  methods:{
    addFullName(){
      this.fullName = this.firstName + " " + this.lastName;
    }
  },
  mounted() {
    this.addFullName()
  }
}
</script>