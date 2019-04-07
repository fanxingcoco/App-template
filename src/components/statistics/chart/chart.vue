<template>
<div class="chart" ref="mychart" v-if="this.ops">
</div>
</template>

<script>
let echarts = require('echarts/lib/echarts')
require('echarts/lib/chart/pie')
require('echarts/lib/component/tooltip')
require('echarts/lib/component/title')
require('echarts/lib/component/legend')
export default {
  props: {
    ops: {
      type: Object
    }
  },
  mounted () {
    this.setChart()
  },
  methods: {
    setChart () {
      let dom = this.$refs.mychart
      this.mychart = echarts.init(dom)
      this.mychart.setOption(this.ops)
    }
  }
}
</script>

<style scoped>
.chart{
  width: 100%;
  height: 500px;
}
</style>
