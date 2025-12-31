import { useDispatch, useSelector } from "react-redux";
import { setSearch } from "../filterSlice";
import "./serchTag.css";
function SerchTag() {
  const dispatch = useDispatch();
  const search = useSelector((state) => state.filters.search);
  return (
    <input
      type="text"
      id="searchtag"
      placeholder="Search for places..."
      className="input"
      value={search}
      onChange={(e) => dispatch(setSearch(e.target.value))}
    />
  );
}

export default SerchTag;
