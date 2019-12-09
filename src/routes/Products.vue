<template>
  <div>
    <Nav
      :changeRoute="changeRoute"
      :toggleDropdown="toggleDropdown"
      :navDropdown="navDropdown"
    />
    <div class="products">
      <Loading v-if="productsLoading" />
      <div
        v-else-if="products && products.length !== 0"
        v-for="product in products"
        :key="`${product['department']['S']} ${product['productPath']['S']}`"
      >
        <p>Product: {{ product["name"]["S"] }}</p>
        <p>Breadcrumb: {{ product["productPath"]["S"] }}</p>
      </div>
      <p v-else-if="products.length === 0" class="products__no-products">
        No products match your request.
      </p>
    </div>
  </div>
</template>

<script>
import Nav from "../components/nav/Nav";
import Loading from "../components/Loading";

export default {
  props: ["products", "productsLoading", "changeRoute", "toggleDropdown", "navDropdown"],
  components: { Nav, Loading }
};
</script>

<style scoped>
.products__no-products {
  text-align: center;
  margin-top: 50px;
}
</style>
