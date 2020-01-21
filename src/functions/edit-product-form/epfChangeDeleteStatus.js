// import { formatLocationForDb } from "./helper-functions";
import { getDbProductPath } from "./helper-functions";

export default function(action) {
  switch (action) {
    case "confirm":
      this.editProductForm.deleteStatus = "confirm";
      document.querySelector(".admin__content").scrollTop = 0;
      break;
    case "finalize":
      this.editProductForm.deleteStatus = false;

      const productPath = getDbProductPath(
        this.editProductForm.attributesEdited,
        this.editProductForm.location.original,
        this.product.productPath["S"]
      );

      this.deleteProduct(productPath)
        .then(() => this.$router.push("/admin/products"))
        .catch(() => this.$router.push("/admin/products"));
      break;
    case "deleting":
      this.editProductForm.deleteStatus = "deleting";
      break;
    case "cancel":
      this.editProductForm.deleteStatus = false;
      break;
    default:
      break;
  }
}
