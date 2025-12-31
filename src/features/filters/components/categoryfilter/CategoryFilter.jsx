import { useDispatch, useSelector } from "react-redux";
import { useCallback } from "react";
import { setCategory } from "../../filterSlice";
import categories from "../../../../data/Categories.json";
import CategoryOption from "./CategoryOption";

function CategoryFilter() {
  const dispatch = useDispatch();
  const category = useSelector((state) => state.filters.category);
  const handleSelect = useCallback(
    (value) => {
      dispatch(setCategory(value));
    },
    [dispatch]
  );

  return (
    <select
      className="select"
      value={category}         
      onChange={(e) => handleSelect(e.target.value)}
    >
      <option value="all">All Categories</option>
      {categories.map((c) => (
        <CategoryOption key={c.id} label={c.label} value={c.value} />
      ))}
    </select>
  );
}

export default CategoryFilter;
