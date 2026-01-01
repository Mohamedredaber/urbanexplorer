import { useDispatch } from "react-redux";
import { resetFilter } from "../../filterSlice";
import "./ResetBtn.css";
function ResetBtn() {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(resetFilter());
  };

  return (
    <button type="button" className="btn btn-reset" onClick={handleClick}>
      Reset Filters
    </button>
  );
}

export default ResetBtn;
