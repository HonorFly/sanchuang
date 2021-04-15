import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    role:window.localStorage.getItem("role"),
    isLogin:window.localStorage.getItem("sc_userInfo")?true:false,
    isAdLogin:window.localStorage.getItem("sc_ad_userInfo")?true:false
  },
  mutations: {
    setRole (state, payload) {
      state.role = payload
    },
    setIsLogin(state,payload){
      state.isLogin = payload
    },
    setIsAdLogin(state,payload){
      state.isAdLogin = payload
    }
  },
  actions: {
  },
  modules: {
  }
})
