import { NavLink, Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import useIsMobile from "../../hooks/useIsMobile";
import { HiMenu, HiX } from "react-icons/hi";
import "./Header.css";



export default function Header() {
  const isMobile = useIsMobile(768);       
  const [menuOpen, setMenuOpen] = useState(false); // état du menu mobile
  const location = useLocation();
  // fermer le menu quand on change de route
  useEffect(() => {
    setMenuOpen(false);
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

        {/* bouton hamburger visible seulement en mobile */}
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

        {/* navigation : visible toujours en desktop, conditionnelle en mobile */}
        <nav
          className={`nav ${isMobile ? "mobile" : "desktop"} ${menuOpen ? "open" : ""}`}
          role="navigation"
          aria-label="Navigation principale"
        >
          <NavLink to="/" end className="nav-link">Accueil</NavLink>
          <NavLink to="/lieux" className="nav-link">Lieux</NavLink>
          <NavLink to="/map" className="nav-link">Carte</NavLink>
          <NavLink to="/about" className="nav-link">À propos</NavLink>
        </nav>
      </div>
    </header>
  );
}
