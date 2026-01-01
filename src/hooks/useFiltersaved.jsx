import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setFilters } from "../store/slices/filtersSlice ";
function useFiltersSaved() {
  const dispatch = useDispatch();
  const filters = useSelector((state) => state.filters);

  // Charger les filtres au mount
  useEffect(() => {
    const savedFilters = localStorage.getItem("filters");
    if (savedFilters) {
      dispatch(setFilters(JSON.parse(savedFilters)));
    }
  }, [dispatch]);
  
  // Sauvegarder à chaque changement de filters
  useEffect(() => {
    localStorage.setItem("filters", JSON.stringify(filters));
  }, [filters]);
}

export default useFiltersSaved;
