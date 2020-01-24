import { apiKey, deleteProductEndpoint } from "../defineAppVars";

export default function(productPath) {
  //arrive with: []_[men]_[tops]_[button-downs]_#b62c0140-341b-11ea-b869-41343a2991d6#

  this.epfChangeDeleteStatus("deleting");

  return fetch(deleteProductEndpoint, {
    headers: {
      "x-api-key": apiKey,
      "product-path": productPath
    }
  })
    .then(res => res.json())
    .then(json => {
      this.epfChangeDeleteStatus(false);

      return json;
    })
    .catch(e => {
      this.epfChangeDeleteStatus(false);

      return e;
    });
}
