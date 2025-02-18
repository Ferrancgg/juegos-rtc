import Nav from "../Nav/Nav";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="icono-home">
        <a href="/">
          <img
            src="https://res.cloudinary.com/dj50wjowc/image/upload/v1739861836/hogar_hkpipa.png"
            alt="icono-home"
          />
        </a>
      </div>
      <Nav />
    </header>
  );
};

export default Header;
