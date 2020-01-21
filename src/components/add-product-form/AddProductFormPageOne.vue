<template>
  <form @submit="apfPageOneSubmit" class="add-product-form">
    <h1 class="title">
      Add a Product
    </h1>
    <div class="section">
      <h3 class="input-label-lg">Product Name:</h3>
      <p class="input-help-txt">
        Enter the product name. Use the formatting you'd like to see on the
        website. So if you'd like the first letter of the product name to be
        capitalized on the website, then use that formatting when entering it
        here. E.g., "Polo T-Shirt". Use only alphanumeric characters, spaces,
        and dashes ("-").
      </p>
      <input
        v-model="addProductForm.name.value"
        :class="{ 'invalid-input': addProductForm.name.invalidity }"
        class="txt-input"
        type="text"
        placeholder="Flannel Button-Down Shirt"
      />
      <p v-if="addProductForm.name.invalidity" class="invalid-txt">
        {{ addProductForm.name.invalidity }}
      </p>
    </div>
    <div class="section">
      <h3 class="input-label-lg">Product Price:</h3>
      <p class="input-help-txt">
        Enter the product price in USD. Enter a valid number. E.g., "29.95". Don't use the dollar sign ("$").
      </p>
      <input
        v-model="addProductForm.price.value"
        :class="{ 'invalid-input': addProductForm.price.invalidity }"
        class="txt-input"
        type="text"
        placeholder="35.00"
      />
      <p v-if="addProductForm.price.invalidity" class="invalid-txt">
        {{ addProductForm.price.invalidity }}
      </p>
    </div>
    <div class="section">
      <h3 class="input-label-lg">Location:</h3>
      <p class="input-help-txt">
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
        class="txt-input"
        type="text"
        placeholder="men/pants/khakis"
      />
      <p v-if="addProductForm.location.invalidity" class="invalid-txt">
        {{ addProductForm.location.invalidity }}
      </p>
    </div>
    <div class="section">
      <h3 class="input-label-lg">Options:</h3>
      <p class="input-help-txt">
        Enter the name of the option available with the product. Then, enter the
        the possible values of this option separated by commas. For each option
        name and option value, use the formatting you'd like to see on the
        website. E.g., for an option name of "Size", you may use "XS,S,M,L,XL"
        as the option values. Other than the commas in the option value field,
        use only alphanumeric characters, spaces, and dashes ("-"). At least one
        color option is required, and no other options are required.
      </p>

      <div v-for="(option, index) in addProductForm.options">
        <p class="option-input-label">
          <strong>Option {{ index + 1 }}</strong>
        </p>
        <p class="option-input-label">
          Name of option:
        </p>
        <input
          v-if="index === 0"
          :value="`${option.name.value} (required)`"
          class="txt-input"
          type="text"
          disabled
        />
        <input
          v-else
          v-model="option.name.value"
          :class="{ 'invalid-input': option.name.invalidity }"
          class="txt-input"
          type="text"
        />
        <p v-if="option.name.invalidity" class="invalid-txt">
          {{ option.name.invalidity }}
        </p>
        <p class="option-input-label">
          Possible option values:
        </p>
        <input
          v-model="option.values.value"
          :class="{ 'invalid-input': option.values.invalidity }"
          class="txt-input"
          type="text"
          placeholder="Red,Green,Blue"
        />
        <p v-if="option.values.invalidity" class="invalid-txt">
          {{ option.values.invalidity }}
        </p>
      </div>
      <div class="option-btns-container">
        <div class="option-btn-container left">
          <button
            v-if="addProductForm.options.length > 1"
            @click="editApfOptionsLength('remove')"
            class="remove-option-btn"
            type="button"
          >
            Remove Option
          </button>
          <button
            v-else
            disabled
            class="remove-option-btn disabled"
            type="button"
          >
            Remove Option
          </button>
        </div>
        <div class="option-btn-container right">
          <button
            v-if="
              addProductForm.options[addProductForm.options.length - 1].name
                .value.length > 0 &&
                addProductForm.options[addProductForm.options.length - 1].values
                  .value.length > 0
            "
            @click="editApfOptionsLength('add')"
            class="add-option-btn"
            type="button"
          >
            Add Another Option
          </button>
          <button v-else disabled class="add-option-btn disabled" type="button">
            Add Another Option
          </button>
        </div>
      </div>
    </div>
    <!-- <div class="section">
      <h3 class="input-label-lg">Sale Status:</h3>
      <div class="on-sale-container">
        <div class="on-sale-checkbox-container">
          <input v-model="addProductForm.sale" type="checkbox" />
        </div>
        <div>
          <p class="on-sale-txt">
            Check this box if the product should be "on sale" either immediately
            or on a future date.
          </p>
        </div>
      </div>
      <div v-if="addProductForm.sale">
        <p class="input-help-txt">
          Enter the beginning and ending sale in "MM/DD/YYYY" format. E.g.,
          "02/27/2021"
        </p>
        <div class="sale-dates">
          <div class="sale-date left">
            <p class="sale-input-label">Sale begins on:</p>
            <input
              v-model="addProductForm.saleDetails.start.value"
              :class="{
                'invalid-input': addProductForm.saleDetails.start.invalidity
              }"
              class="txt-input"
              type="text"
              placeholder="04/08/2021"
            />
            <p
              v-if="addProductForm.saleDetails.start.invalidity"
              class="invalid-txt"
            >
              {{ addProductForm.saleDetails.start.invalidity }}
            </p>
          </div>
          <div class="sale-date right">
            <p class="sale-input-label">Sale ends on:</p>
            <input
              v-model="addProductForm.saleDetails.end.value"
              :class="{
                'invalid-input': addProductForm.saleDetails.end.invalidity
              }"
              class="txt-input"
              type="text"
              placeholder="05/22/2021"
            />
            <p
              v-if="addProductForm.saleDetails.end.invalidity"
              class="invalid-txt"
            >
              {{ addProductForm.saleDetails.end.invalidity }}
            </p>
          </div>
        </div>
      </div>
    </div> -->
    <div class="section">
      <h3 class="input-label-lg">Tags:</h3>
      <p class="input-help-txt">
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
        class="txt-input"
        type="text"
        placeholder="Short-sleeve,Denim"
      />
      <p v-if="addProductForm.tags.invalidity" class="invalid-txt">
        {{ addProductForm.tags.invalidity }}
      </p>
    </div>
    <p v-if="addProductForm.pageInvalidities[1]" class="invalid-pg-txt">
      {{ addProductForm.pageInvalidities[1] }}
    </p>
    <button class="submit-btn" type="submit">Next</button>
  </form>
</template>

<script>
export default {
  props: ["addProductForm", "apfPageOneSubmit", "editApfOptionsLength"],
  mounted() {
    document.querySelector(".admin__content").scrollTop = 0;
  }
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
.title {
  text-align: center;
}
.section {
  border-top: 1px solid #e2e2e2;
  margin-top: 20px;
}
.input-label-lg {
  margin-bottom: 5px;
}
.input-help-txt {
  font-size: 14px;
  margin-top: 5px;
  margin-bottom: 8px;
}
.option-input-label,
.sale-input-label {
  margin-top: 10px;
  margin-bottom: 5px;
}
.txt-input {
  padding: 5px;
  font-size: 16px;
  width: 100%;
  box-sizing: border-box;
  border-radius: 3px;
  border: 1px solid #ddd;
}
.on-sale-container {
  display: flex;
  align-items: center;
}
.on-sale-checkbox-container {
  display: flex;
  margin-right: 5px;
}
.on-sale-txt {
  margin: 0;
  font-size: 14px;
}
.option-btns-container {
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
}
.option-btn-container {
  flex: 0 0 50%;
  box-sizing: border-box;
}
.option-btn-container.left,
.sale-date.left {
  padding-right: 3px;
}
.option-btn-container.right,
.sale-date.right {
  padding-left: 3px;
}
.add-option-btn,
.remove-option-btn {
  font-size: 17px;
  color: white;
  cursor: pointer;
  display: block;
  border-radius: 3px;
  width: 100%;
  padding-top: 2px;
  padding-bottom: 2px;
}
.add-option-btn {
  background-color: green;
  border: 2px solid darkgreen;
}
.remove-option-btn {
  background-color: #b90e0e;
  border: 2px solid darkred;
}
.submit-btn {
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
.submit-btn:hover {
  background-color: darkgreen;
}
.sale-dates {
  display: flex;
}
.sale-date {
  flex: 0 0 50%;
  box-sizing: border-box;
}
.invalid-txt {
  color: #c00;
  margin-top: 5px;
  margin-bottom: 0;
  font-size: 14px;
}
.invalid-input {
  border: 1px solid #c00;
}
.invalid-pg-txt {
  color: #c00;
  text-align: center;
}
</style>
