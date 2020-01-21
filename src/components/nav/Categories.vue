<template>
  <div class="nav__categories">
    <router-link
      @click.native="toggleDropdown(null, 'categoryClick')"
      to="/products/men"
      class="nav__category-link"
    >
      <div
        @click="getProducts('/products/men', 'update productsData')"
        @mouseenter="toggleDropdown('men', 'mouseent')"
        @mouseleave="toggleDropdown(null, 'categoryOff')"
        :class="{ 'nav__category--active': navDropdown === 'men' }"
        class="nav__category"
      >
        <p class="nav__category-txt">Men</p>
      </div>
    </router-link>
    <router-link
      @click.native="toggleDropdown(null, 'categoryClick')"
      to="/products/women"
      class="nav__category-link"
    >
      <div
        @click="getProducts('/products/women', 'update productsData')"
        @mouseenter="toggleDropdown('women')"
        @mouseleave="toggleDropdown(null, 'categoryOff')"
        :class="{ 'nav__category--active': navDropdown === 'women' }"
        class="nav__category"
      >
        <p class="nav__category-txt">Women</p>
      </div>
    </router-link>
    <router-link
      @click.native="toggleDropdown(null, 'categoryClick')"
      to="/products/boys"
      class="nav__category-link"
    >
      <div
        @click="getProducts('/products/boys', 'update productsData')"
        @mouseenter="toggleDropdown('boys')"
        @mouseleave="toggleDropdown(null, 'categoryOff')"
        :class="{ 'nav__category--active': navDropdown === 'boys' }"
        class="nav__category"
      >
        <p class="nav__category-txt">Boys</p>
      </div>
    </router-link>
    <router-link
      @click.native="toggleDropdown(null, 'categoryClick')"
      to="/products/girls"
      class="nav__category-link"
    >
      <div
        @click="getProducts('/products/girls', 'update productsData')"
        @mouseenter="toggleDropdown('girls')"
        @mouseleave="toggleDropdown(null, 'categoryOff')"
        :class="{ 'nav__category--active': navDropdown === 'girls' }"
        class="nav__category"
      >
        <p class="nav__category-txt">Girls</p>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  props: [
    "changeRoute",
    "toggleDropdown",
    "navDropdown",
    "navData",
    "getProducts"
  ]
};
</script>

<style scoped>
.nav__categories {
  width: 1000px;
  max-width: 100%;
  margin: auto;
  display: flex;
  justify-content: space-between;
}
.nav__category {
  padding: 14px 28px 11px 28px;
  cursor: pointer;
  border-bottom: 3px solid transparent;
  transition: border-bottom 0.2s;
}
.nav__category:hover {
  border-bottom: 3px solid #333333;
}
.nav__category--active {
  border-bottom: 3px solid #333333;
}
.nav__category-txt {
  margin: 0;
}
.nav__category-link {
  text-decoration: none;
  color: #333;
}
</style>
