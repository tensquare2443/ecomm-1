export default function(btn, categoryClick) {

  if (categoryClick === "categoryClick") {
    var navData = JSON.parse(JSON.stringify(this.navData));
    navData.dropdownLgOff = true;
    this.navData = navData;
  } else if (categoryClick === "categoryOff") {
    navData = JSON.parse(JSON.stringify(this.navData));
    navData.dropdownLgOff = false;
    this.navData = navData;
    return;
  }

  if (typeof btn !== "string") {
    if (this.navDropdown) {
      return (this.navDropdown = false);
    }
  }

  if (this.navDropdown !== btn) {
    this.navDropdown = btn;
  }
}
