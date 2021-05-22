<template>
  <div class="dropdown">
    <i @click="toggleLogin()" class="fas fa-ellipsis-v" />

    <div v-show="visible" class="loginContainer dropdown-content">
      <p id="msg1">Please add your account details</p>
      <form>
        <div class="mb-3">
          <label for="username" class="form-label">Username / Email</label>
          <input
            type="text"
            class="form-control border-bottom"
            id="username"
            placeholder="Type your username here"
          />
        </div>
        <div class="mb-3">
          <label for="pass" class="form-label">Password</label>
          <div class="passSection">
            <input
              type="password"
              class="form-control border-bottom"
              id="pass"
              placeholder="Type your password"
            />
            <i class="fas fa-eye-slash"></i>
          </div>
        </div>
        <a class="forgotPass">Forgot Password?</a>
        <Button text="Login" />
        <a class="msg2">Dont have an account? sign up!</a>
      </form>
    </div>
  </div>
</template>

<script>
import Button from "./Button";
export default {
  name: "Login",
  data() {
    return {
      visible: false
    };
  },
  components: {
    Button
  },
  methods: {
    toggleLogin() {
      this.visible = !this.visible;
    }
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");
.dropdown {
  position: relative;
  display: inline-block;
}
.dropdown-content {
  position: absolute;
  right: 0;
  z-index: 1;
  font-family: "Roboto", sans-serif;
  width: 377px;
  height: 378px;
  background-color: #fff;
  box-shadow: 0px 2px 10px #00000012;
  padding: 30px 18px;
  border-radius: 10px;
}
.msg1 {
  color: #444242;
  opacity: 0.5;
}
label {
  font-size: 12px;
  color: #444242;
}
.passSection{
  position: relative;
}
.passSection i{
  position: absolute;
  right: 5px;
  bottom: 11px;
  color: #686868;
}
input {
  border: none;
  border-radius: 0;
}
input::placeholder {
  font-size: 20px;
  color: #444242;
}
a {
  text-decoration: none;
  cursor: pointer;
  color: #572589;
}
a:hover {
  color: #572589;
  text-decoration: underline;
}
.forgotPass {
  float: right;
  margin-bottom: 15px;
}
button {
  display: block;
  width: 100%;
}

a.msg2 {
  display: block;
  text-align: center;
  margin-top: 20px;
}

i {
  color: #572589;
  cursor: pointer;
}
</style>
