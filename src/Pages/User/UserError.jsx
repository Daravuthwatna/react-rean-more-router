import { Link } from "react-router-dom"
const UserError = () => {
  return (
    <div>
      <h1>Somthing Went Wrong!</h1>
      <Link to="/user">Back User</Link>
    </div>
  )
}

export default UserError