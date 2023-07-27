// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <div className="header-section">
    <Link to="/" className="nav-item-link">
      Home
    </Link>
    <Link to="/about" className="nav-item-link">
      About
    </Link>
  </div>
)

export default Header
