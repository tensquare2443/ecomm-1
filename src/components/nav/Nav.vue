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
          @click="setNavData('TOGGLE_NAV_SM_DROPDOWN')"
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
      <div :class="{ displayed: navData.dropdownSm }" class="nav-sm__dropdown">
        <router-link
          @click.native="setNavData('TOGGLE_NAV_SM_DROPDOWN')"
          class="nav-sm__cart-link"
          to="/cart"
        >
          <div class="nav-sm__dropdown-item">
            <p class="nav-sm__dropdown-item-txt">
              View Cart
            </p>
          </div>
        </router-link>
        <div class="products-dropdown">
          <div
            @click="setNavData('TOGGLE_NAV_SM_PRODUCTS_DROPDOWN')"
            class="nav-sm__products-dropdown-btn"
          >
            <div>
              <p class="nav-sm__products-dropdown-item-txt">
                Products
              </p>
            </div>
            <div class="arrow-logo-container">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"
                  fill="#333"
                />
                <path fill="none" d="M0 0h24v24H0V0z" />
              </svg>
            </div>
          </div>

          <div
            :class="{ displayed: navData.productsDropdownSm }"
            class="nav-sm__products-category-dropdown"
          >
            <div
              @click="
                setNavData('TOGGLE_NAV_SM_PRODUCTS_DEPT_DROPDOWN', {
                  dept: 'men'
                })
              "
              class="nav-sm__products-sub-dropdown-btn"
            >
              <div>
                <p class="nav-sm__dropdown-item-txt">Men</p>
              </div>
              <div class="arrow-logo-container">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"
                    fill="#333"
                  />
                  <path fill="none" d="M0 0h24v24H0V0z" />
                </svg>
              </div>
            </div>
            <div
              v-if="navData.productsDropdownSmDept === 'men'"
              class="nav-sm__products-sub-dropdown-items"
            >
              <span
                v-for="route in [
                  ['/products/men/tops/t-shirts', 'T-Shirts'],
                  ['/products/men/tops/polos', 'Polos'],
                  ['/products/men/tops/button-downs', 'Button-Downs'],
                  ['/products/men/tops/sweaters', 'Sweaters'],
                  ['/products/men/bottoms/khakis', 'Khakis'],
                  ['/products/men/bottoms/jeans', 'Jeans'],
                  ['/products/men/accessories/hats', 'Hats'],
                  ['/products/men/accessories/gloves', 'Gloves']
                ]"
                :key="route[0]"
              >
                <router-link
                  @click.native="setNavData('TOGGLE_NAV_SM_PRODUCTS_DROPDOWN')"
                  class="nav-sm__product-pg-link"
                  :to="route[0]"
                >
                  <div
                    @click="initiateGetProducts(route[0])"
                    class="nav-sm__products-sub-dropdown-item"
                  >
                    <p class="nav-sm__products-sub-dropdown-item-txt">
                      {{ route[1] }}
                    </p>
                  </div>
                </router-link>
              </span>
            </div>
            <div
              @click="
                setNavData('TOGGLE_NAV_SM_PRODUCTS_DEPT_DROPDOWN', {
                  dept: 'women'
                })
              "
              class="nav-sm__products-sub-dropdown-btn"
            >
              <div>
                <p class="nav-sm__dropdown-item-txt">Women</p>
              </div>
              <div class="arrow-logo-container">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"
                    fill="#333"
                  />
                  <path fill="none" d="M0 0h24v24H0V0z" />
                </svg>
              </div>
            </div>
            <div
              v-if="navData.productsDropdownSmDept === 'women'"
              class="nav-sm__products-sub-dropdown-items"
            >
              <span
                v-for="route in [
                  ['/products/women/tops/shirts', 'Shirts'],
                  ['/products/women/tops/button-downs', 'Button-Downs'],
                  ['/products/women/tops/sweaters', 'Sweaters'],
                  ['/products/women/dresses', 'Dresses'],
                  ['/products/women/bottoms/pants', 'Pants'],
                  ['/products/women/accessories/hats', 'Hats'],
                  ['/products/women/accessories/gloves', 'Gloves']
                ]"
                :key="route[0]"
              >
                <router-link
                  @click.native="setNavData('TOGGLE_NAV_SM_PRODUCTS_DROPDOWN')"
                  class="nav-sm__product-pg-link"
                  :to="route[0]"
                >
                  <div
                    @click="initiateGetProducts(route[0])"
                    class="nav-sm__products-sub-dropdown-item"
                  >
                    <p class="nav-sm__products-sub-dropdown-item-txt">
                      {{ route[1] }}
                    </p>
                  </div>
                </router-link>
              </span>
            </div>
            <div
              @click="
                setNavData('TOGGLE_NAV_SM_PRODUCTS_DEPT_DROPDOWN', {
                  dept: 'boys'
                })
              "
              class="nav-sm__products-sub-dropdown-btn"
            >
              <div>
                <p class="nav-sm__dropdown-item-txt">Boys</p>
              </div>
              <div class="arrow-logo-container">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"
                    fill="#333"
                  />
                  <path fill="none" d="M0 0h24v24H0V0z" />
                </svg>
              </div>
            </div>
            <div
              v-if="navData.productsDropdownSmDept === 'boys'"
              class="nav-sm__products-sub-dropdown-items"
            >
              <span
                v-for="route in [
                  ['/products/boys/tops/t-shirts', 'T-Shirts'],
                  ['/products/boys/tops/button-downs', 'Button-Downs'],
                  ['/products/boys/tops/sweaters', 'Sweaters'],
                  ['/products/boys/bottoms/pants', 'Pants'],
                  ['/products/boys/bottoms/shorts', 'Shorts'],
                  ['/products/boys/accessories/hats', 'Hats'],
                  ['/products/boys/accessories/gloves', 'Gloves']
                ]"
                :key="route[0]"
              >
                <router-link
                  @click.native="setNavData('TOGGLE_NAV_SM_PRODUCTS_DROPDOWN')"
                  class="nav-sm__product-pg-link"
                  :to="route[0]"
                >
                  <div
                    @click="initiateGetProducts(route[0])"
                    class="nav-sm__products-sub-dropdown-item"
                  >
                    <p class="nav-sm__products-sub-dropdown-item-txt">
                      {{ route[1] }}
                    </p>
                  </div>
                </router-link>
              </span>
            </div>
            <div
              @click="
                setNavData('TOGGLE_NAV_SM_PRODUCTS_DEPT_DROPDOWN', {
                  dept: 'girls'
                })
              "
              class="nav-sm__products-sub-dropdown-btn"
            >
              <div>
                <p class="nav-sm__dropdown-item-txt">Girls</p>
              </div>
              <div class="arrow-logo-container">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"
                    fill="#333"
                  />
                  <path fill="none" d="M0 0h24v24H0V0z" />
                </svg>
              </div>
            </div>
            <div
              v-if="navData.productsDropdownSmDept === 'girls'"
              class="nav-sm__products-sub-dropdown-items"
            >
              <span
                v-for="route in [
                  ['/products/girls/tops/shirts', 'Shirts'],
                  ['/products/girls/dresses', 'Dresses'],
                  ['/products/girls/bottoms/pants', 'Pants'],
                  ['/products/girls/accessories/hats', 'Hats'],
                  ['/products/girls/accessories/gloves', 'Gloves']
                ]"
                :key="route[0]"
              >
                <router-link
                  @click.native="setNavData('TOGGLE_NAV_SM_PRODUCTS_DROPDOWN')"
                  class="nav-sm__product-pg-link"
                  :to="route[0]"
                >
                  <div
                    @click="initiateGetProducts(route[0])"
                    class="nav-sm__products-sub-dropdown-item"
                  >
                    <p class="nav-sm__products-sub-dropdown-item-txt">
                      {{ route[1] }}
                    </p>
                  </div>
                </router-link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="nav-sm__underlay">
      &nbsp;
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
  props: [
    "toggleDropdown",
    "navDropdown",
    "getProducts",
    "zIndex",
    "navData",
    "setNavData"
  ],
  components: {
    NavCategories,
    DropdownMen,
    DropdownWomen,
    DropdownBoys,
    DropdownGirls
  },
  methods: {
    initiateGetProducts: function(route) {
      this.setNavData("TOGGLE_NAV_SM_DROPDOWN");
      // console.log("initiating");
      // console.log(route);
      // console.log(this.$route.name);

      if (this.$route.name === "Products") {
        // console.log("click get");
        this.getProducts(route, "update productsData");
      } else {
        // console.log("mount get");
      }
    }
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
  background-color: #f1f1f1;
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
.nav-sm__dropdown {
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  box-sizing: border-box;
  background-color: #f1f1f1;
  border-top: 1px solid #ddd;
  display: none;
}
.nav-sm__dropdown.displayed {
  display: block;
}
.nav-sm__dropdown-item {
  padding: 12px 15px;
  cursor: pointer;
  transition: background-color 0.2s;
  border-bottom: 1px solid #ddd;
}
.nav-sm__dropdown-item:hover {
  background-color: #e6e6e6;
}
.nav-sm__dropdown-item-txt {
  margin: 0;
  /* text-align: center; */
}
.products-dropdown {
  position: relative;
}
.nav-sm__products-dropdown-btn {
  display: flex;
  align-items: center;
  padding: 10px 15px;
  /* justify-content: center; */
  cursor: pointer;
  transition: background-color 0.2s;
  border-bottom: 1px solid #ddd;
}
.nav-sm__products-dropdown-btn:hover {
  background-color: #e6e6e6;
}
.nav-sm__products-dropdown-item-txt {
  margin: 0;
}
.nav-sm__products-category-dropdown {
  display: none;
}
.nav-sm__products-category-dropdown.displayed {
  display: block;
}
.nav-sm__products-sub-dropdown-btn {
  display: flex;
  align-items: center;
  padding: 10px 30px;
  cursor: pointer;
  transition: background-color 0.2s;
  border-bottom: 1px solid #ddd;
}
.nav-sm__products-sub-dropdown-btn:hover {
  background-color: #e6e6e6;
}
.arrow-logo-container {
  display: flex;
}
.nav-sm__products-sub-dropdown-item {
  padding: 12px 45px;
  border-bottom: 1px solid rgb(228, 228, 228);
  cursor: pointer;
  transition: background-color 0.2s;
}
.nav-sm__products-sub-dropdown-item:hover {
  background-color: #e6e6e6;
}
.nav-sm__products-sub-dropdown-item-txt {
  margin: 0;
}
.nav-sm__product-pg-link {
  text-decoration: none;
  color: #333;
}
.nav-sm__products-sub-dropdown-items {
  max-height: 200px;
  overflow-y: scroll;
  background-color: #f7f7f7;
}
.nav-sm__cart-link {
  text-decoration: none;
  color: #333;
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
