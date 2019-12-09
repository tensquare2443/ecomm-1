<template>
  <div
    class="nav__dropdown"
    :class="{ 'nav__dropdown-status': navDropdown === 'men' }"
  >
    <div class="nav__dropdown-content">
      <div class="nav__dropdown-column--left">
        <h3 class="nav__dropdown-title">Featured</h3>
        <TxtLink
          :changeRoute="changeRoute"
          :route="'/products/men'"
          :btnTxt="'New Arrivals'"
        />
        <TxtLink
          :changeRoute="changeRoute"
          :route="'/products/men'"
          :btnTxt="'Sale'"
        />
        <TitleLink
          :changeRoute="changeRoute"
          :route="'/products/men/tops'"
          :btnTxt="'Tops'"
        />
        <TxtLink
          :changeRoute="changeRoute"
          :route="'/products/men/tops/t-shirts'"
          :btnTxt="'T-Shirts'"
        />
        <TxtLink
          :changeRoute="changeRoute"
          :route="'/products/men/tops/polos'"
          :btnTxt="'Polos'"
        />
        <TxtLink
          :changeRoute="changeRoute"
          :route="'/products/men/tops/button-downs'"
          :btnTxt="'Button-Downs'"
        />
        <TxtLink
          :changeRoute="changeRoute"
          :route="'/products/men/tops/sweaters'"
          :btnTxt="'Sweaters'"
        />
        <TxtLink
          :changeRoute="changeRoute"
          :route="'/products/men/tops/sweatshirts'"
          :btnTxt="'Sweatshirts'"
        />
      </div>
      <div class="nav__dropdown-column--right">
        <TitleLink
          :changeRoute="changeRoute"
          :route="'/products/men/bottoms'"
          :btnTxt="'Bottoms'"
        />
        <TxtLink
          :changeRoute="changeRoute"
          :route="'/products/men/bottoms/khakis'"
          :btnTxt="'Khakis'"
        />
        <TxtLink
          :changeRoute="changeRoute"
          :route="'/products/men/bottoms/jeans'"
          :btnTxt="'Jeans'"
        />
        <TxtLink
          :changeRoute="changeRoute"
          :route="'/products/men/bottoms/sweatpants'"
          :btnTxt="'Sweatpants'"
        />
        <TitleLink
          :changeRoute="changeRoute"
          :route="'/products/men/accessories'"
          :btnTxt="'Accessories'"
        />
        <TxtLink
          :changeRoute="changeRoute"
          :route="'/products/men/accessories/hats'"
          :btnTxt="'Hats'"
        />
        <TxtLink
          :changeRoute="changeRoute"
          :route="'/products/men/accessories/gloves'"
          :btnTxt="'Gloves'"
        />
        <TxtLink
          :changeRoute="changeRoute"
          :route="'/products/men/accessories/scarves'"
          :btnTxt="'Scarves'"
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
.nav__dropdown-title-link {
  cursor: pointer;
}
.nav__dropdown-title-link:hover {
  color: #313190;
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
