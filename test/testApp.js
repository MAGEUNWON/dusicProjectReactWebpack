import React, { Fragment } from "react";
import Hello from "./components/Hello";
import Hi from "./components/Hi";
// import Styled from "./components/Styled";
import styled from "styled-components";

const Body = ({title, desc}) => {
  return (
    <>
    <p>제목 : {title}</p>
    <p>내용 : {desc}</p>
    </>
  )
};

const StyledMyButton = styled.button`
  background-color : red;
  color: ${(props) => props.color || "blue"};
  font-size: 20px;
  padding: 0.25em 6em;
  border: solid 2px ${(props) => props.color || "blue"};
  cursor: pointer;
  border-radius: 5px;
  margin-bottom: 10px;  
  :hover {
    border: solid 3px red;
  }
  ::before {
    content: "22";
  }
`;


function App() {
  return (
    <>

    <div className="App">
      Hello World!
      <Hello />
      <Hi />
      <Body title= "제목입니다." desc="설명입니다." />  
    </div>

    <StyledMyButton color = "pink">
        버튼
    </StyledMyButton>

    </>
    
  );
}

export default App;

// App.js 에서 작성한 것은 index.html의 <div id = "root"></div>로 들어감
//이 역할을 해주는 것이 index.js임