import ModalContainerStyled from "./ModalContainerStyled";

const ModalContainer = ({ children, modalState }) => {
  return (
    <ModalContainerStyled>
      <div className={`modal--container  ${modalState ? "visible" : "hidden"}`}>
        {children}
      </div>
    </ModalContainerStyled>
  );
};

export default ModalContainer;
