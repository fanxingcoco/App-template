<template>
  <div>
    <vheader :title="title">
      <i class="iconfont icon_l" @click="goBack()">&#xe61c;</i>
      <i class="iconfont icon_r">&ensp;</i>
    </vheader>
    <ul class="list">
      <li class="title">详细信息展示</li>
      <li>
        <p>经纬度：</p>
        <input
          type="text"
          ref="lonlat"
          placeholder="经纬度"
          readonly="readonly"
          :value="BTpostData.lonlat"
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
          :value="BTpostData.position"
          class="listinput"
        >
      </li>
      <li>
        <div class="newbox">
          <div class="datanew">{{datanew}}</div>
          <ul class="newul">
            <li v-for="(item, index) in BTpostData.list" :key="index">
              <p>{{item}}</p>
              <span>{{item.bastatus}}</span>
            </li>
          </ul>
        </div>
      </li>
      <li>
        <button href="#" class="paper" @click="scanclick()" :disabled="isDisable">蓝牙扫描</button>
        <button href="#" class="paper" @click="checkButton()" :disabled="isDisable">提交</button>
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
      title: "蓝牙功能",
      datanew: "",
      number: 0,
      bluetToothError: "",
      isDisable: false,
      devicedata: { id: "2H:7F:8I" },
      BTpostData: {
        lonlat: "",
        position: "",
        list: []
      }
    };
  },
  mounted() {},
  methods: {
    goBack() {
      this.$router.push({
        path: "/scan"
      });
    },
    scanclick() {
      this.isDisable = true;
      let that = this;
      alert("扫描开始");
      // 获取位置
      window.GaoDe.getCurrentPosition(
        function(success) {
          that.BTpostData.lonlat = success.longitude + "," + success.latitude;
          that.BTpostData.position = success.address;
        },
        function(error) {
          alert(JSON.stringify(error));
        }
      );
      ble.startScan(
        [],
        function(device) {
          that.datanew = "蓝牙扫描数据展示:";
          let devicedata = JSON.stringify(device);
          let bikeCodeID = device;
          that.BTpostData.list.push(bikeCodeID);
        },
        function(error) {
          that.bluetToothError += ";" + JSON.stringify(error);
        }
      );
      setTimeout(function() {
        if (that.bluetToothError !== "") {
          alert("error为空" + that.bluetToothError);
        }
        ble.stopScan(
          function() {
            alert("扫描完成");
            if (that.BTpostData.list.length === 0) {
              that.datanew = "位置附近没有监测到蓝牙数据";
            }
          },
          function() {
            alert("stopScan failed");
          }
        );
        this.isDisable = false;
      }, 5000);
    },
    checkButton() {
      this.isDisable = true;
      if (this.BTpostData.list.length === 0) {
        alert("无信息，请使用蓝牙扫描");
      } else {
        //提交信息处
        alert("信息提交成功");
      }
    }
  }
}
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
  margin-left: 150px;
  width: 60%;
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
  line-height: 70px;
  position: relative;
  box-sizing: border-box;
  padding-left: 70px;
  color: #000000;
  border-bottom: 1px solid #cccccc;
}
.list li p {
  position: absolute;
  font-size: 26px;
}
.newbox {
  width: 85%;
  height: 600px;
  background-color: #ffffff;
  margin: 20px 0;
  padding: 20px;
  border: 1px solid #aaaaaa;
  overflow: hidden;
  overflow-y: scroll;
}
.newul {
  top: 0;
  bottom: 0;
  left: 100px;
  right: 100px;
}
.datanew {
  font: 400 26px/50px "microsoft yahei";
  padding-left: 10px;
  color: #777777;
}
.newul li {
  line-height: 50px;
  padding: 0;
  box-sizing: border-box;
  color: #777777;
  overflow: hidden;
  border-bottom: 1px dotted #eeeeee;
}
.newul p {
  width: 80%;
  line-height: 50px;
  padding-left: 10px;
  float: left;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  box-sizing: border-box;
}
.newul span {
  width: 18%;
  text-align: center;
  line-height: 50px;
  box-sizing: border-box;
  float: right;
  color: #1ab394;
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
