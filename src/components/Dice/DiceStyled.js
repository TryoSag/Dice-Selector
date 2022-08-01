import styled from "styled-components";

const DiceStyled = styled.div`
  height: 100%;
  width: 100%;

  div {
    background: grey;

    > span {
      font-size: 25px;
      font-weight: bold;
    }

    &.container--dice-4 {
      clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
    }
    &.container--dice-6 {
      clip-path: polygon(
        10% 0%,
        90% 0%,
        100% 10%,
        100% 90%,
        90% 100%,
        10% 100%,
        0% 90%,
        0% 10%
      );
    }
    &.container--dice-8 {
      clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
    }
    &.container--dice-10 {
      clip-path: polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%);
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
