<template>
  <div>
    <Nav
      :toggleDropdown="toggleDropdown"
      :navDropdown="navDropdown"
      :getProducts="getProducts"
      :setNavData="setNavData"
      :navData="navData"
    />
    <div class="content">
      <div class="top-hero">
        <div class="top-hero__label">Top Hero Placement</div>
        <div></div>
        <div class="top-hero__data">
          <h2 class="top-hero__title-txt">
            New Seasonal
            <br />
            Releases Promotion
          </h2>
          <router-link class="homepage-link"  to="/products/men">
            <button class="top-hero__shop-now-btn">
              Shop These Releases Now
            </button>
          </router-link>
        </div>
        <div></div>
      </div>
      <div class="featured">
        <div class="featured__1">
          <div>
            <div class="featured__label">Featured Product Placement</div>
          </div>
          <div>
            <h3 class="featured__txt">Featured Product I</h3>
            <router-link class="homepage-link"  to="/products/men">
              <button class="featured__shop-now-btn">
                Shop Now
              </button>
            </router-link>
          </div>
          <div></div>
        </div>
        <div class="featured__2">
          <div>
            <div class="featured__label">Featured Product Placement</div>
          </div>
          <div>
            <h3 class="featured__txt">Featured Product II</h3>
            <router-link class="homepage-link"  to="/products/women">
              <button class="featured__shop-now-btn">
                Shop Now
              </button>
            </router-link>
          </div>
          <div></div>
        </div>
      </div>
      <div class="categories">
        <div class="category">
          <div class="category__label">Site Category I</div>
          <div>
            <p class="category__txt">Men</p>
            <router-link class="homepage-link"  to="/products/men">
              <button class="category__shop-now-btn">
                Shop Now
              </button>
            </router-link>
          </div>
          <div></div>
        </div>
        <div class="category">
          <div class="category__label">Site Category II</div>
          <div>
            <p class="category__txt">Women</p>
            <router-link class="homepage-link"  to="/products/women">
              <button class="category__shop-now-btn">
                Shop Now
              </button>
            </router-link>
          </div>
          <div></div>
        </div>
        <div class="category">
          <div class="category__label">Site Category III</div>
          <div>
            <p class="category__txt">Boys</p>
            <router-link class="homepage-link"  to="/products/boys">
              <button class="category__shop-now-btn">
                Shop Now
              </button>
            </router-link>
          </div>
          <div></div>
        </div>
        <div class="category">
          <div class="category__label">Site Category IV</div>
          <div>
            <p class="category__txt">Girls</p>
            <router-link class="homepage-link"  to="/products/girls">
              <button class="category__shop-now-btn">
                Shop Now
              </button>
            </router-link>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Nav from "../components/nav/Nav";

export default {
  name: "Home",
  props: [
    "toggleDropdown",
    "navDropdown",
    "getProducts",
    "navData",
    "setNavData"
  ],
  components: {
    Nav
  }
};
</script>

<style scoped>
.top-hero {
  width: 100%;
  height: 700px;
  background-image: radial-gradient(#eaeaea, #b7b7b7);
  display: grid;
  grid-template-rows: 4fr 4fr 8fr 9fr;
  align-items: center;
  padding-left: 45px;
  padding-right: 45px;
  box-sizing: border-box;
}
.top-hero__label {
  justify-self: center;
  font-size: 20px;
  font-weight: bold;
  color: #969696;
}
.top-hero__title-txt {
  margin: 0;
  font-size: 3em;
  line-height: 42px;
}
.top-hero__shop-now-btn {
  font-family: "Lato", sans-serif;
  color: #f5f5f5;
  border: 2px solid #313190;
  background-color: #313190;
  font-size: 1.3em;
  padding: 5px 15px;
  border-radius: 3px;
  margin-top: 8px;
  cursor: pointer;
  transition: background-color 0.2s;
  box-shadow: 0px 2px 5px #868686;
}
.top-hero__shop-now-btn:hover {
  background-color: #20207b;
}

.featured {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 40px;
  margin-top: 10px;
}
.featured__1,
.featured__2 {
  background-image: radial-gradient(#eaeaea, #b7b7b7);
  height: 700px;
  display: grid;
  justify-content: center;
  align-items: center;
  padding-left: 15px;
  padding-right: 15px;
  box-sizing: border-box;
}
.featured__label {
  text-align: center;
  font-weight: bold;
  color: #969696;
}
.featured__txt {
  text-align: center;
  font-size: 1.7em;
  margin: 0;
}
.featured__shop-now-btn {
  font-family: "Lato", sans-serif;
  color: #f5f5f5;
  border: 2px solid #313190;
  background-color: #313190;
  font-size: 1.3em;
  padding: 5px 15px;
  border-radius: 3px;
  display: block;
  margin: 18px auto auto auto;
  cursor: pointer;
  transition: background-color 0.2s;
  box-shadow: 0px 2px 5px #868686;
}
.featured__shop-now-btn:hover {
  background-color: #20207b;
}

.categories {
  width: 1200px;
  max-width: 100%;
  margin: 60px auto;
  padding-left: 45px;
  padding-right: 45px;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 40px;
  text-align: center;
}
.category {
  height: 220px;
  background-image: radial-gradient(#eaeaea, #b7b7b7);
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  justify-content: center;
  align-items: center;
}
.category__label {
  font-weight: bold;
  color: #969696;
}
.category__shop-now-btn {
  font-family: "Lato", sans-serif;
  color: #f5f5f5;
  border: 2px solid #313190;
  background-color: #313190;
  font-size: 1.2em;
  padding: 5px 15px;
  cursor: pointer;
  border-radius: 3px;
  display: block;
  transition: background-color 0.2s;
  box-shadow: 0px 2px 5px #868686;
  margin-top: 6px;
}
.category__shop-now-btn:hover {
  background-color: #20207b;
}
.category__txt {
  font-weight: bold;
  margin: 0;
  font-size: 1.2em;
}
.homepage-link {
  text-decoration: none;
}

@media (max-width: 1500px) {
  .top-hero {
    height: 600px;
  }
  .featured__1,
  .featured__2 {
    height: 550px;
  }
}

@media (max-width: 1200px) {
  .top-hero {
    height: 500px;
  }
  .featured__1,
  .featured__2 {
    height: 450px;
  }
}

@media (max-width: 1100px) {
  .categories {
    padding-left: 30px;
    padding-right: 30px;
  }
  .category {
    height: 190px;
  }
}

@media (max-width: 950px) {
  .categories {
    grid-template-columns: 1fr 1fr;
  }
  .category {
    height: 300px;
  }
}

@media (max-width: 800px) {
  .top-hero {
    height: 400px;
  }
  .featured__1,
  .featured__2 {
    height: 375px;
  }
}

@media (max-width: 700px) {
  .categories {
    padding-left: 15px;
    padding-right: 15px;
    margin-top: 15px;
    margin-bottom: 30px;
    grid-gap: 15px;
  }
  .category {
    height: 300px;
  }
}

@media (max-width: 600px) {
  .featured {
    display: initial;
  }
  .featured__1,
  .featured__2 {
    height: 300px;
    margin-top: 15px;
    margin-bottom: 15px;
  }
  .top-hero {
    height: 300px;
    padding-left: 15px;
    padding-right: 15px;
  }
  .top-hero__data {
    text-align: center;
  }
  .top-hero__title-txt {
    font-size: 2.4em;
    line-height: 36px;
  }
  .top-hero__shop-now-btn,
  .featured__shop-now-btn {
    font-size: 1.1em;
    margin-top: 10px;
  }
  .category__shop-now-btn {
    font-size: 1.05em;
  }
}

@media (max-width: 550px) {
  .categories {
    grid-template-columns: 1fr;
    width: 350px;
  }
  .category {
    height: 300px;
  }
}

@media (max-width: 550px) {
  .category {
    height: 275px;
  }
}
</style>
