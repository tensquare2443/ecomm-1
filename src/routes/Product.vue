<template>
  <div>
    <div
      v-if="productData.addedModal && productData.addedModal.display"
      class="added-modal-bg"
    >
      <div class="added-modal">
        <svg
          @click="setProductData('TOGGLE_ADDED_TO_CART_MODAL')"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          class="added-close"
        >
          <path
            d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
          />
          <path d="M0 0h24v24H0z" fill="none" />
        </svg>
        <h2 class="added-title">
          Added To Your Cart:
        </h2>
        <div class="added__all-data">
          <div class="added-img-container">
            <img :src="getAddedImgUrl()" class="added-img" alt="" />
          </div>
          <div class="added-data-rows">
            <div class="added-data-row">
              <div>
                <p class="added-data-key">
                  {{ product.name["S"] }}
                </p>
              </div>
              <div>
                <p class="added-data-value">${{ product.price["N"] }}</p>
              </div>
            </div>
            <div class="added-data-row">
              <div>
                <p class="added-data-key">
                  Color
                </p>
              </div>
              <div>
                <p class="added-data-value">
                  {{ productData.color }}
                </p>
              </div>
            </div>
            <div
              v-for="(selectedOptionKey, selectedOptionKeyI) in Object.keys(
                productData.selectedOptions
              )"
              :key="selectedOptionKeyI"
              class="added-data-row"
            >
              <div>
                <p class="added-data-key">
                  {{ selectedOptionKey }}
                </p>
              </div>
              <div>
                <p class="added-data-value">
                  {{ productData.selectedOptions[selectedOptionKey] }}
                </p>
              </div>
            </div>
            <div class="added-data-row">
              <div>
                <p class="added-data-key">
                  Quantity
                </p>
              </div>
              <div>
                <p class="added-data-value">
                  {{ productData.addToCartQuantity }}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="added__btns">
          <div>
            <button
              @click="setProductData('TOGGLE_ADDED_TO_CART_MODAL')"
              class="added-shop-btn"
            >
              Keep Shopping
            </button>
          </div>
          <div>
            <router-link @click.native="setProductData('TOGGLE_ADDED_TO_CART_MODAL')" to="/checkout">
              <button class="added-checkout-btn">Checkout</button>
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <Nav
      :toggleDropdown="toggleDropdown"
      :navDropdown="navDropdown"
      :getProducts="getProducts"
      :setNavData="setNavData"
      :navData="navData"
    />
    <div class="content">
      <Loading v-if="productLoading" />
      <div v-else-if="product">
        <p class="breadcrumbs">
          <span
            v-for="(link, index) in getBreadcrumbLinks(
              $route.path,
              product.name['S']
            )"
            :key="index"
          >
            <span v-if="index !== 0">{{ " > " }}</span>
            <router-link
              v-if="
                index !==
                  getBreadcrumbLinks($route.path, product.name['S']).length - 1
              "
              :to="`/products/${link[0]}`"
              class="breadcrumbs__link"
              >{{ link[1] }}</router-link
            >
            <span v-else class="breadcrumbs__item">{{ link[1] }}</span>
          </span>
        </p>
        <div class="product">
          <div class="main-imgs-thumbnails-lg">
            <img
              v-for="(mainImg, mainImgI) in productData.mainImgs"
              :src="mainImg.url"
              @click="
                setProductData('CHANGE_DISPLAYED_IMAGE', {
                  ranking: mainImg.ranking
                })
              "
              :key="mainImgI"
              :class="{
                displayed: mainImg.display,
                'not-displayed': !mainImg.display
              }"
              class="main-img-thumbnail-lg"
              alt="thumb"
            />
          </div>
          <div class="main-img">
            <img
              :src="getDisplayedMainImgUrl()"
              class="main-img-displayed"
              alt=""
            />
            <div class="main-imgs-thumbnails-sm">
              <img
                v-for="(mainImg, mainImgI) in productData.mainImgs"
                :key="mainImgI"
                :src="mainImg.url"
                @click="
                  setProductData('CHANGE_DISPLAYED_IMAGE', {
                    ranking: mainImg.ranking
                  })
                "
                :class="{
                  displayed: mainImg.display,
                  'not-displayed': !mainImg.display,
                  'ml-0': mainImgI === 0,
                  'mr-0': mainImgI === productData.mainImgs.length - 1
                }"
                class="main-img-thumbnail-sm"
                alt="thumb"
              />
            </div>
          </div>
          <div class="product-details">
            <h2 class="product-name">
              {{ product.name["S"] }}
            </h2>
            <h3 class="product-price">${{ product.price["N"] }}</h3>
            <div class="color-thumbnail-imgs">
              <div
                v-for="(colorImgData, colorImgDataI) in product.images['L']"
                :key="colorImgDataI"
                class="color-thumbnail-img-container"
              >
                <img
                  :src="colorImgData['M'].thumbnailImg['S']"
                  @click="
                    setProductData('CHANGE_DISPLAYED_COLOR', {
                      product,
                      color: colorImgData['M'].color['S']
                    })
                  "
                  :class="{
                    'selected-color':
                      productData.color === colorImgData['M'].color['S'],
                    'unselected-color':
                      productData.color !== colorImgData['M'].color['S']
                  }"
                  class="color-thumbnail-img"
                  alt=""
                />
              </div>
            </div>
            <div
              v-for="(option, optionI) in getProductOptions(
                product.options['L']
              )"
              :key="optionI"
              class="option"
            >
              <div>
                <p class="option-name-txt">
                  <strong>{{ option.name }}</strong
                  >:
                </p>
              </div>
              <div class="option-possibilities">
                <div
                  v-for="(optionPossibility,
                  optionPossibilityI) in option.possibilities"
                  :key="optionPossibilityI"
                  :class="{
                    'pl-0': optionPossibilityI === 0,
                    'pr-0':
                      optionPossibilityI === option.possibilities.length - 1
                  }"
                  class="option-possibility-btn-container"
                >
                  <button
                    @click="
                      setProductData('CHANGE_SELECTED_OPTION', {
                        option: {
                          name: option.name,
                          value: optionPossibility
                        }
                      })
                    "
                    :class="{
                      'selected-option':
                        productData.selectedOptions[option.name] ===
                        optionPossibility
                    }"
                    class="option-possibility-btn"
                  >
                    {{ optionPossibility }}
                  </button>
                </div>
              </div>
            </div>

            <div class="add-to-cart">
              <div
                :class="{ blbr: !productData.quantityDropdown }"
                class="add-to-cart-displayed"
                style="position: relative;"
                qty-drop="true"
              >
                <div qty-drop="true">
                  <p class="add-to-cart-quantity" qty-drop="true">
                    {{ productData.addToCartQuantity }}
                  </p>
                </div>
                <div style="display: flex;" qty-drop="true">
                  <svg
                    qty-drop="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"
                      fill="#333"
                    />
                    <path fill="none" d="M0 0h24v24H0V0z" />
                  </svg>
                </div>
                <div
                  qty-drop="true"
                  class="quantity-dropdown-items"
                  :class="{ 'items-displayed': productData.quantityDropdown }"
                >
                  <div
                    qty-drop="true"
                    v-for="number in [1, 2, 3, 4, 5]"
                    :key="number"
                    class="quantity-dropdown-item"
                  >
                    <p
                      qty-drop="true"
                      @click="
                        setProductData('CHANGE_CART_QUANTITY', { number })
                      "
                      class="quantity-dropdown-item-txt"
                    >
                      {{ number }}
                    </p>
                  </div>
                </div>
              </div>
              <div class="add-to-cart-btn-container">
                <button
                  @click="setCartData('ADD_PRODUCT')"
                  class="add-to-cart-btn"
                >
                  Add To Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Nav from "../components/nav/Nav";
import Loading from "../components/Loading";
import { getBreadcrumbLinks } from "../functions/general-helper-functions";

export default {
  props: [
    "toggleDropdown",
    "navDropdown",
    "getProducts",
    "getProduct",
    "product",
    "productData",
    "setProductData",
    "setCartData",
    "navData",
    "setNavData",
    "productLoading"
  ],
  components: { Nav, Loading },
  mounted() {
    // console.log("getting product on mount");
    this.getProduct(this.$route.path, "update productData");
  },
  methods: {
    getBreadcrumbLinks,
    getAddedImgUrl: function() {
      let mainImgs = this.productData.mainImgs;

      for (var i = 0; i < mainImgs.length; i++) {
        if (mainImgs[i].ranking === 1) {
          return mainImgs[i].url;
        }
      }
    },
    getDisplayedMainImgUrl: function() {
      const mainImgData = this.productData.mainImgs;
      for (var i = 0; i < mainImgData.length; i++) {
        if (mainImgData[i].display) {
          return mainImgData[i].url;
        }
      }
    },
    getProductOptions: function(productOptions) {
      let possibleOptions = [];

      Object.keys(productOptions[0]["M"]).forEach(optionKey => {
        if (optionKey !== "inStock" && optionKey !== "Color") {
          possibleOptions.push({
            name: optionKey,
            possibilities: []
          });
        }
      });

      productOptions.forEach((optionCombo, optionComboI) => {
        Object.keys(optionCombo["M"]).forEach(option => {
          if (option !== "inStock" && option !== "Color") {
            for (var i = 0; i < possibleOptions.length; i++) {
              if (possibleOptions[i].name === option) {
                const possibility =
                  productOptions[optionComboI]["M"][option]["S"];

                if (!possibleOptions[i].possibilities.includes(possibility)) {
                  possibleOptions[i].possibilities.push(possibility);
                }

                break;
              }
            }
          }
        });
      });

      return possibleOptions;
    }
  }
};
</script>

<style scoped>
.content {
  width: 1100px;
  max-width: 100%;
  margin: auto auto 30px auto;
  padding-left: 15px;
  padding-right: 15px;
  box-sizing: border-box;
}
.breadcrumbs__link {
  text-decoration: none;
  color: #333;
}
.breadcrumbs__link:hover {
  text-decoration: underline;
}
.product {
  display: grid;
  grid-template-columns: 120px 450px auto;
  grid-column-gap: 15px;
  margin-bottom: 30px;
}
.product-name {
  margin-top: 0;
  margin-bottom: 10px;
}
.product-price {
  margin-top: 10px;
}
.main-imgs-thumbnails-lg {
  max-height: 597px;
  overflow-y: scroll;
}
.main-img-thumbnail-lg {
  width: 100%;
  box-sizing: border-box;
  cursor: pointer;
  border-radius: 3px;
  transition: border-color 0.2s;
}
.main-img-thumbnail-lg.displayed {
  border: 3px solid #bbb;
}
.main-img-thumbnail-lg.not-displayed {
  border: 3px solid transparent;
}
.main-img-displayed {
  width: 100%;
}
.color-thumbnail-imgs {
  display: flex;
}
.color-thumbnail-img-container {
  flex: 0 0 44px;
}
.color-thumbnail-img {
  width: 100%;
  box-sizing: border-box;
  cursor: pointer;
}
.color-thumbnail-img.selected-color {
  border: 2px solid #333;
}
.color-thumbnail-img.unselected-color {
  border: 2px solid transparent;
}
.option {
  margin-top: 15px;
  margin-bottom: 15px;
}
.option-name-txt {
  margin-bottom: 5px;
}
.option-possibilities {
  display: flex;
}
.option-possibility-btn-container {
  padding: 3px;
}
.option-possibility-btn-container.pl-0 {
  padding-left: 0;
}
.option-possibility-btn-container.pr-0 {
  padding-right: 0;
}
.option-possibility-btn {
  background-color: transparent;
  color: #313190;
  border: 2px solid #313190;
  font-size: 18px;
  padding: 5px 12px;
  border-radius: 2px;
  cursor: pointer;
  transition: background-color, color 0.2s;
}
.option-possibility-btn:hover {
  background-color: #313190;
  color: white;
}
.option-possibility-btn.selected-option {
  background-color: #313190;
  border: 2px solid #313190;
  color: white;
}
.add-to-cart {
  display: flex;
  align-items: center;
}
.add-to-cart-displayed {
  align-self: stretch;
  display: flex;
  align-items: center;
  padding-left: 10px;
  padding-right: 6px;
  border-left: 1px solid #aaa;
  border-top: 1px solid #aaa;
  border-bottom: 1px solid #aaa;
  border-top-left-radius: 2px;
  cursor: pointer;
}
.add-to-cart-displayed.blbr {
  border-bottom-left-radius: 2px;
}
.add-to-cart-quantity {
  margin: 0;
}
.add-to-cart-btn {
  color: white;
  background-color: #313190;
  border: 3px solid #313190;
  border-top-right-radius: 2px;
  border-bottom-right-radius: 2px;
  font-size: 24px;
  padding: 4px 16px;
  cursor: pointer;
}
.quantity-dropdown-items {
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  border-left: 1px solid #aaa;
  border-right: 1px solid #aaa;
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  box-sizing: border-box;
  display: none;
}
.quantity-dropdown-items.items-displayed {
  display: block;
}
.quantity-dropdown-item {
  border-bottom: 1px solid #aaa;
}
.quantity-dropdown-item-txt {
  margin: 0;
  padding: 10px;
  text-align: center;
}
.added-modal-bg {
  position: fixed;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
  padding-left: 15px;
  padding-right: 15px;
  box-sizing: border-box;
  z-index: 1;
}
.added-modal {
  width: 600px;
  background-color: #f5f5f5;
  max-width: 100%;
  margin: 60px auto 0 auto;
  padding-left: 15px;
  padding-right: 15px;
  box-sizing: border-box;
  position: relative;
  border-radius: 3px;
  border: 2px solid #ddd;
}
.added-title {
  text-align: center;
  margin-top: 0;
  border-bottom: 1px solid #ddd;
  padding-top: 15px;
  padding-bottom: 15px;
}
.added-close {
  position: absolute;
  right: 0;
  top: 0;
  margin-top: 3px;
  margin-right: 3px;
  border-radius: 2px;
  cursor: pointer;
  transition: background-color 0.2s;
}
.added-close:hover {
  background-color: #ccc;
}
.added-img-container {
  flex: 0 0 150px;
}
.added-img {
  width: 100%;
}
.added__all-data {
  display: flex;
  padding-bottom: 15px;
  border-bottom: 1px solid #ddd;
}
.added-data-rows {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 15px;
}
.added-data-row {
  display: flex;
  justify-content: space-between;
}
.added-data-key,
.added-data-value {
  margin: 0;
}
.added__btns {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 15px;
  padding-top: 15px;
  padding-bottom: 15px;
}
.added-shop-btn,
.added-checkout-btn {
  width: 100%;
  color: white;
  font-size: 18px;
  border-radius: 2px;
  cursor: pointer;
  transition: background-color 0.2s;
  padding-top: 3px;
  padding-bottom: 3px;
}
.added-shop-btn {
  background-color: #828282;
  border: 2px solid #5f5f5f;
}
.added-shop-btn:hover {
  background-color: #5f5f5f;
}
.added-checkout-btn {
  background-color: green;
  border: 2px solid darkgreen;
}
.added-checkout-btn:hover {
  background-color: darkgreen;
}

.main-imgs-thumbnails-sm {
  display: none;
}

@media (max-width: 1000px) {
  .product {
    grid-template-columns: 100px 370px auto;
  }
  .main-imgs-thumbnails-lg {
    max-height: 491px;
  }
}

@media (max-width: 768px) {
  .added-modal {
    margin-top: 30px;
  }
}

@media (max-width: 750px) {
  .product {
    display: initial;
  }
  .main-imgs-thumbnails-lg {
    display: none;
  }
  .main-img {
    width: 100%;
  }
  .main-img-displayed {
    width: 400px;
    max-width: 100%;
    display: block;
    margin: auto;
  }
  .main-imgs-thumbnails-sm {
    display: block;
    width: 100%;
    text-align: center;
    white-space: nowrap;
    overflow-x: scroll;
    margin-top: 15px;
    margin-bottom: 15px;
    padding-top: 10px;
    padding-bottom: 7px;
    box-sizing: border-box;
    border-top: 1px solid #ddd;
    border-bottom: 1px solid #ddd;
  }
  .main-img-thumbnail-sm {
    width: 100px;
    cursor: pointer;
    margin-left: 3px;
    margin-right: 3px;
    border-radius: 3px;
    transition: border-color 0.2s;
  }
  .main-img-thumbnail-sm.displayed {
    border: 3px solid #bbb;
  }
  .main-img-thumbnail-sm.not-displayed {
    border: 3px solid transparent;
  }
  .main-img-thumbnail-sm.ml-0 {
    margin-left: 0;
  }
  .main-img-thumbnail-sm.mr-0 {
    margin-right: 0;
  }
}

@media (max-width: 576px) {
  .added-modal {
    margin-top: 15px;
  }
  .added__all-data {
    flex-direction: column;
  }
  .added-img-container {
    flex: initial;
    width: 100px;
    margin: auto;
    margin-bottom: 15px;
  }
  .added-data-key {
    font-weight: bold;
  }
  .added__btns {
    grid-template-columns: 1fr;
  }
  .added-checkout-btn {
    margin-top: 7px;
  }
}
</style>
