<template>
  <div>
    <vheader :title="title">
      <i class="iconfont icon_l" @click="goBack">&#xe61c;</i>
      <i class="iconfont icon_r">&nbsp;</i>
      <!-- <i class="iconfont icon_r">&#xe61e;</i> -->
    </vheader>
    <div class="title">公文批办单</div>
    <ul class="list">
      <li>
        <p>收文日期：</p>
        <div>
          <input
            type="text"
            class="approveinput"
            placeholder="2018/12/01"
            ref="shouwenriqi"
            :value="obj.shouwenriqi"
          >
        </div>
      </li>
      <li>
        <p>结项日期：</p>
        <div>
          <input
            type="text"
            class="approveinput"
            placeholder="----/--/--"
            ref="xianjieqixian"
            :value="obj.xianjieqixian"
          >
        </div>
      </li>
      <li>
        <p>来源：</p>
        <div>
          <input type="text" class="approveinput" placeholder ref="laiyuan" :value="obj.laiyuan">
        </div>
      </li>
      <li>
        <p>类别：</p>
        <div>
          <select name="123" id class="approvesele" ref="leibie" @change="catChangeType">
            <option v-for="(item, index) in option1" :key="index" class="opclass">{{item.LABEL}}</option>
          </select>
        </div>
      </li>
      <li>
        <p>处理人员：</p>
        <div>
          <select name="123" id class="approvesele" ref="chengbandanwei" @change="uniChangeType">
            <option :value="obj.chengbandanwei" class="opclass">{{obj.chengbandanwei}}&ensp;(默认项)</option>
            <option v-for="(item, index) in option2" :key="index" class="opclass">{{item.LABEL}}</option>
          </select>
        </div>
      </li>
      <li>
        <p>性质：</p>
        <div>
          <input type="text" class="approveinput" placeholder ref="xingzhi" :value="obj.xingzhi">
        </div>
      </li>
      <li>
        <p class="h1">处理事项：</p>
        <div>
          <textarea
            name="txt"
            clos=",100"
            rows="5"
            warp="virtual"
            class="approveta"
            ref="neirong"
            :value="obj.neirong"
          ></textarea>
        </div>
      </li>
      <li>
        <p class="h1">处理意见：</p>
        <div>
          <textarea
            name="txt"
            clos=",100"
            rows="5"
            warp="virtual"
            class="approveta"
            ref="chushiyijian"
            :value="obj.chushiyijian"
          ></textarea>
        </div>
      </li>
      <li>
        <p>备注：</p>
        <div>
          <input type="text" class="approveinput" placeholder ref="beizhu" :value="obj.beizhu">
        </div>
      </li>
      <li>
        <p>发送信息：</p>
        <div>
          <input
            type="text"
            class="approveinput fl"
            placeholder
            ref="fasongdanwei"
            :value="obj.fasongdanwei"
          >
          <span @click="showunit">查看</span>
        </div>
      </li>
      <li>
        <button class="paper" @click="submit">提交</button>
      </li>
    </ul>
    <div class="department" :key="index" v-bind:class="{active:isActive}">
      <button class="butclass" @click="unitconfirm">确定</button>
      <button class="butclass" @click="unitclose">关闭</button>
      <div>
        <p>单位：</p>
        <hr>
        <label v-for="(item, index) in GxzxcTfqy" :key="index" class="flabel">
          <input name="Fruit" type="radio" :value="item.LABEL" v-model="checkedValue">
          {{item.LABEL}}
        </label>
      </div>
      <div class="marg20">
        <p>企业：</p>
        <hr>
        <label v-for="(item, index) in companyname" :key="index">
          <input name="Fruit" type="radio" :value="item.LABEL" v-model="checkedValue">
          {{item.LABEL}}
        </label>
      </div>
    </div>
  </div>
</template>

<script>
import header from "../header/header";
export default {
  components: {
    vheader: header
  },
  computed: {
    count() {
      return this.$store.state;
    }
  },
  data() {
    return {
      title: "情况查办",
      isActive: false,
      checkedValue: "",
      isDisabled: false,
      option1: [
        {
          VALUE: "处理信息",
          LABEL: "处理信息"
        },
        {
          VALUE: "通知",
          LABEL: "通知"
        },
        {
          VALUE: "通告",
          LABEL: "通告"
        }
      ],
      option2: [
        {
          VALUE: "110001",
          LABEL: "类型1"
        },
        {
          VALUE: "110002",
          LABEL: "类型2"
        },
        {
          VALUE: "110003",
          LABEL: "类型3"
        },
        {
          VALUE: "110004",
          LABEL: "类型4"
        },
        {
          VALUE: "110005",
          LABEL: "类型5"
        },
        {
          VALUE: "110006",
          LABEL: "类型6"
        },
        {
          VALUE: "110007",
          LABEL: "类型7"
        },
        {
          VALUE: "110009",
          LABEL: "类型8"
        },
        {
          VALUE: "110010",
          LABEL: "类型9"
        }
      ],
      companyname: [
        {
          VALUE: "110001",
          LABEL: "类型1"
        },
        {
          VALUE: "110002",
          LABEL: "类型2"
        },
        {
          VALUE: "110003",
          LABEL: "类型3"
        },
        {
          VALUE: "110004",
          LABEL: "类型4"
        },
        {
          VALUE: "110005",
          LABEL: "类型5"
        },
        {
          VALUE: "110006",
          LABEL: "类型6"
        },
        {
          VALUE: "110007",
          LABEL: "类型7"
        },
        {
          VALUE: "110009",
          LABEL: "类型8"
        },
        {
          VALUE: "110010",
          LABEL: "类型9"
        }
      ],
      GxzxcTfqy: [
        {
          VALUE: "",
          LABEL: "全部"
        },
        {
          VALUE: "0",
          LABEL: "单位1"
        },
        {
          VALUE: "0101",
          LABEL: "单位1"
        },
        {
          VALUE: "0102",
          LABEL: "单位2"
        },
        {
          VALUE: "0105",
          LABEL: "单位5"
        },
        {
          VALUE: "0106",
          LABEL: "单位6"
        },
        {
          VALUE: "0107",
          LABEL: "单位7"
        },
        {
          VALUE: "0108",
          LABEL: "单位8"
        },
        {
          VALUE: "0109",
          LABEL: "单位9"
        },
        {
          VALUE: "0111",
          LABEL: "单位11"
        },
        {
          VALUE: "0112",
          LABEL: "单位12"
        },
        {
          VALUE: "0113",
          LABEL: "单位13"
        },
        {
          VALUE: "0114",
          LABEL: "单位14"
        },
        {
          VALUE: "0115",
          LABEL: "单位15"
        },
        {
          VALUE: "0116",
          LABEL: "单位16"
        },
        {
          VALUE: "0117",
          LABEL: "单位17"
        },
        {
          VALUE: "0118",
          LABEL: "单位18"
        },
        {
          VALUE: "0119",
          LABEL: "单位19"
        }
      ],
      res: {},
      obj: {
        jggiId: "",
        jggfId: "",
        jggpId: "",
        phaseid: "",
        phasename: "",
        userid: "",
        shouwenriqi: "",
        xianjieqixian: "",
        laiyuan: "",
        leibie: "督办件",
        chengbandanwei: "",
        xingzhi: "",
        neirong: "",
        chushiyijian: "",
        quxianyijian: "",
        jiedaoyijian: "",
        beizhu: "",
        fasongdanwei: "",
        warningId: "",
        pushStatus: ""
      }
    };
  },
  mounted() {
    var id = this.$route.query.id;
    // console.log('-------')
    // console.log(id)
    // console.log(id.JGD_NAME)
    // 默认项赋值---begin----
    this.obj.chengbandanwei = id.JGD_NAME;
    this.obj.warningId = id.ID;
    var whDate = new Date(
      new Date(new Date().setDate(new Date().getDate() + 1))
    );
    var year = whDate.getFullYear();
    var month = whDate.getMonth() + 1;
    var day = whDate.getDate();
    var day1 = whDate.getDate() - 1;
    var hours = whDate.getHours();
    this.obj.shouwenriqi = year + "/" + month + "/" + day1;
    var whDateStr = year + "年" + month + "月" + day + "日" + hours + "时";
    if (id.WARNING_TYPE !== "9") {
      this.obj.neirong =
        "单位在" +
        id.OBJECT_NAME +
        id.WARNINGTYPESTR +
        "超过" +
        id.WARNINGTIME +
        "小时，" +
        "没有处理该事件，限" +
        whDateStr +
        "之前完成。";
    }
  },
  methods: {
    goBack() {
      this.$router.push({
        path: "/remind"
      });
    },
    catChangeType(ele) {
      var optionVal = ele.target.value;
      this.obj.leibie = optionVal;
    },
    uniChangeType(ele) {
      var optionVal = ele.target.value;
      this.obj.chengbandanwei = optionVal;
    },
    showunit() {
      this.isActive = true;
    },
    unitclose() {
      this.isActive = false;
    },
    unitconfirm() {
      // console.log('被选中的值为:' + this.checkedValue)
      this.obj.fasongdanwei = this.checkedValue;
      this.isActive = false;
    },
    submit() {
      // 提交事件处理
      alert("提交成功");
    }
  }
};
</script>

<style scoped>
.h1 {
  height: 160px;
}
.marg20 {
  margin: 20px 0;
}
.butclass {
  float: right;
  padding: 0 20px;
  margin: 0 10px;
}
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
  width: 100%;
  line-height: 80px !important;
  height: 80px !important;
  padding-left: 0 !important;
  font-weight: 800;
  font-size: 30px;
  background-color: #1ab394;
  text-align: center;
  color: #ffffff !important;
}
.list {
  background-color: #f7f7f7;
  position: absolute;
  top: 180px;
  bottom: 0;
  left: 0;
  right: 0;
  overflow: auto;
  border-top: 2px solid #d56868;
  border-bottom: 2px solid #d56868;
}
.list li {
  font-size: 22px;
  color: #000000;
  overflow: hidden;
  border-bottom: 1px solid #bb3939;
}
.list li p {
  width: 25%;
  float: left;
  padding-right: 10px;
  text-align: right;
  line-height: 80px;
  box-sizing: border-box;
  border-right: 1px solid #bb3939;
}
.list li div {
  width: 75%;
  float: left;
  padding: 10px 0 0 20px;
  box-sizing: border-box;
}
.approveinput {
  height: 60px;
  width: 85%;
  padding-left: 20px;
  border: 1px solid #bbbbbb;
  box-sizing: border-box;
}
.fl {
  float: left;
}
span {
  display: block;
  float: left;
  height: 60px;
  width: 80px;
  margin-left: -80px;
  background-color: #aaaaaa;
  color: #ffffff;
  text-align: center;
  line-height: 60px;
}
span:hover {
  background-color: #555555;
}
.approvesele {
  height: 60px;
  width: 70%;
  padding-left: 20px;
  border: 1px solid #bbbbbb;
  box-sizing: border-box;
}
.approveta {
  height: 140px;
  width: 85%;
  padding-left: 20px;
  border: 1px solid #bbbbbb;
  box-sizing: border-box;
}
.opclass {
  width: 300px;
  height: 60px;
}
.status {
  color: #d56868;
}
.paper {
  display: inline-block;
  background-color: #1ab394;
  width: 300px;
  line-height: 60px;
  height: 70px;
  color: #ffffff;
  margin: 35px 0 50px 230px;
  text-align: center;
}
.department {
  position: absolute;
  top: 600px;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  padding: 50px;
  color: #252525;
  line-height: 50px;
  visibility: hidden;
  border-top: 6px solid #1ab394;
  background-color: #f7f7f7;
  box-sizing: border-box;
  overflow: auto;
}
.active {
  visibility: visible;
}
.hideclass {
  visibility: hidden;
  display: none;
}
</style>
