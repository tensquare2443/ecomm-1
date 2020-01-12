const cloneDeep = require("clone-deep");

export default function(e) {
      e.preventDefault();
      // const imgData = e.currentTarget.getAttribute("for").split(" ");
      const imgData = e.currentTarget.getAttribute("for").split("_");
      const color = imgData[0];
      const imgType = imgData[1];
      const eventType = e.type;
      let images = cloneDeep(this.addProductForm.images);

      if (imgType === "thumbnailImg") {
        for (var i = 0; i < images.length; i++) {
          if (images[i].color === color) {
            if (eventType === "dragleave") {
              images[i].thumbnailImg.dragOver = false;
            } else {
              images[i].thumbnailImg.dragOver = true;
            }
            break;
          }
        }
      } else if (imgType === "mainImg") {
        const mainImgIndex = imgData[2];

        for (var j = 0; j < images.length; j++) {
          if (images[j].color === color) {
            if (eventType === "dragleave") {
              images[j].mainImgs[mainImgIndex].dragOver = false;
            } else {
              images[j].mainImgs[mainImgIndex].dragOver = true;
            }
            break;
          }
        }
      }

      this.addProductForm.images = images;
    }