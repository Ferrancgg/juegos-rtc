import "./IconWindow.css"

const IconWindow = ({mensaje,palabraMostrada,help,definicion,intentos}) => {
  return (
    <section className="fg-window-game">
            <h3>{mensaje}</h3>
            <h1>{palabraMostrada}</h1>
            {help&& <p>{definicion}</p>}

            {intentos == 5 ? (
              <div className="fg-icono"></div>
            ) : intentos == 4 ? (
              <div className="fg-icono">
                <img src="/src/pages/Ahorcado/img/state_0.png" alt="icono1" />
              </div>
            ) : intentos == 3 ? (
              <div className="fg-icono">
                <img src="/src/pages/Ahorcado/img/state_1.png" alt="icono1" />
              </div>
            ) : intentos == 2 ? (
              <div className="fg-icono">
                <img src="/src/pages/Ahorcado/img/state_2.png" alt="icono1" />
              </div>
            ) : intentos == 1 ? (
              <div className="fg-icono">
                <img src="/src/pages/Ahorcado/img/state_3.png" alt="icono1" />
              </div>
            ) : intentos == 1 ? (
              <div className="fg-icono">
                <img src="/src/pages/Ahorcado/img/state_4.png" alt="icono1" />
              </div>
            ) : (
              <div></div>
            )}
          </section>
   
  )
}

export default IconWindow