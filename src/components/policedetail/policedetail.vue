<template>
  <div>
    <vheader :title="title">
      <i class="iconfont icon_l" @click="goBack">&#xe61c;</i>
      <i class="iconfont icon_r">&nbsp;</i>
      <!-- <i class="iconfont icon_r">&#xe61e;</i> -->
    </vheader>
    <ul class="list">
      <li class="title">详细信息展示</li>
      <li>
        <p>处理类型：</p>
        {{obj.WARNINGTYPESTR}}
      </li>
      <li>
        <p>所属类型：</p>
        {{obj.AREANAME}}
      </li>
      <li>
        <p>所属区域：</p>
        {{obj.STREET_NAME}}
      </li>
      <li>
        <p>所属单位：</p>
        {{obj.JGD_NAME}}
      </li>
      <li>
        <p>使用数量(个)：</p>
        {{obj.CAPACITY}}
      </li>
      <li>
        <p>全部数量(个)：</p>
        {{obj.ALL_AMOUNT}}
      </li>
      <li>
        <p>发生位置(地点)：</p>
        {{obj.OBJECT_NAME}}
      </li>
      <li>
        <p>发生时间：</p>
        {{obj.SEND_TIME}}
      </li>
      <li>
        <p>处理状态：</p>
        <span class="status">{{obj.PUSHSTATUS}}</span>
        <router-link
          tag="ul"
          class="paper"
          v-bind:class="{active:isActive}"
          :to="{ path: '/flow', query: { id :obj } }"
        >生成处理单</router-link>
      </li>
      <li>
        <p>处理时间：</p>
        {{obj.HAND_TIME}}
      </li>
      <li>
        <p>恢复时间：</p>
        {{obj.RECOVER_TIME}}
      </li>
      <li>
        <p>备注：</p>
        {{obj.remarks}}
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
      title: "处理详细信息",
      isActive: false,
      obj: {
        WARNINGTYPESTR: "简要描述",
        JGD_NAME: "XXX",
        CAPACITY: 5657658,
        ALL_AMOUNT: 5657658123,
        AREANAME: "XXXXXX",
        STREET_NAME: "XXXXX",
        OBJECT_NAME: "XXXXXXXXXXXXXXXXXX，XXXXXXXXXXXX，XXXXXXXXX，",
        SEND_TIME: "2018-08-01 00:00:00",
        HAND_TIME: "XXXXXXXXXXXXX",
        status: "未处理",
        remarks: "备注信息"
      }
    };
  },
  mounted() {
    var id = this.$route.query.id;
    this.obj = id;
    // if (this.obj.PUSHSTATUS === '已处理') {
    //   this.isActive = true
    // }
    if (this.obj.PUSHSTATUS !== "未处理") {
      this.isActive = true;
    }
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
.title {
  line-height: 78px !important;
  height: 78px !important;
  padding-left: 70px !important;
  font-weight: 800;
  font-size: 30px;
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
  font-size: 22px;
}
.status {
  color: #d56868;
}
.paper {
  display: inline-block;
  background-color: #1ab394;
  width: 165px;
  line-height: 40px;
  height: 40px;
  color: #ffffff;
  margin-left: 40px;
  margin-right: 10px;
  text-align: center;
  font-size: 20px;
}
.active {
  visibility: hidden;
}
</style>
