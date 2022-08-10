import styled from "styled-components";

const ModalContainerStyled = styled.div`
  .modal--container {
    position: absolute;
    z-index: 1;

    width: 100vw;
    min-height: 80vh;

    display: flex;
    flex-direction: column;
    align-items: center;

    background: #abd;
    opacity: 85%;

    > h2 {
      font-weight: bold;
      font-size: 25px;
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
  }

  .hidden {
    display: none;
    right: 100vw;
  }

  .visible {
    transition: left 3s;
  }
`;
export default ModalContainerStyled;
