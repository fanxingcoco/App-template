<template>
  <div class="swiper_con">
    <swiper :options="swiperOption" ref="mySwiper">
      <!-- slides -->
      <swiperSlide v-for="(item ,index) in items" :key="index">
        <p class="total">{{item.totalOrderKm}}</p>
        <p class="totalnam">{{item.totalOrderUnit}}</p>
        <div class="tree">
          <p>
            类型统计1&nbsp;
            <span>{{item.co2}}</span>&nbsp;个
          </p>
          <p>=</p>
          <p>
            类型统计2&nbsp;
            <span>{{parseInt(item.tree).toLocaleString()}}</span>&nbsp;个
          </p>
        </div>
        <div class="egg">
          <p>
            类型统计3&nbsp;
            <span>{{item.heat}}</span>&nbsp;个
          </p>
          <p>=</p>
          <p>
            类型统计4&nbsp;
            <span>{{parseInt(item.hamburger).toLocaleString()}}</span>&nbsp;个
          </p>
        </div>
      </swiperSlide>
      <!-- Optional controls -->
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
import "swiper/dist/css/swiper.css";
export default {
  components: {
    swiper,
    swiperSlide
  },
  data() {
    return {
      swiperOption: {
        pagination: {
          el: ".swiper-pagination"
        }
      }
    };
  },
  props: {
    items: {
      type: Array,
      default() {
        return {};
      }
    }
  }
};
</script>

<style scoped>
.swiper-pagination {
  position: relative;
}
.swiper_con {
  background: url("../../img/bg.png") no-repeat;
  width: 100%;
  height: 460px;
  border-bottom: 1px solid #1ab394;
  position: relative;
}
.total {
  color: #ffffff;
  font-size: 75px;
  text-align: center;
  margin: 60px 0 20px 0;
}
.totalnam {
  color: #ffffff;
  text-align: center;
  margin: 20px 0 50px 0;
}
.tree {
  width: 50%;
  text-align: center;
  display: block;
  float: left;
  color: #ffffff;
  font-size: 26px;
  margin-bottom: 30px;
}

.tree p,
.egg p {
  margin: 15px 0;
}
.tree span {
  font-size: 35px;
}
.egg {
  width: 50%;
  text-align: center;
  display: block;
  float: right;
  color: #ffffff;
  font-size: 26px;
  margin-bottom: 30px;
  border-left: 1px solid #ffffff;
  box-sizing: border-box;
}
.egg span {
  font-size: 35px;
}
</style>
