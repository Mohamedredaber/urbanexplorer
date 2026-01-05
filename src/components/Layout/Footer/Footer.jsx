import "./Footer.css";
import { NavLink } from "react-router-dom";
import useIsMobile from "../../../hooks/useIsMobile";
function Footer() {
  const isMobile = useIsMobile(768);
  return (
    <>
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-branding">
            <a href="/" className="brand">
              <div className="logo">ux</div>
              <div className="brand-text">
                <span className="title">Urban explorer</span>
                <span className="subtitle">Découvrez les meilleurs lieux</span>
              </div>
            </a>
          </div>
          {!isMobile && (
            <div className="footer-links">
              <h3>Liens rapides</h3>
              <ul>
                <li>
                  <NavLink to="/" end classNameName="nav-link">
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/explore" classNameName="nav-link">
                    Explore
                  </NavLink>
                </li>
                <li>
                  {/* <NavLink to="/map" classNameName="nav-link">
                      Card
                  </NavLink> */}
                </li>
                <li>
                  {" "}
                  <NavLink to="/about" classNameName="nav-link">
                      About
                  </NavLink>
                </li>
              </ul>
            </div>
          )}
        </div>

        <div className="footer-bottom">
          <p>© 2025 MonSite. Tous droits réservés.</p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
