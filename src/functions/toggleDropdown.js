export default function(btn) {
  if (typeof btn !== "string") {
    if (this.navDropdown) {
      return (this.navDropdown = false);
    }
  }

  if (this.navDropdown !== btn) {
    this.navDropdown = btn;
  }
}
