import {
  nameInputIsInvalid,
  locationInputIsInvalid
} from "./checkInputValidities";
import { getProductLocation, formatLocationForDb } from "./helper-functions";

export default function(action, attribute) {
  if (action === "submit") {
    if (this.editProductForm.attributeEditing === "name") {
      if (!nameInputIsInvalid(this.editProductForm.name.new)) {
        this.product.name["S"] = this.editProductForm.name.new;
        if (
          !this.editProductForm.attributesEdited.includes(
            this.editProductForm.attributeEditing
          )
        ) {
          this.editProductForm.attributesEdited.push(
            this.editProductForm.attributesEdited
          );
        }
        this.editProductForm.attributeEditing = false;
      } else {
        this.editProductForm.name.invalidity = nameInputIsInvalid(
          this.editProductForm.name.new
        );
      }
    } else if (this.editProductForm.attributeEditing === "productPath") {
      if (!locationInputIsInvalid(this.editProductForm.location.new)) {
        this.product.productPath["S"] = formatLocationForDb(
          this.editProductForm.location.new,
          this.product.productPath["S"].split("#")[1]
        );
      } else {
        this.editProductForm.location.invalidity = locationInputIsInvalid(
          this.editProductForm.location.new
        );
      }
    }
  } else if (action === "cancel") {
    this.editProductForm.attributeEditing = false;
  } else if (action === "edit") {
    this.editProductForm.attributeEditing = attribute;

    if (attribute === "name") {
      let originalValue = this.product.name["S"];

      this.editProductForm.name.original = originalValue;
      this.editProductForm.name.new = originalValue;
    } else if (attribute === "productPath") {
      let originalValue = getProductLocation(this.product.productPath["S"]);

      this.editProductForm.location.original = originalValue;
      this.editProductForm.location.new = originalValue;
    }
  }
}
