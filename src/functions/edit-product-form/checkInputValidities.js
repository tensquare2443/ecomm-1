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
