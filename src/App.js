import { useSelector } from "react-redux";
import { Routes, Route, Navigate } from "react-router-dom";
import DicesCounterList from "./components/DicesCounterList/DicesCounterList";
import DicesHistoricalList from "./components/DicesHistoricalList/DicesHistoricalList";
import DicesResultsList from "./components/DicesResultsList/DicesResultsList";
import Header from "./components/Header/Header";
import ModalContainer from "./components/ModalContainer/ModalContainer";

function App() {
  const { historical } = useSelector((state) => state.ui);

  return (
    <>
      <Header />
      <ModalContainer modalState={historical}>
        <DicesHistoricalList />
      </ModalContainer>
      <Routes>
        <Route path="/" element={<Navigate to="/dicesCounter" />} />
        <Route path="/*" element={<Navigate to="/dicesCounter" />} />
        <Route path="/dicesCounter" element={<DicesCounterList />} />
        <Route path="/dicesResults" element={<DicesResultsList />} />
      </Routes>
    </>
  );
}

export default App;
