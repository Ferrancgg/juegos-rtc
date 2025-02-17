
import { useEffect, useState } from "react";
import "./JuegoAhorcado.css";
import { words } from "../Data/words";
import WindowText from "../WindowGame/WindowText";
import IconWindow from "../IconWindow/IconWindow";


import InputWindow from "../InputWindow/InputWindow";
import Button from "../../../components/Button/Button";

const JuegoAhorcado = () => {
  const [palabraJugar, setPalabraJugar] = useState("");
  const [letrasJugadas, setLetrasJugadas] = useState([]);
  const [letraInput, setLetraInput] = useState("");
  const [intentos, setIntentos] = useState(5);
  const [letrasJugadaError, setLetrasJugadasError] = useState([]);
  const [mensaje, setMensaje] = useState("Vamos a jugar, elige una letra");
  const [newGame, setNewGame] = useState(false);
  const [definicion, setDefinicion] = useState("");
  const [help, setHelp] = useState(false);

  useEffect(() => {
    const numRandom = Math.floor(Math.random() * words.length);
    const palabraElejida = words[numRandom].palabra.toLowerCase();
    const pista = words[numRandom].definicion;
    setPalabraJugar(palabraElejida);
    setDefinicion(pista);
  }, [newGame]);

  const reset = () => {
    setIntentos(6);
    setNewGame(true);
    setLetrasJugadas([]);
    setLetrasJugadasError([]);
    setMensaje("Vamos a jugar, elige una letra");
    setHelp(false);
  };

  const jugarLetra = () => {
    if (
      (letraInput && letrasJugadas.includes(letraInput)) ||
      letrasJugadaError.includes(letraInput)
    ) {
      setMensaje("Esta letra ya la has usado, elige otra letra");
    } else if (
      letraInput &&
      !letrasJugadas.includes(letraInput) &&
      palabraJugar.split("").includes(letraInput)
    ) {
      setMensaje("¡Muy bien!");
      const nuevasLetrasAdivinadas = [...letrasJugadas, letraInput];
      setLetrasJugadas(nuevasLetrasAdivinadas);
    } else {
      setMensaje("Ohh mala suerte, elige una letra");
      setIntentos(intentos - 1);
      setLetrasJugadasError([...letrasJugadaError, letraInput]);
    }

    setLetraInput("");
  };

  const handlePista = () => {
    setHelp(true);
  };

  const palabraMostrada = palabraJugar
    .split("")
    .map((letra) => (letrasJugadas.includes(letra) ? letra : "_ "));

  // Verificar si todas las letras de la palabra han sido adivinadas
  const todasLetrasAdivinadas = palabraJugar.split("").every(letra => letrasJugadas.includes(letra));

  // Mostrar mensaje de victoria si todas las letras han sido adivinadas
  if (todasLetrasAdivinadas) {
    return (
      <div className="juego-ahorcado">
        <div className="victoria-message">
          <h3>¡Felicidades, has ganado!</h3>
        {/* <button onClick={reset}>volver a jugar</button> */}
        <Button name="volver a jugar" onClick={reset}/></div>
      </div>
    );
  }

  return (
    <main>
      {intentos <= 0 ? (
        <WindowText
          palabraJugar={palabraJugar}
          definicion={definicion}
          reset={reset}
        />
      ) : (
        <div className="fg-general-container">
          <IconWindow
            mensaje={mensaje}
            palabraMostrada={palabraMostrada}
            help={help}
            definicion={definicion}
            intentos={intentos}
          />
          <InputWindow
            intentos={intentos}
            handlePista={handlePista}
            letraInput={letraInput}
            setLetraInput={setLetraInput}
            jugarLetra={jugarLetra}
            letrasJugadaError={letrasJugadaError}
          />
        </div>
      )}
    </main>
  );
};

export default JuegoAhorcado;