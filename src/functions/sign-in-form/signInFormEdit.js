export default function(e) {
  this.signInForm[e.currentTarget.id.replace("Input", "")].value =
    e.currentTarget.value;
}
