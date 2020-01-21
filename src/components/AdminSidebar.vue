<template>
  <div class="admin-sidebar">
    <router-link
      to="/admin/products"
      class="admin-sidebar__item-link"
    >
      <div
        :class="{ active: getAdminSubRoute() === 'products' }"
        class="admin-sidebar__item"
      >
        <p class="admin-sidebar__item-txt">Products</p>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  methods: {
    getAdminSubRoute: function() {
      return this.$route.path.split("/")[2]
    }
  }
};
</script>

<style>
.admin-sidebar {
  background-color: #dadada;
  height: calc(100vh - 50px);
  overflow-y: scroll;
  border-right: 1px solid #bbbbbb;
}
.admin-sidebar__item-link {
  text-decoration: none;
  color: #333;
}
.admin-sidebar__item {
  border-bottom: 1px solid #bbb;
  cursor: pointer;
  padding: 15px 10px;
  transition: background-color 0.2s;
}
.admin-sidebar__item.active,
.admin-sidebar__item:hover {
  background-color: #ccc;
}
.admin-sidebar__item-txt {
  margin: 0;
}
</style>
