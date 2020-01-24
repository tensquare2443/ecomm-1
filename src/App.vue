<template>
  <div id="app" @click="setProductData">
    <router-link to="/cart" class="cart-link">
      <div v-if="cartData.products.length > 0 && !$route.path.includes('/admin')" class="cart">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            class="cart-btn"
          >
            <path
              d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"
              fill="black"
            />
            <path d="M0 0h24v24H0z" fill="none" />
          </svg>
        </div>
        <div>
          <p class="cart-txt">Cart</p>
        </div>
      </div>
    </router-link>
    <router-view
      :products="products"
      :productsData="productsData"
      :productsLoading="productsLoading"
      :changeDisplayedProductColor="changeDisplayedProductColor"
      :getProducts="getProducts"
      :product="product"
      :productData="productData"
      :productLoading="productLoading"
      :cartData="cartData"
      :setCartData="setCartData"
      :getProduct="getProduct"
      :setProductData="setProductData"
      :authorizingUser="authorizingUser"
      :toggleDropdown="toggleDropdown"
      :navData="navData"
      :setNavData="setNavData"
      :navDropdown="navDropdown"
      :signInFormEdit="signInFormEdit"
      :signInFormSubmit="signInFormSubmit"
      :signInForm="signInForm"
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
      :epfSubmitEdits="epfSubmitEdits"
      :epfCancelEdits="epfCancelEdits"
      :epfChangeDeleteStatus="epfChangeDeleteStatus"
    />
  </div>
</template>

<script>
/*
imgs
- size: 1040x1380
- bg: #e8e8e8, rgb(232,232,232)
default colors:
- light denim: 7285e4
- medium denim: 3b4eac
- dark denim: 343f70
- teal: 008080
- yellow: 9c9212
- navy blue: 000080
*/

/*
todo:
-add more products

other:
- delete git from sub-functions in lambda folder
- install npm in lambda folder?
*/
import toggleDropdown from "./functions/toggleDropdown";
import setNavData from "./functions/setNavData";
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
import epfSubmitEdits from "./functions/edit-product-form/epfSubmitEdits";
import epfCancelEdits from "./functions/edit-product-form/epfCancelEdits";
import epfChangeDeleteStatus from "./functions/edit-product-form/epfChangeDeleteStatus";
import changeDisplayedProductColor from "./functions/changeDisplayedProductColor";
import deleteProduct from "./functions/deleteProduct";
import editProduct from "./functions/editProduct";
import getProducts from "./functions/getProducts";
import getProduct from "./functions/getProduct";
import setProductData from "./functions/setProductData";
import setCartData from "./functions/setCartData";
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
    setNavData,
    toggleDropdown,
    resetDataValues,
    getProducts,
    getProduct,
    setProductData,
    setCartData,
    checkAuthToken,
    editProduct,
    epfEditAttribute,
    epfSubmitEdits,
    epfCancelEdits,
    epfChangeDeleteStatus,
    deleteProduct,
    changeDisplayedProductColor
  },
  mounted() {
    if (1 === 1) {

    } else {
      console.log(require("./afw"));
    }
    if (sessionStorage.ecommAppCartData) {
      this.cartData = JSON.parse(sessionStorage.ecommAppCartData);
    }
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
  position: relative;
}
.sitebrand {
  font-family: "Calistoga", cursive;
  color: #313190;
}
.brk-xl {
  display: none;
}
.cart-link {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 1;
}
.cart {
  background-color: #aaa;
  display: flex;
  align-items: center;
  padding: 6px 12px;
  border-bottom-left-radius: 6px;
  box-shadow: 0px 0px 5px #ccc;
  cursor: pointer;
  transition: background-color 0.2s;
}
.cart:hover {
  background-color: rgba(0, 0, 0, 0.32);
}
.cart-txt {
  margin: 0;
  padding-left: 3px;
  color: black;
}
@media (min-width: 932px) {
  .brk-xl {
    display: block;
  }
}

@media (max-width: 700px) {
  .cart {
    display: none;
  }
}
</style>
