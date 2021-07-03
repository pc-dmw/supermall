import axios from "axios";

//直接将发送网络请求的结果返回
export function request(config) {

  //创建axios实例
  const instance = axios.create({
    baseURL: 'http://152.136.185.210:7878/api/m5',
    timeout: 5000
  })
  //axios拦截器
  // axios.interceptors  全局拦截器

  //请求拦截
  instance.interceptors.request.use(config => {
    //请求成功  拦截    对请求参数做处理
    // console.log(config);
    //处理完后将拦截结果返回
    return config
  }, err => {
    //请求失败
    // console.log(err);
  });

  //响应拦截
  instance.interceptors.response.use(res => {
    //响应成功   处理响应结果
    // console.log(res);
    //处理完后将响应结果返回
    return res.data
  }, err => {
    // 响应失败
    // console.log(err);
  })

  //发送网络请求   返回值为promise对象
  return instance(config)

}