import cleanFormValue from "./cleanFormValues.js";

export default function(e) {
  e.preventDefault();

  this.addProductForm.name.value = cleanFormValue(
    this.addProductForm.name.value,
    ["removeMultiSpaces", "trimStart", "trimEnd"]
  );
  this.addProductForm.name.value = cleanFormValue(
    this.addProductForm.name.value,
    ["removeMultiSpaces", "trimStart", "trimEnd"]
  );
  this.addProductForm.location.value = cleanFormValue(
    this.addProductForm.location.value,
    ["removeMultiSlashes", "removeSlashSpaces", "trimStart", "trimEnd"]
  );

  this.addProductForm.options.forEach((option, index) => {
    this.addProductForm.options[index].name.value = cleanFormValue(
      option.name.value,
      ["removeMultiSpaces", "trimStart", "trimEnd"]
    );
    this.addProductForm.options[index].values.value = cleanFormValue(
      option.values.value,
      [
        "removeMultiSpaces",
        "removeMultiCommas",
        "removeCommaSpaces",
        "trimStart",
        "trimEnd"
      ]
    );
  });

  this.addProductForm.tags.value = cleanFormValue(
    this.addProductForm.tags.value,
    [
      "removeMultiSpaces",
      "removeMultiCommas",
      "removeCommaSpaces",
      "trimStart",
      "trimEnd"
    ]
  );

  let formIsValid = true;

  if (this.addProductForm.name.value === "") {
    this.addProductForm.name.invalidity = "Please enter a product name.";
    formIsValid = false;
  } else if (
    this.addProductForm.name.value.replace(/[^a-zA-Z0-9\-\s]/g, "") !==
    this.addProductForm.name.value
  ) {
    this.addProductForm.name.invalidity =
      'Please use only alphanumeric characters, spaces, and dashes ("-").';
    formIsValid = false;
  } else {
    this.addProductForm.name.invalidity = false;
  }

  if (this.addProductForm.price.value === "" || this.addProductForm.price.value === 0) {
    this.addProductForm.price.invalidity = "Please enter a product price.";
    formIsValid = false;
  } else if (isNaN(this.addProductForm.price.value)) {
    this.addProductForm.price.invalidity =
      "Please enter a valid number, without any currency symbol.";
    formIsValid = false;
  } else {
    if (this.addProductForm.price.value.includes(".")) {
      this.addProductForm.price.value = +this.addProductForm.price.value;
      this.addProductForm.price.value = this.addProductForm.price.value.toFixed(
        2
      );
      this.addProductForm.price.invalidity = false;
    }
  }

  if (this.addProductForm.location.value === "") {
    this.addProductForm.location.invalidity =
      "Please enter a product location.";
    formIsValid = false;
  } else if (
    this.addProductForm.location.value.replace(/[^a-zA-Z0-9\-\/]/g, "") !==
    this.addProductForm.location.value
  ) {
    this.addProductForm.location.invalidity =
      'Other than forward slashes, please use only alphanumeric characters and dashes ("-").';
    formIsValid = false;
  } else if (this.addProductForm.location.value.replace(/[/]/g, "") === "") {
    this.addProductForm.location.invalidity =
      "Please enter a product location.";
    formIsValid = false;
  } else {
    this.addProductForm.location.invalidity = false;
  }

  this.addProductForm.options.forEach((option, index) => {
    if (index === 0) {
      if (option.values.value.replace(/[,]/g, "") === "") {
        this.addProductForm.options[index].values.invalidity =
          "At least one color must be specified.";
        formIsValid = false;
      } else if (
        option.values.value.replace(/[^a-zA-Z0-9\-\,\s]/g, "") !==
        option.values.value
      ) {
        this.addProductForm.options[index].values.invalidity =
          'Other than commas, please use only alphanumeric characters, spaces, and dashes ("-").';
        formIsValid = false;
      } else {
        let duplicateOption = false;
        let optionValuesArray = option.values.value.split(",");

        optionValuesArray.forEach(optionVal => {
          let otherOptionVals = option.values.value.split(",");
          otherOptionVals.splice(otherOptionVals.indexOf(optionVal), 1);
          if (otherOptionVals.includes(optionVal)) {
            duplicateOption = true;
          }
        });

        if (duplicateOption) {
          this.addProductForm.options[index].values.invalidity =
            "A value cannot be used more than once for the same option.";
          formIsValid = false;
        } else {
          this.addProductForm.options[index].values.invalidity = false;
        }
      }
    } else {
      if (option.name.value !== "" || option.values.value !== "") {
        if (option.name.value === "") {
          this.addProductForm.options[index].name.invalidity =
            "Please enter an option name.";
          formIsValid = false;
        } else if (
          option.name.value.replace(/[^a-zA-Z0-9\-\s]/g, "") !==
          option.name.value
        ) {
          this.addProductForm.options[index].name.invalidity =
            'Please use only alphanumeric characters, spaces, and dashes ("-").';
          formIsValid = false;
        } else {
          this.addProductForm.options[index].name.invalidity = false;
        }

        if (option.values.value.replace(/[,]/g, "") === "") {
          this.addProductForm.options[index].values.invalidity =
            "Please enter at least one option value.";
          formIsValid = false;
        } else if (
          option.values.value.replace(/[^a-zA-Z0-9\-\,\s]/g, "") !==
          option.values.value
        ) {
          this.addProductForm.options[index].values.invalidity =
            'Other than commas, please use only alphanumeric characters, spaces, and dashes ("-").';
          formIsValid = false;
        } else {
          let duplicateOption = false;
          let optionValuesArray = option.values.value.split(",");

          optionValuesArray.forEach(optionVal => {
            let otherOptionVals = option.values.value.split(",");
            otherOptionVals.splice(otherOptionVals.indexOf(optionVal), 1);
            if (otherOptionVals.includes(optionVal)) {
              duplicateOption = true;
            }
          });

          if (duplicateOption) {
            this.addProductForm.options[index].values.invalidity =
              "A value cannot be used more than once for the same option.";
          } else {
            this.addProductForm.options[index].values.invalidity = false;
          }
        }
      }
    }
  });

  // if (this.addProductForm.sale) {
  //   if (
  //     this.addProductForm.saleDetails.start.value === "" &&
  //     this.addProductForm.saleDetails.end.value === ""
  //   ) {
  //     this.addProductForm.sale = false;
  //     this.addProductForm.saleDetails = {
  //       start: { value: "", invalidity: false },
  //       end: { value: "", invalidity: false }
  //     };
  //   } else {
  //     if (
  //       this.addProductForm.saleDetails.start.value === "" ||
  //       new Date(this.addProductForm.saleDetails.start.value).toString() ===
  //         "Invalid Date"
  //     ) {
  //       this.addProductForm.saleDetails.start.invalidity =
  //         "Please enter a valid start date.";
  //       formIsValid = false;
  //     } else {
  //       this.addProductForm.saleDetails.start.invalidity = false;
  //     }

  //     if (
  //       this.addProductForm.saleDetails.end.value === "" ||
  //       new Date(this.addProductForm.saleDetails.end.value).toString() ===
  //         "Invalid Date"
  //     ) {
  //       this.addProductForm.saleDetails.end.invalidity =
  //         "Please enter a valid end date.";
  //       formIsValid = false;
  //     } else {
  //       this.addProductForm.saleDetails.end.invalidity = false;
  //     }
  //   }
  // } else {
  //   this.addProductForm.saleDetails = {
  //     start: { value: "", invalidity: false },
  //     end: { value: "", invalidity: false }
  //   };
  // }

  if (this.addProductForm.tags.value) {
    if (
      this.addProductForm.tags.value.replace(/[^a-zA-Z0-9\-\,\s]/g, "") !==
      this.addProductForm.tags.value
    ) {
      this.addProductForm.tags.invalidity =
        'Other than commas, please use only alphanumeric characters, spaces, and dashes ("-").';
      formIsValid = false;
    } else {
      this.addProductForm.tags.invalidity = false;
    }
  } else {
    this.addProductForm.tags.invalidity = false;
  }

  if (formIsValid) {
    this.navigateApf(2, 1);
  }
}
