import { createRouter, createWebHistory } from 'vue-router'
//import HomeView from '../views/HomeView.vue'
import JobDetailsVue from '@/views/JobDetails.vue'
import JobDetailsComp from '../components/JobComp.vue'
//import CustomerDetails from '../views/CustomerDetails.vue'
//import JobData from '../views/JobData.vue'

const routes = [
  {
    path: '/',
    name: 'jobdetail',
    component:  JobDetailsVue 
  },
  {
    path: '/jobdetailcomp',
    name: 'jobdetailcomp',
    component:  JobDetailsComp
  },
  {
    path: '/jobdata/:id',
    name: 'JobData',
    component: () => import('../views/JobData.vue'),
    props: true
  },
  {
    path: '/customer/:customerName',
    name: 'customerdetails',
    component: () => import('../views/CustomerDetails.vue'),
    props: true
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    //component: () => import('../views/About.vue')
    // This lazy loading is being done through Webpack’s code splitting feature.
    // Under the hood Vue uses Webpack as a bundler.
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
