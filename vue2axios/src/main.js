import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from "axios";

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')

// axios.defaults.baseURL = 'http://152.136.185.210:7878/api/hy66'
// axios.defaults.timeout = 5000

// axios基本请求
// axios({
//   url:'http://123.207.32.32:8000/home/multidata',
//   method:'get',
//   // method:'post',
// }).then(res=>{
//   console.log(res)
// })

// axios({
//   url:'/home/data',
//   method:'get',
//   params:{
//     type:'pop',
//     page:1
//   }
// }).then(res=>{
//   console.log(res)
// })

// axios并发请求
// axios.all([
//   axios({
//     url:'http://152.136.185.210:7878/api/hy66/home/multidata'
//   }),

//   axios({
//     url:'http://152.136.185.210:7878/api/hy66/home/data',
//     params:{
//       type:'pop',
//       page:1
//     }
//   }),
// ]).then(res=>{
//   console.log(res);
// })

// axios实例

// const instance = axios.create({
//   baseURL:'http://152.136.185.210:7878/api/hy66',
//   timeout:5000
// })

// instance({
//   url:'/home/multidata'
// }).then(res=>{
//   console.log(res)
// })

import { request } from "./network/request";

// Promise方法接收
request({url:'/home/multidata'})
.then(res=>{
  console.log(res);
}).catch(err=>{
  console.log(err);
})

// 回调函数接收方法1
// request({
//   url:'/home/multidata',
// },res=>{
//   console.log(res)
// },err=>{
//   console.log(err);
// })

// 回调函数接收方法2
// request({
//   baseConfig: {

//   },
//   success: function (res) {

//   },
//   failture: function (err) {

//   }
// })