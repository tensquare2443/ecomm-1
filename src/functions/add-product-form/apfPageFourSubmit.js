import { apiKey, addProductEndpoint, s3Bucket } from "../../appVars.js";
const AWS = require("aws-sdk");

export default function(e) {
  e.preventDefault();

  // const bucket = s3Bucket;
  const region = "us-east-1";
  const poolId = "us-east-1:6a47fbfb-8228-4d96-9d80-dee5341b9967";

  AWS.config.update({
    region,
    credentials: new AWS.CognitoIdentityCredentials({
      IdentityPoolId: poolId
    })
  });

  const s3 = new AWS.S3({
    apiVersion: "2006-03-01",
    params: { Bucket: s3Bucket }
  });
  const cloneDeep = require("clone-deep");
  const colorImgs = cloneDeep(this.addProductForm.images);
  let imgsCount = 0;

  colorImgs.forEach(colorImg => {
    imgsCount++;
    imgsCount = imgsCount + colorImg.mainImgs.length;
  });

  const uuidv1 = require("uuid/v1");
  const productId = uuidv1();
  const fileExtensions = {
    "image/png": "png",
    "image/jpeg": "jpg"
  };
  let imgUrls = {};

  const addUrlsToApfData = (imgUrls, apfData) => {
    for (var i = 0; i < Object.keys(imgUrls).length; i++) {
      let color = Object.keys(imgUrls)[i].split("_")[0];
      let imgType = Object.keys(imgUrls)[i].split("_")[1];

      if (imgType === "thumbnailImg") {
        for (var j = 0; j < apfData.images.length; j++) {
          if (apfData.images[j].color === color) {
            apfData.images[j].thumbnailImg.url =
              imgUrls[Object.keys(imgUrls)[i]];
            break;
          }
        }
      } else if (imgType === "mainImg") {
        let ranking = +Object.keys(imgUrls)[i].split("_")[2];

        for (var k = 0; k < apfData.images.length; k++) {
          if (apfData.images[k].color === color) {
            for (var l = 0; l < apfData.images[k].mainImgs.length; l++) {
              if (apfData.images[k].mainImgs[l].ranking.value === ranking) {
                apfData.images[k].mainImgs[l].url =
                  imgUrls[Object.keys(imgUrls)[i]];
                break;
              }
            }
            break;
          }
        }
      }
    }

    return apfData;
  };

  const formatDbItem = (apfData, productId) => {
    const formatItemImgs = imgs => {
      return imgs.map(colorImgs => {
        let colorImgsReformatted = {
          color: colorImgs.color,
          thumbnailImg: colorImgs.thumbnailImg.url,
          mainImgs: []
        };

        colorImgs.mainImgs.forEach(mainImg => {
          colorImgsReformatted.mainImgs.push({
            ranking: mainImg.ranking.value,
            url: mainImg.url
          });
        });

        return colorImgsReformatted;
      });
    };
    const formatItemOptions = options => {
      return options.map(optionCombo => {
        let optionComboReformatted = {};

        Object.keys(optionCombo).forEach(optionComboKey => {
          if (optionComboKey === "inStock") {
            optionComboReformatted[optionComboKey] =
              +optionCombo[optionComboKey].value;
          } else {
            optionComboReformatted[optionComboKey] =
              optionCombo[optionComboKey];
          }
        });

        return optionComboReformatted;
      });
    };
    const formatItemProductPath = (location, productId) => {
      let productPath = [];

      productPath.push("[]");
      console.log(`location: ${location}`);
      location.split("/").forEach(folder => productPath.push(`[${folder}]`));
      productPath.push(`#${productId}#`);

      return productPath.join("_");
    };
    const formatItemProductSale = (saleStatus, saleDetails) => {
      // if (saleStatus) {
      //   return [saleDetails.start.value, saleDetails.end.value];
      // } else {
        return [];
      // }
    };
    const formatItemProductTags = tags => {
      let tagsFormatted = [];

      console.log(`tags: ${tags}`);

      if (tags !== "") {
        tags.split(",").forEach(tag => tagsFormatted.push(tag));
      }

      return tagsFormatted;
    };

    return AWS.DynamoDB.Converter.marshall({
      // department: apfData.location.value.split("/")[0],
      department: "products",
      price: +apfData.price.value,
      images: formatItemImgs(cloneDeep(apfData.images)),
      name: apfData.name.value,
      options: formatItemOptions(cloneDeep(apfData.optionComboDetails)),
      productPath: formatItemProductPath(apfData.location.value, productId),
      productSale: formatItemProductSale(
        apfData.sale,
        cloneDeep(apfData.saleDetails)
      ),
      tags: formatItemProductTags(apfData.tags.value),
      createdAt: +new Date()
    });
  };

  const uploadItemToDb = (imgUrls, apfData) => {
    console.log("uploading");

    apfData = addUrlsToApfData(imgUrls, apfData);
    apfData = formatDbItem(apfData, productId);

    // console.log(`APFDATA:`);
    // console.log(apfData);
    // return;

    fetch(addProductEndpoint, {
      method: "POST",
      headers: {
        "X-Api-Key": apiKey
      },
      body: JSON.stringify(apfData)
    })
      .then(res => res.json())
      .then(json => {
        // console.log(`json: ${JSON.stringify(json)}`);
        this.addProductForm.submitting = false;
        this.$router.push("/admin/products");
      })
      .catch(e => {
        // console.log(`e: ${e}`);
        this.addProductForm.submitting = false;
      });
  };

  const uploadImg = (imgFile, productId, color, category, index, type) => {
    if (category === "mainImg") {
      var filePath = `products/${productId}/${color}_${category}_${index}.${fileExtensions[type]}`;
    } else {
      filePath = `products/${productId}/${color}_${category}.${fileExtensions[type]}`;
    }

    s3.putObject(
      {
        Body: imgFile,
        Key: filePath,
        ContentType: type
      },
      (err, data) => {
        if (err) console.log(err);

        if (category === "mainImg") {
          imgUrls[
            `${color}_${category}_${index}`
          ] = `https://${s3Bucket}.s3.amazonaws.com/${filePath}`;
        } else {
          imgUrls[
            `${color}_${category}`
          ] = `https://${s3Bucket}.s3.amazonaws.com/${filePath}`;
        }

        // console.log(JSON.stringify(imgUrls));

        if (Object.keys(imgUrls).length === imgsCount) {
          console.log(this.addProductForm);
          uploadItemToDb(imgUrls, cloneDeep(this.addProductForm));
        }
      }
    );
  };

  this.addProductForm.submitting = true;

  for (var i = 0; i < colorImgs.length; i++) {
    let color = colorImgs[i].color;
    let colorImgThumbnailImg = colorImgs[i].thumbnailImg.file;
    let type = colorImgs[i].thumbnailImg.file.type;

    uploadImg(
      colorImgThumbnailImg,
      productId,
      color,
      "thumbnailImg",
      null,
      type
    );
    for (var j = 0; j < colorImgs[i].mainImgs.length; j++) {
      let colorImgMainImg = colorImgs[i].mainImgs[j].file;
      let mainImgRanking = colorImgs[i].mainImgs[j].ranking.value;
      type = colorImgs[i].mainImgs[j].file.type;

      uploadImg(
        colorImgMainImg,
        productId,
        color,
        "mainImg",
        mainImgRanking,
        type
      );
    }
  }
}
