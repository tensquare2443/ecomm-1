<template>
  <div>
    <AdminWrapper :adminSubRoute="adminSubRoute" :reRoute="reRoute">
      <Loading v-if="authorizingUser" />
      <div v-else>
        <AddProductFormPageOne
          v-if="addProductForm.page === 1"
          :addProductForm="addProductForm"
          :apfPageOneSubmit="apfPageOneSubmit"
          :editApfOptionsLength="editApfOptionsLength"
        />
        <AddProductFormPageTwo
          v-else-if="addProductForm.page === 2"
          :addProductForm="addProductForm"
          :apfPageTwoSubmit="apfPageTwoSubmit"
          :navigateApf="navigateApf"
        />
        <AddProductFormPageThree
          v-else-if="addProductForm.page === 3"
          :addProductForm="addProductForm"
          :apfPageThreeSubmit="apfPageThreeSubmit"
          :navigateApf="navigateApf"
          :editApfMainImgsLength="editApfMainImgsLength"
          :apfImgUpload="apfImgUpload"
          :apfFileInputDragOn="apfFileInputDragOn"
          :apfDeleteImage="apfDeleteImage"
        />
        <AddProductFormPageFour
          v-else-if="addProductForm.page === 4"
          :addProductForm="addProductForm"
          :apfPageFourSubmit="apfPageFourSubmit"
          :navigateApf="navigateApf"
        />
      </div>
    </AdminWrapper>
  </div>
</template>

<script>
import AdminWrapper from "../components/AdminWrapper";
import AddProductFormPageOne from "../components/add-product-form/AddProductFormPageOne";
import AddProductFormPageTwo from "../components/add-product-form/AddProductFormPageTwo";
import AddProductFormPageThree from "../components/add-product-form/AddProductFormPageThree";
import AddProductFormPageFour from "../components/add-product-form/AddProductFormPageFour";
import Loading from "../components/Loading";

export default {
  components: {
    AdminWrapper,
    AddProductFormPageOne,
    AddProductFormPageTwo,
    AddProductFormPageThree,
    AddProductFormPageFour,
    Loading
  },
  props: [
    "adminSubRoute",
    "reRoute",
    "addProductForm",
    "apfPageOneSubmit",
    "apfPageTwoSubmit",
    "apfPageThreeSubmit",
    "apfPageFourSubmit",
    "editApfOptionsLength",
    "navigateApf",
    "editApfMainImgsLength",
    "apfImgUpload",
    "apfFileInputDragOn",
    "apfDeleteImage",
    "resetDataValues",
    "checkAuthToken",
    "authorizingUser"
  ],
  created() {
    console.log("admin add product created");
    this.checkAuthToken();
  },
  beforeDestroy() {
    console.log("beforeDestroy");
    this.resetDataValues(["addProductForm"]);
  }
};
</script>
