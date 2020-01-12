import setApfImages from "./setApfImages";
import getOptionComboDetails from "./getOptionComboDetails";

const cloneDeep = require("clone-deep");

export default function(pageTo, pageFrom) {
  if (pageTo === 1) {
    this.addProductForm.optionComboDetails = false;
    this.addProductForm.images = false;
  } else if (pageTo === 2) {
    if (pageFrom < 2) {
      this.addProductForm.optionComboDetails = getOptionComboDetails(
        this.addProductForm.options
      );
    }

    this.addProductForm.images = false;
  } else if (pageTo === 3) {
    if (pageFrom < 3) {
      let colors = this.addProductForm.options[0].values.value.split(",");

      this.addProductForm.images = setApfImages(colors);
    }
  } else if (pageTo === 4) {
    let imgs = cloneDeep(this.addProductForm.images);

    for (var i = 0; i < imgs.length; i++) {
      let mainImgsSorted = imgs[i].mainImgs.sort((imgA, imgB) => {
        return imgA.ranking.value - imgB.ranking.value;
      });

      mainImgsSorted = mainImgsSorted.map((mainImg, index) => {
        mainImg.ranking.value = index + 1;

        return mainImg;
      });

      imgs[i].mainImgs = mainImgsSorted;
    }

    this.addProductForm.images = imgs;
  }

  this.addProductForm.page = pageTo;
}
