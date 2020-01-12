<template>
  <div>
    <Nav
      :reRoute="reRoute"
      :toggleDropdown="toggleDropdown"
      :navDropdown="navDropdown"
      :getProducts="getProducts"
    />
    <div class="product">
      <Loading v-if="productLoading" />
      <div v-else-if="product">
        <p>
          {{ product.name["S"] }}
        </p>
        <p>
          {{ product.productPath["S"] }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import Nav from "../components/nav/Nav";
import Loading from "../components/Loading";

export default {
  props: [
    "reRoute",
    "toggleDropdown",
    "navDropdown",
    "getProducts",
    "getProduct",
    "product",
    "productLoading"
  ],
  components: { Nav, Loading },
  mounted() {
    console.log("getting product on mount");
    this.getProduct(this.$route.path);
  }
};
</script>
