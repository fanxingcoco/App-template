<template>
  <div>
    <vheader :title="title">
      <i class="iconfont icon_l" @click="goBack">&#xe61c;</i>
      <i class="iconfont icon_r">&ensp;</i>
    </vheader>
    <ul class="list">
      <li class="title">详细信息展示</li>
      <li>
        <p>类型1：</p>
        <input
          type="text"
          ref="qrCodeContent"
          placeholder="车辆编码"
          readonly="readonly"
          :value="obj.qrCodeContent"
          class="listinput"
        >
      </li>
      <li>
        <p>经纬度：</p>
        <input
          type="text"
          ref="lonlat"
          placeholder="经纬度"
          readonly="readonly"
          :value="obj.lonlat"
          class="listinput"
        >
      </li>
      <li>
        <p>位置：</p>
        <input
          type="text"
          ref="position"
          placeholder="位置"
          readonly="readonly"
          :value="obj.position"
          class="listinput"
        >
      </li>
      <li></li>
      <li>
        <p>提交信息:</p>
        <div>
          <span>
            <input type="checkbox" name="bikeFeatures" value="信息1" v-model="obj.bikeFeatures">
            <span>信息1</span>
          </span>
          <span>
            <input type="checkbox" name="bikeFeatures" value="信息2" v-model="obj.bikeFeatures">
            <span>信息2</span>
          </span>
          <span>
            <input type="checkbox" name="bikeFeatures" value="信息3" v-model="obj.bikeFeatures">
            <span>信息3</span>
          </span>
        </div>
      </li>
      <li class>
        <p id="resultType">{{resultType}}</p>
        <div class="item-input" ref="resultTime">{{resultTime}}</div>
      </li>
      <li>
        <p>结果:</p>
        <div class="item-input" ref="result">
          <span style="color: #757575">{{returnresult}}</span>
        </div>
      </li>
      <li></li>
      <li>
        <p>
          <button href="#" class="paper" @click="scanclick">扫码</button>
          <button href="#" class="paper" @click="checkButton">提交</button>
        </p>
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
      title: "扫码功能",
      returnresult: "点击提交后返回结果",
      resultType: "",
      resultTime: "",
      obj: {
        qrCodeContent: "",
        lonlat: "",
        position: "",
        bikeFeatures: []
      }
    };
  },
  mounted() {
    // console.log('-----scan-----')
  },
  methods: {
    goBack() {
      this.$router.push({
        path: "/scan"
      });
    },
    scanclick() {
      this.returnresult = "点击提交后返回结果";
      this.resultType = "";
      this.resultTime = "";
      let that = this;
      cordova.plugins.barcodeScanner.scan(
        function(result) {
          that.obj.qrCodeContent = result.text;
          window.GaoDe.getCurrentPosition(
            function(success) {
              that.obj.lonlat = success.longitude + "," + success.latitude;
              that.obj.position = success.address;
            },
            function(error) {
              alert(JSON.stringify(error));
            }
          );
        },
        function(error) {
          alert("扫码失败！");
        },
        {
          resultDisplayDuration: 0,
          formats: "QR_CODE"
        }
      );
    },
    checkButton() {
      this.returnresult = "点击提交后返回结果";
      this.resultType = "";
      this.resultTime = "";
      let postData = new URLSearchParams();
      if (this.obj.qrCodeContent === "") {
        alert("无信息，请扫码");
      } else {
        // 信息提交处
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
.status {
  color: #d56868;
}
.paper {
  display: inline-block;
  background-color: #1ab394;
  width: 200px;
  line-height: 50px;
  height: 50px;
  color: #ffffff;
  margin: 0 40px;
  text-align: center;
  border: 1px solid #cccccc;
}
</style>
