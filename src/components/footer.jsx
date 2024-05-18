import { Link } from "react-router-dom"
import "../App.css"
const footer = () => {
  return (
    <div className="footer">
      <p>©2023 PhnomPenh, Acknowledge Me</p>
      <footer>
        <ul>
          <li><Link to="Privacy">Privacy Policy</Link></li>
          <li><Link to="Terms">Terms of Use</Link></li>
          <li><Link to="Accessibility">Accessibility</Link></li>
        </ul>
      </footer>
    </div>
  )
}

export default footer