<template>
  <div class="list" :class="obj.class">
    <ul class="title">
      <li class="w2">类型</li>
      <li class="w3">处理类型</li>
      <li class="w3">处理地点</li>
      <li class="w3">处理时间</li>
      <li class="w1"></li>
    </ul>
    <router-link
      tag="ul"
      :to="{ path: '/policedetail', query: { id :item } }"
      v-for="(item, index) in obj.res"
      :key="index"
      class="res"
    >
      <li class="w2">{{item.JGD_NAME}}</li>
      <li class="w3">{{item.WARNINGTYPESTR}}</li>
      <li class="w3">{{item.OBJECT_NAME}}</li>
      <li class="w3">{{item.SEND_TIME}}</li>
      <li class="w1">>></li>
    </router-link>
  </div>
</template>
<script>
export default {
  props: {
    obj: {
      type: Object
    }
  }
};
</script>

<style scoped>
.list1 {
  position: absolute;
  top: 470px;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: auto;
}
.list2 {
  position: absolute;
  top: 420px;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: auto;
}
.title {
  margin: 10px 0 0 0;
  padding: 0 20px;
  width: 100%;
  height: 80px;
  line-height: 80px;
  box-sizing: border-box;
  border-bottom: 1px solid #ebedf0;
  box-sizing: border-box;
}
.title li {
  padding: 0 8px;
  float: left;
  text-align: center;
  color: #606060;
  font-size: 24px;
  font-weight: 800;
  overflow: hidden;
  box-sizing: border-box;
}
.res {
  margin: 15px 0;
  padding: 0 20px;
  width: 100%;
  height: 90px;
  text-align: center;
  line-height: 40px;
  box-sizing: border-box;
}
.res li {
  height: 85px;
  float: left;
  text-align: center;
  font-size: 24px;
  padding: 0 10px;
  word-break: break-all;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical; /** 设置或检索伸缩盒对象的子元素的排列方式 **/
  -webkit-line-clamp: 2; /** 显示的行数 **/
  overflow: hidden; /** 隐藏超出的内容 **/
  box-sizing: border-box;
}
.w1 {
  width: 8%;
  color: #1ab394;
}
.w2 {
  width: 19%;
  color: #606060;
}
.w3 {
  width: 24%;
  color: #606060;
}
</style>
