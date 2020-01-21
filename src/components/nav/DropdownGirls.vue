<template>
  <div
    class="nav__dropdown"
    :class="{
      'nav__dropdown-status': navDropdown === 'girls' && !navData.dropdownLgOff
    }"
  >
    <div class="nav__dropdown-content">
      <div class="nav__dropdown-column--left">
        <TitleLink
          :getProducts="getProducts"
          :route="'/products/girls/tops'"
          :btnTxt="'Tops'"
        />
        <TxtLink
          :getProducts="getProducts"
          :route="'/products/girls/tops/shirts'"
          :btnTxt="'Shirts'"
        />
        <TitleLink
          :getProducts="getProducts"
          :route="'/products/girls/dresses'"
          :btnTxt="'Dresses'"
        />
        <TxtLink
          :getProducts="getProducts"
          :route="'/products/girls/dresses'"
          :btnTxt="'All Dresses'"
        />
      </div>
      <div class="nav__dropdown-column--right">
        <TitleLink
          :getProducts="getProducts"
          :route="'/products/girls/bottoms'"
          :btnTxt="'Bottoms'"
        />
        <TxtLink
          :getProducts="getProducts"
          :route="'/products/girls/bottoms/pants'"
          :btnTxt="'Pants'"
        />
        <TitleLink
          :getProducts="getProducts"
          :route="'/products/girls/accessories'"
          :btnTxt="'Accessories'"
        />
        <TxtLink
          :getProducts="getProducts"
          :route="'/products/girls/accessories/hats'"
          :btnTxt="'Hats'"
        />
        <TxtLink
          :getProducts="getProducts"
          :route="'/products/girls/accessories/gloves'"
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
  components: { TitleLink, TxtLink }
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
.nav__dropdown-txt {
  margin-top: 6px;
  margin-bottom: 6px;
}
.nav__dropdown-title-link,
.nav__dropdown-txt-link {
  cursor: pointer;
}
.nav__dropdown-title-link:hover {
  color: #313190;
}
.nav__dropdown-txt-link:hover {
  color: #313190;
  text-decoration: underline;
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
