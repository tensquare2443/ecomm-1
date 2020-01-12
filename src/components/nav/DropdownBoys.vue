<template>
  <div
    class="nav__dropdown"
    :class="{ 'nav__dropdown-status': navDropdown === 'boys' }"
  >
    <h3 style="text-align: center;">Boys Dropdown</h3>
  </div>
</template>

<script>
export default {
  props: ["reRoute", "navDropdown"]
};
</script>

<style scoped>
.nav__dropdown {
  display: none;
  position: absolute;
  top: 100%;
  width: 100%;
  border-bottom: 1px solid #aaa;
  background-color: #f5f5f5;
}
.nav__dropdown-status {
  display: block;
}
.nav__dropdown-content {
  width: 600px;
  margin: auto auto 12px auto;
  max-width: 100%;
  display: flex;
  flex-direction: row;
}
.nav__dropdown-title {
  border-bottom: 1px solid #ccc;
  padding-bottom: 8px;
  margin-bottom: 8px;
}
.nav__dropdown-txt {
  margin-top: 6px;
  margin-bottom: 6px;
}
.nav__dropdown-title-link,
.nav__dropdown-txt-link {
  cursor: pointer;
}
.nav__dropdown-title-link:hover {
  color: #313190;
}
.nav__dropdown-txt-link:hover {
  color: #313190;
  text-decoration: underline;
}
.nav__dropdown-column--left {
  flex: 0 0 50%;
  padding-left: 10px;
  padding-right: 10px;
  box-sizing: border-box;
}
.nav__dropdown-column--right {
  flex: 0 0 50%;
  padding-left: 10px;
  padding-right: 10px;
  box-sizing: border-box;
}
</style>