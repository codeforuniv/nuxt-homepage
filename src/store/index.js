import { vuexfireMutations } from 'vuexfire'

export const mutations = {
  ...vuexfireMutations
}

// export const state = () => ({
//   user: 'useraa', // ログインユーザー
//   todos: [] // ユーザーが登録したTODO一覧
// })

// export const mutations = {
//   setUser(state, { user }) {
//     state.user = user
//   }
// }
// export const actions = {
//   setUser({ commit }, { user }) {
//     commit('setUser', { user })
//   }
// }

// export const getters = {
//   user(state) {
//     return state.user
//   }
// }
