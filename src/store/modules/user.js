// 导入cookie操作token方法
import { getToken, setToken } from '@/utils/auth'
import { Message } from 'element-ui'
// 导入api里面的登录方法
import { login } from '@/api/user'
export default {
  namespaced: true,
  // 状态
  state: {
    // 实现token状态共享
    token: getToken
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
  actions: {
    // context是当前store实例
    gologin(context, data) {
      // 登录成功保存token
      login(data).then(res => {
        const { message, data, success } = res.data
        if (success) {
          console.log('token:' + data)
          Message.success(message)
          // setToken(data)
          context.commit('saveToken', data)
        }
      })
    }
  }
}

