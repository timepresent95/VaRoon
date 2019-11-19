import axios from 'axios'
import router from '../router'

const DOMAIN = 'http://15.164.220.109/Api' //서버
const UNAUTHORIZED = 403 // 로그인 인증 실패
const onUnauthorized = () => {
    router.push(`/loginManager?rPath=${encodeURIComponent(location.pathname)}`)
}
const request = (method, url, data) => {
    return axios({
            method,
            url: DOMAIN + url,
            data
        }).then(result => result.data)
        .catch(result => {
            const {
                status
            } = result.response
            if (status === UNAUTHORIZED) onUnauthorized()
            throw result.response
        })
}

export const setAuthInHeader = token => {
    axios.defaults.headers.common['Accept'] = 'application/json'
    axios.defaults.headers.common['X-AUTH-TOKEN'] = token ? `${token}` : null
}

export const auth = {
    login(id, pw) {
        return request('post', '/Home/Login', {
            id,
            pw
        })
    },
}

export const regist = {
    checkDuplicate(id) {
        return request('get', `/Home/Regist/${id}`)
    },
    registIt(regist) {
        return request('post', `/Home/Regist`, regist)
    }
}

export const medi = {
    pdchart() {
        return request('get', '/MediBoard/PDChart')
    },
    rangeChart() {
        return request('get', '/MediBoard/RangeChart')
    },
    focusChart() {
        return request('get', '/MediBoard/FocusChart')
    },
    trainingChart() {
        return request('get', '/MediBoard/TrainingChart')
    }

}

export const chart = {
    refer() {
        return request('get', `/Chart`)
    },
    regist(id) {
        return request('post', `/Chart?id=${id}`, )
    },
    patientChart(id) {
        return request('get', `/Chart/${id}`)
    },
    patientChartUpdate({
        id,
        prescription
    }) {
        return request('post', `/Chart/${id}`, prescription)
    }
}