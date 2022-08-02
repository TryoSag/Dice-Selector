import styled from "styled-components";

const DiceCounterListStyled = styled.section`
  min-height: 100vh;
  min-width: 100vw;

  background: #a5ca5c;

  display: flex;
  flex-direction: column;

  > button {
    height: 30px;
    width: 100px;

    align-self: center;
    margin-bottom: 50px;

    border: 2px solid #000;
    border-radius: 10px;

    font-weight: bold;
    font-size: 25px;

    :hover {
      cursor: pointer;
    }
  }
`;

export default DiceCounterListStyled;
