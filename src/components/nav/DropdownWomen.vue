<template>
  <div
    class="nav__dropdown"
    :class="{ 'nav__dropdown-status': navDropdown === 'women' }"
  >
    <div class="nav__dropdown-content">
      <div class="nav__dropdown-column--left">
        <h3 class="nav__dropdown-title">Featured</h3>
        <TxtLink
          :changeRoute="changeRoute"
          :route="'/products/women'"
          :btnTxt="'New Arrivals'"
        />
        <TxtLink
          :changeRoute="changeRoute"
          :route="'/products/women'"
          :btnTxt="'Sale'"
        />
        <TitleLink
          :changeRoute="changeRoute"
          :route="'/products/women/tops'"
          :btnTxt="'Tops'"
        />
        <TxtLink
          :changeRoute="changeRoute"
          :route="'/products/women/tops/shirts'"
          :btnTxt="'Shirts'"
        />
        <TxtLink
          :changeRoute="changeRoute"
          :route="'/products/women/tops/button-downs'"
          :btnTxt="'Button-Downs'"
        />
        <TxtLink
          :changeRoute="changeRoute"
          :route="'/products/women/tops/blouses'"
          :btnTxt="'Blouses'"
        />
        <TxtLink
          :changeRoute="changeRoute"
          :route="'/products/women/tops/sweaters'"
          :btnTxt="'Sweaters'"
        />
        <TxtLink
          :changeRoute="changeRoute"
          :route="'/products/women/tops/sweatshirts'"
          :btnTxt="'Sweatshirts'"
        />
      </div>
      <div class="nav__dropdown-column--right">
        <TitleLink
          :changeRoute="changeRoute"
          :route="'/products/women/bottoms'"
          :btnTxt="'Bottoms'"
        />
        <TxtLink
          :changeRoute="changeRoute"
          :route="'/products/women/bottoms/pants'"
          :btnTxt="'Pants'"
        />
        <TxtLink
          :changeRoute="changeRoute"
          :route="'/products/women/bottoms/skirts'"
          :btnTxt="'Skirts'"
        />
        <TxtLink
          :changeRoute="changeRoute"
          :route="'/products/women/bottoms/leggings'"
          :btnTxt="'Leggings'"
        />
        <TitleLink
          :changeRoute="changeRoute"
          :route="'/products/women/dresses'"
          :btnTxt="'Dresses'"
        />
        <TxtLink
          :changeRoute="changeRoute"
          :route="'/products/women/dresses'"
          :btnTxt="'All Dresses'"
        />
        <TitleLink
          :changeRoute="changeRoute"
          :route="'/products/women/accessories'"
          :btnTxt="'Accessories'"
        />
        <TxtLink
          :changeRoute="changeRoute"
          :route="'/products/women/accessories/hats'"
          :btnTxt="'Hats'"
        />
        <TxtLink
          :changeRoute="changeRoute"
          :route="'/products/women/accessories/scarves'"
          :btnTxt="'Scarves'"
        />
        <TxtLink
          :changeRoute="changeRoute"
          :route="'/products/women/accessories/gloves'"
          :btnTxt="'Gloves'"
        />
      </div>
    </div>
  </div>
</template>

<script>
import TitleLink from "./TitleLink";
import TxtLink from "./TxtLink";

export default {
  props: ["changeRoute", "navDropdown"],
  components: {
    TitleLink,
    TxtLink
  }
};
</script>

<style scoped>
.nav__dropdown {
  display: none;
  position: absolute;
  top: 100%;
  width: 100%;
  border-bottom: 1px solid #aaa;
  background-color: #f5f5f5;
}
.nav__dropdown-status {
  display: block;
}
.nav__dropdown-content {
  width: 600px;
  margin: auto auto 12px auto;
  max-width: 100%;
  display: flex;
  flex-direction: row;
}
.nav__dropdown-title {
  border-bottom: 1px solid #ccc;
  padding-bottom: 8px;
  margin-bottom: 8px;
}
.nav__dropdown-column--left {
  flex: 0 0 50%;
  padding-left: 10px;
  padding-right: 10px;
  box-sizing: border-box;
}
.nav__dropdown-column--right {
  flex: 0 0 50%;
  padding-left: 10px;
  padding-right: 10px;
  box-sizing: border-box;
}
</style>
