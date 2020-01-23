<template>
  <div class="content">
    <Loading v-if="editProductForm.uploadingEdits" />
    <div v-else>
      <div
        v-if="editProductForm.deleteStatus === 'confirm'"
        class="delete-product-modal-bg"
      >
        <div class="delete-product-modal">
          <svg
            @click="epfChangeDeleteStatus('cancel')"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            class="close-icon"
          >
            <path
              d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
            />
            <path d="M0 0h24v24H0z" fill="none" />
          </svg>
          <h3 class="delete-product-title">
            Are you sure you want to delete this product? This action cannot be
            undone.
          </h3>
          <p class="delete-product-txt">
            <strong>Name</strong>: {{ product.name["S"] }}
          </p>
          <p class="delete-product-txt">
            <strong>Location</strong>:
            {{ getProductLocation(product.productPath["S"]) }}
          </p>
          <button
            @click="epfChangeDeleteStatus('finalize')"
            class="delete-product-modal-delete-btn"
          >
            Yes, Delete This Product
          </button>
          <button
            @click="epfChangeDeleteStatus('cancel')"
            class="delete-product-modal-keep-btn"
          >
            No, Keep This Product
          </button>
        </div>
      </div>
      <div
        v-else-if="editProductForm.deleteStatus === 'deleting'"
        class="delete-product-modal-bg"
      >
        <div class="delete-product-modal">
          <Loading />
        </div>
      </div>
      <h1 class="title">Edit Product</h1>
      <button
        @click="epfChangeDeleteStatus('confirm')"
        class="delete-product-btn"
      >
        Delete Product
      </button>
      <p
        v-if="editProductForm.attributesEdited.length > 0"
        class="submit-reminder-txt"
      >
        Click "Submit Changes" below to apply all changes made to this product.
        Any edits made will not be applied until you do this.
      </p>
      <form @submit="epfSubmitEdits" class="product">
        <div class="attribute">
          <div class="attribute-key-txt-container">
            <p class="attribute-key-txt">Name:</p>
          </div>
          <div class="attribute-value-txt-container">
            <p class="attribute-value-txt">{{ product.name["S"] }}</p>
          </div>
          <!-- <div class="edit-attribute-btn-outer-container">
            <div class="edit-attribute-btn-inner-container">
              <button
                @click="epfEditAttribute('edit', 'name')"
                class="edit-attribute-btn"
                type="button"
              >
                Edit
              </button>
            </div>
          </div> -->
          <div class="edit-attribute-symbol-outer-container">
            <div class="edit-attribute-symbol-inner-container">
              <svg
                @click="epfEditAttribute('edit', 'name')"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                class="edit-attribute-symbol"
              >
                <path
                  d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"
                  fill="#bbb"
                />
                <path d="M0 0h24v24H0z" fill="none" />
              </svg>
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
          <!-- <div class="edit-attribute-btn-outer-container">
            <div class="edit-attribute-btn-inner-container">
              <button
                @click="epfEditAttribute('edit', 'productPath')"
                class="edit-attribute-btn"
                type="button"
              >
                Edit
              </button>
            </div>
          </div> -->
          <div class="edit-attribute-symbol-outer-container">
            <div class="edit-attribute-symbol-inner-container">
              <svg
                @click="epfEditAttribute('edit', 'productPath')"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                class="edit-attribute-symbol"
              >
                <path
                  d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"
                  fill="#bbb"
                />
                <path d="M0 0h24v24H0z" fill="none" />
              </svg>
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
          <!-- <div class="edit-attribute-btn-outer-container">
            <div class="edit-attribute-btn-inner-container">
              <button
                @click="epfEditAttribute('edit', 'price')"
                class="edit-attribute-btn"
                type="button"
              >
                Edit
              </button>
            </div>
          </div> -->
          <div class="edit-attribute-symbol-outer-container">
            <div class="edit-attribute-symbol-inner-container">
              <svg
                @click="epfEditAttribute('edit', 'price')"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                class="edit-attribute-symbol"
              >
                <path
                  d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"
                  fill="#bbb"
                />
                <path d="M0 0h24v24H0z" fill="none" />
              </svg>
            </div>
          </div>
        </div>
        <div class="attribute">
          <div class="attribute-key-txt-container">
            <p class="attribute-key-txt">Tags:</p>
          </div>
          <div class="attribute-value-txt-container">
            <p class="attribute-value-txt">
              <span v-if="product.tags['L'].length === 0">
                <em>no tags are set</em>
              </span>
              <span v-else>
                {{ reformatTags(product.tags["L"]) }}
              </span>
            </p>
          </div>
          <!-- <div class="edit-attribute-btn-outer-container">
            <div class="edit-attribute-btn-inner-container">
              <button
                @click="epfEditAttribute('edit', 'tags')"
                class="edit-attribute-btn"
                type="button"
              >
                Edit
              </button>
            </div>
          </div> -->
          <div class="edit-attribute-symbol-outer-container">
            <div class="edit-attribute-symbol-inner-container">
              <svg
                @click="epfEditAttribute('edit', 'tags')"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                class="edit-attribute-symbol"
              >
                <path
                  d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"
                  fill="#bbb"
                />
                <path d="M0 0h24v24H0z" fill="none" />
              </svg>
            </div>
          </div>
        </div>
        <div class="attribute">
          <div class="attribute-key-txt-container">
            <p class="attribute-key-txt">Creation Date:</p>
          </div>
          <div class="attribute-value-txt-container">
            <p class="attribute-value-txt">
              {{ displayCreationDate(product.createdAt["N"]) }}
            </p>
          </div>
          <!-- <div class="edit-attribute-btn-outer-container">
            <div class="edit-attribute-btn-inner-container">
              <button
                @click="epfEditAttribute('edit', 'createdAt')"
                class="edit-attribute-btn"
                type="button"
              >
                Edit
              </button>
            </div>
          </div> -->
          <div class="edit-attribute-symbol-outer-container">
            <div class="edit-attribute-symbol-inner-container">
              <svg
                @click="epfEditAttribute('edit', 'createdAt')"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                class="edit-attribute-symbol"
              >
                <path
                  d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"
                  fill="#bbb"
                />
                <path d="M0 0h24v24H0z" fill="none" />
              </svg>
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
          <!-- <div class="edit-attribute-btn-outer-container">
            <div class="edit-attribute-btn-inner-container">
              <button
                @click="epfEditAttribute('edit', 'options')"
                class="edit-attribute-btn"
                type="button"
              >
                Edit
              </button>
            </div>
          </div> -->
          <div class="edit-attribute-symbol-outer-container">
            <div class="edit-attribute-symbol-inner-container">
              <svg
                @click="epfEditAttribute('edit', 'options')"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                class="edit-attribute-symbol"
              >
                <path
                  d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"
                  fill="#bbb"
                />
                <path d="M0 0h24v24H0z" fill="none" />
              </svg>
            </div>
          </div>
        </div>
        <div class="attribute">
          <div class="attribute-key-txt-container">
            <p class="attribute-key-txt">Image Rankings:</p>
          </div>
          <div>
            <div
              v-for="(colorImgs, imageI) in product.images['L']"
              :key="imageI"
            >
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
          <!-- <div class="edit-attribute-btn-outer-container">
            <div class="edit-attribute-btn-inner-container">
              <button
                @click="epfEditAttribute('edit', 'images')"
                class="edit-attribute-btn"
                type="button"
              >
                Edit
              </button>
            </div>
          </div> -->
          <div class="edit-attribute-symbol-outer-container">
            <div class="edit-attribute-symbol-inner-container">
              <svg
                @click="epfEditAttribute('edit', 'images')"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                class="edit-attribute-symbol"
              >
                <path
                  d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"
                  fill="#bbb"
                />
                <path d="M0 0h24v24H0z" fill="none" />
              </svg>
            </div>
          </div>
        </div>
        <div class="epf-btns">
          <div class="cancel-btn-container">
            <button @click="epfCancelEdits" class="cancel-btn" type="button">
              Cancel Changes
            </button>
          </div>
          <div class="submit-btn-container">
            <button
              v-if="editProductForm.attributesEdited.length === 0"
              class="submit-btn disabled"
              disabled
              type="submit"
            >
              Submit Changes
            </button>
            <button v-else class="submit-btn" type="submit">
              Submit Changes
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import {
  getProductLocation,
  reformatTags,
  displayCreationDate
} from "../../functions/edit-product-form/helper-functions";
import Loading from "../Loading";

export default {
  props: [
    "product",
    "editProductForm",
    "epfEditAttribute",
    "epfSubmitEdits",
    "epfCancelEdits",
    "epfChangeDeleteStatus"
  ],
  components: {
    Loading
  },
  mounted() {
    document.querySelector(".admin__content").scrollTop = 0;
  },
  methods: {
    getProductLocation,
    reformatTags,
    displayCreationDate
  }
};
</script>

<style scoped>
.content {
  padding-left: 15px;
  padding-right: 15px;
  box-sizing: border-box;
}
.title {
  text-align: center;
  margin-bottom: 15px;
}
.submit-reminder-txt {
  text-align: center;
  font-weight: bold;
  background-color: #d1ead1;
  width: 500px;
  max-width: 100%;
  margin: auto;
  border: 2px solid #92ca92;
  border-radius: 3px;
  margin-bottom: 15px;
  padding: 8px;
  box-sizing: border-box;
}
.product {
  border: 2px solid #ddd;
  border-radius: 3px;
  padding-left: 15px;
  padding-right: 15px;
  width: 1100px;
  max-width: 100%;
  margin: auto auto 30px auto;
  box-sizing: border-box;
}
.attribute {
  display: grid;
  grid-template-columns: 4fr 12fr 1fr;
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

.edit-attribute-symbol-outer-container {
  display: flex;
  align-items: stretch;
}
.edit-attribute-symbol-inner-container {
  width: 100%;
  display: flex;
  justify-content: flex-end;
}
.edit-attribute-symbol {
  cursor: pointer;
  border-radius: 3px;
  transition: all 0.1s;
}
.edit-attribute-symbol:hover {
  background-color: #ddd;
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
.delete-product-btn {
  background-color: #b90e0e;
  border: 2px solid darkred;
  color: white;
  cursor: pointer;
  border-radius: 2px;
  font-size: 17px;
  transition: background-color 0.2s;
  margin: 15px auto;
  display: block;
  width: 180px;
}
.delete-product-btn:hover {
  background-color: darkred;
}
.epf-btns {
  display: flex;
  margin-top: 15px;
  margin-bottom: 15px;
}
.cancel-btn-container,
.submit-btn-container {
  flex: 1;
}
.cancel-btn-container {
  padding-right: 3px;
}
.submit-btn-container {
  padding-left: 3px;
}
.submit-btn,
.cancel-btn {
  width: 100%;
  font-size: 20px;
  color: white;
  cursor: pointer;
  border-radius: 3px;
  transition: background-color 0.2s;
}
.cancel-btn {
  background-color: #b90e0e;
  border: 2px solid darkred;
}
.submit-btn {
  background-color: green;
  border: 2px solid darkgreen;
}
.cancel-btn:hover {
  background-color: darkred;
}
.submit-btn:hover {
  background-color: darkgreen;
}
.disabled {
  background-color: grey;
  border-color: grey;
}
.disabled:hover {
  background-color: grey;
}
.delete-product-modal-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  background-color: grey;
  height: calc(100vh - 50px);
  background-color: rgba(0, 0, 0, 0.3);
  padding-left: 15px;
  padding-right: 15px;
  box-sizing: border-box;
}
.delete-product-modal {
  width: 500px;
  max-width: 100%;
  background-color: #f5f5f5;
  border-radius: 3px;
  border: 2px solid #ddd;
  box-sizing: border-box;
  margin: 15px auto;
  padding: 5px 15px 15px 15px;
  position: relative;
}
.delete-product-title {
  text-align: center;
}
.delete-product-txt {
  text-align: center;
}
.delete-product-modal-delete-btn,
.delete-product-modal-keep-btn {
  width: 100%;
  color: white;
  font-size: 16px;
  border-radius: 2px;
  padding-top: 3px;
  padding-bottom: 3px;
  margin: 6px 0;
  cursor: pointer;
  transition: background-color 0.2s;
}
.delete-product-modal-delete-btn {
  background-color: #b90e0e;
  border: 2px solid darkred;
  margin: 6px 0 3px 0;
}
.delete-product-modal-delete-btn:hover {
  background-color: darkred;
}
.delete-product-modal-keep-btn {
  background-color: #909090;
  border: 2px solid grey;
  margin: 3px 0 10px 0;
}
.delete-product-modal-keep-btn:hover {
  background-color: grey;
}
.close-icon {
  position: absolute;
  right: 0;
  top: 0;
  margin-right: 5px;
  margin-top: 5px;
  transition: background-color 0.1s;
  cursor: pointer;
}
.close-icon:hover {
  background-color: #bbb;
  border-radius: 2px;
}

@media (max-width: 700px) {
  .content {
    padding-left: 0;
    padding-right: 0;
  }
}
</style>
