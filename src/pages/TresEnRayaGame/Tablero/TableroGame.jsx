// import "./TableroGame.css"

const TableroGame = ({tablero,handleCasilla}) => {
  return (
    <div className="tablero">
    {
      tablero.map((fila, indexFila) =>
        fila.map((columna, indexColumna) => {
          return (
            <button
              className="casilla"
              key={`${indexFila} ${indexColumna}`}
              onClick={() => handleCasilla(indexFila, indexColumna)}
            >
              {tablero[indexFila][indexColumna]}
            </button>
          );
        })
      )}
  </div>





    
  )
}

export default TableroGame