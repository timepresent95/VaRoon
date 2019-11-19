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
    CHANGE_MY_COMPONENT(state, index) {
        state.mypageComponent = index
    },
    LOGIN(state, data) {
        if (!data.token) return
        state.token = data.token
        state.name = data.name
        state.role = data.role
        state.id = data.id
        localStorage.setItem('token', data.token)
        localStorage.setItem('name', data.name)
        localStorage.setItem('role', data.role)
        localStorage.setItem('id', data.id)
        setAuthInHeader(data.token)
    },
    LOGOUT(state) {
        state.token = null
        state.name = null
        state.role = null
        state.id = null
        delete localStorage.token
        delete localStorage.name
        delete localStorage.role
        delete localStorage.id
        setAuthInHeader(null)
    },
    CHANGE_PRESCRIPTION(state, input) {
        state.DocPrescription = input
    },
    CHANGE_DOCLIST(state, input) {
        state.Docpdlist = input
    },
    CHANGE_DOCRANGE(state, input) {
        state.DocrangesList = input
    },
    CHANGE_DOCPLAY(state, input) {
        state.DocplayLogs = input
    }
}

export default mutations