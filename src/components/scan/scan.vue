<template>
  <div>
    <vheader :title="title">
      <i class="iconfont icon_l" @click="goBack">&#xe61c;</i>
      <i class="iconfont icon_r">&ensp;</i>
    </vheader>
    <ul class="list">
      <li class="title" @click="scancode">
        扫码功能展示
        <span>>></span>
      </li>
      <li class="title" @click="bluetooth">
        蓝牙功能展示
        <span>>></span>
      </li>
    </ul>
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
      title: "小功能"
    };
  },
  mounted() {
    // console.log('-----scan-----')
  },
  methods: {
    goBack() {
      this.$router.push({
        path: "/home"
      });
    },
    scancode() {
      this.$router.push({
        path: "/scancode"
      });
    },
    bluetooth() {
      this.$router.push({
        path: "/bluetooth"
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
  color: #919191;
}
.listinput {
  width: 85%;
}
.icon_r {
  display: block;
  padding-right: 30px;
  float: right;
  font-size: 30px;
  font-weight: 800;
  text-align: center;
  color: #919191;
}
.title {
  line-height: 78px !important;
  height: 78px !important;
  padding-left: 70px !important;
  font-weight: 800;
  font-size: 30px;
}
.title span {
  color: #1ab394;
}
.list {
  background-color: #f3f3f3;
  position: absolute;
  top: 100px;
  bottom: 0;
  left: 0;
  right: 0;
}
.list li {
  height: 70px;
  line-height: 70px;
  position: relative;
  box-sizing: border-box;
  padding-left: 250px;
  color: #000000;
  border-bottom: 1px solid #cccccc;
}
.list li p {
  position: absolute;
  left: 70px;
  top: 0;
  text-align: center;
  font-size: 26px;
}
.list li div {
  font-size: 26px;
}
</style>
