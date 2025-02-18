import Button from "../../../components/Button/Button";
import "./InputWindow.css";

const InputWindow = ({
  intentos,
  handlePista,
  letraInput,
  setLetraInput,
  jugarLetra,
  letrasJugadaError,
}) => {
  return (
    <section className="fg-input-container">
      <div className="fg-time">
        <p>Te quedan</p>
        <p>{intentos}</p>
        <Button onClick={handlePista} name="PISTA"/>
        {/* <button onClick={handlePista}>pista</button> */}
      </div>
      <div className="fg-controler">
        <p>introduce una letra</p>
  
        <input
          type="text"
          value={letraInput}
          onChange={(ev) =>
            setLetraInput(
              ev.target.value
                .toLowerCase()
                .replace(/[^a-z]/g, "")
                .slice(0, 1)
            )
          }
          onKeyDown={(ev) => {
            if (ev.key === "Enter" && letraInput.trim() !== "") {
              jugarLetra();
            }
            if (ev.key === " " || ev.key === "Enter" && letraInput.trim() === "") {
              ev.preventDefault(); // Evita que se envíe o procese el Enter o el espacio vacío
            }
          }}
          maxLength={1}
        />

        {/* <button onClick={jugarLetra}>jugar</button> */}
      </div>
      <div className="fg-letters">
        {letrasJugadaError.map((letra, index) => (
          <p className="fg-letter" key={index}>
            {letra}
          </p>
        ))}
        {/* <button onClick={handlePista}>pista</button> */}
      </div>
    </section>
  );
};

export default InputWindow;
