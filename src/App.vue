<template>
  <div id="app">
    <!-- <Nav
      :changeRoute="changeRoute"
      :toggleDropdown="toggleDropdown"
      :navDropdown="navDropdown"
    /> -->
    <router-view
      :products="products"
      :productsLoading="productsLoading"
      :changeRoute="changeRoute"
      :toggleDropdown="toggleDropdown"
      :navDropdown="navDropdown"
    />
  </div>
</template>

<script>
/*
todo:
- delay on nav drops
- get rid of hashtag in url
- store images (S3?)
  - before this, should figure out programmatic put request
    - before this, should create (some of) admin interface for uploading products
- user auth on all admin area pages...
- add price attribute to db products
- sale, new btns on nav drops (secondary indexes?)
- admin area
  - add product
*/

// import Nav from "./components/nav/Nav";

export default {
  name: "App",
  // components: {
  //   Nav
  // },
  data() {
    return {
      products: [],
      productsLoading: false,
      navDropdown: false
    };
  },
  methods: {
    toggleDropdown: function(btn) {
      if (typeof btn !== "string") {
        if (this.navDropdown) {
          return (this.navDropdown = false);
        }
      }

      if (this.navDropdown !== btn) {
        this.navDropdown = btn;
      }
    },
    changeRoute: function(newRoute) {
      if (this.navDropdown) this.toggleDropdown();

      if (this.$route.fullPath === newRoute) return;

      this.$router.push(newRoute);
      this.productsLoading = true;

      if (newRoute.includes("/products/")) {
        const productSubset = newRoute
          .replace("/products/", "")
          .split("/")
          .join("_");
        console.log(productSubset);

        fetch(require("./vars").endpoint, {
          headers: {
            "x-api-key": "HKmE4paGnv6dm6HQwvdro9ZSMnBGt1bS8R2isKzL",
            "product-subset": productSubset
          }
        })
          .then(response => response.json())
          .then(json => {
            const products = json["Items"];
            console.log(products);
            this.products = products;
            this.productsLoading = false;
          })
          .catch(e => {
            console.log(e);
            alert(e);
            this.productsLoading = false;
          });
      }
    }
  }
};

/*
primary key

Men: 10,000,000 - 29,999,999
  Tops: 10,000,000 - 10,499,999
    T-Shirts: 10,000,000 - 10,004,999
    Polos: 10,005,000 - 10,009,999
    Button-downs: 
    Sweaters: 
    Sweatshirts: 
  Bottoms: 10,500,000 - 10,999,999
    Jeans: 
    Khakis: 
    Sweatpants: 
  Accessories: 11,000,000 - 11,499,999
    Hats: 
    Gloves: 
    Scarves: 

Women: 20,000,000
Boys: 30,000,000
Girls: 40,000,000


60,000,000
70,000,000
80,000,000
90,000,000
100,000,000
110,000,000

Sort Key:
[name]_[department]_[mainCategory]_[subCategories]_[tags]_[]_[]

saleStatus_department_cat1#cat2#cat3_name
false_Men_Tops#T-Shirts_Polo-Shirt



Sort Key Maps:
Men#Tops#T-Shirts#1
Men#Tops#T-Shirts#2
Men#Tops#T-Shirts#3
Men#Tops#Polos#1
Men#Tops#Polos#2
Men#Tops#Button-downs#1
Men#Tops#Button-downs#2
Men#Tops#Button-downs#3
Men#Tops#Button-downs#4
Men#Tops#Sweaters#1
Men#Tops#Sweaters#2
Men#Tops#Sweatpants#1
Men#Tops#Sweatpants#2
Men#Bottoms#Khakis#1
Men#Bottoms#Khakis#2
Men#Bottoms#Jeans#1
Men#Bottoms#Jeans#2
Men#Bottoms#Jeans#3
Men#Bottoms#Sweatpants#1
Men#Bottoms#Sweatpants#2
Men#Accessories#Hats#1
Men#Accessories#Hats#2
Men#Accessories#Gloves#1
Men#Accessories#Gloves#2
Men#Accessories#Scarves#1
Men#Accessories#Scarves#2
Men#Accessories#Scarves#3

product schema:
[
  {
    "id": "abc123",
    "itemPath": "Men#Tops#Polos#Polo Shirt",
    "productSale": false,
    "tags": [ "short-sleeve" ],
    "options": [
      { "fit": "Slim", "size": "S", "color": "Blue", "inStock": 14 },
      { "fit": "Slim", "size": "S", "color": "Red", "inStock": 18 },
      { "fit": "Slim", "size": "S", "color": "Green", "inStock": 4 },
      { "fit": "Slim", "size": "S", "color": "Orange", "inStock": 0 },
      { "fit": "Slim", "size": "M", "color": "Blue", "inStock": 12 },
      { "fit": "Slim", "size": "M", "color": "Red", "inStock": 11 },
      { "fit": "Slim", "size": "M", "color": "Green", "inStock": 20 },
      { "fit": "Slim", "size": "M", "color": "Orange", "inStock": 9 },
      { "fit": "Slim", "size": "L", "color": "Blue", "inStock": 0 },
      { "fit": "Slim", "size": "L", "color": "Red", "inStock": 11 },
      { "fit": "Slim", "size": "L", "color": "Green", "inStock": 20 },
      { "fit": "Slim", "size": "L", "color": "Orange", "inStock": 9 },
      { "fit": "Standard", "size": "S", "color": "Blue", "inStock": 13 },
      { "fit": "Standard", "size": "S", "color": "Red", "inStock": 11 },
      { "fit": "Standard", "size": "S", "color": "Green", "inStock": 5 },
      { "fit": "Standard", "size": "S", "color": "Orange", "inStock": 8 },
      { "fit": "Standard", "size": "M", "color": "Blue", "inStock": 1 },
      { "fit": "Standard", "size": "M", "color": "Red", "inStock": 0 },
      { "fit": "Standard", "size": "M", "color": "Green", "inStock": 20 },
      { "fit": "Standard", "size": "M", "color": "Orange", "inStock": 13 },
      { "fit": "Standard", "size": "L", "color": "Blue", "inStock": 13 },
      { "fit": "Standard", "size": "L", "color": "Red", "inStock": 18 },
      { "fit": "Standard", "size": "L", "color": "Green", "inStock": 22 },
      { "fit": "Standard", "size": "L", "color": "Orange", "inStock": 9 }
    ],
    "images": [
      {
        "color": "Green",
        "main": "https://...",
        "other": [ "https://...", "https://...", "https://...", "https://...", "https://..." ],
        "thumbnail": "https://..."
      },
      {
        "color": "Blue",
        "main": "https://...",
        "other": [ "https://...", "https://...", "https://...", "https://...", "https://..." ],
        "thumbnail": "https://..."
      },
      {
        "color": "Red",
        "main": "https://...",
        "other": [ "https://...", "https://...", "https://...", "https://...", "https://..." ],
        "thumbnail": "https://..."
      },
      {
        "color": "Orange",
        "main": "https://...",
        "other": [ "https://...", "https://...", "https://...", "https://...", "https://..." ],
        "thumbnail": "https://..."
      }
    ]
  }
]

tags possibilities: [
  'denim',
  'short-sleeve',
  'long-sleeve',
  'v-neck',
  'crewneck',
  'outerwear',
  'active'
]

Men
- tops
  - t-shirts
    - fit (slim, standard)
    - size (S, M, L)
  - polos
    - fit (slim, standard)
    - size (S, M, L)
  - button-downs
    - fit (slim, standard)
    - size (S, M, L)
  - sweaters
    - size (S, M, L)
  - sweatshirts
    - size (S, M, L)
- bottoms
  - khakis
    - fit (skinny, slim, straight)
    - waist (28-40)
    - length (28-34)
  - jeans
    - fit (skinny, slim, straight)
    - waist (28-40)
    - length (28-34)
  - sweatpants
    - size (S, M, L)
  - shorts
    - length (7, 9, 11)
    - size (28-40)
- accessories
  - hats
    - size (S, M, L)
  - scarves
    - size (S, M, L)
  - gloves
    - size (S, M, L)

Women
- tops
  - blouses
  - shirts
    - size (S, M, L)
  - button-down shirts
    - size (S, M, L)
  - sweaters
    - size (S, M, L)
  - sweatshirts
    - size (S, M, L)
- bottoms
  - pants
    - fit (skinny, straight, wide-leg)
    - size (0, 2... 20)
  - skirts
    - size (0, 2... 20)
  - leggings
    - size (S, M, L)
- dresses
    - size (0, 2... 20)
- accessories
  - hats
    - size (S, M, L)
  - scarves
    - size (S, M, L)
  - gloves
    - size (S, M, L)
*/
</script>

<style>
body {
  margin: 0;
  background-color: #f5f5f5;
}
#app {
  font-family: "Lato", sans-serif;
  color: #333333;
}
</style>
