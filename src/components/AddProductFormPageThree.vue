<template>
  <div>
    <div class="breadcrumbs">
      <p class="breadcrumbs__txt">
        <span @click="navigateAddProductForm(1)" class="breadcrumbs__link">
          General Details
        </span>
        >
        <span @click="navigateAddProductForm(2)" class="breadcrumbs__link">
          Stock Details
        </span>
        > Images
      </p>
    </div>
    <div class="page-three">
      <form>
        <h2 class="page-three__title">Add Product Images</h2>
        <p class="page-three__explain-txt">
          Add images for each color your product comes available in. The
          <strong>thumbnail image</strong> is a sample of the color the users
          see when scrolling through the 'products' page, and on the 'product'
          page itself. The <strong>main images</strong> are the images of the
          product the users see on both the 'products' page and the 'product'
          page.
        </p>
        <div
          v-for="color in addProductForm.options[0].values.value.split(',')"
          :key="color"
          class="page-three__color"
        >
          <p class="page-three__color-title">Color: {{ color }}</p>
          <p class="page-three__color-subtitle">Thumbnail Image:</p>
          <p class="page-three__color-subtitle">Main Images:</p>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  props: ["addProductForm", "navigateAddProductForm"]
};
</script>

<style scopded>
.breadcrumbs__link {
  cursor: pointer;
}
.breadcrumbs__link:hover {
  text-decoration: underline;
}
.page-three {
  width: 550px;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 0 15px 15px 15px;
  margin: 15px auto;
  max-width: 100%;
  box-sizing: border-box;
  background-color: #fbfbfb;
}
.page-three__title {
  text-align: center;
}
.page-three__explain-txt {
  font-size: 14px;
  margin-bottom: 25px;
}
.page-three__color {
  border-top: 1px solid #e2e2e2;
}
.page-three__color-title {
  /* font-size: 20px; */
}
</style>
