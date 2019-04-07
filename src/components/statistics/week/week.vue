<template>
  <div class="week">
    <slider :items="items"></slider>
    <list :lists="lists"></list>
  </div>
</template>

<script>
import slider from "../../slider/slider";
import list from "../../list/list";
export default {
  components: {
    slider,
    list
  },
  mounted() {
    this.$http
      .get(
        "https://www.easy-mock.com/mock/5b66b6051fc80e53a3ad6261/qwertyuiop_copy/week"
      )
      .then(res => {
        // console.log(res.data)
        this.lists.data = res.data.companyList;
        this.items[0].totalOrderKm = res.data.titleInfo.totalOrderKm;
        this.items[0].co2 = res.data.titleInfo.co2;
        this.items[0].tree = res.data.titleInfo.tree;
        this.items[0].heat = res.data.titleInfo.heat;
        this.items[0].hamburger = res.data.titleInfo.hamburger;
      });
  },
  methods: {},
  data() {
    return {
      items: [
        {
          totalOrderUnit: "数据总量(万)",
          totalOrderKm: 0,
          co2: 0,
          tree: 0,
          heat: 0,
          hamburger: 0
        }
      ],
      lists: {
        title: ["类型名称", "总数", "使用数量", "使用占比"],
        data: [
          {
            company_name: "ofo",
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
.bannar {
  width: 100%;
  line-height: 60px;
  height: 60px;
  padding: 0 30px;
  box-sizing: border-box;
  border-bottom: 1px solid #6f6e6e;
}
.bannar p {
  font-size: 30px;
  color: #6f6e6e;
  float: left;
}
.bannar i {
  display: block;
  float: right;
  font-size: 40px;
  text-align: center;
  color: #000000 !important;
}
</style>
