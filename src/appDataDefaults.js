export let addProductFormDefault = {
  page: 1,
  name: {
    value: "",
    invalidity: false
  },
  price: {
    value: "",
    invalidity: false
  },
  location: {
    value: "",
    invalidity: false
  },
  options: [
    {
      name: {
        value: "Color",
        invalidity: false
      },
      values: {
        value: "",
        invalidity: false
      }
    }
  ],
  sale: false,
  saleDetails: {
    start: {
      value: "",
      invalidity: false
    },
    end: {
      value: "",
      invalidity: false
    }
  },
  tags: {
    value: "",
    invalidity: false
  },
  pageInvalidities: {
    1: false,
    2: false,
    3: false,
    4: false
  },
  optionComboDetails: false,
  images: false,
  submitting: false
};

export let editProductFormDefault = {
  attributeEditing: false,
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
  price: {
    original: "",
    new: "",
    invalidity: false
  },
  tags: {
    original: "",
    new: "",
    invalidity: false
  },
  createdAt: {
    original: "",
    new: "",
    invalidity: false
  },
  options: {
    original: [],
    new: [],
    invalidity: []
  },
  images: {
    original: [],
    new: [],
    invalidity: []
  },
  attributesEdited: [],
  deleteStatus: false,
  uploadingEdits: false
};
