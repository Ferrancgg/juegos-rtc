import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Home from "./pages/Home/Home";
import Sudoku from "./pages/Sudoku/Sudoku";


// import TableroTicTacToe from "./pages/Tic-tac-toe/Tablero/TableroTicTacToe";
// import GameTresEnRaya from "./pages/TresEnRaya/Game/GameTresEnRaya"
import TresEnRayaGame from "./pages/TresEnRayaGame/TresEnRayaGame";
import JuegoAhorcado from "./pages/Ahorcado/JuegoAhorcado/JuegoAhorcado";
// import Sudoku from './pages/Sudoku/Sudoku'

function App() {
  return (
    <>
      <Header />
      
      <Main>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/sudoku" element={<Sudoku/>}/>
          <Route path="/tres_en_raya" element={<TresEnRayaGame/>}/>
          <Route path="/ahorcado" element={<JuegoAhorcado/>}/>

        </Routes>
  
        {/* <JuegoAhorcado /> */}
        {/* <TableroTicTacToe/>
         */}
        {/* <TresEnRayaGame/> */}
      {/* <GameTresEnRaya/> */}
      </Main>
      <Footer />
    </>
  );
}

export default App;
