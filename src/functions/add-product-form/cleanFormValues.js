export default (value, tasks) => {
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
