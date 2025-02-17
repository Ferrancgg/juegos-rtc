import Button from "../../../components/Button/Button"
import "./WindowText.css"

const WindowText = ({palabraJugar, definicion,reset}) => {
  return (
    <div className="fg-general-container">
    <section className="fg-window-game">
      <h2>game over</h2>
      <h3>la palabra secreta era...</h3>
      <h1>{palabraJugar}</h1>
      <p>{definicion}</p>
      <div className="fg-icono">
        <img src="/src/img/state_5.png" alt="icono final" />
      </div>
    </section>

    <section className="fg-new-game">
      <Button onClick={reset} name="VOLVER A JUGAR"/>
      {/* <button onClick={reset}>Volver a jugar</button> */}
    </section>
  </div>
  )
}

export default WindowText