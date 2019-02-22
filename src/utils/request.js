import axios from "axios";
// create an axios instance
// 创建一个axios实例
const service = axios.create({
  baseURL: process.env.BASE_API, // api 的 base_url
  timeout: 5000 // 设置超时时间
})
// 由于前面已经创建了实例，此时的拦截器就使用前面的自定义实例名称即可
// 此处为响应拦截器，可以在then和catch之前对数据进行处理
service.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  return response.data;
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error);
});
// 此处为请求发送拦截器，可以在数据发送之前对数据进行操作，比如使用qs等工具进行序列化操作等
service.interceptors.request.use(function (config) {
  // 如若不清楚可在控制台查看此输出
  console.log(config)
  // 此输出可查看到当前处于什么环境下，一般用于调整配置
  console.log(process.env)
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});
export default service
