<template>
  <div>
    <div class="nav" :class="{ 'z-1': zIndex === 1 }">
      <div class="nav__content-container">
        <h1 class="nav__logo sitebrand">
          <router-link to="/" class="nav__logo-txt sitebrand">
            Brand
          </router-link>
        </h1>
        <div @mouseleave="toggleDropdown">
          <NavCategories
            :toggleDropdown="toggleDropdown"
            :navDropdown="navDropdown"
            :navData="navData"
            :getProducts="getProducts"
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
            :navDropdown="navDropdown"
            :getProducts="getProducts"
            :navData="navData"
          />
          <DropdownWomen
            :navDropdown="navDropdown"
            :getProducts="getProducts"
            :navData="navData"
          />
          <DropdownBoys
            :navDropdown="navDropdown"
            :getProducts="getProducts"
            :navData="navData"
          />
          <DropdownGirls
            :navDropdown="navDropdown"
            :getProducts="getProducts"
            :navData="navData"
          />
        </div>
      </div>
    </div>
    <div class="nav-sm">
      <div>
        <h1 class="nav__logo-sm sitebrand">
          <router-link to="/" class="nav__logo-txt-sm sitebrand">
            Brand
          </router-link>
        </h1>
      </div>
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          class="nav-sm__menu"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" fill="#aaa" />
        </svg>
      </div>
    </div>
    <div class="nav-sm__underlay">
      hello
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
  props: ["toggleDropdown", "navDropdown", "getProducts", "zIndex", "navData"],
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
.nav {
  position: relative;
  z-index: 0;
}
.nav.z-1 {
  z-index: 1;
}
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

.nav-sm {
  display: none;
  justify-content: space-between;
  align-items: center;
  padding: 4px 15px;
  border-bottom: 1px solid #bbb;
  position: fixed;
  top: 0;
  width: 100%;
  box-sizing: border-box;
  background-color: #f5f5f5;
}
.nav__logo-sm {
  font-size: 1.8em;
  margin: 0;
}
.nav__logo-txt-sm {
  text-decoration: none;
}
.nav-sm__menu {
  cursor: pointer;
  border-radius: 3px;
  border: 1px solid #ccc;
  padding: 2px;
  transition: background-color 0.2s;
}
.nav-sm__menu:hover {
  background-color: #ddd;
}
.nav-sm__underlay {
  height: 47px;
  display: none;
}

@media (max-width: 700px) {
  .nav {
    display: none;
  }
  .nav-sm {
    display: flex;
  }
  .nav-sm__underlay {
    display: block;
  }
}
</style>
