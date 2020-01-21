import {
  addProductFormDefault,
  editProductFormDefault
} from "../appDataDefaults";

const cloneDeep = require("clone-deep");

export default function(dataKeys) {
  dataKeys.forEach(dataKey => {
    switch (dataKey) {
      case "addProductForm":
        this.addProductForm = cloneDeep(addProductFormDefault);
        break;
      case "editProductForm":
        this.editProductForm = cloneDeep(editProductFormDefault);
        break;
      case "product":
        this.product = false;
        break;
      default:
        break;
    }
  });
}
