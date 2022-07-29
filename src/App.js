import { Routes, Route, Navigate } from "react-router-dom";
import DicesCounterList from "./components/DicesCounterList/DicesCounterList";
import DicesResultsList from "./components/DicesResultsList/DicesResultsList";
import Header from "./components/Header/Header";

function App() {
  return (
    <>
      <Header />
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
