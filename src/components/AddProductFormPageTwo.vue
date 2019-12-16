<template>
  <div class="container">
    <div class="breadcrumbs">
      <p class="breadcrumbs__txt">
        <span @click="navigateAddProductForm(1)" class="breadcrumbs__link"
          >General Details</span
        >
        > Stock Details
      </p>
    </div>
    <!-- <div class="page-one">
      <h2 class="page-one__title">Product Summary</h2>
      <button @click="navigateAddProductForm(1)" class="page-one__edit-btn">Edit</button>
      <p class="page-one__value-label"><strong>Product Name</strong>:</p>
      <p class="page-one__value">{{ addProductForm.name.value }}</p>
      <p class="page-one__value-label">
        <strong>Location of product on website</strong>:
      </p>
      <p class="page-one__value">{{ addProductForm.location.value }}</p>
      <p class="page-one__value-label"><strong>Product Options</strong>:</p>
      <div
        v-for="(option, index) in addProductForm.options"
        :key="index"
        class="page-one__option-group"
      >
        <p class="page-one__option-group-label">
          <strong>Option {{ index + 1 }}</strong>
        </p>
        <div class="page-one__option-subgroup">
          <p class="page-one__option-label"><strong>Name</strong>:</p>
          <p class="page-one__value">{{ option.name.value }}</p>
          <p class="page-one__option-label"><strong>Values</strong>:</p>
          <p class="page-one__value">{{ option.values.value }}</p>
        </div>
      </div>
      <p class="page-one__value-label">
        <strong>Is this product set to go on sale at some point?</strong>
      </p>
      <p v-if="addProductForm.sale" class="page-one__value">Yes</p>
      <p v-else class="page-one__value">
        No
      </p>
      <div v-if="addProductForm.sale">
        <p class="page-one__value">
          <strong>Sale Start Date</strong>:
          {{ addProductForm.saleDetails.start.value }}
        </p>
        <p class="page-one__value">
          <strong>Sale End Date</strong>:
          {{ addProductForm.saleDetails.end.value }}
        </p>
      </div>
      <p class="page-one__value-label">
        <strong>Does this product have any tags?</strong>
      </p>
      <p v-if="addProductForm.tags.value.length > 0" class="page-one__value">
        Yes: {{ addProductForm.tags }}
      </p>
      <p v-else class="page-one__value">No</p>
    </div> -->
    <div class="page-two">
      <form @submit="addProductFormPageTwoSubmit">
        <h2 class="page-two__title">Stock Details</h2>
        <p class="page-two__subtitle">
          Enter the number of products in stock for each product variation.
        </p>
        <div
          v-for="(optionCombo, index) in addProductForm.optionComboDetails"
          :key="index"
          :class="{ 'page-two__border-top': index !== 0 }"
          class="page-two__option-combo"
        >
          <p
            v-for="(optionName, index) in Object.keys(optionCombo)"
            :key="index"
            v-if="optionName !== 'inStock'"
            class="page-two__option-combo-txt"
          >
            <strong>{{ optionName }}</strong
            >: {{ optionCombo[optionName] }}
          </p>
          <div class="page-two__in-stock-container">
            <div>
              <p class="page-two__in-stock-txt">In Stock:</p>
            </div>
            <div class="page-two__in-stock-input-container">
              <input
                v-model="addProductForm.optionComboDetails[index].inStock.value"
                :class="{ 'invalid-input': optionCombo.inStock.invalidity }"
                class="page-two__in-stock-input"
                type="text"
              />
            </div>
          </div>
          <p
            v-if="optionCombo.inStock.invalidity"
            class="page-two__input-error-txt"
          >
            {{ optionCombo.inStock.invalidity }}
          </p>
        </div>
        <button class="page-two__submit-btn" type="submit">Next</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    "addProductForm",
    "addProductFormPageTwoSubmit",
    "navigateAddProductForm"
  ]
};
</script>

<style scoped>
.container {
  margin-top: 15px;
}

.breadcrumbs__link {
  cursor: pointer;
}
.breadcrumbs__link:hover {
  text-decoration: underline;
}

.page-two {
  border: 1px solid #ccc;
  width: 550px;
  max-width: 100%;
  margin: auto;
  box-sizing: border-box;
  padding-left: 15px;
  padding-right: 15px;
  padding-bottom: 25px;
  background-color: #fbfbfb;
  position: relative;
  border-radius: 5px;
}
.page-one__title {
  text-align: center;
}
.page-one__edit-btn {
  padding: 4px 16px;
  background-color: #333333;
  color: white;
  font-size: 16px;
  border: 3px solid #222;
  border-radius: 3px;
  display: block;
  margin: auto;
  cursor: pointer;
  transition: background-color 0.2s;
}
.page-one__edit-btn:hover {
  background-color: #222;
}
.page-one__value-label {
  margin-top: 8px;
  margin-bottom: 3px;
  font-size: 18px;
}
.page-one__value {
  margin-top: 3px;
  margin-bottom: 8px;
  font-size: 14px;
}
.page-one__option-group {
  padding-left: 15px;
}
.page-one__option-subgroup {
  padding-left: 15px;
}
.page-one__option-group-label {
  margin-top: 8px;
  margin-bottom: 3px;
  font-size: 16px;
}
.page-one__option-label {
  margin-top: 8px;
  margin-bottom: 3px;
  font-size: 16px;
}
.page-two__title {
  text-align: center;
  margin-bottom: 5px;
}
.page-two__subtitle {
  font-size: 14px;
  text-align: center;
  margin-bottom: 5px;
}
.page-two__option-combo {
  padding-top: 10px;
  padding-bottom: 15px;
}
.page-two__option-combo.page-two__border-top {
  border-top: 1px solid #e2e2e2;
}
.page-two__option-combo-txt {
  margin-top: 5px;
  margin-bottom: 3px;
}
.page-two__in-stock-container {
  display: flex;
  align-items: center;
}
.page-two__in-stock-txt {
  margin: 0 8px 0 0;
}
.page-two__in-stock-input-container {
  flex: 0 0 60px;
}
.page-two__in-stock-input {
  padding: 2px 5px;
  font-size: 16px;
  width: 100%;
  box-sizing: border-box;
  border-radius: 3px;
  border: 1px solid #ddd;
}
.page-two__submit-btn {
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
.page-two__submit-btn:hover {
  background-color: darkgreen;
}
.page-two__input-error-txt {
  color: #c00;
  margin-top: 3px;
  margin-bottom: 0;
  font-size: 14px;
}
.invalid-input {
  border: 1px solid #c00;
}
</style>
