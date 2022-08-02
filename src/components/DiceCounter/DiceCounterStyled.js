import styled from "styled-components";

const DiceCounterStyled = styled.li`
  min-height: 50px;

  display: flex;
  justify-content: center;
  align-items: center;

  margin-bottom: 10px;

  > div:nth-child(1) {
    flex: 1;

    height: 25vw;
    width: 25vw;
  }
  > div:nth-child(2) {
    flex: 2;
  }
`;

export default DiceCounterStyled;
