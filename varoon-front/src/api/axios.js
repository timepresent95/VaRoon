import axios from "axios";
import router from '@/router'

const config = {baseURL: import.meta.env.BASE_URL};
const _axios = axios.create(config);

//TODO: 토큰 관리 로직 추가
_axios.interceptors.request.use(function (config) {
  return config;
})

//TODO: 에러 핸들링 로직 추가
_axios.interceptors.response.use(
  (response) => response,
  (error) => {
    router.push('/')
  }
)

export default _axios
