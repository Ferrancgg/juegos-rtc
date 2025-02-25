import "./IconWindow.css";

const IconWindow = ({
  mensaje,
  palabraMostrada,
  help,
  definicion,
  intentos,
}) => {
  return (
    <section className="fg-window-game">
      <h3>{mensaje}</h3>
      <h1>{palabraMostrada}</h1>
      {help && <p>{definicion}</p>}

      {intentos == 5 ? (
        <div className="fg-icono"></div>
      ) : intentos == 4 ? (
        <div className="fg-icono">
          <img src=" https://res.cloudinary.com/di49fnkc8/image/upload/v1696651606/web%20juegos/state_0-2_t6rawy.png"alt="icono0" />
        </div>
      ) : intentos == 3 ? (
        <div className="fg-icono">
          <img src="https://res.cloudinary.com/di49fnkc8/image/upload/v1696651605/web%20juegos/state_1-2_rzyjbn.png" alt="icono1" />
        </div>
      ) : intentos == 2 ? (
        <div className="fg-icono">
          <img src="https://res.cloudinary.com/di49fnkc8/image/upload/v1696651604/web%20juegos/state_2-2_cd9kxq.png" alt="icono2" />
        </div>
      ) : intentos == 1 ? (
        <div className="fg-icono">
          <img src="https://res.cloudinary.com/di49fnkc8/image/upload/v1696651603/web%20juegos/state_3-2_uwsjm2.png" alt="icono3" />
        </div>
      ) : intentos == 1 ? (
        <div className="fg-icono">
          <img src="https://res.cloudinary.com/di49fnkc8/image/upload/v1696651603/web%20juegos/state_4-2_c18dnm.png" alt="icono4" />
        </div>
      ) : (
        <div></div>
      )}
    </section>
  );
};

export default IconWindow;
