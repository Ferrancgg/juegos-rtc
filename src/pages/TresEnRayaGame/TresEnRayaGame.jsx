import { useState } from "react";
import "./TresEnRayaGame.css";
import { comprobarGanador } from "./functions/comprobacion";
import TableroGame from "./Tablero/TableroGame";
import InfoContainer from "./InfoContainer/InfoContainer";
import ContainerControllers from "./ContainerControllers/ContainerControllers";
import Button from "../../components/Button/Button";
// import Button from "../";

const TresEnRayaGame = () => {
  const [tablero, setTablero] = useState([
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ]);
  const [turno, setTurno] = useState(null);
  const [active, setActive] = useState(false);
  const [campeon, setCampeon] = useState(null);

  const handleReset = () => {
    setActive(false);
    setCampeon(null);
    setTurno(null);
    setTablero([
      [null, null, null],
      [null, null, null],
      [null, null, null],
    ]);
  };

  const handleCasilla = (fila, columna) => {
    if (campeon) return;

    const newTablero = tablero.map((fila) => [...fila]); // Copia profunda
    if (!newTablero[fila][columna]) {
      newTablero[fila][columna] = turno;
      setTablero(newTablero);

      const ganador = comprobarGanador(newTablero);
      if (ganador) {
        setCampeon(turno);
        alert(`¡${ganador} ha ganado!`);
        return;
      }

      setTurno(turno === "X" ? "O" : "X");
    }
  };

  return (
    <div className="game">
      {!active && <h2>Tres en Raya</h2>}

      <div className="container-information">
        
        {!active && (
          <p>
            Dos jugadores, por turnos, veremos quien es el mejor haciendo "tres
            en raya", ¡¡que gane el mejor!!
          </p>
        )}
        {active && <InfoContainer turno={turno} campeon={campeon} />}
        {!turno && active && <p>Toca elegir turno para empezar</p>}
      </div>
      {active && (
        <TableroGame tablero={tablero} handleCasilla={handleCasilla} />
      )}

      <div className="container-button-controller">
        {!active && <Button name="EMPEZAR" onClick={() => setActive(true)} />}

        {active && (
          <ContainerControllers handleReset={handleReset} setTurno={setTurno} />
        )}
      </div>
    </div>
  );
};

export default TresEnRayaGame;
