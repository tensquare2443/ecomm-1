import cleanFormValue from "../add-product-form/cleanFormValues";

export const getProductLocation = productPath =>
  productPath
    .replace("[]_", "")
    .split("_#")[0]
    .split("_")
    .map(pathSection => pathSection.replace(/[\][]/g, ""))
    .join("/");

export const formatNameForDb = name => {
  return cleanFormValue(name, ["removeMultiSpaces", "trimStart", "trimEnd"]);
};

export const formatLocationForDb = (productUrlPath, productId) => {
  productUrlPath = cleanFormValue(productUrlPath, [
    "removeMultiSlashes",
    "removeSlashSpaces",
    "trimStart",
    "trimEnd"
  ]);

  let productDbPath = `/${productUrlPath}/${productId}`.split("/");

  return productDbPath
    .map((pathSection, i) => {
      if (i === productDbPath.length - 1) {
        return `#${pathSection}#`;
      } else return `[${pathSection}]`;
    })
    .join("_");
};

export const reformatTags = tags => tags.map(tag => tag["S"]).join(", ");

export const displayCreationDate = unixDate => {
  const months = {
    Jan: "01",
    Feb: "02",
    Mar: "03",
    Apr: "04",
    May: "05",
    Jun: "06",
    Jul: "07",
    Aug: "08",
    Sep: "09",
    Oct: "10",
    Nov: "11",
    Dec: "12"
  };

  let dateElements = new Date(+unixDate).toString().split(" ");

  const month = months[dateElements[1]];
  const day = dateElements[2];
  const year = dateElements[3];

  return `${month}/${day}/${year}`;
};

export const formatPriceForDb = price => {
  price = price.toString();

  if (price.includes(".")) {
    price = +price;
    price = price.toFixed(2);

    return price;
  } else return +price;
};

export const updateAttributesEdited = (attributesEdited, newAttribute) => {
  if (!attributesEdited.includes(newAttribute)) {
    attributesEdited.push(newAttribute);
  }

  return attributesEdited;
};

export const formatTagsForInput = tags => {
  return tags.map(tag => tag["S"]).join(",");
};

export const formatTagsForDb = tags => {
  tags = cleanFormValue(tags, [
    "removeMultiSpaces",
    "removeMultiCommas",
    "removeCommaSpaces",
    "trimStart",
    "trimEnd"
  ])
    .split(",")
    .map(tag => {
      return { S: tag };
    });

  if (tags.length === 1 && tags[0]["S"] === "") {
    tags = [];
  }

  return tags;
};

export const formatImgsForDb = imgs => {
  for (var i = 0; i < imgs.length; i++) {
    imgs[i]["M"].mainImgs["L"] = imgs[i]["M"].mainImgs["L"]
      .sort((mainImgA, mainImgB) => {
        let current = mainImgA["M"].ranking["N"];
        let next = mainImgB["M"].ranking["N"];

        return current - next;
      })
      .map((mainImg, mainImgI) => {
        mainImg["M"].ranking["N"] = `${mainImgI + 1}`;

        return mainImg;
      });
  }

  return imgs;
};

export const getDbProductPath = (attributesEdited, originalPath, newPath) => {
  if (attributesEdited.includes("productPath")) {
    return formatLocationForDb(originalPath, newPath.split("#")[1]);
  } else return newPath;
};
