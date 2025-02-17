
import React from "react";

import "./Casilla.css";
import { comprobacion } from "../functions/comprobacion";


const Casilla = ({ id, juego, setJuego, turno, setTurno, dato, ganador, setGanador, mostrarMensaje }) => {
  
  const comprobar = () => {
    setGanador(comprobacion(juego, turno) && turno);
  };

  const jugar = () => {
    if (dato || ganador) {
      return;
    }

    if (!turno) {
      mostrarMensaje("Selecciona un jugador");
      return;
    }

    const juegoVar = [...juego];
    juegoVar[parseInt(id[0])][parseInt(id[1])] = turno;
    // const [fila, columna] = id.split("-").map(Number);
    // juegoVar[fila][columna] = turno;
    setJuego([...juegoVar]);

    comprobar();
    setTurno(turno === "X" ? "O" : "X");
  };

  return (
    <div className="casilla" id={id} onClick={jugar}>
      {dato}
    </div>
  );
};

export default Casilla;
