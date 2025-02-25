import Button from "../../../components/Button/Button";

const ContainerControllers = ({ handleReset, setTurno }) => {
  return (
    <div className="container-controller-game">
      <Button name="RESET" onClick={handleReset} />
      <Button name="Empieza X " onClick={() => setTurno("X")} />
      <Button name="Empieza O " onClick={() => setTurno("O")} />
    </div>
  );
};

export default ContainerControllers;
