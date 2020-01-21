<template>
  <div>
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
</template>

<script>
import TitleLink from "../components/nav/TitleLink";
import TxtLink from "../components/nav/TxtLink";

export default {
  props: ["getProducts"],
  components: { TxtLink, TitleLink }
};
</script>
