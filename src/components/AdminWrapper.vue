<template>
  <div>
    <AdminNav :changeRoute="changeRoute" />
    <div class="admin__grid">
      <AdminSidebar :adminSubRoute="adminSubRoute" :changeRoute="changeRoute" />
      <div class="admin__content">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
import AdminNav from "../components/AdminNav";
import AdminSidebar from "../components/AdminSidebar";

export default {
  components: {
    AdminNav,
    AdminSidebar
  },
  props: ["changeRoute", "adminSubRoute"]
};
</script>

<style scoped>
.admin__grid {
  display: grid;
  grid-template-columns: 220px auto;
}
.admin__content {
  height: calc(100vh - 50px);
  overflow-y: scroll;
  padding-left: 15px;
  padding-right: 15px;
}
</style>
