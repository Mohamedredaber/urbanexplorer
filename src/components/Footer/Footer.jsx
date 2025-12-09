import './Footer.css'
import { NavLink } from 'react-router-dom';
import useIsMobile from '../../hooks/useIsMobile';
function Footer() {
  const isMobile = useIsMobile(768);    
  return (
    <>
      <footer class="footer">
        <div class="footer-container">
          <div class="footer-branding">
            <a href="/" class="brand">
              <div class="logo">M</div>
              <div class="brand-text">
                <span class="title">MonSite</span>
                <span class="subtitle">Découvrez les meilleurs lieux</span>
              </div>
            </a>
          </div>

            {!isMobile && 
          <div class="footer-links">
            <h3>Liens rapides</h3>
            <ul>
              <li>
                <NavLink to="/" end className="nav-link">
                  Accueil
                </NavLink>
              </li>
              <li>
                <NavLink to="/lieux" className="nav-link">
                  Lieux
                </NavLink>
              </li>
              <li>
                <NavLink to="/map" className="nav-link">
                  Carte
                </NavLink>
              </li>
              <li>
                {" "}
                <NavLink to="/about" className="nav-link">
                  À propos
                </NavLink>
              </li>
            </ul>
          </div>
            }
        </div>

        <div class="footer-bottom">
          <p>© 2025 MonSite. Tous droits réservés.</p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
