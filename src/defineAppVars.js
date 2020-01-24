if (process.env.prod === "true") {
  var apiKey = process.env.apiKey;
  var getProductsEndpoint = process.env.getProductsEndpoint;
  var signInUserEndpoint = process.env.signInUserEndpoint;
  var addProductEndpoint = process.env.addProductEndpoint;
  var getProductEndpoint = process.env.getProductEndpoint;
  var deleteProductEndpoint = process.env.deleteProductEndpoint;
  var checkAuthTokenEndpoint = process.env.checkAuthTokenEndpoint;
  var s3Bucket = process.env.s3Bucket;
} else { 
  apiKey = require("./appVars").apiKey;
  getProductsEndpoint = require("./appVars").getProductsEndpoint;
  signInUserEndpoint = require("./appVars").signInUserEndpoint;
  addProductEndpoint = require("./appVars").addProductEndpoint;
  getProductEndpoint = require("./appVars").getProductEndpoint;
  deleteProductEndpoint = require("./appVars").deleteProductEndpoint;
  checkAuthTokenEndpoint = require("./appVars").checkAuthTokenEndpoint;
  s3Bucket = require("./appVars").s3Bucket;
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
