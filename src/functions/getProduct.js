import { apiKey, getProductEndpoint } from "../defineAppVars";
import setProductData from "./setProductData";

const cloneDeep = require("clone-deep");

export default function(productPath, updateProductData) {
  if (productPath.includes("/admin/product/")) {
    productPath = productPath.replace("/admin/product/", "").split("/");
  } else {
    productPath = productPath.replace("/product/", "").split("/");
  }

  productPath = productPath
    .map((section, index) => {
      if (index === productPath.length - 1) {
        return `#${section}#`;
      } else return `[${section}]`;
    })
    .join("_");
  productPath = `[]_${productPath}`;

  const department = "products";

  // console.log(productPath);

  this.productLoading = true;

  fetch(getProductEndpoint, {
    headers: {
      "x-api-key": apiKey,
      "product-path": productPath,
      department
    }
  })
    .then(res => res.json())
    .then(json => {
      const product = json["Item"];
      this.product = product;

      if (updateProductData) {
        // this.productData = setProductData("INITIALIZE", {
        //   product: cloneDeep(product),
        //   color: product.images["L"][0]["M"].color["S"]
        // });
        this.setProductData("INITIALIZE", {
          product: cloneDeep(product),
          color: product.images["L"][0]["M"].color["S"]
        });
      }

      this.productLoading = false;
    })
    .catch(e => {
      console.log(e);
      this.productLoading = false;
    });
}
