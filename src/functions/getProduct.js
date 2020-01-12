import { apiKey, getProductEndpoint } from "../appVars";

export default function(productPath) {
  if (productPath.includes("/admin/product/")) {
    console.log("yesss")
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
      console.log(json);
      this.product = json["Item"];
      this.productLoading = false;
    })
    .catch(e => {
      console.log(e);
      this.productLoading = false;
    });
}
