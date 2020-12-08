// 导入一个axios实例
import axios from 'axios'
const service = axios.create() // 创建一个axios实例
service.interceptors.request.use() // 请求拦截
service.interceptors.response.use()// 响应拦截
export default service // 导出实例
