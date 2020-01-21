<template>
  <div class="sidebar">
    <ProductsSidebarLinksMen
      v-if="department === 'men'"
      :getProducts="getProducts"
    />
    <ProductsSidebarLinksWomen
      v-else-if="department === 'women'"
      :getProducts="getProducts"
    />
    <ProductsSidebarLinksBoys
      v-else-if="department === 'boys'"
      :getProducts="getProducts"
    />
    <ProductsSidebarLinksGirls
      v-else-if="department === 'girls'"
      :getProducts="getProducts"
    />
  </div>
</template>

<script>
import ProductsSidebarLinksMen from "./ProductsSidebarLinksMen";
import ProductsSidebarLinksWomen from "./ProductsSidebarLinksWomen";
import ProductsSidebarLinksBoys from "./ProductsSidebarLinksBoys";
import ProductsSidebarLinksGirls from "./ProductsSidebarLinksGirls";

export default {
  components: {
    ProductsSidebarLinksMen,
    ProductsSidebarLinksWomen,
    ProductsSidebarLinksBoys,
    ProductsSidebarLinksGirls
  },
  props: ["getProducts", "department"]
};
</script>

<style scoped>
.sidebar {
  flex: 0 0 220px;
  border-right: 1px solid #aaa;
  box-sizing: border-box;
  padding-right: 15px;
}
.sidebar__title {
  border-bottom: 1px solid #ccc;
  padding-bottom: 8px;
  margin-bottom: 8px;
}
</style>
