<template>
  <div class="nav__categories">
    <div
      @click="changeRoute('/products')"
      @mouseenter="toggleDropdown('sale')"
      :class="{ 'nav__category--active': navDropdown === 'sale' }"
      class="nav__category"
    >
      <p class="nav__category-txt">Sale</p>
    </div>
    <div
      @click="changeRoute('/products')"
      @mouseenter="toggleDropdown('new')"
      :class="{ 'nav__category--active': navDropdown === 'new' }"
      class="nav__category"
    >
      <p class="nav__category-txt">New</p>
    </div>
    <router-link to="/products/men" class="nav__category-link">
      <div
        @mouseenter="toggleDropdown('men')"
        :class="{ 'nav__category--active': navDropdown === 'men' }"
        class="nav__category"
      >
        <p class="nav__category-txt">Men</p>
      </div>
    </router-link>
    <router-link to="/products/women" class="nav__category-link">
      <div
        @mouseenter="toggleDropdown('women')"
        :class="{ 'nav__category--active': navDropdown === 'women' }"
        class="nav__category"
      >
        <p class="nav__category-txt">Women</p>
      </div>
    </router-link>
    <router-link to="/products/boys" class="nav__category-link">
      <div
        @mouseenter="toggleDropdown('boys')"
        :class="{ 'nav__category--active': navDropdown === 'boys' }"
        class="nav__category"
      >
        <p class="nav__category-txt">Boys</p>
      </div>
    </router-link>
    <router-link to="/products/girls" class="nav__category-link">
      <div
        @mouseenter="toggleDropdown('girls')"
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
  props: ["changeRoute", "toggleDropdown", "navDropdown"]
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
  border-bottom: 3px solid #f5f5f5;
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
