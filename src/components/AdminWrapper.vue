<template>
  <div>
    <AdminNav />
    <div class="admin__grid">
      <AdminSidebar />
      <div
        :class="{
          'modal-open':
            editProductForm.deleteStatus === 'confirm' ||
            editProductForm.deleteStatus === 'deleting'
        }"
        class="admin__content"
      >
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
  props: ["editProductForm"]
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
  position: relative;
}
.modal-open {
  overflow: hidden;
}

@media (max-width: 1000px) {
  .admin__grid {
    grid-template-columns: 0 1fr;
  }
}
</style>
