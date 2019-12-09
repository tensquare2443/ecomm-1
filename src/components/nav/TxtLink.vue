<template>
  <p class="nav__dropdown-txt">
    <span @click="changeRoute(route)" class="nav__dropdown-txt-link">
      {{ btnTxt }}
    </span>
  </p>
</template>

<script>
export default {
  props: ["changeRoute", "route", "btnTxt"]
}
</script>

<style scoped>
.nav__dropdown-txt {
  margin-top: 6px;
  margin-bottom: 6px;
}
.nav__dropdown-txt-link {
  cursor: pointer;
}
.nav__dropdown-txt-link:hover {
  color: #313190;
  text-decoration: underline;
}
</style>