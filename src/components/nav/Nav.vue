<template>
  <div class="nav" style="position: relative;">
    <div class="nav__content-container">
      <h1 class="nav__logo sitebrand">
        <span @click="changeRoute('/')" class="nav__logo-txt">Brand</span>
      </h1>
      <div @mouseleave="toggleDropdown">
        <NavCategories
          :changeRoute="changeRoute"
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
        <DropdownMen :changeRoute="changeRoute" :navDropdown="navDropdown" />
        <DropdownWomen :changeRoute="changeRoute" :navDropdown="navDropdown" />
        <DropdownBoys :changeRoute="changeRoute" :navDropdown="navDropdown" />
        <DropdownGirls :changeRoute="changeRoute" :navDropdown="navDropdown" />
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
  props: ["changeRoute", "toggleDropdown", "navDropdown"],
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
