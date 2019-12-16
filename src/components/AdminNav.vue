<template>
  <div class="admin-nav">
    <div>
      <h2 class="admin-nav__brand sitebrand">Brand</h2>
    </div>
    <div>
      <button
        @click="changeRoute('/admin/add-product')"
        class="admin-nav__add-product"
      >
        Add Product
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["changeRoute"]
};
</script>

<style scoped>
.admin-nav {
  background-color: #dadada;
  padding-left: 10px;
  padding-right: 10px;
  border-bottom: 1px solid #bbbbbb;
  box-sizing: border-box;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.admin-nav__brand {
  margin: 0;
}
.admin-nav__add-product {
  background: none;
  border: 1px solid #313190;
  border-radius: 3px;
  color: #313190;
  font-size: 16px;
  padding: 4px 12px;
  cursor: pointer;
  transition-property: background-color, color;
  transition: all 0.2s;
}
.admin-nav__add-product:hover {
  color: white;
  background-color: #313190;
}
</style>
