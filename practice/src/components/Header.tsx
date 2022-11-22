import styled from "styled-components"

const HeaderSet = styled.header`
  width: 100%;
  heigth: 127px;
  border: 1px solid black;
`;

const Header = ()=>{
  return (
    <>
      <HeaderSet>
        <h2>This is header</h2>
      </HeaderSet>
    </>
  );
};

export default Header