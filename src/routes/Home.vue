<template>
  <div>
    <Nav
      :toggleDropdown="toggleDropdown"
      :navDropdown="navDropdown"
      :getProducts="getProducts"
      :setNavData="setNavData"
      :navData="navData"
    />
    <div class="home">
      <h2 style="text-align: center;">App Homepage</h2>
      <p style="text-align: center;">Deal if exists</p>
      <p style="text-align: center;">Carousel/Hero Image</p>
      <p style="text-align: center;">Categories I</p>
      <p style="text-align: center;">Categories II</p>
      <p style="text-align: center;">Categories III</p>
    </div>
  </div>
</template>

<script>
import Nav from "../components/nav/Nav";

export default {
  name: "Home",
  props: [
    "toggleDropdown",
    "navDropdown",
    "getProducts",
    "navData",
    "setNavData"
  ],
  components: {
    Nav
  }
};
</script>

<style>
.home {
  text-align: center;
}
</style>
