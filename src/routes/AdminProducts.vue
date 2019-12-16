<template>
  <div class="admin">
    <AdminNav :changeRoute="changeRoute" />
    <div class="admin__grid">
      <AdminSidebar :adminSubRoute="adminSubRoute" :changeRoute="changeRoute" />
      <h1>Admin Products</h1>
    </div>
  </div>
</template>

<script>
import AdminNav from "../components/AdminNav";
import AdminSidebar from "../components/AdminSidebar";

export default {
  props: ["adminSubRoute", "changeRoute"],
  components: {
    AdminNav,
    AdminSidebar
  }
};
</script>

<style scoped>
.admin__grid {
  display: grid;
  grid-template-columns: 220px auto;
}
</style>
