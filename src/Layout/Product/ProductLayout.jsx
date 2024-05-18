import { NavLink, Outlet } from "react-router-dom"

const ProductLayout = () => {
  return (
    <div className="dropdown">
      <h1>Product</h1>
      <ul>
        <li><NavLink to="Nike">Nike</NavLink></li>
        <li><NavLink to="Addias">Addias</NavLink></li>
        <li><NavLink to="Vans">Vans</NavLink></li>
      </ul>
      <Outlet/>
    </div>
  )
}

export default ProductLayout