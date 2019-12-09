const env = "dev";

if (env === "dev") {
  var endpoint = "http://localhost:3000/fetch-products";
} else {
  endpoint = `https://n6t4ucyui3.execute-api.us-east-1.amazonaws.com/prod/ecomm-app_fetch-products`;
}

export { endpoint };
