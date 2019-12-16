import { apiKey } from "../../vars.js";

export default function(e) {
  e.preventDefault();

  this.signInForm.formInvalidity = false;
  this.signInForm.submitting = true;

  fetch(require("../../vars").authorizeUserEndpoint, {
    headers: {
      "x-api-key": apiKey,
      "x-username": this.signInForm.username.value,
      "x-password": this.signInForm.password.value
    }
  })
    .then(response => response.json())
    .then(json => {
      if (
        json.statusCode === 404 ||
        json.statusCode === 500 ||
        json.status === 500
      ) {
        this.signInForm.submitting = false;
        return (this.signInForm.formInvalidity =
          "Invalid username or password");
      }

      this.user = {
        username: json.user.username,
        token: json.user.token
      };
      this.signInForm.submitting = false;

      this.changeRoute("/admin/products");
    })
    .catch(e => {
      this.signInForm.submitting = false;
      console.log(e);
      alert(e);
    });
}
