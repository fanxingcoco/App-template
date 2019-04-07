
<template>
  <div>
    <div class="select">
      <vselect :option="option1" class="f_l" v-on:selectVal="selectVal1"></vselect>
      <vselect :option="option2" class="f_l" v-on:selectVal="selectVal2"></vselect>
      <vselect :option="option3" class="f_l m_t" v-on:selectVal="selectVal3"></vselect>
      <button class="f_l btn" @click="searchData">查询</button>
    </div>
    <relist :obj="obj"></relist>
  </div>
</template>

<script>
import select from "../../select/select";
import relist from "../reList/reList";
export default {
  components: {
    vselect: select,
    relist
  },
  methods: {
    selectVal1(titleVal) {
      // console.log(titleVal)
      this.warningType = titleVal;
    },
    selectVal2(titleVal) {
      // console.log(titleVal)
      this.companyId = titleVal;
    },
    selectVal3(titleVal) {
      // console.log(titleVal)
      if (titleVal === "0") {
        this.warnTimeA = 0;
        this.warnTimeB = 12;
      } else if (titleVal === "1") {
        this.warnTimeA = 12;
        this.warnTimeB = 24;
      } else if (titleVal === "2") {
        this.warnTimeA = 24;
        this.warnTimeB = 48;
      } else if (titleVal === "3") {
        this.warnTimeA = 48;
        this.warnTimeB = 96;
      } else if (titleVal === "4") {
        this.warnTimeA = 96;
        this.warnTimeB = 168;
      } else if (titleVal === "5") {
        this.warnTimeA = 168;
      }
    },
    searchData() {
      this.$http
        .get(
          "https://www.easy-mock.com/mock/5b66b6051fc80e53a3ad6261/qwertyuiop_copy/unprocessed"
        )
        .then(res => {
          // console.log(res);
          this.obj.res = res.data.data.data;
        });
    }
  },
  mounted() {
    var user = this.$store.state;
    // console.log(user)
    if (user.rule.indexOf("ROLE_DISTRICT") > -1) {
      this.JGD_CODE = this.$store.state.unit;
      this.searchData();
    } else if (user.rule.indexOf("ROLE_STREET") > -1) {
      this.STREET_NAME = this.$store.state.unit;
      this.searchData();
    } else {
      this.searchData();
    }
  },
  data() {
    return {
      warningType: "",
      companyId: "",
      JGD_CODE: "",
      STREET_NAME: "",
      warnTimeA: "",
      warnTimeB: "",
      option1: {
        title: "选择类型",
        res: [
          {
            VALUE: "",
            LABEL: "全部"
          },
          {
            VALUE: "1",
            LABEL: "类型1"
          },
          {
            VALUE: "2",
            LABEL: "类型2"
          },
          {
            VALUE: "3",
            LABEL: "类型3"
          },
          {
            VALUE: "9",
            LABEL: "其他"
          }
        ]
      },
      option2: {
        title: "所属种类",
        res: [
          {
            VALUE: "",
            LABEL: "全部"
          },
          {
            VALUE: "110001",
            LABEL: "种类1"
          },
          {
            VALUE: "110002",
            LABEL: "种类2"
          },
          {
            VALUE: "110003",
            LABEL: "种类3"
          },
          {
            VALUE: "110004",
            LABEL: "种类4"
          },
          {
            VALUE: "110005",
            LABEL: "种类5"
          },
          {
            VALUE: "110006",
            LABEL: "种类6"
          }
        ]
      },
      option3: {
        title: "未处理时间",
        res: [
          {
            VALUE: "",
            LABEL: "全部"
          },
          {
            VALUE: "0",
            LABEL: "0 - 12小时"
          },
          {
            VALUE: "1",
            LABEL: "12 - 24 小时"
          },
          {
            VALUE: "2",
            LABEL: "24 - 48 小时"
          },
          {
            VALUE: "3",
            LABEL: "48 - 96 小时"
          },
          {
            VALUE: "4",
            LABEL: "96 - 168小时"
          },
          {
            VALUE: "5",
            LABEL: "一周以上"
          }
        ]
      },
      obj: {
        class: "list1",
        res: []
      }
    };
  }
};
</script>

<style scoped>
.select {
  background-color: #f3f3f3;
  padding: 20px;
  box-sizing: border-box;
  clear: both;
  height: 270px;
}
.f_l {
  float: left;
  margin: 0 15px;
}
.m_t {
  margin-top: 30px;
}
.btn {
  width: 45%;
  box-sizing: border-box;
  border: 2px solid #1ab394;
  text-align: center;
  font-size: 20px;
  color: #898989;
  line-height: 42px;
  margin-top: 74px;
}
</style>
