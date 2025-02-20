import { NavLink } from "react-router-dom"
import "./Nav.css"

const Nav = () => {
  return (
    <nav className="nav">
        <NavLink className="nav-link" to="/tres_en_raya">Tres Raya</NavLink>
        <NavLink className="nav-link" to="/sudoku">Sudoku</NavLink>
        <NavLink className="nav-link" to="/ahorcado">Ahorcado</NavLink>
        

    </nav>
  )
}

export default Nav