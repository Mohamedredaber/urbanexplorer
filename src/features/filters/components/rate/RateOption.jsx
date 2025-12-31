function RateOption({ ratingNumber }) {
  return (
    <option value={ratingNumber}>
      {ratingNumber} + ⭐
    </option>
  );
}
export default RateOption;
// <button
//   className={`rate-btn ${isActive ? "active" : ""}`}
//   type="button"
//   onClick={onClick}
// >
//   <IconRate isActive={isActive} /> {ratingNumber}
// </button>
