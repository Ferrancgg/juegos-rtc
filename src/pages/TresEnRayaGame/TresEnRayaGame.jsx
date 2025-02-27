// import { useState } from "react";
// import "./TresEnRayaGame.css";
// import { comprobarGanador } from "./functions/comprobacion";
// import TableroGame from "./Tablero/TableroGame";
// import InfoContainer from "./InfoContainer/InfoContainer";
// import ContainerControllers from "./ContainerControllers/ContainerControllers";
// import Button from "../../components/Button/Button";
// import { tableroInicial } from "./tableroInicial";

// // import Button from "../";


// const TresEnRayaGame = () => {
//   const [tablero, setTablero] = useState(tableroInicial);
//   const [turno, setTurno] = useState(null);
//   const [active, setActive] = useState(false);
//   const [campeon, setCampeon] = useState(null);

//   const handleReset = () => {
//     setActive(false);
//     setCampeon(null);
//     setTurno(null);
//     setTablero(tableroInicial);
//   };

//   // const handleCasilla = (fila, columna) => {
//   //   if (campeon) return;

//   //   const newTablero = tablero.map((fila) => [...fila]); // Copia profunda
//   //   if (!newTablero[fila][columna]) {
//   //     newTablero[fila][columna] = turno;
//   //     setTablero(newTablero);

//   //     const ganador = comprobarGanador(newTablero);
//   //     if (ganador) {
//   //       setCampeon(turno);
//   //       alert(`¡${ganador} ha ganado!`);
//   //       return;
//   //     }

//   //     setTurno(turno === "X" ? "O" : "X");
//   //   }
//   // };

//   const handleCasilla = (fila, columna) => {
//     if (campeon) return;
  
//     const newTablero = tablero.map((fila) => [...fila]); // Copia profunda
//     if (!newTablero[fila][columna]) {
//       newTablero[fila][columna] = turno;
//       setTablero(newTablero);
  
//       const resultado = comprobarGanador(newTablero);
//       if (resultado) {
//         setCampeon(resultado);
//         if (resultado === "Empate") {
//           alert("¡Es un empate!");
//         } else {
//           alert(`¡${resultado} ha ganado!`);
//         }
//         return;
//       }
  
//       setTurno(turno === "X" ? "O" : "X");
//     }
//   };

//   return (
//     <div className="game">
//       {!active && <h2>Tres en Raya</h2>}

//       <div className="container-information">
        
//         {!active && (
//           <p>
//             Dos jugadores, por turnos, veremos quien es el mejor haciendo "tres
//             en raya", ¡¡que gane el mejor!!
//           </p>
//         )}
//         {active && <InfoContainer turno={turno} campeon={campeon} />}
//         {!turno && active && <p>Toca elegir turno para empezar</p>}
//       </div>
//       {active && (
//         <TableroGame tablero={tablero} handleCasilla={handleCasilla} />
//       )}

//       <div className="container-button-controller">
//         {!active && <Button name="EMPEZAR" onClick={() => setActive(true)} />}

//         {active && (
//           <ContainerControllers handleReset={handleReset} setTurno={setTurno} />
//         )}
//       </div>
//     </div>
//   );
// };

// export default TresEnRayaGame;

import { useState, useEffect } from "react";
import "./TresEnRayaGame.css";
import { comprobarGanador } from "./functions/comprobacion";
import TableroGame from "./Tablero/TableroGame";
import InfoContainer from "./InfoContainer/InfoContainer";
import ContainerControllers from "./ContainerControllers/ContainerControllers";
import Button from "../../components/Button/Button";
import { tableroInicial } from "./tableroInicial";

const TresEnRayaGame = () => {
  const [tablero, setTablero] = useState(tableroInicial);
  const [turno, setTurno] = useState("X"); // Iniciar con "X"
  const [active, setActive] = useState(false);
  const [campeon, setCampeon] = useState(null);
  const [mensaje, setMensaje] = useState(""); 

  const handleReset = () => {
    setActive(false);
    setCampeon(null);
    setTurno("X"); // Reiniciar el turno a "X"
    setTablero(tableroInicial);
    setMensaje("");
  };

  const handleCasilla = (fila, columna) => {
    if (campeon || tablero[fila][columna]) return; // No jugar si hay un campeón o casilla ocupada

    const newTablero = tablero.map((fila) => [...fila]); // Copia profunda
    newTablero[fila][columna] = turno;
    setTablero(newTablero);
  };

  // useEffect para verificar ganador o empate después de actualizar el tablero
  useEffect(() => {
    const resultado = comprobarGanador(tablero);
    if (resultado) {
      setCampeon(resultado);
      setMensaje(resultado === "Empate" ? "¡Es un empate!" : `¡${resultado} ha ganado!`);
    } else {
      // Solo cambiar turno si no hay ganador ni empate
      setTurno((prevTurno) => (prevTurno === "X" ? "O" : "X"));
    }
  }, [tablero]); // Se ejecuta cada vez que el tablero cambia

  useEffect(() => {
    if (mensaje) {
      setTimeout(() => {
        alert(mensaje);
      }, 100); // Pequeño retraso para sincronización con la interfaz
    }
  }, [mensaje]); // Se ejecuta cuando hay un nuevo mensaje

  return (
    <div className="game">
      {!active && <h2>Tres en Raya</h2>}

      <div className="container-information">
        {!active && (
          <p>
            Dos jugadores, por turnos, veremos quién es el mejor haciendo "tres
            en raya", ¡¡que gane el mejor!!
          </p>
        )}
        {active && <InfoContainer turno={turno} campeon={campeon} />}
        {!turno && active && <p>Toca elegir turno para empezar</p>}
      </div>

      {active && <TableroGame tablero={tablero} handleCasilla={handleCasilla} />}

      <div className="container-button-controller">
        {!active && <Button name="EMPEZAR" onClick={() => setActive(true)} />}
        {active && <ContainerControllers handleReset={handleReset} setTurno={setTurno} />}
      </div>
    </div>
  );
};

export default TresEnRayaGame;

