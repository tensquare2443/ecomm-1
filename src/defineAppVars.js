if (require("./appVars")) {
  var apiKey = require("./appVars").apiKey;
  var getProductsEndpoint = require("./appVars").getProductsEndpoint;
  var signInUserEndpoint = require("./appVars").signInUserEndpoint;
  var addProductEndpoint = require("./appVars").addProductEndpoint;
  var getProductEndpoint = require("./appVars").getProductEndpoint;
  var deleteProductEndpoint = require("./appVars").deleteProductEndpoint;
  var checkAuthTokenEndpoint = require("./appVars").checkAuthTokenEndpoint;
  var s3Bucket = require("./appVars").s3Bucket;
} else {
  apiKey = process.env.apiKey;
  getProductsEndpoint = process.env.getProductsEndpoint;
  signInUserEndpoint = process.env.signInUserEndpoint;
  addProductEndpoint = process.env.addProductEndpoint;
  getProductEndpoint = process.env.getProductEndpoint;
  deleteProductEndpoint = process.env.deleteProductEndpoint;
  checkAuthTokenEndpoint = process.env.checkAuthTokenEndpoint;
  s3Bucket = process.env.s3Bucket;
}

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
