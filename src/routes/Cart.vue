<template>
  <div>
    <Nav
      :toggleDropdown="toggleDropdown"
      :navDropdown="navDropdown"
      :setNavData="setNavData"
      :navData="navData"
      :getProducts="getProducts"
      :zIndex="1"
    />
    <div class="content">
      <h3 class="title">
        Your Cart ({{ cartData.products.length }} item<span
          v-if="cartData.products.length !== 1"
          >s</span
        >)
      </h3>
      <div class="cart-details">
        <div class="product-details">
          <p v-if="cartData.products.length === 0" class="no-products-txt">
            No products have been added to your cart.
          </p>
          <div
            v-for="(product, productI) in cartData.products"
            :key="productI"
            :class="{ 'border-top': productI === 0 }"
            class="product"
          >
            <div class="product-img-container">
              <router-link
                :to="
                  `/product/${getPath(product.productPath)}/${getProductId(
                    product.productPath
                  )}`
                "
              >
                <img :src="`https://${s3Bucket}${product.imgUrlEnd}`" class="product-img" alt="" />
              </router-link>
            </div>
            <div class="product-data-container">
              <div>
                <p class="product-name-txt">
                  <!-- <router-link
                    :to="
                      `/product/${getPath(product.productPath)}/${getProductId(
                        product.productPath
                      )}`
                    "
                    class="product-name-link"
                  >
                    {{ product.product.name["S"] }}
                  </router-link> -->
                  <router-link
                    :to="
                      `/product/${getPath(product.productPath)}/${getProductId(
                        product.productPath
                      )}`
                    "
                    class="product-name-link"
                  >
                    {{ product.name }}
                  </router-link>
                </p>
                <div class="product-options">
                  <div>
                    <svg
                      @click="
                        setCartData('REMOVE_PRODUCT', { index: productI })
                      "
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      class="remove-product-btn"
                    >
                      <path
                        d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
                        fill="#333"
                      />
                      <path d="M0 0h24v24H0z" fill="none" />
                    </svg>
                    <p
                      v-for="optionKey in Object.keys(product.options)"
                      :key="optionKey"
                      class="product-detail"
                    >
                      <strong>{{ optionKey }}</strong
                      >: {{ product.options[optionKey] }}
                    </p>
                    <!-- <p class="product-detail">
                      <strong>Price</strong>: ${{ product.product.price["N"] }}
                    </p> -->
                    <p class="product-detail">
                      <strong>Price</strong>: ${{ product.price }}
                    </p>
                  </div>
                </div>
              </div>
              <div class="product-qty-and-subtotal">
                <div>
                  <p class="product-qty-txt">
                    <strong>Qty</strong>: {{ product.quantity }}
                  </p>
                </div>
                <div>
                  <!-- <p class="product-subtotal-txt">
                    ${{
                      (product.quantity * +product.product.price["N"]).toFixed(
                        2
                      )
                    }}
                  </p> -->
                  <p class="product-subtotal-txt">
                    ${{
                      (product.quantity * +product.price).toFixed(
                        2
                      )
                    }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="payment-details">
          <div class="payment-detail">
            <div>
              <p class="payment-detail-txt">Subtotal:</p>
            </div>
            <div>
              <p class="payment-detail-txt">${{ getSubtotal }}</p>
            </div>
          </div>
          <router-link to="/checkout" class="checkout-link">
            <button
              :class="{ 'disabled-btn': cartData.products.length === 0 }"
              :disabled="cartData.products.length === 0"
              class="checkout-btn"
            >
              <span>Checkout</span>
              <span class="checkout-arrow-container">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"
                    fill="white"
                  />
                  <path fill="none" d="M0 0h24v24H0V0z" />
                </svg>
              </span>
            </button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Nav from "../components/nav/Nav";
import { getPath, getProductId } from "../functions/general-helper-functions";
import { s3Bucket } from "../defineAppVars";

export default {
  props: [
    "toggleDropdown",
    "navDropdown",
    "getProducts",
    "cartData",
    "setCartData",
    "navData",
    "setNavData"
  ],
  data() {
    return { s3Bucket }
  },
  components: { Nav },
  computed: {
    getSubtotal: function() {
      let subtotal = 0;

      this.cartData.products.forEach(productData => {
        // const price = +productData.product.price["N"];
        const price = +productData.price;
        const quantity = productData.quantity;

        subtotal += price * quantity;
      });

      return subtotal.toFixed(2);
    }
  },
  methods: {
    getPath,
    getProductId
  }
};
</script>

<style scoped>
.content {
  width: 1100px;
  margin: auto;
  max-width: 100%;
  padding-left: 15px;
  padding-right: 15px;
  box-sizing: border-box;
}
.title {
  font-size: 24px;
}
.cart-details {
  display: grid;
  grid-template-columns: 2fr 1fr;
}
.product-details {
  padding-right: 15px;
}
.payment-details {
  border-left: 1px solid #ddd;
  padding-left: 15px;
}
.payment-detail {
  display: flex;
  justify-content: space-between;
  padding-bottom: 15px;
  border-bottom: 1px solid #ddd;
}
.payment-detail-txt {
  margin: 0;
  font-weight: bold;
  font-size: 18px;
}
.product {
  border-bottom: 1px solid #ddd;
  padding-top: 15px;
  padding-bottom: 15px;
  display: flex;
}
.product.border-top {
  border-top: 1px solid #ddd;
}
.product-img-container {
  flex: 0 0 130px;
}
.product-img {
  width: 100%;
}
.product-data-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-grow: 1;
  position: relative;
  padding-left: 15px;
}
.product-name-txt {
  font-weight: bold;
  margin: 0 0 3px 0;
  font-size: 18px;
  padding-right: 25px;
}
.product-name-link {
  color: #333;
}
.product-options {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.product-detail {
  margin: 4px 0;
}
.product-detail-key-txt {
  margin-top: 3px;
  margin-bottom: 3px;
}
.product-detail-value-txt {
  margin-top: 3px;
  margin-bottom: 3px;
}
.product-qty-and-subtotal {
  display: flex;
  justify-content: space-between;
}
.product-qty-txt {
  margin: 0 0 3px 0;
}
.product-subtotal-txt {
  margin: 0 0 3px 0;
  font-weight: bold;
}
.no-products-txt {
  text-align: center;
}
.remove-product-btn {
  position: absolute;
  top: -2px;
  right: 0;
  cursor: pointer;
  transition: background-color 0.1s;
  border-radius: 3px;
}
.remove-product-btn:hover {
  background-color: #ccc;
}
.checkout-btn {
  display: flex;
  font-size: 18px;
  align-items: center;
  justify-content: center;
  background-color: green;
  color: white;
  border: 3px solid darkgreen;
  border-radius: 3px;
  cursor: pointer;
  transition: background-color 0.1s;
  width: 100%;
  margin-top: 15px;
}
.checkout-btn:hover {
  background-color: darkgreen;
}
.checkout-arrow-container {
  display: flex;
}
.checkout-btn.disabled-btn {
  background-color: grey;
  border: 3px solid grey;
  cursor: default;
}
.checkout-btn.disabled-btn:hover {
  background-color: grey;
}
.checkout-link {
  text-decoration: none;
}

@media (max-width: 768px) {
  .cart-details {
    display: initial;
  }
  .product-details {
    padding-right: 0;
  }
  .payment-details {
    padding-left: 0;
    border-left: none;
    padding-top: 15px;
  }
  .payment-detail {
    border-bottom: none;
    padding-bottom: 0;
  }
  .no-products-txt {
    border-bottom: 1px solid #ddd;
    padding-bottom: 15px;
    margin-bottom: 0;
  }
}

@media (max-width: 576px) {
  .product-img-container {
    flex: 0 0 105px;
  }
}
</style>
