<template>
  <div class="nav">
    <ul>
      <router-link tag='li' :to='home' class="border_r" @click.native="hclick"><i class="icon iconfont">&#xe66c;</i></router-link>
      <router-link tag='li' :to='statistics' class="border_r" @click.native="hclick"><i class="icon iconfont">&#xe64a;</i></router-link>
      <router-link tag='li' :to='remind' class="border_r" @click.native="hclick"><i class="icon iconfont">&#xe65a;</i></router-link>
      <router-link tag='li' :to='scan'><i class="icon iconfont">&#9744;</i></router-link>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      home: '/home',
      statistics: '/statistics',
      remind: '/remind',
      scan: '/scan'
    }
  },
  methods: {
    hclick () {
      var user = this.$store.state.user
      // console.log(user)
      if (user === '0') {
        alert('请登录！！！')
        this.$router.push({
          path: '/me'
        })
      }
      // 默认项赋值---end----
    }
  }
}
</script>

<style scoped>
.nav {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  line-height: 100px;
  background-color: #1c1c1c;
  border-top: 2px solid #1ab394;
}
.nav ul {
  width: 100%;
}
.nav ul li {
  float: left;
  width: 25%;
  text-align: center;
  box-sizing: border-box;
}
.icon {
  display: inline-block;
  color: #1ab394;
  font-size: 30px;
  text-align: center;
}
.border_r {
  border-right: 1px solid #1ab394;
}
.active {
  background-color: #ffffff;
}
</style>
