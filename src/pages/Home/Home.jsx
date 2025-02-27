import "./Home.css";
import GameCard from "../../components/GameCard/GameCard";

const Home = () => {
  return (
    <div className="home">
      <GameCard
      path={"/ahorcado"}
        img="https://res.cloudinary.com/dj50wjowc/image/upload/v1739167720/verdugo_sy0rsl.png"
        alt="ahorcado-logo"
        name="AHORCADO"
        desciption="Juega y adivina la palabra escondida."
      />
      <GameCard path={"/sudoku"}  img="https://res.cloudinary.com/dj50wjowc/image/upload/v1739167700/pasatiempo_q8c9zw.png"
        alt="Sudoku-log"
        name="SUDOKU"
        desciption="El famoso juego de números." />
      <GameCard  img="https://res.cloudinary.com/dj50wjowc/image/upload/v1739167713/tic-tac-toe_tnhcsj.png"
        alt="Tres-en-raya-logo"
        name="TRES EN RAYA"
        desciption="Alinea tres en raya y gana."
        path="/tres_en_raya"/>
    </div>
  );
};

export default Home;
