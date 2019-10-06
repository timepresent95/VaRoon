import {
    setAuthInHeader
} from '../api'

const mutations = {
    CHANGE_LOGIN_COMPONENT(state, index) {
        state.loginComponent = index
    },
    CHANGE_MARKET_COMPONENT(state, index) {
        state.marketComponent = index
    },
    CHANGE_SELLING_COMPONENT(state, index) {
        state.sellingComponent = index
    },
    CHANGE_PATIENT_COMPONENT(state, index) {
        state.patientComponent = index
    },
    CHANGE_MANAGE_COMPONENT(state, index) {
        state.managerComponent = index
    },
    CHANGE_FIND_COMPONENT(state, index) {
        state.findComponent = index
    },
    LOGIN(state, data) {
        if (!data.token) return
        state.token = data.token
        state.name = data.name
        state.role = data.role
        localStorage.setItem('token', data.token)
        localStorage.setItem('name', data.name)
        localStorage.setItem('role', data.role)
        setAuthInHeader(data.token)
    },
    LOGOUT(state) {
        state.token = null
        state.name = null
        state.role = null
        delete localStorage.token
        delete localStorage.name
        delete localStorage.role
        setAuthInHeader(null)
    },
}

export default mutations