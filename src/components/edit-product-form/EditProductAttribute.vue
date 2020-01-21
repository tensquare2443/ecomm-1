<template>
  <div>
    <h1 class="title">Edit Product Attribute</h1>
    <form @submit="submitNewAttribute" class="edit-attribute-form">
      <div v-if="editProductForm.attributeEditing === 'name'">
        <p><strong>Attribute Editing</strong>: Product Name</p>
        <p><strong>New Value</strong>:</p>
        <input
          v-model="editProductForm.name.new"
          class="txt-input"
          type="text"
        />
        <p v-if="editProductForm.name.invalidity" class="error-txt">
          {{ editProductForm.name.invalidity }}
        </p>
        <div class="form-btns">
          <div class="cancel-btn-container">
            <button
              @click="epfEditAttribute('cancel')"
              class="cancel-btn"
              type="button"
            >
              Cancel
            </button>
          </div>
          <div class="submit-btn-container">
            <button
              v-if="editProductForm.name.original !== editProductForm.name.new"
              class="submit-btn"
              type="submit"
            >
              Submit
            </button>
            <button v-else class="submit-btn disabled" type="submit" disabled>
              Submit
            </button>
          </div>
        </div>
      </div>
      <div v-else-if="editProductForm.attributeEditing === 'productPath'">
        <p><strong>Attribute Editing</strong>: Location</p>
        <p><strong>New Value</strong>:</p>
        <input
          v-model="editProductForm.location.new"
          class="txt-input"
          type="text"
        />
        <p v-if="editProductForm.location.invalidity" class="error-txt">
          {{ editProductForm.location.invalidity }}
        </p>
        <div class="form-btns">
          <div class="cancel-btn-container">
            <button
              @click="epfEditAttribute('cancel')"
              class="cancel-btn"
              type="button"
            >
              Cancel
            </button>
          </div>
          <div class="submit-btn-container">
            <button
              v-if="
                editProductForm.location.original !==
                  editProductForm.location.new
              "
              class="submit-btn"
              type="submit"
            >
              Submit
            </button>
            <button v-else class="submit-btn disabled" type="submit" disabled>
              Submit
            </button>
          </div>
        </div>
      </div>
      <div v-else-if="editProductForm.attributeEditing === 'price'">
        <p><strong>Attribute Editing</strong>: Price</p>
        <p><strong>New Value</strong>:</p>
        <input
          v-model="editProductForm.price.new"
          class="txt-input"
          type="text"
        />
        <p v-if="editProductForm.price.invalidity" class="error-txt">
          {{ editProductForm.price.invalidity }}
        </p>
        <div class="form-btns">
          <div class="cancel-btn-container">
            <button
              @click="epfEditAttribute('cancel')"
              class="cancel-btn"
              type="button"
            >
              Cancel
            </button>
          </div>
          <div class="submit-btn-container">
            <button
              v-if="
                editProductForm.price.original !== editProductForm.price.new
              "
              class="submit-btn"
              type="submit"
            >
              Submit
            </button>
            <button v-else class="submit-btn disabled" type="submit" disabled>
              Submit
            </button>
          </div>
        </div>
      </div>
      <div v-else-if="editProductForm.attributeEditing === 'tags'">
        <p><strong>Attribute Editing</strong>: Tags</p>
        <p><strong>New Value</strong>:</p>
        <input
          v-model="editProductForm.tags.new"
          class="txt-input"
          type="text"
        />
        <p v-if="editProductForm.tags.invalidity" class="error-txt">
          {{ editProductForm.tags.invalidity }}
        </p>
        <div class="form-btns">
          <div class="cancel-btn-container">
            <button
              @click="epfEditAttribute('cancel')"
              class="cancel-btn"
              type="button"
            >
              Cancel
            </button>
          </div>
          <div class="submit-btn-container">
            <button
              v-if="editProductForm.tags.original !== editProductForm.tags.new"
              class="submit-btn"
              type="submit"
            >
              Submit
            </button>
            <button v-else class="submit-btn disabled" type="submit" disabled>
              Submit
            </button>
          </div>
        </div>
      </div>
      <div v-else-if="editProductForm.attributeEditing === 'createdAt'">
        <p><strong>Attribute Editing</strong>: Creation Date</p>
        <p><strong>New Value</strong>:</p>
        <input
          v-model="editProductForm.createdAt.new"
          class="txt-input"
          type="text"
        />
        <p v-if="editProductForm.createdAt.invalidity" class="error-txt">
          {{ editProductForm.createdAt.invalidity }}
        </p>
        <div class="form-btns">
          <div class="cancel-btn-container">
            <button
              @click="epfEditAttribute('cancel')"
              class="cancel-btn"
              type="button"
            >
              Cancel
            </button>
          </div>
          <div class="submit-btn-container">
            <button
              v-if="
                editProductForm.createdAt.original !==
                  editProductForm.createdAt.new
              "
              class="submit-btn"
              type="submit"
            >
              Submit
            </button>
            <button v-else class="submit-btn disabled" type="submit" disabled>
              Submit
            </button>
          </div>
        </div>
      </div>
      <div v-else-if="editProductForm.attributeEditing === 'options'">
        <p><strong>Attribute Editing</strong>: Stock Details</p>
        <p><strong>New Values</strong>:</p>
        <div
          v-for="(optionCombo, optionComboI) in editProductForm.options.new"
          :key="optionComboI"
          class="indented-txt"
        >
          <p class="option-combo-txt">
            <strong>Option Combination {{ optionComboI + 1 }}</strong>
          </p>
          <div class="indented-txt">
            <p
              v-for="(optionComboKey, ocKeyI) in Object.keys(optionCombo['M'])"
              :key="ocKeyI"
              class="option-txt"
            >
              <span v-if="optionComboKey !== 'inStock'">
                <strong>{{ optionComboKey }}</strong
                >: {{ optionCombo["M"][optionComboKey]["S"] }}
              </span>
            </p>
            <div class="option-combo-instock">
              <div>
                <p class="option-txt instock-input-txt">
                  <strong>In Stock</strong>:&nbsp;
                </p>
              </div>
              <div>
                <input
                  v-model="
                    editProductForm.options.new[optionComboI]['M'].inStock['N']
                  "
                  class="txt-input instock-input"
                  type="text"
                />
              </div>
            </div>
          </div>
          <p
            v-if="editProductForm.options.invalidity[optionComboI]"
            class="error-txt"
          >
            {{ editProductForm.options.invalidity[optionComboI] }}
          </p>
        </div>
        <div class="form-btns">
          <div class="cancel-btn-container">
            <button
              @click="epfEditAttribute('cancel')"
              class="cancel-btn"
              type="button"
            >
              Cancel
            </button>
          </div>
          <div class="submit-btn-container">
            <button
              v-if="
                JSON.stringify(editProductForm.options.original) !==
                  JSON.stringify(editProductForm.options.new)
              "
              class="submit-btn"
              type="submit"
            >
              Submit
            </button>
            <button v-else class="submit-btn disabled" type="submit" disabled>
              Submit
            </button>
          </div>
        </div>
      </div>
      <div v-else-if="editProductForm.attributeEditing === 'images'">
        <p><strong>Attribute Editing</strong>: Image Rankings</p>
        <p><strong>New Values</strong>:</p>
        {{ editProductForm.images["L"] }}
        <div
          v-for="(colorImgs, colorImgsI) in editProductForm.images.new"
          :key="colorImgsI"
          class="indented-txt"
        >
          <p><strong>Color</strong>: {{ colorImgs["M"].color["S"] }}</p>
          <div
            v-for="(mainImg, mainImgI) in colorImgs['M'].mainImgs['L']"
            :key="mainImgI"
            class="indented-txt"
          >
            <p>
              <a :href="mainImg['M'].url['S']" target="_blank"><strong>Image</strong></a>
            </p>
            <div class="img-ranking">
              <div>
                <p class="img-ranking-input-txt">
                  <strong>Ranking</strong>:&nbsp;
                </p>
              </div>
              <div>
                <input
                  v-model="
                    editProductForm.images.new[colorImgsI]['M'].mainImgs['L'][
                      mainImgI
                    ]['M'].ranking['N']
                  "
                  class="txt-input img-ranking-input"
                  type="text"
                />
              </div>
            </div>
            <!-- {{ colorImgsI }}
            {{ mainImgI }}
            {{ editProductForm.images.invalidity }} -->
            <!-- {{ editProductForm.images.invalidity[colorImgsI][mainImgI] }} -->
            <p
              v-if="
                editProductForm.images.invalidity[colorImgsI] &&
                  editProductForm.images.invalidity[colorImgsI][mainImgI]
              "
              class="error-txt"
            >
              {{ editProductForm.images.invalidity[colorImgsI][mainImgI] }}
            </p>
          </div>
        </div>
        <div class="form-btns">
          <div class="cancel-btn-container">
            <button
              @click="epfEditAttribute('cancel')"
              class="cancel-btn"
              type="button"
            >
              Cancel
            </button>
          </div>
          <div class="submit-btn-container">
            <button
              v-if="
                JSON.stringify(editProductForm.images.original) !==
                  JSON.stringify(editProductForm.images.new)
              "
              class="submit-btn"
              type="submit"
            >
              Submit
            </button>
            <button v-else class="submit-btn disabled" type="submit" disabled>
              Submit
            </button>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  props: ["editProductForm", "epfEditAttribute"],
  methods: {
    submitNewAttribute: function(e) {
      e.preventDefault();
      this.epfEditAttribute("submit");
    }
  }
};
</script>

<style scoped>
.title {
  text-align: center;
}
.edit-attribute-form {
  border: 2px solid #ddd;
  width: 550px;
  max-width: 100%;
  margin: auto auto 30px auto;
  box-sizing: border-box;
  padding-left: 15px;
  padding-right: 15px;
}
.txt-input {
  padding: 5px;
  font-size: 16px;
  width: 100%;
  box-sizing: border-box;
  border-radius: 3px;
  border: 1px solid #ddd;
}
.form-btns {
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
  font-size: 17px;
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
.error-txt {
  color: #c00;
  text-align: center;
}
.option-combo-txt {
  margin-top: 14px;
  margin-bottom: 8px;
}
.option-txt {
  margin-top: 8px;
  margin-bottom: 8px;
}
.indented-txt {
  padding-left: 15px;
  padding-right: 15px;
}
.option-combo-instock,
.img-ranking {
  display: flex;
  align-items: center;
}
.instock-input-txt,
.img-ranking-input-txt {
  margin-top: 0;
  margin-bottom: 0;
}
.instock-input,
.img-ranking-input {
  width: 90px;
  padding-top: 2px;
  padding-bottom: 2px;
}
</style>
