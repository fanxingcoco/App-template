<template>
  <div class="form">
    <div class="logintitle">用户登录</div>
    <div class="username">
      <label for="username">用户名:</label>
      <input type="text" v-model="res.username">
    </div>
    <div class="password">
      <label for="password">密码: &nbsp;&nbsp;</label>
      <input type="password" v-model="res.password">
    </div>
    <div>
      <label>
        <input type="checkbox" v-model="res.checked">记住密码
      </label>
    </div>
    <button @click="login()">登录</button>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      res: {
        username: "",
        password: "",
        userUnit: "01_管理员",
        userRoles: ["ROLE_USER", "ROLE_ADMIN", "ROLE_CITY"],
        checked: false
      }
    };
  },
  mounted() {
    // console.log(localStorage.user)
    this.res.username = JSON.parse(localStorage.user);
    this.res.password = JSON.parse(localStorage.password);
  },
  methods: {
    login() {
      if (this.res.username === "admin" && this.res.password) {
        alert("登录成功！！！");
        this.setUser(this.res.username);
        this.setPassword(this.res.password);
        this.setRule(this.res.userRoles);
        this.setUnit(this.res.userUnit);
        this.$router.push({ path: "/home" });
        if (this.res.checked === true) {
          localStorage.setItem("user", JSON.stringify(this.res.username));
          localStorage.setItem("password", JSON.stringify(this.res.password));
          this.res.checked = false;
        }
      } else {
        alert("输入账号或密码错误！！！");
      }
    },
    ...mapMutations({
      setUser: "setUser",
      setRule: "setRule",
      setUnit: "setUnit",
      setPassword: "setPassword"
    })
  }
};
</script>

<style scoped>
.logintitle {
  color: #ffffff;
  font: 600 45px/100px "microft yahei";
  text-shadow: 5px 2px 6px #000;
  border-bottom: 2px solid #ffffff;
}
.form {
  padding: 30% 15% 0 15%;
  position: absolute;
  background: url(../../img/08890.png) no-repeat;
  background-size: 100%;
  text-align: center;
  box-sizing: border-box;
}
.username,
.password,
button {
  margin: 30px;
  font-size: 30px;
  color: #ffffff;
  font-weight: 600;
  text-shadow: 5px 2px 6px #000;
  box-sizing: border-box;
}
button {
  width: 200px;
  height: 55px;
  color: #ffffff;
  background-color: #1ab394;
}
label {
  width: 100px;
}
.username input,
.password input {
  width: 60%;
  height: 45px;
  padding-left: 20px;
}
</style>
