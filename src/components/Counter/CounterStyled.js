import styled from "styled-components";

const CounterStyled = styled.div`
  height: 100%;
  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: center;

  > span {
    font-size: 35px;
    font-weight: bold;

    margin: 0 15%;
  }

  > button {
    margin: 0 15%;
  }
`;

export default CounterStyled;
