import styled from "styled-components";

const ModalContainerStyled = styled.div`
  .modal--container {
    position: absolute;
    z-index: 1;

    width: 0;
    height: 0;

    display: none;
    flex-direction: column;
    align-items: center;

    background: #abd;
    opacity: 95%;

    > h2 {
      font-weight: bold;
      font-size: 25px;
    }
  }

  .visible {
    display: flex;
    width: 100vw;
    min-height: 50vh;
    height: auto;
  }
`;
export default ModalContainerStyled;
