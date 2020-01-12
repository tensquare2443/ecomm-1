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
      <div v-if="editProductForm.attributeEditing === 'productPath'">
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
              v-if="editProductForm.location.original !== editProductForm.location.new"
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
  margin: auto;
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
</style>
