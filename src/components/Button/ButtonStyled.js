import styled from "styled-components";

const ButtonStyled = styled.button`
  height: 30px;
  min-width: 100px;
  width: fit-content;

  align-self: center;
  margin-bottom: 50px;

  border: 2px solid #000;
  border-radius: 10px;
  padding: 0 5px;

  font-weight: bold;
  font-size: 25px;

  :hover {
    cursor: pointer;
  }
`;

export default ButtonStyled;
