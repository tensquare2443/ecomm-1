export default colors =>
  colors.map(color => {
    return {
      color,
      thumbnailImg: {
        file: "",
        name: "",
        invalidity: false,
        dragOver: false
      },
      mainImgs: [
        {
          file: { value: "", invalidity: "" },
          name: "",
          ranking: { value: "", invalidity: "" },
          invalidity: false,
          dragOver: false
        }
      ]
    };
  });
