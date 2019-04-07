<template>
  <div class="con">
    <vheader :title="title">
      <i class="iconfont icon_l" @click="goBack">&#xe61c;</i>
      <i class="iconfont icon_r" @click="goBack1">&#xea5b;</i>
    </vheader>
    <!-- <div class="bannar"></div> -->
    <div class="tabs_con">
      <ul class="tabs clearfix">
        <li class="border_l">订单量</li>
        <li>数据总量</li>
        <li class="border_r">使用数量</li>
      </ul>
      <p class="num">{{res.num}}</p>
      <p class="title">{{res.title}}</p>
    </div>
    <div class="con" id="map-container"></div>
  </div>
</template>

<script>
import header from "../header/header";
import AMap from "AMap";
export default {
  components: {
    vheader: header
  },
  data() {
    return {
      title: "各区分布情况",
      res: {
        num: 112613,
        title: "本区自行车总数"
      }
    };
  },
  mounted() {
    console.log(this.$route.query.id);
    const map = new AMap.Map("map-container", {
      zoom: 15,
      center: [116.39, 39.9]
    });
    console.log(map);
  },
  methods: {
    goBack() {
      this.$router.go(-1);
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
.icon_r {
  display: block;
  padding-right: 30px;
  float: right;
  font-size: 30px;
  font-weight: 800;
  text-align: center;
  color: #919191;
}
.num {
  font-size: 90px;
  text-align: center;
  color: #ffffff;
  font-weight: 1000;
  margin-top: 60px;
}
.title {
  font-size: 20px;
  text-align: center;
  color: #1ab394;
  margin-top: 25px;
}
.con {
  width: 100%;
  height: 760px;
}
.tabs_con {
  width: 100%;
  height: 350px;
  /* background-color: #3c3b3b; */
  padding-top: 20px;
  background: url("./map.png");
}
.map_view {
  position: absolute;
  top: 460px;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: auto;
}
.tabs {
  width: 700px;
  margin: 20px 25px;
  /* position: absolute; */
  box-sizing: border-box;
  border: 2px solid #ffffff;
  border-radius: 20px;
  background-color: #3c3b3b;
}
.tabs li {
  float: left;
  width: 33.333%;
  color: #ffffff;
  height: 60px;
  line-height: 60px;
  text-align: center;
}
.border_l {
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
}
.border_r {
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
}
.active {
  background-color: #1ab394;
}
.exact {
  background-color: #1ab394;
}
/* .map_con{
  width: 100%;
  height: 580px;
} */
/* .map_con{
  position: absolute;
  top: 386px;
} */
.tab {
  display: block;
  width: 100%;
  height: 80px;
  line-height: 80px;
  /* position: absolute;
  top: 300px; */
}
.tab li {
  float: left;
  width: 50%;
  line-height: 80px;
  text-align: center;
  color: #5d5d5d;
  background-color: #ffffff;
}
.exact {
  border-bottom: 2px solid #1ab394;
}
</style>
