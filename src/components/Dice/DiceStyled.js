import styled from "styled-components";

const DiceStyled = styled.div`
  min-height: 40px;
  min-width: 40px;
  height: 25vw;
  width: 25vw;

  display: flex;
  justify-content: center;

  margin: 5px;

  > div {
    height: 100%;
    width: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background: grey;

    > span {
      height: 40px;
      width: 40px;

      font-size: 25px;
      font-weight: bold;

      text-align: center;
    }

    &.container--dice-4 {
      clip-path: polygon(50% 0%, 0% 90%, 100% 90%);

      padding-top: 5px;
    }
    &.container--dice-6 {
      clip-path: polygon(
        20% 10%,
        80% 10%,
        90% 20%,
        90% 80%,
        80% 90%,
        20% 90%,
        10% 80%,
        10% 20%
      );
    }
    &.container--dice-8 {
      clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
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
