<template>
  <p class="nav__dropdown-txt">
    <span @click="initiateGetProducts(route)" class="nav__dropdown-txt-link">
      {{ btnTxt }}
    </span>
  </p>
</template>

<script>
import initiateGetProducts from "../../functions/initiateGetProducts";

export default {
  props: ["reRoute", "route", "btnTxt", "getProducts"],
  methods: { initiateGetProducts }
};
</script>

<style scoped>
.nav__dropdown-txt {
  margin-top: 6px;
  margin-bottom: 6px;
}
.nav__dropdown-txt-link {
  cursor: pointer;
  text-decoration: none;
  color: #333;
}
.nav__dropdown-txt-link:hover {
  color: #313190;
  text-decoration: underline;
}
</style>
