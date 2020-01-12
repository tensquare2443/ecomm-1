export default function(index, toDo) {
  if (toDo === "add") {
    this.addProductForm.images[index].mainImgs.push({
      file: { value: "", invalidity: "" },
      name: "",
      ranking: { value: "", invalidity: "" },
      invalidity: false,
      dragOver: false
    });
  } else {
    this.addProductForm.images[index].mainImgs.pop();
  }
}
