<template>
  <div id="app">
    <router-view class="view"/>
    <Nav></Nav>
  </div>
</template>

<script>
import Nav from './components/navigation/Navigation'
export default {
  name: 'App',
  components: {
    Nav
  }
}
</script>

<style>
.view{
  position: absolute;
  top:0;
  left:0;
  right:0;
  bottom: 100px;
}
</style>
