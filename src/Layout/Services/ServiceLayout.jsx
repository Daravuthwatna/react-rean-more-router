import { NavLink, Outlet } from "react-router-dom"
import "../../App.css"
const ServiceLayout = () => {
  return (
    <div className="dropdown">
      <h1>Service</h1>
      <ul>
        <li><NavLink to="Clean">Clean</NavLink></li>
        <li><NavLink to="Sales">Sales</NavLink></li>
        <li><NavLink to="Buy">Buy</NavLink></li>
      </ul>
      <Outlet/>
    </div>
  )
}

export default ServiceLayout