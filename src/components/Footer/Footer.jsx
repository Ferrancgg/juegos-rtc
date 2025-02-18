import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p>
        &copy; {new Date().getFullYear()} ferrancgg - Todos los derechos
        reservados
      </p>
      <a
        href="https://github.com/Ferrancgg/juegos-rtc.git"
        className="github-link"
      >
        <img
          src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
          alt="GitHub"
          className="github-icon"
        />
      </a>
    </footer>
  );
};

export default Footer;
