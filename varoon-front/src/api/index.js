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
            headers: {
                Accept: 'application/hal+json'
            },
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
    axios.defaults.headers.common['X-AUTH-TOKEN'] = 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJwcHAiLCJyb2xlcyI6IlJPTEVfUGF0aWVudCIsImlhdCI6MTU2OTkxOTQ4NCwiZXhwIjoxNTY5OTIzMDg0fQ.XVI-RVK4lXyF647V6EsJ92iqvQ0Dylj9ItJh44XhUwo';
    //TODO: 이부분에 변수로 토큰을 집어넣으면 undefined가 뜨는 오류를 해결해야함(token.token이 안됨)
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
    regist(regist) {
        return request('post', `/Home/Regist`, regist)
    }
}

export const medi = {
    pdchartDay() {
        /* 어떻게 쓰는지 모르겠어.... */
    },
    rangeChart() {
        return request('get', '/M')
    },
    trainingChart() {
        return request('get', '/MediBoard/TrainingChart')
    }

}

export const chart = {
    refer() {
        return request('get', `/Home/Chart`)
    },
    regist(id) {
        return request('post', `/Home/Chart`, id)
    }
}