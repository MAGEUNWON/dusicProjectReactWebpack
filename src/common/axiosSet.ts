// 얘도 cors에러나서 설정 해준 것. backend 서버인 localhost 5000에 있는 api 자료를 axios로 가져오라고 설정 해준 것. 

import axios from "axios";

const axiosSet = axios.create({
  baseURL: 'http://localhost:5000',
  headers: {
    'Content-Type' : 'application/json',
  },
  withCredentials: true,
});

export default axiosSet;