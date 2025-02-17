import React, { useEffect, useState } from "react";
import "./Final.css";

// RECIVIMOS GANADOR , SETJUEGO, SETTURNO

const Final = ({ ganador, setJuego, setTurno }) => {
  // CREAMOS UN ISOPEN PARA CONTROLAR LO QUE SE VE EN LA PANTALLA
  // INICIALMENTE SERA FALSO HASTA QUE HAYA UN GANADOR Y ENTONCES SE
  // REINICIA EL JUEGO AL HACER CLICK EN EL BOTON
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(true); // ABRE EL MODAL CUANDO EL COMPONENTE SE MONTA
  }, []);

  const reiniciar = () => {
    setIsOpen(false); // CIERRA EL MODAL
    setJuego([
      ["", "", ""],
      ["", "", ""],
      ["", "", ""],
    ]);
    setTurno("");
  };

  return (
    isOpen && (
      <div className="modal-overlay">
        <div className="modal-content">
          <h2>¡Ha ganado el jugador {ganador}!</h2>
          <button onClick={reiniciar}>Reiniciar juego</button>
        </div>
      </div>
    )
  );
};

export default Final;
