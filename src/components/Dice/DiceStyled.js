import styled from "styled-components";

const DiceStyled = styled.div`
  min-height: 40px;
  min-width: 40px;

  display: flex;
  justify-content: center;

  margin: 10px;

  > div {
    height: 100%;
    width: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background: grey;

    > span {
      font-size: 25px;
      font-weight: bold;

      text-align: center;
    }

    &.container--dice-4 {
      clip-path: polygon(
        55% 2%,
        52% 0%,
        48% 0%,
        45% 2%,
        2% 85%,
        0% 89%,
        0% 92%,
        2% 95%,
        98% 95%,
        100% 92%,
        100% 89%,
        98% 85%
      );

      padding-top: 5px;
    }
    &.container--dice-6 {
      clip-path: polygon(
        20% 10%,
        80% 10%,
        84% 11%,
        89% 16%,
        90% 20%,
        90% 80%,
        89% 84%,
        84% 89%,
        80% 90%,
        20% 90%,
        16% 89%,
        11% 84%,
        10% 80%,
        10% 20%,
        11% 16%,
        16% 11%
      );
    }
    &.container--dice-8 {
      clip-path: polygon(
        45% 2%,
        49% 0%,
        51% 0%,
        55% 2%,
        98% 45%,
        100% 49%,
        100% 51%,
        98% 55%,
        55% 98%,
        51% 100%,
        49% 100%,
        45% 98%,
        2% 55%,
        0% 51%,
        0% 49%,
        2% 45%
      );
    }
    &.container--dice-10 {
      clip-path: polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%);

      padding-top: 5px;
    }
    &.container--dice-20 {
      clip-path: polygon(
        50% 0%,
        80% 10%,
        100% 35%,
        100% 70%,
        80% 90%,
        50% 100%,
        20% 90%,
        0% 70%,
        0% 35%,
        20% 10%
      );
    }
  }
`;

export default DiceStyled;
