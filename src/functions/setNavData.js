export default function(action, payload) {
  switch (action) {
    case "TOGGLE_NAV_SM_DROPDOWN":
      let navData = JSON.parse(JSON.stringify(this.navData));

      navData.dropdownSm = !navData.dropdownSm;
      this.navData = navData;
      break;
    case "TOGGLE_NAV_SM_PRODUCTS_DROPDOWN":
      navData = JSON.parse(JSON.stringify(this.navData));

      navData.productsDropdownSm = !navData.productsDropdownSm;
      this.navData = navData;
      break;
    case "TOGGLE_NAV_SM_PRODUCTS_DEPT_DROPDOWN":
      navData = JSON.parse(JSON.stringify(this.navData));

      if (navData.productsDropdownSmDept === payload.dept) {
        navData.productsDropdownSmDept = false;
      } else {
        navData.productsDropdownSmDept = payload.dept;
      }

      this.navData = navData;
      break;
    default:
      break;
  }
}
