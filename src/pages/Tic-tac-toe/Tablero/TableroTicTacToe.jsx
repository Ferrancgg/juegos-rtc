import React, { useState } from "react";
import "./TableroTicTacToe.css";
import Final from "../Final/Final";
import Casilla from "../Casilla/Casilla";

const TableroTicTacToe = () => {
  const [juego, setJuego] = useState([
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ]);

  const [turno, setTurno] = useState(null);
  const [ganador, setGanador] = useState(null);
  const [mensaje, setMensaje] = useState(""); // Para mostrar mensajes

  const mostrarMensaje = (msg) => {
    setMensaje(msg);
    setTimeout(() => setMensaje(""), 3000); // Borra el mensaje después de 3 segundos
  };

  return (
    <div className="juego-container">
      {mensaje && <p className="mensaje">{mensaje}</p>} {/* Mensaje simple en pantalla */}

      {ganador && <Final ganador={ganador} setJuego={setJuego} setTurno={setTurno} />}
      {turno && <h2>Le toca a: {turno}</h2>}

      <div className="tablero">
        {juego.map((fila, indexFila) =>
          fila.map((celda, indexCelda) => (
            <Casilla
              key={`${indexFila}${indexCelda}`}
              id={`${indexFila}${indexCelda}`}
              juego={juego}
              setTurno={setTurno}
              turno={turno}
              setJuego={setJuego}
              dato={celda}
              ganador={ganador}
              setGanador={setGanador}
              mostrarMensaje={mostrarMensaje} // Pasamos la función para mostrar el mensaje
            />
          ))
        )}
      </div>

      {!turno && (
        <div className="seleccion-turno">
          <h2>Selecciona quién quiere empezar</h2>
          <button onClick={() => setTurno("X")}>Jugador X</button>
          <button onClick={() => setTurno("O")}>Jugador O</button>
        </div>
      )}
    </div>
  );
};

export default TableroTicTacToe;
