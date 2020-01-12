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
  optionComboDetails: false,
  images: false,
  submitting: false
};
