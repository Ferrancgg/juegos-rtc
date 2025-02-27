import { Route, Routes } from "react-router-dom";

import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Home from "./pages/Home/Home";
import Sudoku from "./pages/Sudoku/Sudoku";
import TresEnRayaGame from "./pages/TresEnRayaGame/TresEnRayaGame";
import JuegoAhorcado from "./pages/Ahorcado/JuegoAhorcado/JuegoAhorcado";

const App = () => {
  return (
    <>
      <Header />

      <Main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sudoku" element={<Sudoku />} />
          <Route path="/tres_en_raya" element={<TresEnRayaGame />} />
          <Route path="/ahorcado" element={<JuegoAhorcado />} />
        </Routes>
      </Main>
      <Footer />
    </>
  );
};

export default App;
