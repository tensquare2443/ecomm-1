const cloneDeep = require("clone-deep");

export default function(e) {
  const dbProductPath = e.currentTarget.getAttribute("productpath");
  const colorClicked = e.currentTarget.getAttribute("color");
  let productsData = cloneDeep(this.productsData);

  productsData[dbProductPath].selectedColor = colorClicked;
  this.productsData = productsData;
}
