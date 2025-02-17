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
        <h2>{intentos}</h2>
        <Button onClick={handlePista} name="pista"/>
        {/* <button onClick={handlePista}>pista</button> */}
      </div>
      <div className="fg-controler">
        <p>introduce una letra</p>
        {/* <input
        type="text"
        value={letraInput}
        onChange={(ev) =>
          setLetraInput(
            ev.target.value.toLowerCase().replace(/[^a-z]/g, "")
          )
        }
        maxLength={1}
      /> */}
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
          onKeyDown={(ev) => ev.key === "Enter" && jugarLetra()}
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
