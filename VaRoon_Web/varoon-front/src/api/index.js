import axios from 'axios'
import router from '../router'

const DOMAIN = 'http://localhost:3000' //서버
const UNAUTHORIZED = 401 // 로그인 인증 실패
const onUnauthorized = () => {
    //로그인 실패 페이지 이동
}

const request = (method, url, data) => {
    return axios({
            method,
            url: DOMAIN + url,
            data
        }).then(result => result.data)
        .catch(result => {
            const { status } = result.response
            if (status === UNAUTHORIZED) onUnauthorized()
            throw result.response
        })
}

// api 호출 할것들 아래쪽에 적을것 (export const 로)