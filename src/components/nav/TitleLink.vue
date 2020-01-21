<template>
  <h3 class="nav__dropdown-title">
    <span @click="initiateGetProducts(route)" class="nav__dropdown-title-link">
      {{ btnTxt }}
    </span>
  </h3>
</template>

<script>
import initiateGetProducts from "../../functions/initiateGetProducts";

export default {
  props: ["route", "btnTxt", "getProducts"],
  methods: { initiateGetProducts }
};
</script>

<style scoped>
.nav__dropdown-title {
  border-bottom: 1px solid #ccc;
  padding-bottom: 8px;
  margin-bottom: 8px;
}
.nav__dropdown-title-link {
  cursor: pointer;
  text-decoration: none;
  color: #333;
}
.nav__dropdown-title-link:hover {
  color: #313190;
}
</style>
