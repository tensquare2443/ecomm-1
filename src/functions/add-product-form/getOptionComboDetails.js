export default options => {
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
          var allOptionsItemCopy = JSON.parse(JSON.stringify(allOptions[l]));
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
  });

  return allOptions;
};
