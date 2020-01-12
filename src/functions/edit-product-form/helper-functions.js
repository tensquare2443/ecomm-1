export const getProductLocation = productPath =>
  productPath
    .replace("[]_", "")
    .split("_#")[0]
    .split("_")
    .map(pathSection => pathSection.replace(/[\][]/g, ""))
    .join("/");

export const formatLocationForDb = (productUrlPath, productId) => {
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

export const reformatCreationDate = unixDate => {
  const months = {
    Jan: "01",
    Jan: "02",
    Jan: "03",
    Jan: "04",
    Jan: "05",
    Jan: "06",
    Jan: "07",
    Jan: "08",
    Jan: "09",
    Jan: "10",
    Jan: "11",
    Jan: "12"
  };

  let dateElements = new Date(+unixDate).toString().split(" ");

  const month = months[dateElements[1]];
  const day = dateElements[2];
  const year = dateElements[3];

  return `${month}/${day}/${year}`;
};
