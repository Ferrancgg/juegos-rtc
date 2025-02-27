

const InfoContainer = ({turno,campeon}) => {
  return (
    <div >
    {turno && !campeon &&<p>disfruta del juego</p>}
    {turno && ! campeon && <h3>es turno de {turno}</h3> }
    {campeon ? (
  <h3>
    {campeon === "X" || campeon === "O" ? (
      <p>¡{campeon} ha ganado!</p>
    ) : (
      <p>¡Empate!</p>
    )}
  </h3>
) : null}

    {/* {campeon ? <h3> Felidades {(campeon)=== "X"||"O" ?<p>{campeon} has gadao</p>:<p>Empate</p>} has ganado</h3> : null} */}
  </div>
   
  )
}

export default InfoContainer