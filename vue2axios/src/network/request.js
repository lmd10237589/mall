import axios from 'axios'

// 最简便写法
export function request(config) {
  const instance = axios.create({
    baseURL:'http://152.136.185.210:7878/api/hy66',
    timeout:5000
  })

  // axios请求拦截器
  // instance.interceptors.request.use(config=>{
  //   console.log(config);
  //   return config
  // },err=>{
  //   console.log(err);
  // })

  // axios响应拦截器
  instance.interceptors.response.use(res=>{
    // console.log(res);
    return res.data
  },err=>{
    // console.log(err);
  })

   return instance(config)
}

// Promise写法
// export function request(config) {
//   return new Promise((resolve, reject) => {
//     const instance = axios.create({
//       baseURL:'http://152.136.185.210:7878/api/hy66',
//       timeout:5000
//     })
//     instance(config)
//     .then(res=>{
//       resolve(res)
//     }).catch(err=>{
//       reject(err)
//     })
//   })
// }

// 回调函数写法1
// export function request(config,success,failure) {
//   return new Promise((resolve, reject) => {
//     const instance = axios.create({
//       baseURL:'http://152.136.185.210:7878/api/hy66',
//       timeout:5000
//     })
//     instance(config)
//     .then(res=>{
//       success(res)
//     }).catch(err=>{
//       failure(err)
//     })
//   })
// }

// 回调函数写法2
// export function request(config) {
//   return new Promise((resolve, reject) => {
//     const instance = axios.create({
//       baseURL:'http://152.136.185.210:7878/api/hy66',
//       timeout:5000
//     })
//     instance(config.baseConfig)
//     .then(res=>{
//       config.success(res)
//     }).catch(err=>{
//       config.failure(err)
//     })
//   })
// }
