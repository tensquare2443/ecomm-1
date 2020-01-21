<template>
  <div>
    <TitleLink
      :getProducts="getProducts"
      :route="'/products/women/tops'"
      :btnTxt="'Tops'"
    />
    <TxtLink
      :getProducts="getProducts"
      :route="'/products/women/tops/shirts'"
      :btnTxt="'Shirts'"
    />
    <TxtLink
      :getProducts="getProducts"
      :route="'/products/women/tops/button-downs'"
      :btnTxt="'Button-Downs'"
    />
    <TxtLink
      :getProducts="getProducts"
      :route="'/products/women/tops/sweaters'"
      :btnTxt="'Sweaters'"
    />
    <TitleLink
      :getProducts="getProducts"
      :route="'/products/women/dresses'"
      :btnTxt="'Dresses'"
    />
    <TxtLink
      :getProducts="getProducts"
      :route="'/products/women/dresses'"
      :btnTxt="'All Dresses'"
    />
    <TitleLink
      :getProducts="getProducts"
      :route="'/products/women/bottoms'"
      :btnTxt="'Bottoms'"
    />
    <TxtLink
      :getProducts="getProducts"
      :route="'/products/women/bottoms/pants'"
      :btnTxt="'Pants'"
    />
    <TitleLink
      :getProducts="getProducts"
      :route="'/products/women/accessories'"
      :btnTxt="'Accessories'"
    />
    <TxtLink
      :getProducts="getProducts"
      :route="'/products/women/accessories/hats'"
      :btnTxt="'Hats'"
    />
    <TxtLink
      :getProducts="getProducts"
      :route="'/products/women/accessories/gloves'"
      :btnTxt="'Gloves'"
    />
  </div>
</template>

<script>
import TitleLink from "../components/nav/TitleLink";
import TxtLink from "../components/nav/TxtLink";

export default {
  props: ["getProducts"],
  components: { TxtLink, TitleLink }
};
</script>
