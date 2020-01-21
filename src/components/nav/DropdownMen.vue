<template>
  <div
    class="nav__dropdown"
    :class="{
      'nav__dropdown-status': navDropdown === 'men' && !navData.dropdownLgOff
    }"
  >
    <div class="nav__dropdown-content">
      <div class="nav__dropdown-column--left">
        <TitleLink
          :getProducts="getProducts"
          :route="'/products/men/tops'"
          :btnTxt="'Tops'"
        />
        <TxtLink
          :getProducts="getProducts"
          :route="'/products/men/tops/t-shirts'"
          :btnTxt="'T-Shirts'"
        />
        <TxtLink
          :getProducts="getProducts"
          :route="'/products/men/tops/polos'"
          :btnTxt="'Polos'"
        />
        <TxtLink
          :getProducts="getProducts"
          :route="'/products/men/tops/button-downs'"
          :btnTxt="'Button-Downs'"
        />
        <TxtLink
          :getProducts="getProducts"
          :route="'/products/men/tops/sweaters'"
          :btnTxt="'Sweaters'"
        />
      </div>
      <div class="nav__dropdown-column--right">
        <TitleLink
          :getProducts="getProducts"
          :route="'/products/men/bottoms'"
          :btnTxt="'Bottoms'"
        />
        <TxtLink
          :getProducts="getProducts"
          :route="'/products/men/bottoms/khakis'"
          :btnTxt="'Khakis'"
        />
        <TxtLink
          :getProducts="getProducts"
          :route="'/products/men/bottoms/jeans'"
          :btnTxt="'Jeans'"
        />
        <TitleLink
          :getProducts="getProducts"
          :route="'/products/men/accessories'"
          :btnTxt="'Accessories'"
        />
        <TxtLink
          :getProducts="getProducts"
          :route="'/products/men/accessories/hats'"
          :btnTxt="'Hats'"
        />
        <TxtLink
          :getProducts="getProducts"
          :route="'/products/men/accessories/gloves'"
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
  props: ["navDropdown", "getProducts", "navData"],
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
