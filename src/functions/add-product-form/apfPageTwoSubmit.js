// import setApfImages from "./setApfImages";

export default function(e) {
  e.preventDefault();

  let pageTwoValidity = true;

  this.addProductForm.optionComboDetails = this.addProductForm.optionComboDetails.map(
    comboDetails => {
      if (
        isNaN(comboDetails.inStock.value) ||
        comboDetails.inStock.value === ""
      ) {
        pageTwoValidity = false;
        comboDetails.inStock.invalidity = "Please enter a valid number.";
      } else {
        comboDetails.inStock.invalidity = false;
      }

      return comboDetails;
    }
  );

  if (pageTwoValidity) {
    this.navigateApf(3, 2);
    this.addProductForm.pageInvalidities[2] = false;
  } else {
    this.addProductForm.pageInvalidities[2] = "At least one error exists above.";
  }
}
