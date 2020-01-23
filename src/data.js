import {
  addProductFormDefault,
  editProductFormDefault
} from "./appDataDefaults";

const cloneDeep = require("clone-deep");

export default function() {
  return {
    products: [],
    productsData: false,
    productsLoading: false,
    product: false,
    productData: false,
    productLoading: false,
    cartData: {
      products: []
    },
    authorizingUser: false,
    navData: {
      dropdownSm: false,
      dropdownLgOff: false,
      productsDropdownSm: false,
      productsDropdownSmDept: false
    },
    navDropdown: false,
    user: false,
    signInForm: {
      username: {
        value: "",
        validity: ""
      },
      password: {
        value: "",
        validity: ""
      },
      formInvalidity: false,
      submitting: false
    },
    addProductForm: cloneDeep(addProductFormDefault),
    adminSubRoute: false,
    editProductForm: cloneDeep(editProductFormDefault)
  };
}
