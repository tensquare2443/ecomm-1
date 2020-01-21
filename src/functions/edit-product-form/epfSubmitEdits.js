import { getDbProductPath } from "./helper-functions";
import { apiKey, addProductEndpoint } from "../../appVars";

export default function(e) {
  e.preventDefault();
  console.log("submitting EPF");

  const productPath = getDbProductPath(
    this.editProductForm.attributesEdited,
    this.editProductForm.location.original,
    this.product.productPath["S"]
  );

  this.editProductForm.uploadingEdits = true;

  // console.log(`THIS.PRODUCT:`);
  // console.log(this.product);
  // return;

  this.deleteProduct(productPath)
    .then(() =>
      fetch(addProductEndpoint, {
        method: "POST",
        headers: {
          "X-Api-Key": apiKey
        },
        body: JSON.stringify(this.product)
      })
    )
    .then(res => res.json())
    .then(() => {
      console.log('uploaded');
      this.editProductForm.uploadingEdits = false;
      this.$router.push("/admin/products");
    })
    .catch(e => {
      this.editProductForm.uploadingEdits = false;
      this.$router.push("/admin/products");
      console.log(e);
    });
}

/*
problems:
- removing all tags

FIXED- making price an integer
FIXED- any date change
- cannot actually submit stock changes
- changing order of images
*/