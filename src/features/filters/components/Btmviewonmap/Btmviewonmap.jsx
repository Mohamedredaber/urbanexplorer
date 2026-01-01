import { useNavigate } from "react-router-dom";
function Btmviewonmap() {
    const navigate = useNavigate()
    const handleClick =(e)=>{
        e.preventDefault()
        navigate('/explore')
    }

  return (
    <button type="submit" className="btn" onClick={handleClick}>
      View on Map
    </button>
  );
}

export default Btmviewonmap;
