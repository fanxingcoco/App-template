<template>
  <div class="statistics">
    <vheader :title="title">
      <i class="iconfont icon_l" @click="goBack">&#xe61c;</i>
      <i class="iconfont icon_r">&ensp;</i>
      <!-- <i class="iconfont icon_r">&#xe600;</i> -->
    </vheader>
    <ul class="tabs">
      <router-link to="/statistics/day" tag="li" class="border_r">模块1</router-link>
      <router-link to="/statistics/week" tag="li" class="border_r">模块2</router-link>
      <router-link to="/statistics/month" tag="li" class="border_r">模块3</router-link>
    </ul>
    <router-view class="c_view"></router-view>
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
      title: "统计页面"
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
.c_view {
  position: absolute;
  top: 198px;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: auto;
}
.icon_l {
  display: block;
  padding-left: 30px;
  float: left;
  font-size: 36px;
  text-align: center;
  color: #333333;
}
.icon_r {
  display: block;
  padding-right: 30px;
  float: right;
  font-size: 36px;
  font-weight: 800;
  text-align: center;
  color: #333333;
}
.tabs {
  display: block;
  height: 95px;
  line-height: 95px;
  background-color: #1ab394;
  border: 1px solid #1ab394;
}
.tabs li {
  float: left;
  width: 33.3333333%;
  text-align: center;
  box-sizing: border-box;
  font-size: 30px;
  color: #ffffff;
}
.border_r {
  border-right: 1px solid #1ab394;
}
.active {
  background-color: #ffffff;
  color: #1ab394;
}
.exact {
  background-color: #ffffff;
  color: #1ab394 !important;
  border-top: 1px solid #1ab394;
}
</style>
