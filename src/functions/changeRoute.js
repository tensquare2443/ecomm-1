import { apiKey } from "../vars.js";

export default function(newRoute) {
  if (this.navDropdown) this.toggleDropdown();

  if (this.$route.fullPath === newRoute) {
    return;
  };

  this.$router.push(newRoute);
  this.productsLoading = true;

  if (newRoute.includes("/admin")) {
    this.adminSubRoute = newRoute.split("/")[2];
  } else {
    if (newRoute.includes("/products/")) {
      const productSubset = newRoute
        .replace("/products/", "")
        .split("/")
        .join("_");
      console.log(productSubset);

      fetch(require("../vars").fetchProductsEndpoint, {
        headers: {
          "x-api-key": apiKey,
          "product-subset": productSubset
        }
      })
        .then(response => response.json())
        .then(json => {
          const products = json["Items"];
          console.log(products);
          this.products = products;
          this.productsLoading = false;
        })
        .catch(e => {
          console.log(e);
          alert(e);
          this.productsLoading = false;
        });
    }
  }
}
