import "./InfoContainer.css"

const InfoContainer = ({turno,campeon}) => {
  return (
    <div >
    {turno && !campeon &&<p>disfruta del juego</p>}
    {turno && ! campeon && <h3>es turno de {turno}</h3> }
    {campeon ? <h3> Felidades {campeon} has ganado</h3> : null}
  </div>
   
  )
}

export default InfoContainer