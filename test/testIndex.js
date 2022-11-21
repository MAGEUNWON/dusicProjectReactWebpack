import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


ReactDOM.render(<App />, document.getElementById('root'));
//ReactDOM.render(element, container[, callback]) 공식문서에 나온 함수

// 리액트는 순수 자바스크립트 컴포넌트를 만들어 브라우저 구성
// 브라우저는 css, html, 순수 js만 이해함. 하지만 리액트는 순수 js문법과 다름. 이렇게 다른 부분은 babel을 통해 순수 js로 변환되어야 이해할 수 있음. 그런데 바벨을 Package.json 안에서 찾을 수 없음. 그 이유는 yarn.lock에 있는 패키지 잠금파일임. 그리고 난 후 html과 연결하는 작업이 필요. 그 작업을 react-dom이 함. 

//react-dom 라이브러리에서 ReactDom을 사용해 render라는 함수를 실행함.
//element에 리엑트 태그를 사용하여 App태그가 있고 container 부분에 id가 root인 것을 가르킴(public의 index.html에 있는 root임). 이렇게 연결된 곳에 내가 만든 컴포넌트들이 보여질 것. 
//이 곳이 가장 최상위 컴포넌트이고 DOM인 트리 구조로 되어 있음. 
//원래 DOM은 문서 객체 모델로써 <html>, <body>, <div> 등이 문서 객체임. 하지만 <App />과 같은 태그는 일반 js에서 볼 수 없는 문서 객체. 그래서 가상의 DOM을 이용하여 컴포넌트들을 실제 브라우저가 이해할 수 있도록 실제 HTML DOM에 연결할 수 있도록 함. 