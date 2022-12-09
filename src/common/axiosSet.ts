// 얘도 cors에러나서 설정 해준 것. backend 서버인 localhost 5000에 있는 api 자료를 axios로 가져오라고 설정 해준 것. 

import axios from "axios";
//React에서 OpenAPI를 이용한 통신을 할 때 Acios를 주로 사용
//웹 브라우저와 Node.js를 위한 HTTP 비동기통신 라이브러리
//백엔드와 프론트엔드 간 통신을 쉽게 하기 위해 사용되는 것으로 Ajax처럼 사용
//Fetch와 Acios 둘 다 HTTP 요청을 처리하기 위한 자바스크립트 라이브러리
//Fetch는 js에 내장되어 있기 때문에 별도의 import나 설치가 필요하지 않음. Acios는 설치 과정 필요 
//Axios가 Fetch보다 브라우저 호환성이 좋음. Fetch에서 지원하지 않는 JSON 자동 변환, 응답시간 초과 설정 기능 등을 Axios에서 지원해줌. 


//axiosSet이라는 인스턴스 생성. 전역적으로 사용할 수 있음. 
const axiosSet = axios.create({
  baseURL: 'http://localhost:5000',
  // headers: {
  //   'Content-Type' : 'application/json',
  // }, 
  withCredentials: true,
});

export default axiosSet; //axios 인스턴스를 내보냄. 
//중간에 다른 URL로 요청해야 하는 경우 axios.create를 통해 커스텀 객체를 만들어 사용할 수 있음. 
//미리 url 설정된 상태로 만들어 놓고 이 인스터스를 가져와서 쓰면 됨. axiosSet 객체를 통한 axios 요청은 언제나 저 baseURL이 붙게되며 다른 요청과 구별할 수 있음. 