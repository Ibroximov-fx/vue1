<template>
  <SubmitForm></SubmitForm>
  <DeleteProduct></DeleteProduct>
  <Computed></Computed>
</template>
<script>
import SubmitForm from './optionsVue/submitForm.vue';
import DeleteProduct from "./optionsVue/deleteProduct.vue";
import Computed from "./optionsVue/computed.vue";
export default {
  components: {
    Computed,
    DeleteProduct,
    SubmitForm,

  }
}
</script>