import { apiKey, getProductsEndpoint } from "../defineAppVars.js";
import { setProductsData } from "./general-helper-functions";

console.log("getProductsEndpoint");
console.log(getProductsEndpoint);
console.log(process.env.getProductsEndpoint);
console.log(process.env);

export default function(route, updateProductsData) {
  // console.log(`getProducts arg: ${route}`);
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
      const products = json["Items"];
      this.products = products;
      this.productsLoading = false;

      if (updateProductsData) {
        this.productsData = setProductsData(products);
      }
    })
    .catch(e => {
      console.log(e);
      alert(e);
      this.productsLoading = false;
    });
}
