<template>
  <AdminWrapper :adminSubRoute="adminSubRoute" :changeRoute="changeRoute">
    <AddProductFormPageOne
      v-if="addProductForm.page === 1"
      :addProductForm="addProductForm"
      :addProductFormPageOneSubmit="addProductFormPageOneSubmit"
      :editProductFormOptions="editProductFormOptions"
    />
    <AddProductFormPageTwo
      v-else-if="addProductForm.page === 2"
      :addProductForm="addProductForm"
      :addProductFormPageTwoSubmit="addProductFormPageTwoSubmit"
      :navigateAddProductForm="navigateAddProductForm"
    />
    <AddProductFormPageThree
      v-else-if="addProductForm.page === 3"
      :addProductForm="addProductForm"
      :navigateAddProductForm="navigateAddProductForm"
    />
  </AdminWrapper>
</template>

<script>
import AdminWrapper from "../components/AdminWrapper";
import AddProductFormPageOne from "../components/AddProductFormPageOne";
import AddProductFormPageTwo from "../components/AddProductFormPageTwo";
import AddProductFormPageThree from "../components/AddProductFormPageThree";

export default {
  components: {
    AdminWrapper,
    AddProductFormPageOne,
    AddProductFormPageTwo,
    AddProductFormPageThree
  },
  props: [
    "adminSubRoute",
    "changeRoute",
    "addProductForm",
    "addProductFormPageOneSubmit",
    "addProductFormPageTwoSubmit",
    "editProductFormOptions",
    "navigateAddProductForm"
  ]
};
</script>
