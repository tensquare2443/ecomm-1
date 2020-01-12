export default function(toDo) {
if (toDo === "add") {
        this.addProductForm.options.push({
          name: { value: "", invalidity: false },
          values: { value: "", invalidity: false }
        });
      } else if (toDo === "remove") {
        this.addProductForm.options.pop();
      }
}