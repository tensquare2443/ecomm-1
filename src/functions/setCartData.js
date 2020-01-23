import { s3Bucket } from "../appVars";

export default function(action, payload) {
  switch (action) {
    case "ADD_PRODUCT":
      let product = JSON.parse(JSON.stringify(this.product));
      let productData = JSON.parse(JSON.stringify(this.productData));
      let cartData = JSON.parse(JSON.stringify(this.cartData));
      const productPath = product.productPath["S"];
      const quantity = productData.addToCartQuantity;
      const name = product.name["S"];
      const price = product.price["N"];
      let options = {};

      options.Color = productData.color;

      Object.keys(productData.selectedOptions).forEach(option => {
        options[option] = productData.selectedOptions[option];
      });

      let productIndexInCart = false;
      for (var i = 0; i < cartData.products.length; i++) {
        if (
          cartData.products[i].productPath === productPath &&
          JSON.stringify(cartData.products[i].options) ===
            JSON.stringify(options)
        ) {
          productIndexInCart = i;
          break;
        }
      }

      for (var j = 0; j < productData.mainImgs.length; j++) {
        if (productData.mainImgs[j].ranking === 1) {
          var imgUrlEnd = productData.mainImgs[j].url.replace(`https://${s3Bucket}`, "");
          break;
        }
      }
      /*
      get img to show on cart page, and put into cartData below.
      */

      if (typeof productIndexInCart === "number") {
        cartData.products[productIndexInCart].quantity += quantity;
      } else {
        cartData.products.push({
          productPath,
          quantity,
          options,
          imgUrlEnd,
          name,
          price//,
          // product
        });
      }

      this.cartData = cartData;
      sessionStorage.setItem("ecommAppCartData", JSON.stringify(cartData));
      this.setProductData("TOGGLE_ADDED_TO_CART_MODAL");
      break;
    case "REMOVE_PRODUCT":
      cartData = JSON.parse(JSON.stringify(this.cartData));
      const index = payload.index;

      cartData.products.splice(index, 1);

      this.cartData = cartData;
      sessionStorage.setItem("ecommAppCartData", JSON.stringify(cartData));
      break;
    default:
      break;
  }

  // let cartData = JSON.parse(JSON.stringify(this.cartData));

  // this.cartData = cartData;
}
