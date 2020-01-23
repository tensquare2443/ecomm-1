<template>
  <div>
    <Nav
      :toggleDropdown="toggleDropdown"
      :navDropdown="navDropdown"
      :getProducts="getProducts"
      :setNavData="setNavData"
      :navData="navData"
    />
    <div class="products">
      <ProductsSidebarWrapper
        :getProducts="getProducts"
        :department="$route.path.split('/')[2]"
      />
      <div class="content">
        <p class="breadcrumbs">
          <span v-for="(link, index) in getBreadcrumbLinks(this.$route.path)">
            <span v-if="index !== 0">{{ " > " }}</span>
            <span
              @click="initiateGetProducts(`/products/${link[0]}`)"
              class="breadcrumbs__link"
              >{{ link[1] }}</span
            >
          </span>
        </p>
        <Loading v-if="productsLoading" :zIndex="'neg'" />
        <div
          v-else-if="products && products.length !== 0"
          class="products-listed"
        >
          <div
            v-for="product in products"
            :key="
              `${product['department']['S']} ${product['productPath']['S']}`
            "
            class="product"
          >
            <router-link
              :to="formatProductPagePath(product['productPath']['S'])"
            >
              <img
                :src="getProductMainImgUrl(product)"
                alt=""
                class="product__main-img"
              />
            </router-link>
            <div class="product__thumbnails">
              <div
                v-for="(colorImgs, colorImgsI) in product.images['L']"
                :key="colorImgsI"
                class="product__thumbnail-container"
              >
                <img
                  @click="changeDisplayedProductColor"
                  :src="getThumbnailUrl(colorImgs)"
                  :productpath="product.productPath['S']"
                  :color="colorImgs['M'].color['S']"
                  :class="{
                    'displayed-color':
                      productsData[product.productPath['S']].selectedColor ===
                      colorImgs['M'].color['S']
                  }"
                  class="product__thumbnail"
                  alt="tn"
                />
              </div>
            </div>
            <p class="product__name-txt">
              <router-link
                :to="formatProductPagePath(product['productPath']['S'])"
                class="product__name-link"
                >{{ product["name"]["S"] }}</router-link
              >
            </p>
            <p class="product__price-txt">${{ product.price["N"] }}</p>
          </div>
        </div>
        <p v-else-if="products.length === 0" class="no-products">
          No products match your request.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import Nav from "../components/nav/Nav";
import Loading from "../components/Loading";
import ProductsSidebarWrapper from "../components/ProductsSidebarWrapper";
import initiateGetProducts from "../functions/initiateGetProducts";
import {
  getBreadcrumbLinks,
  getProductMainImgUrl,
  getThumbnailUrl,
  formatProductPagePath,
  getProductId,
  getProductPath
} from "../functions/general-helper-functions";

export default {
  props: [
    "products",
    "productsData",
    "productsLoading",
    "toggleDropdown",
    "navDropdown",
    "getProducts",
    "navData",
    "setNavData",
    "changeDisplayedProductColor"
  ],
  components: { Nav, Loading, ProductsSidebarWrapper },
  mounted() {
    // console.log("getting products on mount");
    this.getProducts(this.$route.path, "update productsData");
  },
  methods: {
    initiateGetProducts,
    getProductMainImgUrl,
    getThumbnailUrl,
    formatProductPagePath,
    getProductId,
    getProductPath,
    getBreadcrumbLinks
  }
};
</script>

<style scoped>
.breadcrumbs__link {
  text-decoration: none;
  color: #333;
  cursor: pointer;
}
.breadcrumbs__link:hover {
  text-decoration: underline;
}
.products {
  width: 1100px;
  max-width: 100%;
  margin: auto;
  display: flex;
  padding-left: 15px;
  padding-right: 15px;
  box-sizing: border-box;
}
.content {
  width: 100%;
  padding-left: 15px;
}
.products-listed {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 15px;
}
.product {
  box-sizing: border-box;
}
.product__main-img {
  max-width: 100%;
}
.no-products {
  text-align: center;
  margin-top: 50px;
}
.product__name-txt {
  text-align: center;
  margin: 3px 0;
}
.product__name-link {
  text-decoration: none;
  color: #333;
  cursor: pointer;
}
.product__name-link:hover {
  text-decoration: underline;
}
.product__price-txt {
  text-align: center;
  margin-top: 3px;
}
.product__thumbnails {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 15px;
  margin-bottom: 10px;
}
.product__thumbnail-container {
  flex: 0 0 34px;
  padding: 1px;
}
.product__thumbnail {
  width: 100%;
  cursor: pointer;
  border: 1px solid transparent;
  box-sizing: border-box;
  border-radius: 2px;
}
.product__thumbnail.displayed-color {
  border: 1px solid #333;
}

@media (max-width: 860px) {
  .products-listed {
    grid-template-columns: 1fr 1fr;
  }
}
@media (max-width: 700px) {
  .sidebar {
    display: none;
  }
  .content {
    padding-left: 0;
  }
}
@media (max-width: 400px) {
  .products-listed {
    grid-template-columns: 1fr;
  }
}
</style>
