const cloneDeep = require("clone-deep");

export default function(action, payload) {
  if (typeof action === "object") {
    if (this.productData.quantityDropdown) {
      let productData = cloneDeep(this.productData);
      productData.quantityDropdown = false;
      this.productData = productData;
      return;
    } else {
      if (action.target.getAttribute("qty-drop") === "true") {
        let productData = cloneDeep(this.productData);
        productData.quantityDropdown = true;
        this.productData = productData;
        return;
      }
    }
  }

  const setMainImgs = payload => {
    let product = payload.product;
    let color = payload.color;

    for (var i = 0; i < product.images["L"].length; i++) {
      if (product.images["L"][i]["M"].color["S"] === color) {
        var colorImgData = product.images["L"][i]["M"];
        break;
      }
    }

    let mainImgs = [];

    colorImgData.mainImgs["L"].forEach((mainImgData, mainImgI) => {
      let ranking = +mainImgData["M"].ranking["N"];
      let url = mainImgData["M"].url["S"];
      let display = ranking === 1;

      mainImgs.push({
        ranking,
        url,
        display
      });
    });

    return mainImgs.sort((nextVal, currVal) => {
      let nextRanking = nextVal.ranking;
      let currRanking = currVal.ranking;

      if (nextRanking < currRanking) {
        return -1;
      } else return 1;
    });
  };
  const setSelectedOptions = payload => {
    let product = payload.product;
    let selectedOptions = {};

    Object.keys(product.options["L"][0]["M"]).forEach(optionKey => {
      if (optionKey !== "Color" && optionKey !== "inStock") {
        selectedOptions[optionKey] =
          product.options["L"][0]["M"][optionKey]["S"];
      }
    });

    return selectedOptions;
  };

  switch (action) {
    case "INITIALIZE":
      let color = payload.color;

      this.productData = {
        color,
        mainImgs: setMainImgs(payload),
        selectedOptions: setSelectedOptions(payload),
        addToCartQuantity: 1,
        quantityDropdown: false,
        addedModal: {
          display: false
        }
      };
      break;
    case "CHANGE_DISPLAYED_IMAGE":
      let productData = cloneDeep(this.productData);
      const newImgRanking = payload.ranking;

      for (var i = 0; i < productData.mainImgs.length; i++) {
        if (productData.mainImgs[i].ranking === newImgRanking) {
          productData.mainImgs[i].display = true;
        } else {
          productData.mainImgs[i].display = false;
        }
      }

      this.productData = productData;
      break;
    case "CHANGE_DISPLAYED_COLOR":
      productData = cloneDeep(this.productData);

      productData.color = payload.color;
      productData.mainImgs = setMainImgs(payload);
      this.productData = productData;
      break;
    case "CHANGE_SELECTED_OPTION":
      productData = cloneDeep(this.productData);
      const newOptionKey = payload.option.name;
      const newOptionValue = payload.option.value;

      productData.selectedOptions[newOptionKey] = newOptionValue;

      this.productData = productData;
      break;
    case "CHANGE_CART_QUANTITY":
      // console.log("change");
      productData = cloneDeep(this.productData);
      productData.addToCartQuantity = +payload.number;

      this.productData = productData;
      break;
    case "TOGGLE_ADDED_TO_CART_MODAL":
      productData = cloneDeep(this.productData);
      productData.addedModal.display = !productData.addedModal.display;

      if (productData.addedModal.display) {
        document.querySelector('body').style.overflow = "hidden";
      } else {
        document.querySelector('body').style.overflow = "initial";
      }

      this.productData = productData;
      break;
    default:
      return false;
  }
}
