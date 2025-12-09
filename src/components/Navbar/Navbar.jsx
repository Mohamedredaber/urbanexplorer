import { NavLink } from "react-router-dom";
import { HiMenu ,HiX} from "react-icons/hi";
import { useEffect, useState } from "react";
import './Navbar.css'
function Navbar() {
const [isOpen, setIsOpen] = useState(false);
const [icon,seticon]=useState(false)
useEffect(() => {
  function handleResize() {
    if (window.innerWidth < 768) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  }
  handleResize();

  window.addEventListener("resize", handleResize);

  return () => window.removeEventListener("resize", handleResize);
}, []);
    const handlechangeicon=()=>{
        seticon((prev)=>!prev)
    }
  return (
    <>
      {isOpen && <button  onClick={handlechangeicon}>
           {icon ?<HiX size={28} /> :<HiMenu size={28} />}
        </button>}
        <nav className="navbar">
          <NavLink to="/">Accueil</NavLink>
          <NavLink to="/lieux">Lieux</NavLink>
          <NavLink to="/map">Carte</NavLink>
          <NavLink to="/about">À propos</NavLink>
        </nav>

    </>
  );
}
export default Navbar;
