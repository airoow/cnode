import Vue from 'vue'
import Vuex from 'vuex'
import { testAccesstoken, getUserDetails } from '@/api/user'
import { getMessageCount } from '@/api/message'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    accesstoken: '',
    loginname: '',
    id: '',
    avatar_url: '',
    islogin: false,
    score: '',
    unread: null
  },
  mutations: {
    SET_TOKEN: (state, accesstoken) => {
      state.accesstoken = accesstoken
    },
    SET_NAME: (state, loginname) => {
      state.loginname = loginname
    },
    SET_ID: (state, id) => {
      state.id = id
    },
    SET_AVATAR: (state, avatar_url) => {
      state.avatar_url = avatar_url
    },
    SET_LONGIN_STATUS: state => {
      state.islogin = !state.islogin
    },
    SET_SCORE: (state, score) => {
      state.score = score
    },
    SET_UNREAD: (state, data) => {
      state.unread = data
    }
  },
  actions: {
    login({commit, state}, token) {
      return new Promise((resolve, reject) => {
        testAccesstoken(token).then(async response => {
          const { data } = response
          await commit('SET_NAME', data.loginname)
          commit('SET_ID', data.id)
          commit('SET_AVATAR', data.avatar_url)
          await commit('SET_TOKEN', token)
          commit('SET_LONGIN_STATUS')
          getUserDetails(state.loginname).then(response => {
            commit('SET_SCORE', response.data.data.score)
          })
          getMessageCount(state.accesstoken).then(response => {
            commit('SET_UNREAD', response.data.data)
          })
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },
  }
})