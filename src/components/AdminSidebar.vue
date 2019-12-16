<template>
  <div class="admin-sidebar">
    <div
      @click="changeRoute('/admin/products')"
      :class="{ active: adminSubRoute === 'products' }"
      class="admin-sidebar__item"
    >
      <p class="admin-sidebar__item-txt">Products</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["adminSubRoute", "changeRoute"]
};
</script>

<style>
.admin-sidebar {
  background-color: #dadada;
  height: calc(100vh - 50px);
  overflow-y: scroll;
  border-right: 1px solid #bbbbbb;
}
.admin-sidebar__item {
  border-bottom: 1px solid #bbb;
  cursor: pointer;
  padding: 15px 10px;
}
.admin-sidebar__item.active {
  background-color: #ccc;
}
.admin-sidebar__item-txt {
  margin: 0;
}
</style>
