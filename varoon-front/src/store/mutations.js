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
    LOGIN(state, token) {
        if (!token) return
        state.token = token
        localStorage.setItem('token', token)
        setAuthInHeader(token)
    },
    LOGOUT(state) {
        state.token = null
        delete localStorage.token
        setAuthInHeader(null)
    },
}

export default mutations