<template>
  <div id="app">
    <router-view
      :products="products"
      :productsLoading="productsLoading"
      :changeRoute="changeRoute"
      :toggleDropdown="toggleDropdown"
      :navDropdown="navDropdown"
      :signInFormEdit="signInFormEdit"
      :signInFormSubmit="signInFormSubmit"
      :signInForm="signInForm"
      :adminSubRoute="adminSubRoute"
      :addProductForm="addProductForm"
      :addProductFormPageOneSubmit="addProductFormPageOneSubmit"
      :addProductFormPageTwoSubmit="addProductFormPageTwoSubmit"
      :editProductFormOptions="editProductFormOptions"
      :navigateAddProductForm="navigateAddProductForm"
    />
  </div>
</template>

<script>
/*
todo:
- delay on nav drops
- get rid of hashtag in url
- store images (S3?)
  - before this, should figure out programmatic put request
    - before this, should create (some of) admin interface for uploading products
- user auth on all admin area pages...
- add price attribute to db products
- sale, new btns on nav drops (secondary indexes?)
- admin area
  - add product

- delete git from sub-functions in lambda folder
- install npm in lambda folder?

- on invalid addProductForm submit, 
*/
import toggleDropdown from "./functions/toggleDropdown";
import changeRoute from "./functions/changeRoute";
import signInFormEdit from "./functions/sign-in-form/signInFormEdit";
import signInFormSubmit from "./functions/sign-in-form/signInFormSubmit";
import addProductFormPageOneSubmit from "./functions/add-product-form/addProductFormPageOneSubmit";
import addProductFormPageTwoSubmit from "./functions/add-product-form/addProductFormPageTwoSubmit";

export default {
  name: "App",
  data() {
    return {
      products: [],
      productsLoading: false,
      navDropdown: false,
      user: false,
      signInForm: {
        username: {
          value: "",
          validity: ""
        },
        password: {
          value: "",
          validity: ""
        },
        formInvalidity: false,
        submitting: false
      },
      addProductForm: {
        page: 1,
        name: {
          value: "",
          invalidity: false
        },
        location: {
          value: "",
          invalidity: false
        },
        options: [
          {
            name: {
              value: "Color",
              invalidity: false
            },
            values: {
              value: "",
              invalidity: false
            }
          }
        ],
        sale: false,
        saleDetails: {
          start: {
            value: "",
            invalidity: false
          },
          end: {
            value: "",
            invalidity: false
          }
        },
        tags: {
          value: "",
          invalidity: false
        },
        optionComboDetails: false
      },
      adminSubRoute: false
    };
  },
  methods: {
    editProductFormOptions: function(toDo) {
      if (toDo === "add") {
        this.addProductForm.options.push({
          name: { value: "", invalidity: false },
          values: { value: "", invalidity: false }
        });
      } else if (toDo === "remove") {
        this.addProductForm.options.pop();
      }
    },
    navigateAddProductForm: function(page) {
      this.addProductForm.page = page;
    },
    addProductFormPageOneSubmit,
    addProductFormPageTwoSubmit,
    signInFormEdit,
    signInFormSubmit,
    toggleDropdown,
    changeRoute
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
