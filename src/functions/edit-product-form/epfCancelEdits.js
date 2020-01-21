import { editProductFormDefault } from "../../appDataDefaults";

const cloneDeep = require("clone-deep");

export default function() {
  console.log("cancelling EPF");

  // this.editProductForm = cloneDeep(editProductFormDefault);
  // this.product = false;
  this.$router.push("/admin/products");
}
