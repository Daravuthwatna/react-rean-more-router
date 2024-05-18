import { Outlet } from "react-router-dom"
import "../../App.css"

const UserLayout = () => {
  return (
    <div className="user-list">
      <h1>User</h1>
      <Outlet/>
    </div>
  )
}

export default UserLayout