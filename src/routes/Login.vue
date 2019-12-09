<template>
  <div class="login">
    <h2 class="login__title">Log In</h2>
    <form>
      <h3 class="login__input-title">Enter your email:</h3>
      <input class="login__input" type="text" placeholder="email" />
      <h3 class="login__input-title">Enter your password:</h3>
      <input class="login__input" type="password" placeholder="password" />
      <button class="login__submit" type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style scoped>
.login {
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
.login__title {
  text-align: center;
  font-size: 2em;
}
.login__input-title {
  text-align: center;
  font-size: 1.3em;
  margin: 15px 0 8px 0;
}
.login__input {
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
.login__submit {
  background-color: green;
  font-size: 1.4em;
  color: white;
  border: 3px solid darkgreen;
  transition: background-color 0.2s;
  cursor: pointer;
  width: 250px;
  max-width: 100%;
  display: block;
  margin: 25px auto auto auto;
  border-radius: 3px;
}
.login__submit:hover {
  background-color: darkgreen;
}
</style>
