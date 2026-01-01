import { NavLink, Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import useIsMobile from "../../../hooks/useIsMobile";
import { HiMenu, HiX } from "react-icons/hi";
import "./Header.css";
function Header() {
  const isMobile = useIsMobile(768);       
  const [menuOpen, setMenuOpen] = useState(false); 
  const location = useLocation();
useEffect(() => {
  const closeMenu = () => setMenuOpen(false);
  closeMenu();
}, [location.pathname]);
  const toggleMenu = () => setMenuOpen((v) => !v);
  return (
    <header className="header">
      <div className="container">
        <Link to="/" className="brand" aria-label="Urban Explorer - Accueil">
          <div className="logo" aria-hidden="true">UE</div>
          <div className="brand-text">
            <span className="title">Urban Explorer</span>
            <span className="subtitle">Découvre ta ville</span>
          </div>
        </Link>
        {isMobile && (
          <button
            className="menu-toggle"
            onClick={toggleMenu}
            aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>
        )}
        <nav
          className={`nav ${isMobile ? "mobile" : "desktop"} ${menuOpen ? "open" : ""}`}
          role="navigation"
          aria-label="Navigation principale"
        >
          <NavLink to="/" end className="nav-link">Home</NavLink>
          <NavLink to="/explore" className="nav-link">Explore</NavLink>
          <NavLink to="/about" className="nav-link">About</NavLink>
          <NavLink to="/mappage" className="nav-link">Map page</NavLink>
        </nav>
      </div>
    </header>
  );
}
export default Header