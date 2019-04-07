import Vue from 'vue'
import Router from 'vue-router'
import statistics from '../components/statistics/statistics.vue'
import remind from '../components/remind/remind.vue'
import me from '../components/me/me.vue'
import scan from '../components/scan/scan.vue'
import scancode from '../components/scancode/scancode.vue'
import bluetooth from '../components/bluetooth/bluetooth.vue'
import home from '../components/home/home.vue'
import day from '../components/statistics/day/day.vue'
import month from '../components/statistics/month/month.vue'
import week from '../components/statistics/week/week.vue'
import processed from '../components/remind/processed/processed.vue'
import unprocessed from '../components/remind/unprocessed/unprocessed.vue'
// import orderdetail from '../components/orderdetail/orderdetail.vue'
import policedetail from '../components/policedetail/policedetail.vue'
import flow from '../components/flow/flow.vue'
import map from '../components/map/map.vue'
// import order from '../components/map/order/order.vue'
// import park from '../components/map/park/park.vue'
// import bike from '../components/map/bike/bike.vue'
// import hot from '../components/map/hot/hot.vue'
// import scatter from '../components/map/scatter/scatter.vue'
Vue.use(Router)

export default new Router({
  linkActiveClass: 'active',
  linkExactActiveClass: 'exact',
  routes: [
    {
      path: '/',
      redirect: '/me'
    },
    {
      path: '/statistics',
      name: 'statistics',
      component: statistics,
      children: [
        {
          path: '/statistics',
          redirect: '/statistics/day'
        },
        {
          path: '/statistics/day',
          name: 'day',
          component: day
        },
        {
          path: '/statistics/month',
          name: 'month',
          component: month
        },
        {
          path: '/statistics/week',
          name: 'week',
          component: week
        }
      ]
    },
    {
      path: '/remind',
      name: 'remind',
      component: remind,
      children: [
        {
          path: '/remind',
          redirect: '/remind/unprocessed'
        },
        {
          path: '/remind/unprocessed',
          name: 'unprocessed',
          component: unprocessed
        },
        {
          path: '/remind/processed',
          name: 'processed',
          component: processed
        }
      ]
    },
    {
      path: '/me',
      name: 'me',
      component: me
    },
    {
      path: '/scan',
      name: 'scan',
      component: scan
    },
    {
      path: '/scancode',
      name: 'scancode',
      component: scancode
    },
    {
      path: '/bluetooth',
      name: 'bluetooth',
      component: bluetooth
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/policedetail',
      name: 'policedetail',
      component: policedetail
    },
    {
      path: '/flow',
      name: 'flow',
      component: flow
    },
    {
      path: '/map',
      name: 'map',
      component: map
      // children: [
      //   {
      //     path: '/map',
      //     redirect: '/map/bike'
      //   },
      //   {
      //     path: '/map/order',
      //     name: 'order',
      //     component: order,
      //     children: [
      //       {
      //         path: '/map/order',
      //         redirect: '/map/order/hot'
      //       },
      //       {
      //         path: '/map/order/hot',
      //         name: 'hot',
      //         component: hot
      //       },
      //       {
      //         path: '/map/order/scatter',
      //         name: 'scatter',
      //         component: scatter
      //       }
      //     ]
      //   },
      //   {
      //     path: '/map/bike',
      //     name: 'bike',
      //     component: bike,
      //     children: [
      //       {
      //         path: '/map/bike',
      //         redirect: '/map/bike/hot'
      //       },
      //       {
      //         path: '/map/bike/hot',
      //         name: 'hot',
      //         component: hot
      //       },
      //       {
      //         path: '/map/bike/scatter',
      //         name: 'scatter',
      //         component: scatter
      //       }
      //     ]
      //   },
      //   {
      //     path: '/map/park',
      //     name: 'park',
      //     component: park,
      //     children: [
      //       {
      //         path: '/map/park',
      //         redirect: '/map/park/hot'
      //       },
      //       {
      //         path: '/map/park/hot',
      //         name: 'hot',
      //         component: hot
      //       },
      //       {
      //         path: '/map/park/scatter',
      //         name: 'scatter',
      //         component: scatter
      //       }
      //     ]
      //   }
      // ]
    }
  ]
})
