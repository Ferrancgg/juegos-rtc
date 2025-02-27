import { useEffect, useState } from "react";
import "./JuegoAhorcado.css";
import { words } from "../Data/words";
import WindowText from "../WindowGame/WindowText";
import IconWindow from "../IconWindow/IconWindow";
import InputWindow from "../InputWindow/InputWindow";
import Button from "../../../components/Button/Button";
import Main from "../../../components/Main/Main";

// Correccion: Función para eliminar acentos de cualquier string
const removeAccents = (str) => str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

const JuegoAhorcado = () => {
  const [palabraJugar, setPalabraJugar] = useState("");
  const [letrasJugadas, setLetrasJugadas] = useState([]);
  const [letraInput, setLetraInput] = useState("");
  const [intentos, setIntentos] = useState(5);
  const [mensaje, setMensaje] = useState("Vamos a jugar, elige una letra");
  const [newGame, setNewGame] = useState(false);
  const [definicion, setDefinicion] = useState("");
  const [help, setHelp] = useState(false);

  useEffect(() => {
    const numRandom = Math.floor(Math.random() * words.length);
    const palabraElejida = words[numRandom].palabra.toLowerCase();
    setPalabraJugar(palabraElejida);
    setDefinicion(words[numRandom].definicion);
  }, [newGame]);

  const reset = () => {
    setIntentos(5);
    setNewGame(!newGame);
    setLetrasJugadas([]);
    setMensaje("Vamos a jugar, elige una letra");
    setHelp(false);
  };

  const jugarLetra = () => {
    if (!letraInput) return;

    const letraNormalizada = removeAccents(letraInput.toLowerCase());
    const palabraNormalizada = removeAccents(palabraJugar);

    if (letrasJugadas.includes(letraNormalizada)) {
      setMensaje("Esta letra ya la has usado, elige otra");
    } else {
      setLetrasJugadas([...letrasJugadas, letraNormalizada]);
      
      if (palabraNormalizada.includes(letraNormalizada)) {
        setMensaje("¡Muy bien!");
      } else {
        setMensaje("Ohh, mala suerte");
        setIntentos((prev) => prev - 1);
      }
    }
    
    setLetraInput("");
  };

  const palabraMostrada = palabraJugar
    .split("")
    .map((letra) => (letrasJugadas.includes(removeAccents(letra)) ? letra : "_ "))
    .join("");

  if (removeAccents(palabraJugar).split("").every((letra) => letrasJugadas.includes(letra))) {
    return (
      <div className="juego-ahorcado">
        <h3>¡Felicidades, has ganado!</h3>
        <Button name="Volver a jugar" onClick={reset} />
      </div>
    );
  }

  return (
    <Main>
      {intentos <= 0 ? (
        <WindowText palabraJugar={palabraJugar} definicion={definicion} reset={reset} />
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
            handlePista={() => setHelp(true)}
            letraInput={letraInput}
            setLetraInput={setLetraInput}
            jugarLetra={jugarLetra}
            letrasJugadaError={letrasJugadas.filter(
              (letra) => !removeAccents(palabraJugar).includes(letra)
            )}
          />
        </div>
      )}
    </Main>
  );
};

export default JuegoAhorcado;
