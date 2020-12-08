// 导入cookie操作token方法
import { getToken, setToken } from '@/utils/auth'
export default {
  namespaced: true,
  // 状态
  state: {
    token: ''
  },
  // 修改状态
  mutations: {
    // 登录成功的把token存进cookie,放进state
    saveToken(state, data) {
      state.token = data
      setToken(data)
    }
  },
  // 执行异步
  actions: {}
}

