<template>
  <div>
    <div class="breadcrumbs">
      <p class="breadcrumbs__txt">
        <span @click="navigateApf(1, 3)" class="breadcrumbs__link"
          >General Details</span
        >
        <span> > </span>
        <span @click="navigateApf(2, 3)" class="breadcrumbs__link"
          >Stock Details</span
        >
        <span> > </span>
        <span>Images</span>
      </p>
    </div>
    <div class="page-three">
      <form @submit="apfPageThreeSubmit">
        <h2 class="title">Add Product Images</h2>
        <p class="explain-txt">
          Upload images for each color your product comes available in. The
          <strong>thumbnail image</strong> is a sample of the color the users
          see when scrolling through the 'products' page, and on the 'product'
          page itself. The <strong>main images</strong> are the images of the
          product the users see on both the 'products' page and the 'product'
          page. The <strong>ranking</strong> you use for each of a color's main
          images determines the order in which the main images appear to users
          for that color. Images with lower rankings appear earlier. If multiple
          images share the same ranking, the image further up this page will be
          ranked before the one(s) further down.
        </p>
        <div
          v-for="(colorImgs, index) in addProductForm.images"
          :key="colorImgs.color"
          class="color"
        >
          <p class="color-title">
            <strong>Color</strong>: {{ colorImgs.color }}
          </p>
          <p class="color-subtitle">Thumbnail Image:</p>
          <div v-if="colorImgs.thumbnailImg.file === ''">
            <input
              @input="apfImgUpload"
              :id="`${colorImgs.color}_thumbnailImg`"
              class="thumbnail-img-input"
              type="file"
            />
            <label
              :for="`${colorImgs.color}_thumbnailImg`"
              :class="{
                'actively-dragging': colorImgs.thumbnailImg.dragOver,
                'invalid-img-upload-input': colorImgs.thumbnailImg.invalidity
              }"
              class="thumbnail-img-label"
              @dragover="apfFileInputDragOn"
              @dragenter="apfFileInputDragOn"
              @dragleave="apfFileInputDragOn"
              @drop="apfImgUpload"
            >
              <div class="label-content-container">
                <div class="label-icon-container">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path fill="#333" d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
                    <path d="M0 0h24v24H0z" fill="none" />
                  </svg>
                </div>
                <div>
                  <p class="label-txt">
                    Click here or drag {{ "&" }} drop to upload.
                  </p>
                </div>
              </div>
            </label>
          </div>
          <div v-else class="uploaded-img-container">
            <div class="uploaded-img-icon-container">
              <p class="uploaded-img-icon">&#10003;</p>
            </div>
            <div class="uploaded-img-name-container">
              <p class="uploaded-img-name">
                {{ colorImgs.thumbnailImg.name }}
              </p>
            </div>
            <div class="uploaded-img-btn-container">
              <button
                @click="apfDeleteImage"
                :data-id="`${colorImgs.color}_thumbnailImg`"
                class="uploaded-img-btn"
                type="button"
              >
                Delete
              </button>
            </div>
          </div>
          <p v-if="colorImgs.thumbnailImg.invalidity" class="invalid-txt">
            {{ colorImgs.thumbnailImg.invalidity }}
          </p>

          <p class="color-subtitle">Main Images:</p>
          <div
            v-for="(mainImg, mainImgIndex) in colorImgs.mainImgs"
            :key="mainImgIndex"
            class="page-three_main-img-files"
          >
            <p class="main-image-label-txt">Image {{ mainImgIndex + 1 }}:</p>
            <div class="file-inputs">
              <div class="ranking">
                <div>
                  <p class="ranking-txt">Ranking:</p>
                </div>
                <div>
                  <input
                    v-model="
                      addProductForm.images[index].mainImgs[mainImgIndex]
                        .ranking.value
                    "
                    :class="{ 'invalid-txt-input': mainImg.ranking.invalidity }"
                    class="main-img-ranking-input"
                    type="text"
                  />
                </div>
              </div>
              <p v-if="mainImg.ranking.invalidity" class="invalid-txt">
                {{ mainImg.ranking.invalidity }}
              </p>
              <p class="file-input-btn-txt">File:</p>
              <div
                v-if="mainImg.file.value === ''"
                class="file-input-btn-label"
              >
                <input
                  @input="apfImgUpload"
                  :id="`${colorImgs.color}_mainImg_${mainImgIndex}`"
                  class="main-img-input"
                  type="file"
                />
                <label
                  :for="`${colorImgs.color}_mainImg_${mainImgIndex}`"
                  :class="{
                    'actively-dragging': mainImg.dragOver,
                    'invalid-img-upload-input': mainImg.file.invalidity
                  }"
                  class="main-img-label"
                  @dragover="apfFileInputDragOn"
                  @dragenter="apfFileInputDragOn"
                  @dragleave="apfFileInputDragOn"
                  @drop="apfImgUpload"
                >
                  <div class="label-content-container">
                    <div class="label-icon-container">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="#333"
                          d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"
                        />
                        <path d="M0 0h24v24H0z" fill="none" />
                      </svg>
                    </div>
                    <div>
                      <p class="label-txt">
                        Click here or drag {{ "&" }} drop to upload.
                      </p>
                    </div>
                  </div>
                </label>
              </div>
              <div v-else class="uploaded-img-container">
                <div class="uploaded-img-icon-container">
                  <p class="uploaded-img-icon">&#10003;</p>
                </div>
                <div class="uploaded-img-name-container">
                  <p class="uploaded-img-name">
                    {{ mainImg.name }}
                  </p>
                </div>
                <div class="uploaded-img-btn-container">
                  <button
                    @click="apfDeleteImage"
                    :data-id="`${colorImgs.color}_mainImg_${mainImgIndex}`"
                    class="uploaded-img-btn"
                    type="button"
                  >
                    Delete
                  </button>
                </div>
              </div>
              <p v-if="mainImg.file.invalidity" class="invalid-txt">
                {{ mainImg.file.invalidity }}
              </p>
            </div>
          </div>
          <div class="main-img-btns">
            <div class="main-img-btn-container left">
              <button
                v-if="colorImgs.mainImgs.length === 1"
                class="main-img-btn remove disabled"
                type="button"
                disabled
              >
                Remove Image
              </button>
              <button
                v-else
                @click="editApfMainImgsLength(index, 'remove')"
                class="main-img-btn remove"
                type="button"
              >
                Remove Image
              </button>
            </div>
            <div class="main-img-btn-container right">
              <button
                @click="editApfMainImgsLength(index, 'add')"
                class="main-img-btn add"
                type="button"
              >
                Add Another Image
              </button>
            </div>
          </div>
        </div>
        <p v-if="addProductForm.pageInvalidities[3]" class="invalid-pg-txt">
          {{ addProductForm.pageInvalidities[3] }}
        </p>
        <button class="submit-btn" type="submit">Next</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    "addProductForm",
    "navigateApf",
    "apfPageThreeSubmit",
    "editApfMainImgsLength",
    "apfImgUpload",
    "apfFileInputDragOn",
    "apfDeleteImage"
  ],
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
.title {
  text-align: center;
}
.explain-txt {
  font-size: 14px;
  margin-bottom: 25px;
}
.color {
  border-bottom: 1px solid #e2e2e2;
  padding-bottom: 15px;
  position: relative;
}
.color-title {
  font-size: 20px;
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
.main-img-input,
.thumbnail-img-input {
  width: 0.1px;
  height: 0.1px;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  z-index: -1;
}
.main-img-label {
  display: block;
  cursor: pointer;
  border-radius: 3px;
  box-sizing: border-box;
  border: 2px dashed #e2e2e2;
}
.thumbnail-img-label {
  width: 100%;
  display: inline-block;
  cursor: pointer;
  border-radius: 3px;
  box-sizing: border-box;
  border: 2px dashed #e2e2e2;
  padding: 4px 10px;
}
.invalid-img-upload-input {
  border: 2px dashed #c00;
}
.label-content-container {
  display: flex;
  align-items: center;
  justify-content: center;
}
.label-icon-container {
  display: flex;
  margin-left: 2px;
}
.label-txt {
  margin: 0;
  padding: 4px 8px 5px 2px;
}
.main-img-btns {
  display: flex;
  margin-top: 15px;
}
.main-img-btn-container {
  flex: 0 0 50%;
  box-sizing: border-box;
}
.main-img-btn-container.left {
  padding-right: 8px;
}
.main-img-btn-container.right {
  padding-left: 8px;
}
.main-img-btn {
  width: 100%;
  font-size: 18px;
  color: white;
  cursor: pointer;
  border-radius: 3px;
}
.main-img-btn.remove {
  background-color: #b90e0e;
  border: 3px solid darkred;
}
.main-img-btn.remove:hover {
  background-color: darkred;
}
.main-img-btn.remove.disabled {
  background-color: grey;
  border-color: grey;
  cursor: default;
}
.main-img-btn.remove.disabled:hover {
  background-color: grey;
}
.main-img-btn.add {
  background-color: green;
  border: 3px solid darkgreen;
}
.main-img-btn.add:hover {
  background-color: darkgreen;
}
.main-img-ranking-input {
  padding: 4px 5px;
  font-size: 16px;
  width: 56px;
  box-sizing: border-box;
  border-radius: 3px;
  border: 1px solid #ddd;
  margin-left: 8px;
}
.color-subtitle {
  margin-bottom: 8px;
}
.page-three_main-img-files {
  padding-left: 15px;
  padding-right: 15px;
}
.main-image-label-txt {
  margin-bottom: 8px;
}
.file-inputs {
  padding-left: 15px;
  padding-right: 15px;
}
.file-input-btn {
  display: flex;
  align-items: center;
}
.file-input-btn-txt {
  margin: 5px 0 0 0;
}
.file-input-btn-label {
  position: relative;
  margin-top: 8px;
}
.ranking {
  display: flex;
  align-items: center;
  margin-top: 4px;
}
.ranking-txt {
  margin: 0;
}
.uploaded-img-container {
  display: flex;
  align-items: center;
  border: 1px solid #e2e2e2;
  padding: 8px;
  justify-content: center;
  border-radius: 2px;
}
.uploaded-img-icon-container {
  margin-right: 5px;
}
.uploaded-img-icon {
  font-size: 24px;
  color: green;
  margin: 0;
}
.uploaded-img-name-container {
  margin-right: 5px;
}
.uploaded-img-name {
  margin: 0;
}
.uploaded-img-btn {
  color: white;
  background-color: #b90e0e;
  border: 1px solid darkred;
  border-radius: 2px;
  font-size: 14px;
  cursor: pointer;
}
.uploaded-img-btn:hover {
  background-color: darkred;
}
.actively-dragging {
  background-color: #e2e2e2;
  border: 2px solid darkgreen;
}
.invalid-txt {
  color: #c00;
  margin-top: 3px;
  margin-bottom: 12px;
  font-size: 14px;
}
.invalid-txt-input {
  border: 1px solid #c00;
}
.invalid-pg-txt {
  color: #c00;
  text-align: center;
}

@media (max-width: 480px) {
  .main-img-btns {
    flex-direction: column;
  }
  .main-img-btn-container.left {
    padding-right: initial;
  }
  .main-img-btn-container.right {
    padding-left: initial;
    margin-top: 5px;
  }
}
</style>
