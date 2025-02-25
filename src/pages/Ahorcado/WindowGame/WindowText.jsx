import Button from "../../../components/Button/Button";
import "./WindowText.css";

const WindowText = ({ palabraJugar, definicion, reset }) => {
  return (
    <div className="fg-general-container">
      <section className="fg-window-game">
        <h2>game over</h2>
        <h3>la palabra secreta era...</h3>
        <h1>{palabraJugar}</h1>
        <p>{definicion}</p>
        <div className="fg-icono">
          <img src="https://res.cloudinary.com/di49fnkc8/image/upload/v1696651602/web%20juegos/state_5-2_k1yleb.png" alt="icono final" />
        </div>
      </section>

      <section className="fg-new-game">
        <Button onClick={reset} name="VOLVER A JUGAR" />
      </section>
    </div>
  );
};

export default WindowText;
