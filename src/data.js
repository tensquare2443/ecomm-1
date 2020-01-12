import { addProductFormDefault } from "./appDataDefaults";

const cloneDeep = require("clone-deep");

export default function() {
  return {
    products: [],
    productsLoading: false,
    product: false,
    productLoading: false,
    authorizingUser: false,
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
    editProductForm: {
      attributeEditing: false,
      vModelTest: 'myvmod',
      name: {
        original: "",
        new: "",
        invalidity: false
      },
      location: {
        original: "",
        new: "",
        invalidity: false
      },
      attributesEdited: []
    }
  };
}
