<template>
  <div>
    <Nav
      :reRoute="reRoute"
      :toggleDropdown="toggleDropdown"
      :navDropdown="navDropdown"
      :getProducts="getProducts"
    />
    <div class="products">
      <div class="sidebar">
        <h3 class="sidebar__title">
          Featured
        </h3>
        <TxtLink
          :reRoute="reRoute"
          :getProducts="getProducts"
          :route="'/products/men'"
          :btnTxt="'New Arrivals'"
        />
        <TxtLink
          :reRoute="reRoute"
          :getProducts="getProducts"
          :route="'/products/men'"
          :btnTxt="'Sale'"
        />
        <TitleLink
          :reRoute="reRoute"
          :getProducts="getProducts"
          :route="'/products/men/tops'"
          :btnTxt="'Tops'"
        />
        <TxtLink
          :reRoute="reRoute"
          :getProducts="getProducts"
          :route="'/products/men/tops/t-shirts'"
          :btnTxt="'T-Shirts'"
        />
        <TxtLink
          :reRoute="reRoute"
          :getProducts="getProducts"
          :route="'/products/men/tops/polos'"
          :btnTxt="'Polos'"
        />
        <TxtLink
          :reRoute="reRoute"
          :getProducts="getProducts"
          :route="'/products/men/tops/button-downs'"
          :btnTxt="'Button-Downs'"
        />
        <TxtLink
          :reRoute="reRoute"
          :getProducts="getProducts"
          :route="'/products/men/tops/sweaters'"
          :btnTxt="'Sweaters'"
        />
        <TxtLink
          :reRoute="reRoute"
          :getProducts="getProducts"
          :route="'/products/men/tops/sweatshirts'"
          :btnTxt="'Sweatshirts'"
        />
        <TitleLink
          :reRoute="reRoute"
          :getProducts="getProducts"
          :route="'/products/men/bottoms'"
          :btnTxt="'Bottoms'"
        />
        <TxtLink
          :reRoute="reRoute"
          :getProducts="getProducts"
          :route="'/products/men/bottoms/khakis'"
          :btnTxt="'Khakis'"
        />
        <TxtLink
          :reRoute="reRoute"
          :getProducts="getProducts"
          :route="'/products/men/bottoms/jeans'"
          :btnTxt="'Jeans'"
        />
        <TxtLink
          :reRoute="reRoute"
          :getProducts="getProducts"
          :route="'/products/men/bottoms/sweatpants'"
          :btnTxt="'Sweatpants'"
        />
        <TitleLink
          :reRoute="reRoute"
          :getProducts="getProducts"
          :route="'/products/men/accessories'"
          :btnTxt="'Accessories'"
        />
        <TxtLink
          :reRoute="reRoute"
          :getProducts="getProducts"
          :route="'/products/men/accessories/hats'"
          :btnTxt="'Hats'"
        />
        <TxtLink
          :reRoute="reRoute"
          :getProducts="getProducts"
          :route="'/products/men/accessories/gloves'"
          :btnTxt="'Gloves'"
        />
        <TxtLink
          :reRoute="reRoute"
          :getProducts="getProducts"
          :route="'/products/men/accessories/scarves'"
          :btnTxt="'Scarves'"
        />
      </div>
      <div class="content">
        <p class="breadcrumbs">
          <span v-for="(link, index) in getBreadcrumbLinks(this.$route.path)">
            <span v-if="index !== 0">{{ " > " }}</span>
            <!-- <router-link :to="`/products/${link[0]}`" class="breadcrumbs__link">{{
              link[1]
            }}</router-link> -->
            <span
              @click="initiateGetProducts(`/products/${link[0]}`)"
              class="breadcrumbs__link"
              >{{ link[1] }}</span
            >
          </span>
        </p>
        <Loading v-if="productsLoading" />
        <div
          v-else-if="products && products.length !== 0"
          class="products-listed"
        >
          <div
            v-for="product in products"
            :key="
              `${product['department']['S']} ${product['productPath']['S']}`
            "
            class="product"
          >
            <p>
              Product:
              <router-link
                :to="formatProductPath(product['productPath']['S'])"
                class="product-link"
                >{{ product["name"]["S"] }}</router-link
              >
            </p>
            <!-- <p>Breadcrumb: {{ product["productPath"]["S"] }}</p> -->
          </div>
        </div>
        <p v-else-if="products.length === 0" class="no-products">
          No products match your request.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import Nav from "../components/nav/Nav";
import Loading from "../components/Loading";
import TitleLink from "../components/nav/TitleLink";
import TxtLink from "../components/nav/TxtLink";
import initiateGetProducts from "../functions/initiateGetProducts";

export default {
  props: [
    "products",
    "productsLoading",
    "reRoute",
    "toggleDropdown",
    "navDropdown",
    "getProducts"
  ],
  components: { Nav, Loading, TitleLink, TxtLink },
  mounted() {
    console.log("getting products on mount");
    // console.log(`getting prods with: ${this.$route.path}`);
    this.getProducts(this.$route.path);
  },
  methods: {
    initiateGetProducts,
    formatProductPath(productPath) {
      return `/product${productPath
        .replace(/[\[\]#]/g, "")
        .split("_")
        .join("/")}`;
    },
    getProductId(productPath) {
      return productPath.split("#")[1];
    },
    getProductPath(productPath) {
      productPath = productPath
        .replace(/[\][#]/g, "")
        .split("_")
        .join("/");

      return `/product${productPath}`;
    },
    getBreadcrumbLinks(route) {
      // console.log(route);
      let routeSections = route.replace("/products/", "").split("/");
      let breadcrumbLinks = [];
      let routeSectionsReduced = routeSections.reduce((total, current) => {
        breadcrumbLinks.push(total);

        return `${total}/${current}`;
      });

      breadcrumbLinks.push(routeSectionsReduced);

      breadcrumbLinks = breadcrumbLinks.map(link => {
        let linkToDisplay = link.split("/")[link.split("/").length - 1];
        let linkReformatted = linkToDisplay
          .split("")
          .map((letter, index) => {
            if (index === 0) {
              return letter.toUpperCase();
            } else if (linkToDisplay[index - 1] === "-") {
              return letter.toUpperCase();
            } else return letter;
          })
          .join("");

        return [link, linkReformatted];
      });

      // console.log(breadcrumbLinks);
      return breadcrumbLinks;
    }
  }
};
</script>

<style scoped>
.breadcrumbs__link {
  text-decoration: none;
  color: #333;
  cursor: pointer;
}
.breadcrumbs__link:hover {
  text-decoration: underline;
}
.products {
  width: 1100px;
  max-width: 100%;
  margin: auto;
  display: flex;
}
.sidebar {
  flex: 0 0 220px;
  border-right: 1px solid #aaa;
  box-sizing: border-box;
  padding-right: 15px;
}
.sidebar__title {
  border-bottom: 1px solid #ccc;
  padding-bottom: 8px;
  margin-bottom: 8px;
}
.content {
  width: 100%;
  padding-left: 15px;
}
.products-listed {
  display: flex;
  flex-direction: row;
}
.product {
  flex: 0 0 25%;
  border: 3px solid grey;
  box-sizing: border-box;
}
/* @media (max-width: 1020px) {
  .product {
    flex: 0 0 33.3333%;
  }
} */
.no-products {
  text-align: center;
  margin-top: 50px;
}
.product-link {
  cursor: pointer;
  text-decoration: underline;
  color: #333;
}
</style>
