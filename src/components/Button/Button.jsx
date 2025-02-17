import { useNavigate } from "react-router-dom";
import "./Button.css";

const Button = ({ name, path ,className,onClick}) => {
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
    <button className={className?className:"button"} onClick={handleClick}>
      {name}
    </button>
  );
};

export default Button;
