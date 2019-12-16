import Vue from "vue";
import Router from "vue-router";
import Home from "@/routes/Home";
import Products from "@/routes/Products";
import AdminProducts from "@/routes/AdminProducts";
import AddProduct from "@/routes/AddProduct";
import SignIn from "@/routes/SignIn";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/products/*",
      name: "Products",
      component: Products,
      props: true
    },
    {
      path: "/admin/products",
      name: "AdminProducts",
      component: AdminProducts,
      props: true
    },
    {
      path: "/admin/add-product",
      name: "AddProduct",
      component: AddProduct,
      props: true
    },
    {
      path: "/admin/sign-in",
      name: "SignIn",
      component: SignIn,
      props: true
    }
  ]
});
