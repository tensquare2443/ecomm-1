import { apiKey, checkAuthTokenEndpoint } from "../defineAppVars";

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
        if (this.$route.path !== "/admin/sign-in") {
          this.$router.push("/admin/sign-in");
        }
      } else {
        if (this.$route.path === "/admin/sign-in") {
          this.$router.push("/admin/products");
        }
      }
      this.authorizingUser = false;
    })
    .catch(e => {
      // console.log(e);
      console.log(this.$route.path);
      if (this.$route.path !== "/admin/sign-in") {
        this.$router.push("/admin/sign-in");
      }
      this.authorizingUser = false;
    });
}
