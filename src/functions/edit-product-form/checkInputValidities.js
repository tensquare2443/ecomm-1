import cleanFormValue from "../add-product-form/cleanFormValues";

export const nameInputIsInvalid = inputValue => {
  inputValue = cleanFormValue(inputValue, [
    "removeMultiSpaces",
    "trimStart",
    "trimEnd"
  ]);

  if (inputValue === "") {
    return "Please enter a product name.";
  } else if (inputValue.replace(/[^a-zA-Z0-9\-\s]/g, "") !== inputValue) {
    return 'Please use only alphanumeric characters, spaces, and dashes ("-").';
  } else return false;
};

export const locationInputIsInvalid = inputValue => {
  inputValue = cleanFormValue(inputValue, [
    "removeMultiSlashes",
    "removeSlashSpaces",
    "trimStart",
    "trimEnd"
  ]);

  if (inputValue === "") {
    return "Please enter a product location.";
  } else if (inputValue.replace(/[^a-zA-Z0-9\-\/]/g, "") !== inputValue) {
    return 'Other than forward slashes, please use only alphanumeric characters and dashes ("-").';
  } else if (inputValue.replace(/[/]/g, "") === "") {
    return "Please enter a product location.";
  } else return false;
};

export const priceInputIsInvalid = inputValue => {
  if (inputValue === "" || inputValue <= 0 || isNaN(inputValue)) {
    return "Please enter a valid product price. Don't include a curency symbol.";
  } else return false;
};

export const tagsInputIsInvalid = inputValue => {
  inputValue = cleanFormValue(inputValue, [
    "removeMultiSpaces",
    "removeMultiCommas",
    "removeCommaSpaces",
    "trimStart",
    "trimEnd"
  ]);

  if (inputValue !== "") {
    if (inputValue.replace(/[^a-zA-Z0-9\-\,\s]/g, "") !== inputValue) {
      return 'Other than commas, please use only alphanumeric characters, spaces, and dashes ("-").';
    } else return false;
  } else return false;
};

export const createdAtInputIsInvalid = inputValue => {
  if (inputValue === "" || new Date(inputValue).toString() === "Invalid Date") {
    return "Please enter a valid date.";
  } else return false;
};

export const optionsInputsAreInvalid = inputValues => {
  let invalidity = false;

  inputValues = inputValues.map(optionCombo => {
    let inputValue = optionCombo["M"].inStock["N"];

    if (isNaN(inputValue) || inputValue === "" || +inputValue < 0) {
      invalidity = true;

      return "Please enter a valid number.";
    } else {
      return false;
    }
  });

  if (!invalidity) {
    return [];
  } else return inputValues;
};

export const imagesInputsAreInvalid = inputValues => {
  let invalidity = false;
  let imgInvalidities = [];

  for (var i = 0; i < inputValues.length; i++) {
    let colorImgsInvalidities = [];

    for (var j = 0; j < inputValues[i]["M"].mainImgs["L"].length; j++) {
      let mainImgRankingInputValue =
        inputValues[i]["M"].mainImgs["L"][j]["M"].ranking["N"];

      if (
        isNaN(mainImgRankingInputValue) ||
        mainImgRankingInputValue === "" ||
        +mainImgRankingInputValue < 0
      ) {
        invalidity = true;
        colorImgsInvalidities.push(
          "Please enter a valid image ranking. Use numbers only."
        );
      } else {
        colorImgsInvalidities.push(false);
      }
    }

    imgInvalidities.push(colorImgsInvalidities);
  }

  if (invalidity) {
    return imgInvalidities;
  } else return [];
};
