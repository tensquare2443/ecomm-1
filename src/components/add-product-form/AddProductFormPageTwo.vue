<template>
  <div class="container">
    <div class="breadcrumbs">
      <p class="breadcrumbs__txt">
        <span @click="navigateApf(1, 2)" class="breadcrumbs__link"
          >General Details</span
        >
        <span> > </span>
        <span>Stock Details</span>
      </p>
    </div>
    <div class="page-two">
      <form @submit="apfPageTwoSubmit">
        <h2 class="title">Stock Details</h2>
        <p class="subtitle">
          Enter the number of products in stock for each product variation.
        </p>
        <div
          v-for="(optionCombo, index) in addProductForm.optionComboDetails"
          :key="index"
          :class="{ 'border-top': index !== 0 }"
          class="option-combo"
        >
          <p
            v-for="(optionName, index) in Object.keys(optionCombo)"
            :key="index"
            v-if="optionName !== 'inStock'"
            class="option-combo-txt"
          >
            <strong>{{ optionName }}</strong
            >: {{ optionCombo[optionName] }}
          </p>
          <div class="in-stock-container">
            <div>
              <p class="in-stock-txt">In Stock:</p>
            </div>
            <div class="in-stock-input-container">
              <input
                v-model="addProductForm.optionComboDetails[index].inStock.value"
                :class="{ 'invalid-input': optionCombo.inStock.invalidity }"
                class="in-stock-input"
                type="text"
              />
            </div>
          </div>
          <p v-if="optionCombo.inStock.invalidity" class="input-error-txt">
            {{ optionCombo.inStock.invalidity }}
          </p>
        </div>
        <p v-if="addProductForm.pageInvalidities[2]" class="invalid-pg-txt">
          {{ addProductForm.pageInvalidities[2] }}
        </p>
        <button class="submit-btn" type="submit">Next</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  props: ["addProductForm", "apfPageTwoSubmit", "navigateApf"],
  mounted() {
    document.querySelector(".admin__content").scrollTop = 0;
  }
};
</script>

<style scoped>
.container {
  margin-top: 15px;
}

.breadcrumbs__link {
  cursor: pointer;
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
.title {
  text-align: center;
  margin-bottom: 5px;
}
.subtitle {
  font-size: 14px;
  text-align: center;
  margin-bottom: 5px;
}
.option-combo {
  padding-top: 10px;
  padding-bottom: 15px;
}
.option-combo.border-top {
  border-top: 1px solid #e2e2e2;
}
.option-combo-txt {
  margin-top: 5px;
  margin-bottom: 3px;
}
.in-stock-container {
  display: flex;
  align-items: center;
}
.in-stock-txt {
  margin: 0 8px 0 0;
}
.in-stock-input-container {
  flex: 0 0 60px;
}
.in-stock-input {
  padding: 2px 5px;
  font-size: 16px;
  width: 100%;
  box-sizing: border-box;
  border-radius: 3px;
  border: 1px solid #ddd;
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
.submit-btn:hover {
  background-color: darkgreen;
}
.input-error-txt {
  color: #c00;
  margin-top: 3px;
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
