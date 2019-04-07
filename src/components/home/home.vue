<template>
  <div>
    <vheader :title="title">
      <i class="iconfont icon_l" @click="goBack">&#xea5b;</i>
      <i class="iconfont icon_r">&emsp;</i>
      <!-- <i class="iconfont icon_r">&#xe61e;</i> -->
    </vheader>
    <!-- <p class="bannar">重要信息或警示发布，滚动显示！！！</p> -->
    <ul class="items">
      <li class="blue">
        <p class="string">{{res.car.TITLE}}</p>
        <p class="num font_blue">{{res.car.NUM}}</p>
      </li>
      <li class="green">
        <p class="string">{{res.order.TITLE}}</p>
        <p class="num font_green">{{res.order.NUM}}</p>
      </li>
      <li class="red">
        <!-- <router-link tag="span" to="/remind">详情></router-link> -->
        <p class="string">{{res.police.TITLE}}</p>
        <p class="num font_red">{{res.police.NUM}}</p>
      </li>
      <li class="yellow">
        <p class="string">{{res.monitoringNum.TITLE}}</p>
        <p class="num font_yellow">{{res.monitoringNum.NUM}}</p>
      </li>
      <li class="purple">
        <p class="string">{{res.monitoringBike.TITLE}}</p>
        <p class="num font_purple">{{res.monitoringBike.NUM}}</p>
      </li>
      <li class="orange">
        <p class="string">{{res.noRecord.TITLE}}</p>
        <p class="num font_orange">{{res.noRecord.NUM}}</p>
      </li>
    </ul>
    <div class="areaWrapper" ref="areawrapper">
      <ul>
        <li
          v-for="(item, index) in subDistricts"
          class="areaitem"
          :class="{'current': isActive === index}"
          @click="selectMenu(index, $event)"
          ref="areaList"
          :key="index"
        >{{item.DISTRICT_NAME}}</li>
      </ul>
    </div>
    <div class="bikenum" ref="bikenum" :class="classActive?'bikenum600':'bikenum470'">
      <ul>
        <li
          v-for="(item, index) in subDistricts"
          :key="index"
          ref="detailWrapper"
          class="list-hook"
        >
          <p class="title">{{item.DISTRICT_NAME}}事件总数：{{item.BIKENO}}</p>
          <ul class="con clearfix">
            <li>
              <ul class="thead">
                <li class="w_20">#</li>
                <li class="w_40">类别名称</li>
                <li class="w_30">事件数量</li>
                <li class="w_10"></li>
              </ul>
            </li>
            <li>
              <router-link
                tag="ul"
                v-for="(child, index) in item.detail"
                :key="index"
                class="child_con"
                :to="{ path: '/map', query: { id: item.detail[index] } }"
              >
                <li class="id w_20">{{index + 1}}</li>
                <li class="street w_40">{{child.TOWN_NAME}}</li>
                <li class="num w_30">{{child.BIKENO}}</li>
                <li class="w_10">
                  <p>>></p>
                </li>
              </router-link>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import header from "../header/header";
import BScroll from "better-scroll";
export default {
  components: {
    vheader: header
  },
  data() {
    return {
      title: "监测",
      listHeight: [],
      scrollY: 0,
      isActive: -1,
      classActive: true,
      subdistricts: [],
      res: {
        police: {},
        order: {},
        car: {},
        monitoringNum: {},
        monitoringBike: {},
        noRecord: {}
      },
      news: [],
      sess: {
        JSESSIONID: "12E261050A501D835E6117409E9C1F4B"
      }
    };
  },
  mounted() {
    // 列表数据
    this.$http
      .get(
        "https://www.easy-mock.com/mock/5b66b6051fc80e53a3ad6261/qwertyuiop_copy/qaz"
      )
      .then(
        res => {
          console.log(res.data);
          this.subDistricts = res.data;
        },
        function() {
          console.log("请求失败处理");
        }
      );
    // ---监测参数数据1------
    this.$http
      .get(
        "https://www.easy-mock.com/mock/5b66b6051fc80e53a3ad6261/qwertyuiop_copy/khxm",
        {
          params: this.sess
        }
      )
      .then(
        res => {
          // console.log(res)
          this.res.police = res.data[2];
          this.res.car = res.data[0];
          this.res.order = res.data[1];
        },
        function() {
          console.log("请求失败处理");
        }
      );
    // ---监测参数数据2------
    this.$http
      .get(
        "https://www.easy-mock.com/mock/5b66b6051fc80e53a3ad6261/qwertyuiop_copy/shownews",
        {
          params: {
            params: this.sess
          }
        }
      )
      .then(
        res => {
          // console.log('-----数据2----')
          // console.log(res.data)
          this.res.monitoringNum = res.data[0];
          this.res.monitoringBike = res.data[1];
          this.res.noRecord = res.data[2];
        },
        function() {
          console.log("请求失败");
        }
      );
  },
  created() {
    // console.log(this.$refs)
    // console.log(this.$refs.areawrapper)
    this.$nextTick(() => {
      this._initScroll();
      // 计算高度
      this._calculateHeight();
    });
    // this._initScroll()
  },
  computed: {
    currentIndex() {
      for (let i = 0; i < this.listHeight.length; i++) {
        let height1 = this.listHeight[i];
        let height2 = this.listHeight[i + 1];
        // console.log(this.listHeight)
        // console.log(this.scrollY)
        if (this.scrollY >= height1 && this.scrollY < height2) {
          // this._followScroll(i)
          return i;
        }
      }
      // return 0
    },
    code() {
      return this.$store.state.user;
    }
  },
  methods: {
    goBack() {
      this.$router.push({
        path: "/me"
      });
    },
    selectMenu(index, event) {
      this.isActive = index;
      let detaillist = this.$refs.detailWrapper;
      let el = detaillist[index];
      this.bikeScroll.scrollToElement(el, el.scrollHeight);
      // console.log(index)
      // console.log(detaillist)
      // console.log(el.scrollHeight)
    },
    _initScroll() {
      this.areaScroll = new BScroll(this.$refs.areawrapper, {
        click: true
      });
      this.bikeScroll = new BScroll(this.$refs.bikenum, {
        click: true,
        probeType: 3
      });
      this.bikeScroll.on("scroll", pos => {
        if (pos.y <= 0) {
          this.scrollY = Math.abs(Math.round(pos.y));
        }
      });
    },
    _calculateHeight() {
      let detailList = this.$refs.detailWrapper;
      let height = 0;
      this.listHeight.push(height);
      for (let i = 0; i < detailList.length; i++) {
        let item = detailList[i];
        height += item.clientHeight;
        this.listHeight.push(height);
      }
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
.bannar {
  height: 70px;
  line-height: 70px;
  background-color: #1ab394;
  color: #ffffff;
  padding: 0 64px;
}
.items {
  display: block;
  background-color: #eeeeee;
  padding: 10px;
  clear: both;
  height: 300px;
  border-top: 2px solid #1ab394;
  box-sizing: border-box;
}
.items li {
  float: left;
  display: block;
  position: relative;
  margin: 14px 12px;
  padding: 12px;
  width: 30%;
  height: 110px;
  background-color: #ffffff;
  box-sizing: border-box;
}
.green {
  border-left: 6px solid #91cdb2;
}
.font_green {
  color: #91cdb2;
}
.blue {
  border-left: 6px solid #2db2ba;
}
.font_blue {
  color: #2db2ba;
}
.red {
  border-left: 6px solid #e79595;
}
.font_red {
  color: #e79595;
}
.yellow {
  border-left: 6px solid #ddcb4e;
}
.font_yellow {
  color: #ddcb4e;
}
.purple {
  border-left: 6px solid #a8adda;
}
.font_purple {
  color: #a8adda;
}
.orange {
  border-left: 6px solid #7cbbd6;
}
.font_orange {
  color: #7cbbd6;
}
.string {
  font-size: 24px;
  color: #a1a1a1;
  margin-bottom: 20px;
}
.num {
  font-size: 35px;
  text-align: center;
}
.items li span {
  position: absolute;
  top: 12px;
  right: 10px;
  color: #78c5b6;
  font-size: 18px;
}
.areaWrapper {
  /* position: absolute; */
  width: 100%;
  height: 62px;
  background-color: #1ab394;
}
.bikenum {
  position: absolute;
  top: 0px;
  left: 0;
  right: 0;
  bottom: 0;
  /* margin-top: 470px; */
  padding: 0 40px;
  overflow: auto;
}
.bikenum470 {
  margin-top: 470px;
}
.bikenum600 {
  margin-top: 530px;
}
.areaitem {
  float: left;
  width: 25%;
  border-right: 1px solid #1ab394;
  border-bottom: 1px solid #cccccc;
  line-height: 60px;
  background-color: #1ab394;
  color: #ffffff;
  text-align: center;
  box-sizing: border-box;
}
.current {
  /* position: relative; */
  z-index: 10;
  background: #fff;
  color: #1ab394;
  font-weight: 600;
}
.w_20 {
  width: 20%;
}
.w_40 {
  width: 40%;
}
.w_30 {
  width: 30%;
}
.w_10 {
  width: 10%;
  color: #1ab394;
}
.w_10 p {
  color: #1ab394;
}
.title {
  text-align: center;
  font-weight: 800;
  line-height: 80px;
  font-size: 26px;
}
.thead {
  display: block;
  height: 65px;
  border-bottom: 2px solid #dddddd;
}
.thead li {
  float: left;
  color: #000000;
  text-align: center;
  line-height: 65px;
  color: #000000;
}
.child_con li {
  float: left;
  text-align: center;
  color: #5e5e5e;
  font-size: 22px;
  font-weight: 800;
  line-height: 64px;
}
.clearfix:before,
.clearfix:after {
  content: "";
  display: table;
}
.clearfix:after {
  clear: both;
}
.clearfix {
  *zoom: 1; /*IE/7/6*/
}
.con {
  display: block;
  background-color: #ffffff;
  border: 1px solid #cccccc;
  /* margin-bottom: 20px; */
}
</style>
