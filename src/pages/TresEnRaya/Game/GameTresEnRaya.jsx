// import { useState } from "react"
// import "./GameTresEnRaya.css"
// import Status from "../Status/Status"
// import SquareTresEnRaya from "../Square/SquareTresEnRaya"




// const GameTresEnRaya = () => {

//     const [tablero, setTablero]=useState([[" "," "," "],[" "," "," "],[" "," "," "]])
//     const [turno,setTurno]=useState(null)
//     // const [ganador,setGanador]=useState(false)
//     // const [reinicio,setReinicio]=useState(null)



//   return (

    
//     <div> 
//         <h1>GameTresEnRaya</h1>
//         {turno &&<Status turno={turno} />}

//         <div className="tablero">
          
//           {tablero.map((fila ,indexFila)=> fila.map((casilla,indexCasilla)=><SquareTresEnRaya key={indexFila+"-"+indexCasilla}casilla={casilla}/>))}</div>
        


//     </div>
//   )
// }


import { useState } from "react";
import "./GameTresEnRaya.css";

import Status from "../Status/Status";


import SquareTresEnRaya from "../Square/SquareTresEnRaya";

const GameTresEnRaya = () => {
    
    const [tablero, setTablero] = useState([
        [null, null, null],
        [null, null, null],
        [null, null, null]
    ]);
    const [turno, setTurno] = useState(null);

  
    // const handleClick = (fila, columna) => {
    //     if (tablero[fila][columna] !== null) return; // No permitir sobrescribir
        
    //     const nuevoTablero = tablero.map((filaArray, i) => 
    //         filaArray.map((casilla, j) => 
    //             i === fila && j === columna ? turno : casilla
    //         )
    //     );

    //     setTablero(nuevoTablero);
    //     setTurno(turno === "X" ? "O" : "X");
    // };

    return (
        <div>
            <h1>GameTresEnRaya</h1>
            <Status turno={turno} />
            <div className="tablero">
              {tablero.map((fila,indexFila)=>{console.log(indexFila), fila.map((columna,indexColumna)=>{console.log(indexColumna+"-"+indexFila)})})}


                {tablero.map((fila, indexFila) => 
                    fila.map((casilla, indexCasilla) => (
                     
                        <SquareTresEnRaya 
                            key={`${indexFila}-${indexCasilla}`}
                            id={`${indexFila}-${indexCasilla}`} 
                            turno={turno}
                            casilla={casilla} 
                            setTurno={setTurno}
                            tablero={tablero}
                            setTablero={setTablero}
                            
                            // onClick={() => handleClick(indexFila, indexCasilla,console.log("click", indexFila,indexCasilla))}
                        />
                    ))
                )}
            </div>
          
            <div className="container-play">
              {turno && <p> ahora existo</p> }
              <button onClick={()=>{setTurno("X")}}>Empieza X</button>
              <button onClick={()=>{setTurno("0")}}>Empieza O</button>
              <div className="container-reinicio">
                <button onClick={()=>{setTurno(null)}}>empezar</button>

              </div>
            </div>

        </div>
    );
};

export default GameTresEnRaya;
