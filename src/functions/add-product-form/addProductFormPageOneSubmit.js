export default function(e) {
  e.preventDefault();

  const cleanValue = (value, tasks) => {
    if (tasks.includes("removeMultiSpaces")) {
      while (value.includes("  ")) {
        value = value.replace("  ", " ");
      }
    }
    if (tasks.includes("trimStart")) {
      while (value[0] === " ") {
        value = value.slice(1, value.length);
      }
    }
    if (tasks.includes("trimEnd")) {
      while (value[value.length - 1] === " ") {
        value = value.slice(0, value.length - 1);
      }
    }
    if (tasks.includes("removeMultiCommas")) {
      while (value.includes(",,")) {
        value = value.replace(",,", ",");
      }
    }
    if (tasks.includes("removeMultiSlashes")) {
      while (value.includes("//")) {
        value = value.replace("//", "/");
      }
    }
    if (tasks.includes("removeCommaSpaces")) {
      while (value.includes(", ")) {
        value = value.replace(", ", ",");
      }
      while (value.includes(" ,")) {
        value = value.replace(" ,", ",");
      }
    }
    if (tasks.includes("removeSlashSpaces")) {
      while (value.includes("/ ")) {
        value = value.replace("/ ", "/");
      }
      while (value.includes(" /")) {
        value = value.replace(" /", "/");
      }
    }

    return value;
  };

  this.addProductForm.name.value = cleanValue(this.addProductForm.name.value, [
    "removeMultiSpaces",
    "trimStart",
    "trimEnd"
  ]);
  this.addProductForm.location.value = cleanValue(
    this.addProductForm.location.value,
    ["removeMultiSlashes", "removeSlashSpaces", "trimStart", "trimEnd"]
  );

  this.addProductForm.options.forEach((option, index) => {
    this.addProductForm.options[index].name.value = cleanValue(
      option.name.value,
      ["removeMultiSpaces", "trimStart", "trimEnd"]
    );
    this.addProductForm.options[index].values.value = cleanValue(
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

  this.addProductForm.tags.value = cleanValue(this.addProductForm.tags.value, [
    "removeMultiSpaces",
    "removeMultiCommas",
    "removeCommaSpaces",
    "trimStart",
    "trimEnd"
  ]);

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

  if (this.addProductForm.sale) {
    if (
      this.addProductForm.saleDetails.start.value === "" &&
      this.addProductForm.saleDetails.end.value === ""
    ) {
      this.addProductForm.sale = false;
      this.addProductForm.saleDetails = {
        start: { value: "", invalidity: false },
        end: { value: "", invalidity: false }
      };
    } else {
      if (
        this.addProductForm.saleDetails.start.value === "" ||
        new Date(this.addProductForm.saleDetails.start.value).toString() ===
          "Invalid Date"
      ) {
        this.addProductForm.saleDetails.start.invalidity =
          "Please enter a valid start date.";
        formIsValid = false;
      } else {
        this.addProductForm.saleDetails.start.invalidity = false;
      }

      if (
        this.addProductForm.saleDetails.end.value === "" ||
        new Date(this.addProductForm.saleDetails.end.value).toString() ===
          "Invalid Date"
      ) {
        this.addProductForm.saleDetails.end.invalidity =
          "Please enter a valid end date.";
        formIsValid = false;
      } else {
        this.addProductForm.saleDetails.end.invalidity = false;
      }
    }
  } else {
    this.addProductForm.saleDetails = {
      start: { value: "", invalidity: false },
      end: { value: "", invalidity: false }
    };
  }

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
    // this.addProductForm.page = 2;
    this.navigateAddProductForm(2);

    // get option details

    var options = [
      {
        name: { value: "Color" },
        values: { value: "Red,Green,Blue" }
      },
      {
        name: { value: "Fit" },
        values: { value: "Slim,Standard" }
      },
      {
        name: { value: "Size" },
        values: { value: "S,M,L" }
      }
    ];

    const getOptionComboDetails = options => {
      let optionsReformatted = [];

      options.forEach(option => {
        let optionReformatted = option.values.value
          .split(",")
          .map(optionValue => [option.name.value, optionValue]);

        optionsReformatted.push(optionReformatted);
      });

      var allOptions = [];

      optionsReformatted[0].forEach(val => {
        var obj = {};
        obj[val[0]] = val[1];
        allOptions.push(obj);
      });

      for (var i = 1; i < optionsReformatted.length; i++) {
        var addToAllOptions = [];
        for (var j = 0; j < optionsReformatted[i].length; j++) {
          if (j === 0) {
            for (var k = 0; k < allOptions.length; k++) {
              allOptions[k][optionsReformatted[i][j][0]] =
                optionsReformatted[i][j][1];
            }
          } else {
            for (var l = 0; l < allOptions.length; l++) {
              var allOptionsItemCopy = JSON.parse(
                JSON.stringify(allOptions[l])
              );
              allOptionsItemCopy[optionsReformatted[i][j][0]] =
                optionsReformatted[i][j][1];

              addToAllOptions.push(allOptionsItemCopy);
            }
          }
        }
        allOptions = allOptions.concat(addToAllOptions);
      }

      allOptions = allOptions.map(option => {
        option.inStock = {
          value: "",
          invalidity: false
        };

        return option;
      })

      return allOptions;
    };

    this.addProductForm.optionComboDetails = getOptionComboDetails(
      this.addProductForm.options
    );
    console.log(JSON.stringify(this.addProductForm.optionComboDetails));
  }
}

// var arr = [
//   [
//     ['first', 'a'],
//     ['first', 'c']
//   ],
//   [
//     ['second', 'd'],
//     ['second', 'e'],
//     ['second', 'f']
//   ],
//   [
//     ['third', 'h'],
//     ['third', 'j']
//   ],
//   [
//     ['fourth', 'k'],
//     ['fourth', 'l'],
//     ['fourth', 'm']
//   ],
// ];

// var opts = [];

// arr[0].forEach(val => {
//   var obj = {};
//   obj[val[0]] = val[1];
//   opts.push(obj);
// });

// for (var i = 1; i < arr.length; i++) {
// 	var addToOpts = [];
//   for (var j = 0; j < arr[i].length; j++) {
//     if (j === 0) {
//       for (var k = 0; k < opts.length; k++) {
//         opts[k][arr[i][j][0]] = arr[i][j][1];
//       }
//     } else {
//       for (var l = 0; l < opts.length; l++) {
//         var optsItemCopy = JSON.parse(JSON.stringify(opts[l]));
//         optsItemCopy[arr[i][j][0]] = arr[i][j][1];

//         addToOpts.push(optsItemCopy);
//       }
//     }
//   }
//   opts = opts.concat(addToOpts);
// }

// console.log(JSON.stringify(opts));
