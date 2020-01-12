<template>
  <div id="app">
    <router-view
      :products="products"
      :productsLoading="productsLoading"
      :getProducts="getProducts"
      :product="product"
      :productLoading="productLoading"
      :getProduct="getProduct"
      :reRoute="reRoute"
      :authorizingUser="authorizingUser"
      :toggleDropdown="toggleDropdown"
      :navDropdown="navDropdown"
      :signInFormEdit="signInFormEdit"
      :signInFormSubmit="signInFormSubmit"
      :signInForm="signInForm"
      :adminSubRoute="adminSubRoute"
      :addProductForm="addProductForm"
      :apfPageOneSubmit="apfPageOneSubmit"
      :apfPageTwoSubmit="apfPageTwoSubmit"
      :apfPageThreeSubmit="apfPageThreeSubmit"
      :apfPageFourSubmit="apfPageFourSubmit"
      :editApfOptionsLength="editApfOptionsLength"
      :navigateApf="navigateApf"
      :editApfMainImgsLength="editApfMainImgsLength"
      :apfImgUpload="apfImgUpload"
      :apfFileInputDragOn="apfFileInputDragOn"
      :apfDeleteImage="apfDeleteImage"
      :resetDataValues="resetDataValues"
      :checkAuthToken="checkAuthToken"
      :editProduct="editProduct"
      :editProductForm="editProductForm"
      :epfEditAttribute="epfEditAttribute"
    />
  </div>
</template>

<script>
/*
big todo:
DONE -Add price to apf
DONE -add date created to products in db
DONE -Check tags and sale on apf
-Create images for uploading.
DONE-Upload new prods, remove olds
DONE? -Fix sign in form - Done? works sometimes?
DONE -Create token check on admin routes
DONE-Fix 'space in color' bug on APF
-Design product page
-Design products page
-Design home page
-tokens often invalid. why?
DONE-Redirect unsuccessful user auths
- make 'brand' a btn on admin nav that goes to app homepage
-Notification on unsuccessful user auths?
-Redirect random admin routes to "admin/products"?
-Make apf go to top of page when user goes to next section of form
-Make decision on better showing user form errors on apf submission
-nav category click toggle dropdown
-Design checkout process, integrate stripe
DONE -Create admin/products call
-Design admin/products page
-Remove unused code (such as reroute?)
-not getting all products when first on products route then fetches. /products/men/tops/button-downs > /products/men
-Make site fully responsive
-will need to make transaction table?
-secondary index for sale/new/etc.?
DONE -actually redirect when token is bad

OTHER
- delay on nav drops
- get rid of hashtag in url?
- go to part of form where error exists after validation
- delete git from sub-functions in lambda folder
- install npm in lambda folder?

*/
import toggleDropdown from "./functions/toggleDropdown";
import reRoute from "./functions/reRoute";
import signInFormEdit from "./functions/sign-in-form/signInFormEdit";
import signInFormSubmit from "./functions/sign-in-form/signInFormSubmit";
import apfPageOneSubmit from "./functions/add-product-form/apfPageOneSubmit";
import apfPageTwoSubmit from "./functions/add-product-form/apfPageTwoSubmit";
import apfPageThreeSubmit from "./functions/add-product-form/apfPageThreeSubmit";
import apfPageFourSubmit from "./functions/add-product-form/apfPageFourSubmit";
import editApfOptionsLength from "./functions/add-product-form/editApfOptionsLength";
import navigateApf from "./functions/add-product-form/navigateApf";
import editApfMainImgsLength from "./functions/add-product-form/editApfMainImgsLength";
import apfImgUpload from "./functions/add-product-form/apfImgUpload";
import apfFileInputDragOn from "./functions/add-product-form/apfFileInputDragOn";
import apfDeleteImage from "./functions/add-product-form/apfDeleteImage";
import epfEditAttribute from "./functions/edit-product-form/epfEditAttribute";
import getProducts from "./functions/getProducts";
import getProduct from "./functions/getProduct";
import checkAuthToken from "./functions/checkAuthToken";
import resetDataValues from "./functions/resetDataValues";
import data from "./data";
import { addProductFormDefault } from "./appDataDefaults";

const cloneDeep = require("clone-deep");

export default {
  name: "App",
  data,
  methods: {
    editApfOptionsLength,
    navigateApf,
    editApfMainImgsLength,
    apfImgUpload,
    apfFileInputDragOn,
    apfDeleteImage,
    apfPageOneSubmit,
    apfPageTwoSubmit,
    apfPageThreeSubmit,
    apfPageFourSubmit,
    signInFormEdit,
    signInFormSubmit,
    toggleDropdown,
    reRoute,
    resetDataValues,
    getProducts,
    getProduct,
    checkAuthToken,
    editProduct: function(productPath) {
      console.log("editing product");
      console.log(productPath);

      this.getProduct(productPath);

      // let productPathDbFormat = productPath

      // for (var i = 0; i < this.products.length; i++) {
      //   if (this.products[i].productPath["S"] === productPath) {
      //     this.product = cloneDeep(this.products[i]);
      //     break;
      //   }
      // }
    },
    epfEditAttribute
  }
};
</script>

<style>
body {
  margin: 0;
  background-color: #f5f5f5;
}
#app {
  font-family: "Lato", sans-serif;
  color: #333333;
}
.sitebrand {
  font-family: "Calistoga", cursive;
  color: #313190;
}
</style>
