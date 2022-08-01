import styled from "styled-components";

const DiceCounterStyled = styled.li`
  display: flex;

  > div:nth-child(1) {
    flex: 1;
  }
  > div:nth-child(2) {
    flex: 2;
  }
`;

export default DiceCounterStyled;
