import { apiKey, signInUserEndpoint } from "../../appVars.js";

export default function(e) {
  e.preventDefault();

  this.signInForm.formInvalidity = false;
  this.signInForm.submitting = true;

  console.log(signInUserEndpoint);

  fetch(signInUserEndpoint, {
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

      const username = json.user.username;
      const token = json.user.token;

      this.user = { username, token };
      sessionStorage.setItem("ecommAppUsername", username);
      sessionStorage.setItem("ecommAppToken", token);
      this.signInForm.submitting = false;
      this.reRoute("/admin/products", true);
    })
    .catch(e => {
      this.signInForm.submitting = false;
      this.signInForm.formInvalidity = "Invalid username or password"
      console.log(e);
      // alert(e);
    });
}
