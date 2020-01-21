<template>
  <div>
    <Nav
      :toggleDropdown="toggleDropdown"
      :navDropdown="navDropdown"
      :setNavData="setNavData"
      :navData="navData"
      :getProducts="getProducts"
    />
    <div>
      <h2 style="text-align: center;">Checkout Page</h2>
      <p style="text-align: center;">
        When Stripe is implemented, the checkout process will begin here.
      </p>
    </div>
  </div>
</template>

<script>
import Nav from "../components/nav/Nav";

export default {
  props: [
    "toggleDropdown",
    "navDropdown",
    "getProducts",
    "navData",
    "setNavData"
  ],
  components: { Nav }
};
</script>

<style scoped>
</style>