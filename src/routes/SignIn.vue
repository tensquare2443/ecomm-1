<template>
  <div class="sign-in">
    <h1 class="sign-in__brand-title sitebrand">
      Brand
    </h1>
    <h2 class="sign-in__title">Log In</h2>
    <form @submit="signInFormSubmit">
      <h3 class="sign-in__input-title">Enter your username:</h3>
      <input
        @input="signInFormEdit"
        id="usernameInput"
        class="sign-in__input"
        type="text"
        placeholder="username"
      />
      <h3 class="sign-in__input-title">Enter your password:</h3>
      <input
        @input="signInFormEdit"
        id="passwordInput"
        class="sign-in__input"
        type="password"
        placeholder="password"
      />
      <p v-if="signInForm.formInvalidity" class="sign-in__form-invalid">
        {{ signInForm.formInvalidity }}
      </p>
      <button
        v-if="signInForm.submitting"
        class="sign-in__submit disabled"
        type="submit"
        disabled
      >
        <LoadingLightSm />
      </button>
      <button v-else class="sign-in__submit" type="submit">
        Submit
      </button>
    </form>
  </div>
</template>

<script>
import LoadingLightSm from "../components/LoadingLightSm";

export default {
  props: ["signInFormEdit", "signInFormSubmit", "signInForm"],
  components: {
    LoadingLightSm
  }
};
</script>

<style scoped>
.sign-in {
  width: 500px;
  max-width: 100%;
  border: 1px solid #ccc;
  border-radius: 6px;
  margin: 40px auto auto auto;
  padding: 0 15px 35px 15px;
  box-sizing: border-box;
  background-color: #fbfbfb;
  box-shadow: 0px 3px 10px #ccc;
}
.sign-in__brand-title {
  font-size: 4em;
  text-align: center;
  margin-top: 30px;
  margin-bottom: 15px;
}
.sign-in__title {
  text-align: center;
  font-size: 2em;
  margin-top: 15px;
}
.sign-in__input-title {
  text-align: center;
  font-size: 1.3em;
  margin: 15px 0 8px 0;
}
.sign-in__input {
  display: block;
  margin: auto;
  width: 250px;
  max-width: 100%;
  font-size: 1.2em;
  border-radius: 3px;
  border: 1px solid #ccc;
  padding: 3px 8px;
  box-sizing: border-box;
}
.sign-in__submit {
  background-color: green;
  font-size: 1.4em;
  color: white;
  border: 3px solid darkgreen;
  cursor: pointer;
  width: 250px;
  max-width: 100%;
  display: block;
  margin: 25px auto auto auto;
  border-radius: 3px;
}
.sign-in__submit.disabled {
  background-color: grey;
  border-color: grey;
}
.sign-in__submit.disabled:hover {
  background-color: grey;
}
.sign-in__submit:hover {
  background-color: darkgreen;
}
.sign-in__form-invalid {
  text-align: center;
  color: #c00;
}
</style>
