import { useDispatch, useSelector } from "react-redux";
import { setMinRating } from "../../filterSlice";
import RateOption from "./RateOption";
import "./Rateminimal.css";

function Rateminimal() {
  const selectedRating = useSelector((state) => state.filters.minRating);
  const dispatch = useDispatch();
  const rateNumbers = [1, 2, 3, 4, 5];

  const handleSelect = (e) => {
    const value = e.target.value;
    dispatch(setMinRating(value ? Number(value) : null)); // ✅ null pour reset
  };

  return (
    <select
      className="select"
      value={selectedRating ?? ""}   
      onChange={handleSelect}
    >
      <option value="">All Ratings</option>
      {rateNumbers.map((num) => (
        <RateOption key={num} ratingNumber={num} />
      ))}
    </select>
  );
}

export default Rateminimal;
