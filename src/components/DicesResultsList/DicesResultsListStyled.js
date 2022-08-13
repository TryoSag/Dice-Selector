import styled from "styled-components";

const DicesResultsListStyled = styled.section`
  min-height: 100vh;
  min-width: 100vw;

  background: #ad9;

  display: flex;
  flex-direction: column;

  .list--dices {
    margin-bottom: 20px;

    border-bottom: 2px dotted #000;
  }

  .list--dices-sides {
    margin: 0 auto 0 10px;
  }

  .list--dice-results {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    margin-bottom: 10px;

    > li > div {
      height: 25vw;
      width: 25vw;
    }
  }
`;

export default DicesResultsListStyled;
