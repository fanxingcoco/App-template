<template>
  <div class="remind">
    <vheader :title="title">
      <i class="iconfont icon_l" @click="goBack">&#xe61c;</i>
      <i class="iconfont icon_r">&ensp;</i>
      <!-- <i class="iconfont icon_r">&#xe616;</i> -->
    </vheader>
    <div class="tabs">
      <router-link tag="span" to="/remind/unprocessed" class="border_l">未处理</router-link>
      <router-link tag="span" to="/remind/processed" class="border_r">已处理</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import header from "../header/header";
export default {
  components: {
    vheader: header
  },
  data() {
    return {
      title: "处理信息"
    };
  },
  methods: {
    goBack() {
      this.$router.push({
        path: "/home"
      });
    }
  }
};
</script>

<style scoped>
.icon_l {
  display: block;
  padding-left: 30px;
  float: left;
  font-size: 30px;
  text-align: center;
  color: #333333;
}
.icon_r {
  display: block;
  padding-right: 30px;
  float: right;
  font-size: 30px;
  font-weight: 800;
  text-align: center;
  color: #333333;
}
.tabs {
  width: 100%;
  height: 100px;
  padding: 10px 18px 30px 18px;
  box-sizing: border-box;
  font-size: 0;
  border-bottom: 2px solid #1ab394;
}
.tabs span {
  display: inline-block;
  font-size: 22px;
  width: 50%;
  line-height: 60px;
  text-align: center;
  background-color: #ffffff;
  color: #1ab394;
  border: 1px solid #1ab394;
  box-sizing: border-box;
}
.border_l {
  border-top-left-radius: 50px;
  border-bottom-left-radius: 50px;
}
.border_r {
  border-top-right-radius: 50px;
  border-bottom-right-radius: 50px;
}
.exact {
  background-color: #1ab394 !important;
  color: #ffffff !important;
}
</style>
