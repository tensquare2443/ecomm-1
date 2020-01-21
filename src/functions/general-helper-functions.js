export const getDepartment = function(productPath) {
  let department = productPath
    .split("_")[1]
    .replace("[", "")
    .replace("]", "");

  return department
    .split("")
    .map((letter, index) => {
      if (index === 0) {
        return letter.toUpperCase();
      } else return letter;
    })
    .join("");
};

export const getPath = function(productPath) {
  productPath = productPath
    .replace("[]_", "")
    .split("_")
    .map(pathSection => pathSection.replace(/[\][#]/g, ""));

  productPath = productPath.slice(0, productPath.length - 1);

  return productPath.join("/");
};

export const getCreationDate = function(date) {
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
  const dateElements = new Date(date).toString().split(" ");
  const month = months[dateElements[1]];
  const day = dateElements[2];
  const year = dateElements[3];

  return `${month}/${day}/${year}`;
};

export const getProductId = function(productPath) {
  return productPath.split("#")[1];
};

export const formatProductPath = function(productPath) {
  return productPath
    .replace("[]_", "")
    .split("_")
    .map(pathSection => pathSection.replace(/[\][#]/g, ""))
    .join("/");
};

export const setProductsData = products => {
  let productsData = {};

  products.forEach(product => {
    let productPath = product.productPath["S"];
    let selectedColor = product.images["L"][0]["M"].color["S"];

    productsData[productPath] = { selectedColor };
  });

  return productsData;
};

export const getBreadcrumbLinks = function(route, productName) {
  if (productName) {
    var routeSections = route.replace("/product/", "").split("/");
    routeSections.splice(routeSections.length - 1, 1, productName);
  } else {
    routeSections = route.replace("/products/", "").split("/");
  }
  // let routeSections = route.replace("/products/", "").split("/");
  let breadcrumbLinks = [];
  let routeSectionsReduced = routeSections.reduce((total, current) => {
    breadcrumbLinks.push(total);

    return `${total}/${current}`;
  });

  breadcrumbLinks.push(routeSectionsReduced);

  breadcrumbLinks = breadcrumbLinks.map(link => {
    let linkToDisplay = link.split("/")[link.split("/").length - 1];
    let linkReformatted = linkToDisplay
      .split("")
      .map((letter, index) => {
        if (index === 0) {
          return letter.toUpperCase();
        } else if (linkToDisplay[index - 1] === "-") {
          return letter.toUpperCase();
        } else return letter;
      })
      .join("");

    return [link, linkReformatted];
  });

  return breadcrumbLinks;
};

export const getProductMainImgUrl = function(product) {
  const selectedColor = this.productsData[product.productPath["S"]]
    .selectedColor;

  for (var i = 0; i < product.images["L"].length; i++) {
    let currentColor = product.images["L"][i]["M"].color["S"];
    if (currentColor === selectedColor) {
      let colorMainImgs = product.images["L"][i]["M"].mainImgs["L"];

      for (var j = 0; j < colorMainImgs.length; j++) {
        let currentMainImgRanking = colorMainImgs[j]["M"].ranking["N"];

        if (currentMainImgRanking === "1") {
          let currentMainImgUrl = colorMainImgs[j]["M"].url["S"];

          return currentMainImgUrl;
        }
      }
    }
  }
};

export const getThumbnailUrl = function(colorImgs) {
  const thumbnailUrl = colorImgs["M"].thumbnailImg["S"];

  return thumbnailUrl;
};

export const formatProductPagePath = function(productPath) {
  return `/product${productPath
    .replace(/[\[\]#]/g, "")
    .split("_")
    .join("/")}`;
};

export const getProductPath = function(productPath) {
  productPath = productPath
    .replace(/[\][#]/g, "")
    .split("_")
    .join("/");

  return `/product${productPath}`;
};
