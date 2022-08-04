import styled from "styled-components";

const DecorDiceStyled = styled.div`
  min-height: 60px;
  min-width: 60px;
  height: 6vh;
  width: 6vh;

  .dice {
    height: 100%;
    width: 100%;

    background: #fff;

    border: 2px solid #000;
    border-radius: 5px;

    padding: 10%;
  }

  .dot {
    min-height: 10px;
    min-width: 10px;
    height: 1vh;
    width: 1vh;

    border-radius: 100px;

    background: #000;

    position: relative;
  }

  .dot-one {
    top: 40%;
    left: 40%;
  }

  .dot-two {
    top: -15%;
    left: 10%;
  }

  .dot-three {
    top: 30%;
    left: 70%;
  }

  .dot-four {
    top: -60%;
    left: 70%;
  }

  .dot-five {
    top: -18%;
    left: 10%;
  }

  .dot-six {
    top: -75%;
    left: 10%;
  }

  .side-one {
    .dot-two,
    .dot-three,
    .dot-four,
    .dot-five,
    .dot-six {
      visibility: hidden;
    }
  }

  .side-two {
    .dot-one,
    .dot-four,
    .dot-five,
    .dot-six {
      visibility: hidden;
    }
  }

  .side-three {
    .dot-four,
    .dot-five,
    .dot-six {
      visibility: hidden;
    }
  }

  .side-four {
    .dot-one,
    .dot-six {
      visibility: hidden;
    }
  }

  .side-five {
    .dot-six {
      visibility: hidden;
    }
  }

  .side-six {
    .dot-one {
      left: 70%;
    }
  }
`;

export default DecorDiceStyled;
