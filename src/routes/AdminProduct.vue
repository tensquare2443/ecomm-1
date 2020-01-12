<template>
  <div>
    <AdminWrapper :adminSubRoute="adminSubRoute" :reRoute="reRoute">
      <Loading v-if="authorizingUser || !product" />
      <EditProductMainForm
        v-else-if="!editProductForm.attributeEditing"
        :product="product"
        :editProductForm="editProductForm"
        :epfEditAttribute="epfEditAttribute"
      />
      <EditProductAttribute
        v-else
        :editProductForm="editProductForm"
        :epfEditAttribute="epfEditAttribute"
      />
    </AdminWrapper>
  </div>
</template>

<script>
/*
Edit Options
- name
  - can edit without affecting anything else
- productPath
  - will need to delete then replace entire item
- price
  - can edit without affecting anything else
- productSale
  - can edit without affecting anything else
- tags
  - can edit without affecting anything else
- createdAt
  - can edit without affecting anything else
  - is there a need? maybe make ordering of front-end products by createdAt, and make createdAt editable. call it "Release Date"?
- options
  - "inStock" of individual options
    - can edit without affecting anything else
- images
  - "ranking" of main images
    - can edit without affecting anything else

tricky parts:
- changing/adding/removing the images themselves
- changing/adding/removing the options and their values
*/

import EditProductAttribute from "../components/edit-product-form/EditProductAttribute";
import EditProductMainForm from "../components/edit-product-form/EditProductMainForm";
import AdminWrapper from "../components/AdminWrapper";
import Loading from "../components/Loading";

export default {
  props: [
    "reRoute",
    "adminSubRoute",
    "checkAuthToken",
    "authorizingUser",
    "editProduct",
    "product",
    "editProductForm",
    "epfEditAttribute"
  ],
  components: {
    AdminWrapper,
    Loading,
    EditProductMainForm,
    EditProductAttribute
  },
  created() {
    this.checkAuthToken();
    this.editProduct(this.$route.path);
  }
};
</script>
