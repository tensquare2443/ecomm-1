// if (process.env.prod === "true") {
  // var apiKey = process.env.apiKey;
  // var getProductsEndpoint = process.env.getProductsEndpoint;
  // var signInUserEndpoint = process.env.signInUserEndpoint;
  // var addProductEndpoint = process.env.addProductEndpoint;
  // var getProductEndpoint = process.env.getProductEndpoint;
  // var deleteProductEndpoint = process.env.deleteProductEndpoint;
  // var checkAuthTokenEndpoint = process.env.checkAuthTokenEndpoint;
  // var s3Bucket = process.env.s3Bucket;
  var apiKey = "HKmE4paGnv6dm6HQwvdro9ZSMnBGt1bS8R2isKzL";
  var getProductsEndpoint = "https://2u2a5ukp30.execute-api.us-east-1.amazonaws.com/prod/ecomm-app_get-products";
  var signInUserEndpoint = "https://s0f0kqrml5.execute-api.us-east-1.amazonaws.com/prod/ecomm-app_sign-in-user";
  var addProductEndpoint = "https://svzkhien3i.execute-api.us-east-1.amazonaws.com/prod/ecomm-app_add-product";
  var getProductEndpoint = "https://9fetydrjva.execute-api.us-east-1.amazonaws.com/prod/ecomm-app_get-product";
  var deleteProductEndpoint = "https://946gp0az60.execute-api.us-east-1.amazonaws.com/prod/ecomm-app_delete-product";
  var checkAuthTokenEndpoint = "https://uv0uzvob34.execute-api.us-east-1.amazonaws.com/prod/ecomm-app_check-auth-token";
  var s3Bucket = "ecomm-app-32";
// } else { 
//   apiKey = require("./appVars").apiKey;
//   getProductsEndpoint = require("./appVars").getProductsEndpoint;
//   signInUserEndpoint = require("./appVars").signInUserEndpoint;
//   addProductEndpoint = require("./appVars").addProductEndpoint;
//   getProductEndpoint = require("./appVars").getProductEndpoint;
//   deleteProductEndpoint = require("./appVars").deleteProductEndpoint;
//   checkAuthTokenEndpoint = require("./appVars").checkAuthTokenEndpoint;
//   s3Bucket = require("./appVars").s3Bucket;
// }

module.exports = {
  apiKey,
  getProductsEndpoint,
  signInUserEndpoint,
  addProductEndpoint,
  getProductEndpoint,
  deleteProductEndpoint,
  checkAuthTokenEndpoint,
  s3Bucket
};
