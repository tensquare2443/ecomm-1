<template>
  <div class="nav" style="position: relative;">
    <div class="nav__content-container">
      <h1 class="nav__logo sitebrand">
        <router-link to="/" class="nav__logo-txt sitebrand">
          Brand
        </router-link>
      </h1>
      <div @mouseleave="toggleDropdown">
        <NavCategories
          :reRoute="reRoute"
          :toggleDropdown="toggleDropdown"
          :navDropdown="navDropdown"
        />
        <div
          class="nav__btn"
          :class="{ 'nav__btn-status': navDropdown === 'sale' }"
        >
          <h3 style="text-align: center;">Sale Dropdown</h3>
        </div>
        <div
          class="nav__btn"
          :class="{ 'nav__btn-status': navDropdown === 'new' }"
        >
          <h3 style="text-align: center;">New Arrivals Dropdown</h3>
        </div>
        <DropdownMen
          :reRoute="reRoute"
          :navDropdown="navDropdown"
          :getProducts="getProducts"
        />
        <DropdownWomen
          :reRoute="reRoute"
          :navDropdown="navDropdown"
          :getProducts="getProducts"
        />
        <DropdownBoys
          :reRoute="reRoute"
          :navDropdown="navDropdown"
          :getProducts="getProducts"
        />
        <DropdownGirls
          :reRoute="reRoute"
          :navDropdown="navDropdown"
          :getProducts="getProducts"
        />
      </div>
    </div>
  </div>
</template>

<script>
import NavCategories from "./Categories";
import DropdownMen from "./DropdownMen";
import DropdownWomen from "./DropdownWomen";
import DropdownBoys from "./DropdownBoys";
import DropdownGirls from "./DropdownGirls";

export default {
  props: ["reRoute", "toggleDropdown", "navDropdown", "getProducts"],
  components: {
    NavCategories,
    DropdownMen,
    DropdownWomen,
    DropdownBoys,
    DropdownGirls
  }
};
</script>

<style scoped>
.nav__content-container {
  border-bottom: 1px solid #aaa;
}
.nav__logo {
  font-size: 3em;
  text-align: center;
  margin-top: 0;
  margin-bottom: 0.4em;
  padding-top: 0.4em;
}
.nav__logo-txt {
  cursor: pointer;
  text-decoration: none;
}

.nav__btn {
  display: none;
  position: absolute;
  top: 100%;
  width: 100%;
  border-bottom: 1px solid #aaa;
  background-color: #f5f5f5;
}
.nav__btn-status {
  display: block;
}
</style>
