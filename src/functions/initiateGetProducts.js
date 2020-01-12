export default function(route) {
  const currentRouteDetails = this.$route;

  if (currentRouteDetails.name === "Products") {
    if (route !== currentRouteDetails.path) {
      console.log("getting on click");
      console.log(`getting prods with: ${route}`);
      this.getProducts(route);
      this.$router.push(route);
    }
  } else {
    console.log("not getting on click. will get on mount instead");
    this.$router.push(this.route);
  }
}
