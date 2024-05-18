import { Outlet } from "react-router-dom"
import Navbar from "../components/navBar"
import Footer from "../components/footer"
const Layout = () => {
  return (
    <div>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default Layout