export default function(e) {
  e.preventDefault();

  let pageTwoValidity = true;

  this.addProductForm.optionComboDetails = this.addProductForm.optionComboDetails.map(
    comboDetails => {
      if (isNaN(comboDetails.inStock.value) || comboDetails.inStock.value === "") {
        pageTwoValidity = false;
        comboDetails.inStock.invalidity = "Please enter a valid number.";
      } else {
        comboDetails.inStock.invalidity = false;
      }

      return comboDetails;
    }
  );

  if (pageTwoValidity) {
    //go to next (img) page
    this.navigateAddProductForm(3);
  }
}
