<template>
  <div>
    <AdminWrapper :editProductForm="editProductForm">
      <Loading v-if="authorizingUser || products.length === 0" />
      <div v-else class="content">
        <h1 class="title">My Products</h1>
        <div class="products-table">
          <div class="table-header divider">
            <div class="table-txt-container">
              <p class="table-txt header-txt">Name</p>
            </div>
            <div class="table-txt-container">
              <p class="table-txt header-txt">Department</p>
            </div>
            <div class="table-txt-container">
              <p class="table-txt header-txt">Path</p>
            </div>
            <div class="table-txt-container">
              <p class="table-txt header-txt">Created</p>
            </div>
            <!-- <div class="table-txt-container--price"> -->
            <div class="table-txt-container">
              <p class="table-txt header-txt product-price-txt">Price</p>
            </div>
            <div class="table-txt-container">
              <p class="table-txt header-txt">&nbsp;</p>
            </div>
          </div>
          <div
            v-for="(product, i) in products"
            :class="{ divider: i < products.length - 1 }"
            :key="product.productPath['S']"
            class="table-row"
          >
            <div class="table-txt-container">
              <p class="table-txt">
                {{ product.name["S"] }}
                <span class="product-path-sm">
                  <br>{{ getPath(product.productPath["S"]) }}
                </span>
              </p>
            </div>
            <div class="table-txt-container">
              <p class="table-txt">
                {{ getDepartment(product.productPath["S"]) }}
              </p>
            </div>
            <div class="table-txt-container">
              <p class="table-txt">{{ getPath(product.productPath["S"]) }}</p>
            </div>
            <div class="table-txt-container">
              <p class="table-txt">
                {{ getCreationDate(+product.createdAt["N"]) }}
              </p>
            </div>
            <!-- <div class="table-txt-container--price"> -->
            <div class="table-txt-container">
              <p class="table-txt product-price-txt">
                ${{ product.price["N"] }}
              </p>
            </div>
            <div class="edit-product-symbol-container">
              <router-link
                :to="
                  `/admin/product/${formatProductPath(
                    product.productPath['S']
                  )}`
                "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  class="edit-product-symbol"
                >
                  <path
                    d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"
                    fill="#bbb"
                  />
                  <path d="M0 0h24v24H0z" fill="none" />
                </svg>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </AdminWrapper>
  </div>
</template>

<script>
import AdminNav from "../components/AdminNav";
import AdminSidebar from "../components/AdminSidebar";
import AdminWrapper from "../components/AdminWrapper";
import Loading from "../components/Loading";

import {
  getDepartment,
  getPath,
  getCreationDate,
  getProductId,
  formatProductPath
} from "../functions/general-helper-functions";

export default {
  props: [
    "reRoute",
    "checkAuthToken",
    "authorizingUser",
    "getProducts",
    "products",
    "resetDataValues",
    "editProductForm"
  ],
  components: {
    AdminNav,
    AdminSidebar,
    AdminWrapper,
    Loading
  },
  methods: {
    getDepartment,
    getPath,
    getCreationDate,
    getProductId,
    formatProductPath
  },
  created() {
    if (this.$route.path !== "/admin/products") {
      this.$router.push("/admin/products");
    }

    this.checkAuthToken();
    this.getProducts();
  },
  mounted() {
    document.querySelector(".admin__content").scrollTop = 0;
  },
  beforeDestroy() {
    this.resetDataValues(["products"]);
  }
};
</script>

<style scoped>
.content {
  padding-left: 15px;
  padding-right: 15px;
}
.title {
  text-align: center;
}
.products-table {
  width: 100%;
  max-width: 1000px;
  display: block;
  border: 2px solid #ddd;
  border-radius: 3px;
  box-sizing: border-box;
  margin: auto auto 30px auto;
  padding-left: 15px;
  padding-right: 15px;
}
.table-header,
.table-row {
  display: grid;
  grid-template-columns: 15fr 9fr 15fr 6fr 4fr 3fr;
  grid-gap: 5px;
}
.divider {
  border-bottom: 1px solid #ddd;
}
.header-txt {
  font-weight: bold;
}
.table-txt-container {
  display: flex;
  align-items: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.table-txt-container--price {
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
.product-price-txt {
  text-align: right;
}
.edit-product-symbol-container {
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
.edit-product-symbol {
  cursor: pointer;
  border-radius: 3px;
  transition: all 0.1s;
}
.edit-product-symbol:hover {
  background-color: #ddd;
}
.product-path-sm {
  display: none;
}

@media (max-width: 1000px) {
  .table-header,
  .table-row {
    grid-template-columns: 15fr 0 15fr 7fr 5fr 3fr;
  }
}
@media (max-width: 700px) {
  .table-header,
  .table-row {
    grid-template-columns: 5fr 0 5fr 0 2fr 1fr;
  }
  .content {
    padding-left: 0;
    padding-right: 0;
  }
}
@media (max-width: 600px) {
  .table-header,
  .table-row {
    grid-template-columns: 5fr 0 5fr 0 0 1fr;
  }
}
@media (max-width: 600px) {
  .table-header,
  .table-row {
    grid-template-columns: 5fr 0 0 0 0 1fr;
  }
  .product-path-sm {
    display: inline;
  }
}
</style>
