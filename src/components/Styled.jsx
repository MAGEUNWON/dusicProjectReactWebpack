import styled, {css} from "styled-components";
// styled 받은 후에 색상값 등 일부를 임의대로 넣고 싶을 때는 {css} 추가하고 props를 활용하면 됨. 

const StyledButton = styled.button`
  background-color : red;
  font-size: 20px;
  padding: 0.25em 6em;
  border: solid 2px pink;
  cursor: pointer;
  border-radius: 5px;
  margin-bottom: 10px;  
  ${(props) =>
    props.primary &&
    css`
      background-color : white;
      color: black;
    `}
`;

export default StyledButton;