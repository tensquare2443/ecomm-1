const cloneDeep = require("clone-deep");

export default function(e) {
  const imgData = e.currentTarget.dataset.id.split("_");
  console.log(imgData);
  const color = imgData[0];
  const imgType = imgData[1];
  let images = cloneDeep(this.addProductForm.images);

  if (imgType === "thumbnailImg") {
    for (var i = 0; i < images.length; i++) {
      if (images[i].color === color) {
        images[i].thumbnailImg = {
          file: "",
          name: "",
          invalidity: false,
          dragOver: false
        };
        break;
      }
    }
  } else if (imgType === "mainImg") {
    const mainImgIndex = imgData[2];

    for (var j = 0; j < images.length; j++) {
      if (images[j].color === color) {
        console.log(j);
        const imgRanking = images[j].mainImgs[mainImgIndex].ranking;
        console.log(mainImgIndex);

        images[j].mainImgs[mainImgIndex] = {
          file: { value: "", invalidity: "" },
          name: "",
          ranking: imgRanking,
          invalidity: false,
          dragOver: false
        };
        break;
      }
    }
  }

  this.addProductForm.images = images;

  console.log(this.addProductForm.images[0].mainImgs[0].file);
}
