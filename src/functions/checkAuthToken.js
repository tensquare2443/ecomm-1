import { apiKey, checkAuthTokenEndpoint } from "../appVars";

export default function() {
  // console.log("checking auth token");
  this.authorizingUser = true;

  // console.log(`ss ecommAppUsername: ${sessionStorage.ecommAppUsername}`);
  // console.log(`ss ecommAppToken: ${sessionStorage.ecommAppToken}`);

  fetch(checkAuthTokenEndpoint, {
    headers: {
      "x-api-key": apiKey,
      "x-username": sessionStorage.ecommAppUsername,
      "x-user-token": sessionStorage.ecommAppToken
    }
  })
    .then(res => res.json())
    .then(json => {
      // console.log(json);
      if (
        json.name === "TokenExpiredError" ||
        json === "User not found" ||
        json === "Invalid token"
      ) {
        this.$router.push("/admin/sign-in");
      }
      this.authorizingUser = false;
    })
    .catch(e => {
      console.log(e);
      this.$router.push("/admin/sign-in");
      this.authorizingUser = false;
    });
}
