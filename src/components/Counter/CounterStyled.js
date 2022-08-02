import styled from "styled-components";

const CounterStyled = styled.div`
  height: 100%;
  width: 100%;

  display: flex;
  justify-content: space-evenly;
  align-items: center;

  > .text--number {
    font-size: 35px;
    font-weight: bold;
  }

  > button {
    height: 35px;
    width: 35px;

    border: 0;

    :hover {
      cursor: pointer;
    }

    &.button--minus {
      clip-path: polygon(
        25% 30%,
        75% 30%,
        95% 33%,
        100% 50%,
        95% 67%,
        75% 70%,
        25% 70%,
        5% 67%,
        0% 50%,
        5% 33%
      );
    }

    &.button--plus {
      clip-path: polygon(
        25% 30%,
        30% 30%,
        30% 25%,
        33% 5%,
        50% 0%,
        67% 5%,
        70% 25%,
        70% 30%,
        75% 30%,
        95% 33%,
        100% 50%,
        95% 67%,
        75% 70%,
        70% 70%,
        70% 75%,
        67% 95%,
        50% 100%,
        33% 95%,
        30% 75%,
        30% 70%,
        25% 70%,
        5% 67%,
        0% 50%,
        5% 33%
      );
    }
  }
`;

export default CounterStyled;
