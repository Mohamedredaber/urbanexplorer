import { Link } from "react-router-dom";
import './Header.css'
function Header() {


  return (
    <header className="header">
      <div className="container">
        <Link to="/" className="brand">
          <div className="logo">UE</div>
          <div className="brand-text">
            <span className="title">Urban Explorer</span>
            <span className="subtitle">Découvre ta ville</span>
          </div>
        </Link>
        
      </div>
    </header>
  );
}
export default Header;
