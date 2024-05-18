import "../App.css"
import { Link } from "react-router-dom"
import Logo from "../assets/owl black.png"
const navBar = () => {
  return (
    <nav>
      <img src={Logo} alt="owl" />
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="Service">Service</Link></li>
        <li><Link to="Product">Product</Link></li>
        <li><Link to="User">User</Link></li>
      </ul>
    </nav> 
  )
}

export default navBar