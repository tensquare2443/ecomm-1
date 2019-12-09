<template>
  <h3 class="nav__dropdown-title">
    <span @click="changeRoute(route)" class="nav__dropdown-title-link">
      {{ btnTxt }}
    </span>
  </h3>
</template>

<script>
export default {
  props: ["changeRoute", "route", "btnTxt"]
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
}
.nav__dropdown-title-link:hover {
  color: #313190;
}
</style>
