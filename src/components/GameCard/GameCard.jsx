import Button from "../Button/Button";
import "./GameCard.css";

const GameCard = ({ img, alt, name, desciption, path }) => {
  return (
    <div className="card-game">
      <h4>{name}</h4>
      <div className="img-game-container">
        <img src={img} alt={alt} />
      </div>
      <p>{desciption}</p>
      <Button name="JUGAR" path={path} />
    </div>
  );
};

export default GameCard;
