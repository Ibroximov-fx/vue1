<template>
  <SubmitForm></SubmitForm>
  <DeleteProduct></DeleteProduct>
  <Computed></Computed>
</template>
<script>
import SubmitForm from './submitForm.vue';
import DeleteProduct from "./deleteProduct.vue";
import Computed from "./computed.vue";
export default {
  components: {
    Computed,
    DeleteProduct,
    SubmitForm,

  }
}
</script>