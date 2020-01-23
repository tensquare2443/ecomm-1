<template>
  <div>
    <div class="breadcrumbs">
      <p class="breadcrumbs__txt">
        <span @click="navigateApf(1, 4)" class="breadcrumbs__link"
          >General Details</span
        >
        <span> > </span>
        <span @click="navigateApf(2, 4)" class="breadcrumbs__link"
          >Stock Details</span
        >
        <span> > </span>
        <span @click="navigateApf(2, 4)" class="breadcrumbs__link">Images</span>
        <span> > </span>
        <span>Review Product</span>
      </p>
    </div>
    <form @submit="apfPageFourSubmit" name="apfPageFour" class="apf-4">
      <h1 class="title">Review Product</h1>
      <div class="form-section" style="padding-bottom: 8px;">
        <h2 class="subtitle">General Details</h2>
        <button
          v-if="addProductForm.submitting"
          disabled
          class="edit-form-section-btn btn-disabled"
          type="button"
        >
          Edit
        </button>
        <button
          v-else
          @click="navigateApf(1, 4)"
          class="edit-form-section-btn"
          type="button"
        >
          Edit
        </button>
        <p class="form-txt">
          <strong>Name</strong>: {{ addProductForm.name.value }}
        </p>
        <p class="form-txt">
          <strong>Location</strong>: {{ addProductForm.location.value }}
        </p>
        <p class="form-txt"><strong>Options</strong>:</p>
        <div
          v-for="(option, optionIndex) in addProductForm.options"
          :key="optionIndex"
        >
          <div class="option">
            <p class="form-txt">
              <strong>Option {{ optionIndex + 1 }}</strong>
            </p>
            <div class="option-details">
              <p class="form-txt">
                <strong>Option Name</strong>: {{ option.name.value }}
              </p>
              <p class="form-txt">
                <strong>Option Values</strong>:
                {{ option.values.value.split(",").join(", ") }}
              </p>
            </div>
          </div>
        </div>
        <div v-if="addProductForm.sale">
          <p class="form-txt"><strong>Sale Details</strong>:</p>
          <div class="sale-details">
            <p class="form-txt">
              <strong>Start</strong>:
              {{ addProductForm.saleDetails.start.value }}
            </p>
            <p class="form-txt">
              <strong>End</strong>: {{ addProductForm.saleDetails.end.value }}
            </p>
          </div>
        </div>
        <p v-else class="form-txt">
          <strong>Sale Details</strong>: <em>no sale is set</em>
        </p>
        <p v-if="addProductForm.tags.value !== ''" class="form-txt">
          <strong>Tags</strong>:
          {{ addProductForm.tags.value.split(",").join(", ") }}
        </p>
        <p v-else class="form-txt">
          <strong>Tags</strong>: <em>no tags are set</em>
        </p>
      </div>
      <div class="form-section" style="padding-bottom: 8px;">
        <h2 class="subtitle">Stock Details</h2>
        <button
          v-if="addProductForm.submitting"
          disabled
          class="edit-form-section-btn btn-disabled"
          type="button"
        >
          Edit
        </button>
        <button
          v-else
          @click="navigateApf(2, 4)"
          class="edit-form-section-btn"
          type="button"
        >
          Edit
        </button>
        <div
          v-for="(optionCombo,
          optionComboIndex) in addProductForm.optionComboDetails"
          :key="optionComboIndex"
        >
          <p class="form-txt">
            <strong>Option Combination {{ optionComboIndex + 1 }}</strong
            >:
          </p>
          <div
            v-for="(optionKey, optionKeyIndex) in Object.keys(optionCombo)"
            :key="optionKeyIndex"
            class="option-combo-details"
          >
            <p v-if="optionKey !== 'inStock'" class="form-txt">
              <strong>{{ optionKey }}</strong
              >: {{ optionCombo[optionKey] }}
            </p>
            <p v-else class="form-txt">
              <strong>In Stock</strong>: {{ optionCombo[optionKey].value }}
            </p>
          </div>
        </div>
      </div>
      <div class="form-section" style="padding-bottom: 8px;">
        <h2 class="subtitle">Images</h2>
        <button
          v-if="addProductForm.submitting"
          disabled
          class="edit-form-section-btn btn-disabled"
          type="button"
        >
          Edit
        </button>
        <button
          v-else
          @click="navigateApf(3, 4)"
          class="edit-form-section-btn"
          type="button"
        >
          Edit
        </button>
        <div
          v-for="(colorImgs, colorImgsIndex) in addProductForm.images"
          :key="colorImgsIndex"
        >
          <p class="form-txt"><strong>Color</strong>: {{ colorImgs.color }}</p>
          <div class="color-imgs">
            <p class="form-txt">
              <strong>Thumbnail Image</strong>:
              {{ colorImgs.thumbnailImg.name }}
            </p>
            <p class="form-txt"><strong>Main Images</strong></p>
            <div
              v-for="(colorMainImg, colorMainImgIndex) in colorImgs.mainImgs"
              :key="colorMainImgIndex"
              class="color-main-imgs"
            >
              <p class="form-txt">
                <strong>Main Image {{ colorMainImg.ranking.value }}</strong
                >: {{ colorMainImg.name }}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="form-section">
        <button
          v-if="addProductForm.submitting"
          disabled
          class="submit-btn btn-disabled"
          type="submit"
        >
          <LoadingLightSm />
        </button>
        <button v-else class="submit-btn" type="submit">Finish Product</button>
      </div>
    </form>
  </div>
</template>

<script>
import LoadingLightSm from "../LoadingLightSm";

export default {
  props: ["addProductForm", "apfPageFourSubmit", "navigateApf"],
  components: { LoadingLightSm },
  mounted() {
    document.querySelector(".admin__content").scrollTop = 0;
  }
};
</script>

<style scoped>
.breadcrumbs__link {
  cursor: pointer;
  text-decoration: underline;
}
.apf-4 {
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
.subtitle {
  text-align: center;
  margin-bottom: 12px;
}
.form-section {
  border-top: 1px solid #ddd;
}
.edit-form-section-btn {
  background-color: #989898;
  font-size: 14px;
  color: white;
  border: 2px solid grey;
  cursor: pointer;
  display: block;
  margin: auto;
  padding: 1px 20px;
  border-radius: 2px;
  transition: background-color 0.2s;
}
.edit-form-section-btn:hover {
  background-color: grey;
}
.submit-btn {
  background-color: green;
  font-size: 18px;
  color: white;
  border: 3px solid darkgreen;
  cursor: pointer;
  display: block;
  margin: 15px auto auto auto;
  padding: 4px 20px;
  width: 100%;
  border-radius: 3px;
  transition: background-color 0.2s;
}
.submit-btn:hover {
  background-color: darkgreen;
}
.btn-disabled {
  background-color: grey;
  border-color: grey;
}
.btn-disabled:hover {
  background-color: grey;
}
.option,
.option-details,
.option-combo-details,
.sale-details,
.color-imgs,
.color-main-imgs {
  padding-left: 15px;
  padding-right: 15px;
}
.form-txt {
  margin-top: 10px;
  margin-bottom: 10px;
}
</style>
