<template>
  <div class="content">
    <h1 class="title">Edit Product</h1>
    <div class="product">
      <div class="attribute">
        <div class="attribute-key-txt-container">
          <p class="attribute-key-txt">Name:</p>
        </div>
        <div class="attribute-value-txt-container">
          <p class="attribute-value-txt">{{ product.name["S"] }}</p>
        </div>
        <div class="edit-attribute-btn-outer-container">
          <div class="edit-attribute-btn-inner-container">
            <button
              @click="epfEditAttribute('edit', 'name')"
              class="edit-attribute-btn"
            >
              Edit
            </button>
          </div>
        </div>
      </div>
      <div class="attribute">
        <div class="attribute-key-txt-container">
          <p class="attribute-key-txt">Location:</p>
        </div>
        <div class="attribute-value-txt-container">
          <p class="attribute-value-txt">
            {{ getProductLocation(product.productPath["S"]) }}
          </p>
        </div>
        <div class="edit-attribute-btn-outer-container">
          <div class="edit-attribute-btn-inner-container">
            <button
              @click="epfEditAttribute('edit', 'productPath')"
              class="edit-attribute-btn"
            >
              Edit
            </button>
          </div>
        </div>
      </div>
      <div class="attribute">
        <div class="attribute-key-txt-container">
          <p class="attribute-key-txt">Price:</p>
        </div>
        <div class="attribute-value-txt-container">
          <p class="attribute-value-txt">{{ product.price["N"] }}</p>
        </div>
        <div class="edit-attribute-btn-outer-container">
          <div class="edit-attribute-btn-inner-container">
            <button
              @click="epfEditAttribute('edit', 'price')"
              class="edit-attribute-btn"
            >
              Edit
            </button>
          </div>
        </div>
      </div>
      <div class="attribute">
        <div class="attribute-key-txt-container">
          <p class="attribute-key-txt">Tags:</p>
        </div>
        <div class="attribute-value-txt-container">
          <p class="attribute-value-txt">
            {{ reformatTags(product.tags["L"]) }}
          </p>
        </div>
        <div class="edit-attribute-btn-outer-container">
          <div class="edit-attribute-btn-inner-container">
            <button
              @click="epfEditAttribute('edit', 'tags')"
              class="edit-attribute-btn"
            >
              Edit
            </button>
          </div>
        </div>
      </div>
      <div class="attribute">
        <div class="attribute-key-txt-container">
          <p class="attribute-key-txt">Creation Date:</p>
        </div>
        <div class="attribute-value-txt-container">
          <p class="attribute-value-txt">
            {{ reformatCreationDate(product.createdAt["N"]) }}
          </p>
        </div>
        <div class="edit-attribute-btn-outer-container">
          <div class="edit-attribute-btn-inner-container">
            <button
              @click="epfEditAttribute('edit', 'createdAt')"
              class="edit-attribute-btn"
            >
              Edit
            </button>
          </div>
        </div>
      </div>
      <div class="attribute">
        <div class="attribute-key-txt-container">
          <p class="attribute-key-txt">Stock Details:</p>
        </div>
        <div>
          <div
            v-for="(optionCombo, ocIndex) in product.options['L']"
            :key="ocIndex"
          >
            <p class="attribute-value-txt">
              <strong>Option Combination {{ ocIndex + 1 }}</strong>
            </p>
            <p
              v-for="(optionKey, oIndex) in Object.keys(optionCombo['M'])"
              :key="oIndex"
              v-if="optionKey !== 'inStock'"
              class="option-value-txt option"
            >
              <strong>{{ optionKey }}</strong
              >: {{ optionCombo["M"][optionKey]["S"] }}
            </p>
            <p class="option-value-txt option">
              <strong>In Stock</strong>: {{ optionCombo["M"].inStock["N"] }}
            </p>
          </div>
        </div>
        <div class="edit-attribute-btn-outer-container">
          <div class="edit-attribute-btn-inner-container">
            <button
              @click="epfEditAttribute('edit', 'options')"
              class="edit-attribute-btn"
            >
              Edit
            </button>
          </div>
        </div>
      </div>
      <div class="attribute">
        <div class="attribute-key-txt-container">
          <p class="attribute-key-txt">Image Rankings:</p>
        </div>
        <div>
          <div v-for="(colorImgs, imageI) in product.images['L']" :key="imageI">
            <p class="attribute-value-txt">
              <strong>Color</strong>: {{ colorImgs["M"].color["S"] }}
            </p>
            <div
              class="main-img-details"
              v-for="(mainImg, mainImgI) in colorImgs['M'].mainImgs['L']"
              :key="mainImgI"
            >
              <p class="main-img-txt">
                <a
                  :href="mainImg['M'].url['S']"
                  target="_blank"
                  class="main-img-link"
                  >Main Image {{ mainImgI + 1 }}</a
                >
              </p>
            </div>
          </div>
        </div>
        <div class="edit-attribute-btn-outer-container">
          <div class="edit-attribute-btn-inner-container">
            <button
              @click="epfEditAttribute('edit', 'images')"
              class="edit-attribute-btn"
            >
              Edit
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  getProductLocation,
  reformatTags,
  reformatCreationDate
} from "../../functions/edit-product-form/helper-functions";

export default {
  props: ["product", "editProductForm", "epfEditAttribute"],
  methods: {
    getProductLocation,
    reformatTags,
    reformatCreationDate
  }
};
</script>

<style scoped>
.content {
  padding-left: 15px;
  padding-right: 15px;
}
.title {
  text-align: center;
}
.product {
  border: 2px solid #ddd;
  border-radius: 3px;
  padding-left: 15px;
  padding-right: 15px;
}
.attribute {
  display: grid;
  grid-template-columns: 2fr 6fr 1fr;
  margin-top: 15px;
  /* margin-bottom: 15px; */
  padding-bottom: 15px;
  border-bottom: 1px solid #ccc;
}
.attribute-key-txt-container {
  display: flex;
  align-items: flex-start;
}
.attribute-value-txt-container {
  display: flex;
  align-items: flex-start;
}
.attribute-key-txt {
  font-weight: bold;
  margin: 3px 0 0 0;
}
.attribute-value-txt {
  margin: 3px 0 0 0;
}
.option-value-txt {
  margin-top: 8px;
  margin-bottom: 8px;
}
.edit-attribute-btn-outer-container {
  display: flex;
  align-items: stretch;
}
.edit-attribute-btn-inner-container {
  width: 100%;
}
.edit-attribute-btn {
  background-color: #989898;
  font-size: 16px;
  color: white;
  border: 2px solid grey;
  cursor: pointer;
  width: 100%;
  border-radius: 3px;
}
.edit-attribute-btn:hover {
  background-color: grey;
}
.option {
  padding-left: 15px;
  padding-right: 15px;
  display: flex;
}
.main-img-details {
  padding-left: 15px;
  padding-right: 15px;
}
.main-img-link {
  color: #0000a5;
}
.main-img-txt {
  margin-top: 8px;
  margin-bottom: 8px;
}
</style>
