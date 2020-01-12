export default function(dataKeys) {
  dataKeys.forEach(dataKey => {
    switch (dataKey) {
      case "addProductForm":
        this.addProductForm = cloneDeep(addProductFormDefault);
        break;
      default:
        break;
    }
  });
}
