// Header.jsx - AJOUTER CE CODE
import { NavLink, Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import useIsMobile from "../../../hooks/useIsMobile";
import { HiMenu, HiX } from "react-icons/hi";
import storage from "../../../utils/localStorage";
import "./Header.css";
function Header() {
  const isMobile = useIsMobile(768);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const [isAuth, setIsAuth] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const checkAuth = () => {
      setIsAuth(storage.isAuthenticated());
      setUser(storage.getCurrentUser());
    };
    checkAuth();
    const closeMenu = () => setMenuOpen(false);
    closeMenu();
  }, [location.pathname]);

  const handleLogout = () => {
    storage.logout();
    setIsAuth(false);
    setUser(null);
    window.location.href = "/";
  };

  const toggleMenu = () => setMenuOpen((v) => !v);

  return (
    <header className="header">
      <div className="container">
        <Link to="/" className="brand" aria-label="Urban Explorer - Accueil">
          <div className="logo" aria-hidden="true">
            UE
          </div>
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
          className={`nav ${isMobile ? "mobile" : "desktop"} ${
            menuOpen ? "open" : ""
          }`}
          role="navigation"
          aria-label="Navigation principale"
        >
          <NavLink to="/" end className="nav-link">
            Home
          </NavLink>
          <NavLink to="/explore" className="nav-link">
            Explore
          </NavLink>
          <NavLink to="/about" className="nav-link">
            About
          </NavLink>
          <div className="auth-section">
            {isAuth ? (
              <div className="user-menu">
                <span className="user-name">{user?.name}</span>
                <span className={`role-badge role-${user?.role}`}>
                  {user?.role === "admin"  }
                  {user?.role === "entreprise" }
                  {user?.role === "user" }
                </span>
                <Link to={`/${user?.role}`} className="nav-link dashboard-link">
                  Dashboard
                </Link>
                <button onClick={handleLogout} className="logout-btn">
                  Déconnexion
                </button>
              </div>
            ) : (
              <div className="auth-buttons">
                <Link to="/login" className="btn-login">
                  Connexion
                </Link>
                <Link to="/register" className="btn-register">
                  S'inscrire
                </Link>
              </div>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
