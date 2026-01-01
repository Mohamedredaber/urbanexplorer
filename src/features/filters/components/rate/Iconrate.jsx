import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as solidStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as regularStar } from "@fortawesome/free-regular-svg-icons";

function IconRate({ isActive }) {
  return (
    <FontAwesomeIcon
      icon={isActive ? solidStar : regularStar}
      className={`rating ${isActive ? "is-active" : ""}`}
    />
  );
}

export default IconRate;

