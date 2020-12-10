const getters = {
  sidebar: state => state.app.sidebar,
  device: state => state.app.device,
  // 将token当作公共访问属性导出
  // token(state) {
  //   return state.user.token
  // }
  token: state => state.user.token
}
export default getters
