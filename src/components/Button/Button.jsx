import { useNavigate } from "react-router-dom";
import "./Button.css";

const Button = ({ src, alt, name, path, className, onClick }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    console.log("click");

    if (onClick) {
      onClick();
      return;
    }

    if (path) {
      navigate(path);
    }
  };

  return (
    <button
      src={src}
      alt={alt}
      className={className ? className : "button"}
      onClick={handleClick}
    >
      {name}
    </button>
  );
};

export default Button;
