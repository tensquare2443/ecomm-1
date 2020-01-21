<template>
  <div>
    <TitleLink
      :getProducts="getProducts"
      :route="'/products/boys/tops'"
      :btnTxt="'Tops'"
    />
    <TxtLink
      :getProducts="getProducts"
      :route="'/products/boys/tops/t-shirts'"
      :btnTxt="'T-Shirts'"
    />
    <TxtLink
      :getProducts="getProducts"
      :route="'/products/boys/tops/button-downs'"
      :btnTxt="'Button-Downs'"
    />
    <TxtLink
      :getProducts="getProducts"
      :route="'/products/boys/tops/sweaters'"
      :btnTxt="'Sweaters'"
    />
    <TitleLink
      :getProducts="getProducts"
      :route="'/products/boys/bottoms'"
      :btnTxt="'Bottoms'"
    />
    <TxtLink
      :getProducts="getProducts"
      :route="'/products/boys/bottoms/pants'"
      :btnTxt="'Pants'"
    />
    <TxtLink
      :getProducts="getProducts"
      :route="'/products/boys/bottoms/shorts'"
      :btnTxt="'Shorts'"
    />
    <TitleLink
      :getProducts="getProducts"
      :route="'/products/boys/accessories'"
      :btnTxt="'Accessories'"
    />
    <TxtLink
      :getProducts="getProducts"
      :route="'/products/boys/accessories/hats'"
      :btnTxt="'Hats'"
    />
    <TxtLink
      :getProducts="getProducts"
      :route="'/products/boys/accessories/gloves'"
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
