<template>
  <div class="list" v-if="this.lists">
    <ul class="specail">
      <li v-for="(item, index) in lists.title" :class="index==0 ? 'w1':'w2'" :key="index">{{item}}</li>
    </ul>
    <ul v-for="(item, index) in lists.data" :key="index">
      <li class="w1">{{item.company_name}}</li>
      <li class="w2">{{item.work_count}}</li>
      <li class="w2">{{item.active_count}}</li>
      <li class="w2">{{Number(item.active_count/item.work_count*100).toFixed(2)}}%</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    lists: String,
    required: true
  }
};
</script>

<style scoped>
.w1 {
  width: 30%;
}
.w2 {
  width: 22%;
}
.list ul {
  width: 100%;
  height: 80px;
  line-height: 80px;
}
.list ul li {
  float: left;
  text-align: center;
  color: #666666;
  font-size: 26px;
  overflow: hidden;
}
.specail {
  background-color: #eeeeee;
  border-top: 1px solid #1ab394;
  border-bottom: 1px solid #1ab394;
}
</style>
