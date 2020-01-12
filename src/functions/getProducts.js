import { apiKey, getProductsEndpoint } from "../appVars.js";

export default function(route) {
  console.log(`getProducts arg: ${route}`);
  this.toggleDropdown();
  this.productsLoading = true;

  if (!route) {
    //get all products
    var productSubset = "[]_";
  } else {
    productSubset = route
      .replace("/products/", "")
      .split("/")
      .map(subSubset => `[${subSubset}]`)
      .join("_");

    productSubset = `[]_${productSubset}`;
  }

  fetch(getProductsEndpoint, {
    headers: {
      "x-api-key": apiKey,
      "product-subset": productSubset
    }
  })
    .then(response => response.json())
    .then(json => {
      // console.log(json);
      const products = json["Items"];
      this.products = products;
      // console.log(products);
      this.productsLoading = false;
    })
    .catch(e => {
      console.log(e);
      alert(e);
      this.productsLoading = false;
    });
}
