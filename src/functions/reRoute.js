import { apiKey, getProductsEndpoint, getProductEndpoint } from "../appVars.js";

export default function(newRoute, navigate) {
  console.log("REROUTE");
  
  if (this.navDropdown) {
    this.toggleDropdown();
  }

  if (navigate) {
    this.$router.push(newRoute);
  }
}
