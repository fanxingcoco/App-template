<template>
  <div class="header">
    {{title}}
    <slot></slot>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: '监测'
    }
  }
}
</script>
<style scoped>
.header{
  text-align: center;
  line-height: 100px;
  font-size: 30px;
  color: #333333;
}
</style>
