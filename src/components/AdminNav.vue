<template>
  <div class="admin-nav">
    <div>
      <router-link to="/" target="_blank" class="brand-link">
        <h2 class="admin-nav__brand sitebrand">Brand</h2>
      </router-link>
    </div>
    <!-- <div>
      <router-link to="/admin/products">
        <button class="admin-nav__btn">
          My Products
        </button>
      </router-link>
    </div> -->
    <div>
      <router-link class="admin-nav__products" to="/admin/products">
        <button class="admin-nav__btn">
          My Products
        </button>
      </router-link>
      <router-link to="/admin/add-product">
        <button class="admin-nav__btn">
          Add Product
        </button>
      </router-link>
    </div>
  </div>
</template>

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
.admin-nav__btn {
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
.admin-nav__btn:hover {
  color: white;
  background-color: #313190;
}
.brand-link {
  text-decoration: none;
}
.admin-nav__products {
  display: none;
}

@media (max-width: 1000px) {
  .admin-nav__products {
    display: initial;
    margin-right: 6px;
  }
}
@media (max-width: 370px) {
  .admin-nav__btn {
    font-size: 13px;
    padding: 4px 6px;
  }
}
</style>
