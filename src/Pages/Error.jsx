import { Link } from "react-router-dom"
import imgError from "../assets/Error.png"
const Error = () => {
  return (
    <div>
      <img src={imgError} alt="" />
      <Link to="/">Back Home</Link>
    </div>
  )
}

export default Error