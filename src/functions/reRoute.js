import { apiKey, getProductsEndpoint, getProductEndpoint } from "../defineAppVars.js";

export default function(newRoute, navigate) {
  console.log("REROUTE");
  
  if (this.navDropdown) {
    this.toggleDropdown();
  }

  if (navigate) {
    this.$router.push(newRoute);
  }
}
