const cloneDeep = require("clone-deep");

export default function(e) {
  e.preventDefault();

  let pageThreeValidity = true;

  let imgs = cloneDeep(this.addProductForm.images);

  for (var i = 0; i < imgs.length; i++) {
    if (imgs[i].thumbnailImg.file === "") {
      console.log(i);
      imgs[i].thumbnailImg.invalidity =
        "Please upload a thumbnail image for this color.";
      pageThreeValidity = false;
    } else {
      imgs[i].thumbnailImg.invalidity = false;
    }

    let mainImgs = [];

    for (var j = 0; j < imgs[i].mainImgs.length; j++) {
      let mainImg = cloneDeep(imgs[i].mainImgs[j]);

      if (mainImg.file.value !== "" || mainImg.ranking.value !== "") {
        if (mainImg.file.value === "") {
          mainImg.file.invalidity = "Please upload a main image.";
          pageThreeValidity = false;
        } else {
          mainImg.file.invalidity = false;
        }
        if (mainImg.ranking.value === "") {
          mainImg.ranking.invalidity =
            "Please enter a ranking for this main image.";
          pageThreeValidity = false;
        } else if (isNaN(mainImg.ranking.value)) {
          mainImg.ranking.invalidity =
            "Please enter a ranking in number format for this main image.";
          pageThreeValidity = false;
        } else {
          mainImg.ranking.invalidity = false;
        }

        mainImgs.push(mainImg);
      }
    }

    if (mainImgs.length === 0) {
      mainImgs.push({
        file: { value: "", invalidity: "Please upload a main image." },
        name: "",
        ranking: {
          value: "",
          invalidity: "Please enter a ranking for this main image."
        },
        invalidity: false,
        dragOver: false
      });

      pageThreeValidity = false;
    }

    imgs[i].mainImgs = mainImgs;
  }

  this.addProductForm.images = imgs;

  if (pageThreeValidity) {
    this.navigateApf(4, 3);
  }
}
