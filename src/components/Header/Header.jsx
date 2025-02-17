import Button from "../Button/Button"
import Nav from "../Nav/Nav"
import "./Header.css"

const Header = () => {
  return (
    <header className="header">
      <Button name="home" path="/" className="btt-home"/>
<Nav/>

    </header>
    
  )
}

export default Header