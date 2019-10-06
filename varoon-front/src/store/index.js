import Vue from 'vue'
import Vuex from 'vuex'

import state from './state.js'
import getters from './getters.js'
import mutations from './mutations.js'
import actions from './actions.js'

Vue.use(Vuex)

const store = new Vuex.Store({
    state,
    getters,
    mutations,
    actions
})

//새로고침했을 때 로그인 유지
const data = {
    token: localStorage.token,
    name: localStorage.name,
    role: localStorage.role
}
store.commit('LOGIN', data)
export default store