import styled from "styled-components";

const HeaderStyled = styled.header`
  min-height: 100px;
  height: 10vh;

  background: #a9d;

  border-bottom: 5px dotted #000;

  display: flex;
  justify-content: space-between;

  > div {
    margin: 1vh;
  }
`;

export default HeaderStyled;
