import {
  nameInputIsInvalid,
  locationInputIsInvalid,
  priceInputIsInvalid,
  tagsInputIsInvalid,
  createdAtInputIsInvalid,
  optionsInputsAreInvalid,
  imagesInputsAreInvalid
} from "./checkInputValidities";
import {
  getProductLocation,
  formatNameForDb,
  formatLocationForDb,
  formatPriceForDb,
  formatTagsForInput,
  formatTagsForDb,
  formatImgsForDb,
  displayCreationDate,
  updateAttributesEdited
} from "./helper-functions";

const cloneDeep = require("clone-deep");

export default function(action, attribute) {
  if (action === "submit") {
    console.log('is submit');
    console.log(this.editProductForm.attributeEditing);
    let product = cloneDeep(this.product);

    if (this.editProductForm.attributeEditing === "name") {
      if (!nameInputIsInvalid(this.editProductForm.name.new)) {
        product.name["S"] = formatNameForDb(this.editProductForm.name.new);
        this.product = cloneDeep(product);

        this.editProductForm.attributesEdited = updateAttributesEdited(
          this.editProductForm.attributesEdited,
          this.editProductForm.attributeEditing
        );

        this.editProductForm.attributeEditing = false;
      } else {
        this.editProductForm.name.invalidity = nameInputIsInvalid(
          this.editProductForm.name.new
        );
      }
    } else if (this.editProductForm.attributeEditing === "productPath") {
      console.log("is productPath");
      console.log(this.editProductForm.location.original);
      console.log(this.editProductForm.location.new);
      if (!locationInputIsInvalid(this.editProductForm.location.new)) {
        product.productPath["S"] = formatLocationForDb(
          this.editProductForm.location.new,
          this.product.productPath["S"].split("#")[1]
        );
        this.product = cloneDeep(product);

        this.editProductForm.attributesEdited = updateAttributesEdited(
          this.editProductForm.attributesEdited,
          this.editProductForm.attributeEditing
        );

        this.editProductForm.attributeEditing = false;
      } else {
        this.editProductForm.location.invalidity = locationInputIsInvalid(
          this.editProductForm.location.new
        );
      }
    } else if (this.editProductForm.attributeEditing === "price") {
      if (!priceInputIsInvalid(this.editProductForm.price.new)) {
        product.price["N"] = `${formatPriceForDb(+this.editProductForm.price.new)}`;
        this.product = cloneDeep(product);

        this.editProductForm.attributesEdited = updateAttributesEdited(
          this.editProductForm.attributesEdited,
          this.editProductForm.attributeEditing
        );

        this.editProductForm.attributeEditing = false;
      } else {
        this.editProductForm.price.invalidity = priceInputIsInvalid(
          this.editProductForm.location.new
        );
      }
    } else if (this.editProductForm.attributeEditing === "tags") {
      if (!tagsInputIsInvalid(this.editProductForm.tags.new)) {
        product.tags["L"] = formatTagsForDb(this.editProductForm.tags.new);
        this.product = cloneDeep(product);

        this.editProductForm.attributesEdited = updateAttributesEdited(
          this.editProductForm.attributesEdited,
          this.editProductForm.attributeEditing
        );

        this.editProductForm.attributeEditing = false;
      } else {
        this.editProductForm.tags.invalidity = tagsInputIsInvalid(
          this.editProductForm.tags.new
        );
      }
    } else if (this.editProductForm.attributeEditing === "createdAt") {
      if (!createdAtInputIsInvalid(this.editProductForm.createdAt.new)) {
        product.createdAt["N"] = `${+new Date(this.editProductForm.createdAt.new)}`;
        this.product = cloneDeep(product);

        this.editProductForm.attributesEdited = updateAttributesEdited(
          this.editProductForm.attributesEdited,
          this.editProductForm.attributeEditing
        );

        this.editProductForm.attributeEditing = false;
      } else {
        this.editProductForm.createdAt.invalidity = createdAtInputIsInvalid(
          this.editProductForm.createdAt.new
        );
      }
    } else if (this.editProductForm.attributeEditing === "options") {
      if (optionsInputsAreInvalid(this.editProductForm.options.new).length === 0) {
        product.options["L"] = this.editProductForm.options.new.map(
          optionCombo => {
            optionCombo["M"].inStock["N"] = `${Math.floor(+optionCombo["M"].inStock["N"])}`;

            return optionCombo;
          }
        );
        this.product = cloneDeep(product);

        this.editProductForm.attributesEdited = updateAttributesEdited(
          this.editProductForm.attributesEdited,
          this.editProductForm.attributeEditing
        );

        this.editProductForm.attributeEditing = false;
      } else {
        this.editProductForm.options.invalidity = cloneDeep(
          optionsInputsAreInvalid(this.editProductForm.options.new)
        );
      }
    } else if (this.editProductForm.attributeEditing === "images") {
      if (imagesInputsAreInvalid(this.editProductForm.images.new).length === 0) {
        console.log('no inv');
        product.images["L"] = formatImgsForDb(this.editProductForm.images.new);
        console.log(product.images["L"]);
        this.product = cloneDeep(product);

        this.editProductForm.attributesEdited = updateAttributesEdited(
          this.editProductForm.attributesEdited,
          this.editProductForm.attributeEditing
        );

        this.editProductForm.attributeEditing = false;
      } else {
        console.log('inv');
        this.editProductForm.images.invalidity = cloneDeep(
          imagesInputsAreInvalid(this.editProductForm.images.new)
        );
      }
    }
  } else if (action === "cancel") {
    this.editProductForm.attributeEditing = false;
  } else if (action === "edit") {
    const product = cloneDeep(this.product);

    this.editProductForm.attributeEditing = attribute;

    if (attribute === "name") {
      let originalValue = product.name["S"];

      this.editProductForm.name.original = originalValue;
      this.editProductForm.name.new = originalValue;
    } else if (attribute === "productPath") {
      let originalValue = getProductLocation(product.productPath["S"]);

      this.editProductForm.location.original = originalValue;
      this.editProductForm.location.new = originalValue;
    } else if (attribute === "price") {
      let originalValue = product.price["N"];

      this.editProductForm.price.original = originalValue;
      this.editProductForm.price.new = originalValue;
    } else if (attribute === "tags") {
      let originalValue = formatTagsForInput(product.tags["L"]);

      this.editProductForm.tags.original = originalValue;
      this.editProductForm.tags.new = originalValue;
    } else if (attribute === "createdAt") {
      let originalValue = displayCreationDate(product.createdAt["N"]);

      this.editProductForm.createdAt.original = originalValue;
      this.editProductForm.createdAt.new = originalValue;
    } else if (attribute === "options") {
      let originalValue = product.options["L"];

      this.editProductForm.options.original = cloneDeep(originalValue);
      this.editProductForm.options.new = cloneDeep(originalValue);
    } else if (attribute === "images") {
      let originalValue = product.images["L"];

      this.editProductForm.images.original = cloneDeep(originalValue);
      this.editProductForm.images.new = cloneDeep(originalValue);
    }
  }
}
