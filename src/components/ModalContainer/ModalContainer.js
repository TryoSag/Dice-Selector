const ModalContainer = ({ children, modalState }) => {
  return (
    <div className={`modal--container  ${modalState ? "visible" : "hiden"}`}>
      {children}
    </div>
  );
};

export default ModalContainer;
