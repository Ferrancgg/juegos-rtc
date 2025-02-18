import Button from "../../../components/Button/Button"
import "./ContainerControllers.css"

const ContainerControllers = ({handleReset,setTurno}) => {
  return (
    <div className="container-controller-game">
      <Button name="RESET" onClick={handleReset}/>
    {/* <button onClick={handleReset}>Reset</button> */}
    <Button name="Empieza X " onClick={()=>setTurno("X")}/>
    <Button name="Empieza O " onClick={()=>setTurno("O")}/>
    {/* <button onClick={() => setTurno("X")}>Empieza"X"</button>
    <button onClick={() => setTurno("O")}>Empieza"O"</button> */}
  </div>
  )
}

export default ContainerControllers