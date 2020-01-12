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
    // let colors = this.addProductForm.options[0].values.value.split(",");

    // const setApfImages = colors => colors.map(color => {
    //   return {
    //     color,
    //     thumbnailImg: {
    //       file: "",
    //       name: "",
    //       invalidity: false,
    //       dragOver: false
    //     },
    //     mainImgs: [
    //       {
    //         file: { value: "", invalidity: "" },
    //         name: "",
    //         ranking: { value: "", invalidity: "" },
    //         invalidity: false,
    //         dragOver: false
    //       }
    //     ]
    //   };
    // });

    // this.addProductForm.images = setApfImages(colors);

    // this.addProductForm.images = colors.map(color => {
    //   return {
    //     color,
    //     thumbnailImg: {
    //       file: "",
    //       name: "",
    //       invalidity: false,
    //       dragOver: false
    //     },
    //     mainImgs: [
    //       {
    //         file: { value: "", invalidity: "" },
    //         name: "",
    //         ranking: { value: "", invalidity: "" },
    //         invalidity: false,
    //         dragOver: false
    //       }
    //     ]
    //   };
    // });

    this.navigateApf(3, 2);
  }
}
