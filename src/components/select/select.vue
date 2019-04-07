<template>
<div class="con">
  <p class="title">{{option.title}}:</p>
  <div class="item">
    <p>{{title}}</p>
    <span class="icon_con" @click="handle"><i class="iconfont icon">&#xe61e;</i></span>
  </div>
  <ul v-if="selectShow" class="list">
    <li v-for="(item, index) in option.res" :key="index" @click="change(item, index)">
      {{item.LABEL}}
    </li>
  </ul>
</div>
</template>

<script>
export default {
  props: {
    option: {
      type: Object
    }
  },
  data () {
    return {
      title: this.option.res[0].LABEL,
      selectShow: false,
      titleVal: '我是子组件的数据'
    }
  },
  methods: {
    handle () {
      this.selectShow = !this.selectShow
    },
    change (item, index) {
      this.title = item.LABEL
      this.handle()
      // console.log(index)
      this.$emit('selectVal', item.VALUE)
    }
  }
}
</script>

<style scoped>
.con{
  width: 45%;
  position: relative;
}
.title {
  font-size: 22px;
  text-align: left;
  margin-bottom: 20px;
}
.item {
  width: 100%;
  position: relative;
  /* margin: 10px 0; */
}
.item p {
  width: 100%;
  line-height: 50px;
  padding: 0 18px;
  font-size: 20px;
  color: #9a9a9a;
  border: 1px solid #1ab394;
  box-sizing: border-box;
}
.icon_con {
  display: block;
  position: absolute;
  right: 0;
  top: 0;
  width: 50px;
  height: 52px;
  line-height: 52px;
  background-color: #1ab394;
  box-sizing: border-box;
}
.icon_con i{
  display: block;
  font-size: 20px;
  color: #ffffff;
  text-align: center;
  font-weight: 1000;
}
.list{
  position: absolute;
  z-index: 100;
  display: block;
  width: 100%;
  border: 1px solid #1ab394;
  background-color: #f3f3f3;
  box-sizing: border-box;
}
.list li{
  width: 100%;
  line-height: 50px;
  padding: 0 18px;
  font-size: 20px;
  color: #9a9a9a;
  box-sizing: border-box;
}
</style>
