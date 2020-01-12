const cloneDeep = require("clone-deep");

export default function(e) {
      e.preventDefault();

      if (e.type === "input") {
        var imgFile = e.target.files[0];
        var imgData = e.currentTarget.getAttribute("id").split("_");
      } else if (e.type === "drop") {
        imgFile = e.dataTransfer.files[0];
        imgData = e.currentTarget.getAttribute("for").split("_");
      }

      const color = imgData[0];
      const imgType = imgData[1];
      let images = cloneDeep(this.addProductForm.images);

      if (imgType === "thumbnailImg") {
        for (var i = 0; i < images.length; i++) {
          if (images[i].color === color) {
            images[i].thumbnailImg.file = imgFile;
            images[i].thumbnailImg.name = imgFile.name;
            images[i].thumbnailImg.dragOver = false;
            break;
          }
        }
      } else if (imgType === "mainImg") {
        const mainImgIndex = imgData[2];

        for (var j = 0; j < images.length; j++) {
          if (images[j].color === color) {
            images[j].mainImgs[mainImgIndex].file = imgFile;
            images[j].mainImgs[mainImgIndex].name =
              imgFile.name;
            images[j].mainImgs[mainImgIndex].dragOver = false;
            break;
          }
        }
      }

      this.addProductForm.images = images;
    }