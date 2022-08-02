import styled from "styled-components";

const DicesResultsListStyled = styled.section`
  min-height: 100vh;
  min-width: 100vw;

  background: #ad9;

  display: flex;
  flex-direction: column;

  * ul {
    margin-bottom: 10px;
  }

  .list--dice-results {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    margin: 10px 10px;
    padding-bottom: 5px;

    border-bottom: 2px dotted #000;

    > li > div {
      height: 25vw;
      width: 25vw;
    }
  }

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

export default DicesResultsListStyled;
