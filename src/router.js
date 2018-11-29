import Vue from 'vue'
import Router from 'vue-router'
import Profile from './views/Profile.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'profile',
      component: Profile
    },
    {
      path: '/calories',
      name: 'calories',
      component: () => import(/* webpackChunkName: "about" */ './views/Calories.vue')
    },
    {
      path: '/workouts',
      name: 'workouts',
      component: () => import(/* webpackChunkName: "about" */ './views/Workouts.vue')
    }
  ]
})
