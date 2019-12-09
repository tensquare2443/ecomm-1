import Vue from "vue";
import Router from "vue-router";
import Home from "@/routes/Home";
import Products from "@/routes/Products";
import Login from "@/routes/Login";

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
      path: "/admin/login",
      name: "Login",
      component: Login,
      props: true
    }
  ]
});
