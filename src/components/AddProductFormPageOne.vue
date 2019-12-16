<template>
  <form @submit="addProductFormPageOneSubmit" class="add-product-form">
    <h1 class="add-product-form__title">
      Add a Product
    </h1>
    <div class="add-product-form__section">
      <h3 class="add-product-form__input-label-lg">Product Name:</h3>
      <p class="add-product-form__input-help-txt">
        Enter the product name. Use the formatting you'd like to see on the
        website. So if you'd like the first letter of the product name to be
        capitalized on the website, then use that formatting when entering it
        here. E.g., "Polo T-Shirt". Use only alphanumeric characters, spaces,
        and dashes ("-").
      </p>
      <input
        v-model="addProductForm.name.value"
        :class="{ 'invalid-input': addProductForm.name.invalidity }"
        class="add-product-form__txt-input"
        type="text"
        placeholder="Flannel Button-Down Shirt"
      />
      <p
        v-if="addProductForm.name.invalidity"
        class="add-product-form__invalid-txt"
      >
        {{ addProductForm.name.invalidity }}
      </p>
    </div>
    <div class="add-product-form__section">
      <h3 class="add-product-form__input-label-lg">Location:</h3>
      <p class="add-product-form__input-help-txt">
        Enter the department the product should be in followed by any
        subcategories within that department, separated by forward slashes.
        E.g., if the department is "women", the first subcategory within the
        department is "tops", and the next subcategory within "women/tops" is
        "button-downs", enter "women/tops/button-downs". Use lowercase only.
        Other than the forward slashes, use only alphanumeric characters, and
        dashes ("-").
      </p>
      <input
        v-model="addProductForm.location.value"
        :class="{ 'invalid-input': addProductForm.location.invalidity }"
        class="add-product-form__txt-input"
        type="text"
        placeholder="men/pants/khakis"
      />
      <p
        v-if="addProductForm.location.invalidity"
        class="add-product-form__invalid-txt"
      >
        {{ addProductForm.location.invalidity }}
      </p>
    </div>
    <div class="add-product-form__section">
      <h3 class="add-product-form__input-label-lg">Options:</h3>
      <p class="add-product-form__input-help-txt">
        Enter the name of the option available with the product. Then, enter the
        the possible values of this option separated by commas. For each option
        name and option value, use the formatting you'd like to see on the
        website. E.g., for an option name of "Size", you may use "XS,S,M,L,XL"
        as the option values. Other than the commas in the option value field,
        use only alphanumeric characters, spaces, and dashes ("-"). At least one
        color option is required, and no other options are required.
      </p>

      <div v-for="(option, index) in addProductForm.options">
        <p class="add-product-form__option-input-label">
          <strong>Option {{ index + 1 }}</strong>
        </p>
        <p class="add-product-form__option-input-label">
          Name of option:
        </p>
        <input
          v-if="index === 0"
          :value="`${option.name.value} (required)`"
          class="add-product-form__txt-input"
          type="text"
          disabled
        />
        <input
          v-else
          v-model="option.name.value"
          :class="{ 'invalid-input': option.name.invalidity }"
          class="add-product-form__txt-input"
          type="text"
        />
        <p v-if="option.name.invalidity" class="add-product-form__invalid-txt">
          {{ option.name.invalidity }}
        </p>
        <p class="add-product-form__option-input-label">
          Possible option values:
        </p>
        <input
          v-model="option.values.value"
          :class="{ 'invalid-input': option.values.invalidity }"
          class="add-product-form__txt-input"
          type="text"
          placeholder="red,green,blue"
        />
        <p
          v-if="option.values.invalidity"
          class="add-product-form__invalid-txt"
        >
          {{ option.values.invalidity }}
        </p>
      </div>
      <div class="add-product-form__option-btns-container">
        <div class="add-product-form__option-btn-container left">
          <button
            v-if="addProductForm.options.length > 1"
            @click="editProductFormOptions('remove')"
            class="add-product-form__remove-option-btn"
            type="button"
          >
            Remove Option
          </button>
          <button
            v-else
            disabled
            class="add-product-form__remove-option-btn disabled"
            type="button"
          >
            Remove Option
          </button>
        </div>
        <div class="add-product-form__option-btn-container right">
          <button
            v-if="
              addProductForm.options[addProductForm.options.length - 1].name
                .value.length > 0 &&
                addProductForm.options[addProductForm.options.length - 1].values
                  .value.length > 0
            "
            @click="editProductFormOptions('add')"
            class="add-product-form__add-option-btn"
            type="button"
          >
            Add Another Option
          </button>
          <button
            v-else
            disabled
            class="add-product-form__add-option-btn disabled"
            type="button"
          >
            Add Another Option
          </button>
        </div>
      </div>
    </div>
    <div class="add-product-form__section">
      <h3 class="add-product-form__input-label-lg">Sale Status:</h3>
      <div class="add-product-form__on-sale-container">
        <div class="add-product-form__on-sale-checkbox-container">
          <input v-model="addProductForm.sale" type="checkbox" />
        </div>
        <div>
          <p class="add-product-form__on-sale-txt">
            Check this box if the product should be "on sale" either immediately
            or on a future date.
          </p>
        </div>
      </div>
      <div v-if="addProductForm.sale">
        <p class="add-product-form__input-help-txt">
          Enter the beginning and ending sale in "MM/DD/YYYY" format. E.g.,
          "02/27/2021"
        </p>
        <div class="add-product-form__sale-dates">
          <div class="add-product-form__sale-date left">
            <p class="add-product-form__sale-input-label">Sale begins on:</p>
            <input
              v-model="addProductForm.saleDetails.start.value"
              :class="{
                'invalid-input': addProductForm.saleDetails.start.invalidity
              }"
              class="add-product-form__txt-input"
              type="text"
              placeholder="04/08/2021"
            />
            <p
              v-if="addProductForm.saleDetails.start.invalidity"
              class="add-product-form__invalid-txt"
            >
              {{ addProductForm.saleDetails.start.invalidity }}
            </p>
          </div>
          <div class="add-product-form__sale-date right">
            <p class="add-product-form__sale-input-label">Sale ends on:</p>
            <input
              v-model="addProductForm.saleDetails.end.value"
              :class="{
                'invalid-input': addProductForm.saleDetails.end.invalidity
              }"
              class="add-product-form__txt-input"
              type="text"
              placeholder="05/22/2021"
            />
            <p
              v-if="addProductForm.saleDetails.end.invalidity"
              class="add-product-form__invalid-txt"
            >
              {{ addProductForm.saleDetails.end.invalidity }}
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="add-product-form__section">
      <h3 class="add-product-form__input-label-lg">Tags:</h3>
      <p class="add-product-form__input-help-txt">
        Enter tags that should be connected to the product, if there are any.
        Use tags on items belonging to certain "categories" that make sense and
        that are not used in the "Product Location". Separate tags by commas.
        Use the formatting you'd like to see on the website. E.g.,
        "Denim,Long-sleeve". Other than the commas, use only alphanumeric
        characters, spaces, and dashes ("-").
      </p>
      <input
        v-model="addProductForm.tags.value"
        :class="{ 'invalid-input': addProductForm.tags.invalidity }"
        class="add-product-form__txt-input"
        type="text"
        placeholder="Short-sleeve,Denim"
      />
      <p
        v-if="addProductForm.tags.invalidity"
        class="add-product-form__invalid-txt"
      >
        {{ addProductForm.tags.invalidity }}
      </p>
    </div>

    <button class="add-product-form__submit-btn" type="submit">Next</button>
  </form>
</template>

<script>
export default {
  props: [
    "addProductForm",
    "addProductFormPageOneSubmit",
    "editProductFormOptions"
  ]
};
</script>

<style scoped>
.add-product-form {
  width: 550px;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 0 15px 15px 15px;
  margin: 15px auto;
  max-width: 100%;
  box-sizing: border-box;
  background-color: #fbfbfb;
}
.add-product-form__title {
  text-align: center;
}
.add-product-form__section {
  border-top: 1px solid #e2e2e2;
  margin-top: 20px;
}
.add-product-form__input-label-lg {
  margin-bottom: 5px;
}
.add-product-form__input-help-txt {
  font-size: 14px;
  margin-top: 5px;
  margin-bottom: 8px;
}
.add-product-form__option-input-label,
.add-product-form__sale-input-label {
  margin-top: 10px;
  margin-bottom: 5px;
}
.add-product-form__txt-input {
  padding: 5px;
  font-size: 16px;
  width: 100%;
  box-sizing: border-box;
  border-radius: 3px;
  border: 1px solid #ddd;
}
.add-product-form__on-sale-container {
  display: flex;
  align-items: center;
}
.add-product-form__on-sale-checkbox-container {
  display: flex;
  margin-right: 5px;
}
.add-product-form__on-sale-txt {
  margin: 0;
  font-size: 14px;
}
.add-product-form__option-btns-container {
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
}
.add-product-form__option-btn-container {
  flex: 0 0 50%;
  box-sizing: border-box;
}
.add-product-form__option-btn-container.left,
.add-product-form__sale-date.left {
  padding-right: 3px;
}
.add-product-form__option-btn-container.right,
.add-product-form__sale-date.right {
  padding-left: 3px;
}
.add-product-form__add-option-btn,
.add-product-form__remove-option-btn {
  font-size: 17px;
  color: white;
  cursor: pointer;
  display: block;
  border-radius: 3px;
  width: 100%;
  padding-top: 2px;
  padding-bottom: 2px;
}
.add-product-form__add-option-btn {
  background-color: green;
  border: 2px solid darkgreen;
}
.add-product-form__remove-option-btn {
  background-color: #b90e0e;
  border: 2px solid darkred;
}
.add-product-form__submit-btn {
  background-color: green;
  font-size: 1.4em;
  color: white;
  border: 3px solid darkgreen;
  cursor: pointer;
  width: 100%;
  display: block;
  margin: 25px auto auto auto;
  border-radius: 3px;
}
.disabled {
  background-color: grey;
  border-color: grey;
  cursor: default;
}
.disabled:hover {
  background-color: grey;
}
.add-product-form__submit-btn:hover {
  background-color: darkgreen;
}
.add-product-form__sale-dates {
  display: flex;
}
.add-product-form__sale-date {
  flex: 0 0 50%;
  box-sizing: border-box;
}
.add-product-form__invalid-txt {
  color: #c00;
  margin-top: 5px;
  margin-bottom: 0;
  font-size: 14px;
}
.invalid-input {
  border: 1px solid #c00;
}
</style>
