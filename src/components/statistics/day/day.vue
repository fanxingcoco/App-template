<template>
  <div>
    <div class="bannar">
      <p>数据分布情况</p>
    </div>
    <div class="chart" ref="mychart" v-if="this.ops"></div>
    <list :lists="lists"></list>
  </div>
</template>

<script>
import slider from "../../slider/slider";
import list from "../../list/list";
let echarts = require("echarts/lib/echarts");
require("echarts/lib/chart/pie");
require("echarts/lib/component/tooltip");
require("echarts/lib/component/title");
require("echarts/lib/component/legend");
export default {
  components: {
    slider,
    list
  },
  mounted() {
    this.setChart();
    this.$http
      .get(
        "https://www.easy-mock.com/mock/5b66b6051fc80e53a3ad6261/qwertyuiop_copy/day"
      )
      .then(res => {
        // console.log(res.data)
        this.lists.data = res.data.companyList;
        this.mychart.setOption({
          legend: {
            orient: "horizontal",
            x: "center",
            y: "5%"
          },
          color: [
            "#8fdece",
            "#dddddd",
            "#b1b5dc",
            "#89c4de",
            "#c0f0aa",
            "#ecf0b0",
            "#ebadad",
            "#f6d9a0",
            "#798ff2"
          ],
          series: {
            name: "访问来源",
            type: "pie",
            radius: ["45%", "65%"],
            center: ["50%", "62%"],
            avoidLabelOverlap: false,
            label: {
              normal: {
                show: false,
                position: "center"
              },
              emphasis: {
                show: true,
                textStyle: {
                  fontSize: "30",
                  fontWeight: "bold"
                }
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            data: res.data.pieData
          }
        });
      });
  },
  methods: {
    setChart() {
      let dom = this.$refs.mychart;
      this.mychart = echarts.init(dom);
      this.mychart.setOption(this.ops);
    }
  },
  data() {
    return {
      ops: {
        legend: {
          orient: "horizontal",
          x: "center",
          y: "5%"
        },
        color: [
          "#8fdece",
          "#dddddd",
          "#b1b5dc",
          "#89c4de",
          "#c0f0aa",
          "#ecf0b0",
          "#ebadad",
          "#f6d9a0"
        ],
        series: {
          name: "访问来源",
          type: "pie",
          radius: ["45%", "65%"],
          center: ["50%", "62%"],
          avoidLabelOverlap: false,
          label: {
            normal: {
              show: false,
              position: "center"
            },
            emphasis: {
              show: true,
              textStyle: {
                fontSize: "30",
                fontWeight: "bold"
              }
            }
          },
          labelLine: {
            normal: {
              show: false
            }
          },
          data: [
            {
              value: 100,
              name: "类型1"
            },
            {
              value: 100,
              name: "类型2"
            },
            {
              value: 100,
              name: "类型2"
            },
            {
              value: 100,
              name: "类型4"
            },
            {
              value: 100,
              name: "类型5"
            },
            {
              value: 100,
              name: "类型6"
            },
            {
              value: 100,
              name: "类型7"
            }
          ]
        }
      },
      lists: {
        title: ["类型名称", "总数", "使用数量", "使用占比"],
        data: [
          {
            company_name: "类型1",
            work_count: 0,
            active_count: 0,
            no_active_count: 0
          }
        ]
      }
    };
  }
};
</script>

<style scoped>
.chart {
  width: 100%;
  height: 500px;
}
.bannar {
  width: 100%;
  line-height: 60px;
  height: 60px;
  padding: 0 30px;
  box-sizing: border-box;
  border-top: 1px solid #1ab394;
  /* border-bottom: 1px solid #1ab394; */
  text-align: center;
}
.bannar p {
  font-size: 30px;
  color: #585858;
}
.bannar i {
  display: block;
  float: right;
  font-size: 40px;
  text-align: center;
  color: #000000 !important;
}
</style>
