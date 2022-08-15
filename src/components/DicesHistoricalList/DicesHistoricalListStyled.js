import styled from "styled-components";

const DicesHistoricalListStyled = styled.section`
  display: flex;
  flex-direction: column;

  > h2 {
    text-align: center;
  }

  .list--dices {
    min-width: 80vw;

    border-bottom: 2px dotted #000;

    > li {
      display: flex;
      align-items: flex-start;

      > h3 {
        min-width: 60px;
        min-height: 60px;

        margin: 0;
        padding-top: 15px;

        text-align: center;
        font-size: 20px;
      }
    }
  }

  .list--dice-results {
    display: flex;
    flex-wrap: wrap;
  }
`;

export default DicesHistoricalListStyled;
