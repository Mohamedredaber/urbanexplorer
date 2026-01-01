import { useState } from "react";
import CategoryFilter from "./categoryfilter/CategoryFilter";
import ProgressBarDistance from "./progressdistanceFilter/ProgressBarDistance";
import Rateminimal from "./rate/Rateminimal";
import SerchTag from "../searchTag/SerchTag";
import "./FormFilter.css";

import ResetBtn from "./resetbtn/ResetBtn";
function FormFilter() {
  const [filterActive, setFilterActive] = useState(false);

  const handleToggle = () => {
    setFilterActive((prev) => !prev);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="form-filter-container">
      <button
        type="button"
        className="filter-toggle-btn"
        onClick={handleToggle}
      >
        {filterActive ? "✕ Fermer" : "Filtrer"}
      </button>
      {filterActive && (
        <form className="filter-form" onSubmit={handleSubmit}>
          <CategoryFilter />
          <ProgressBarDistance />
          <Rateminimal />
          <SerchTag />
          <ResetBtn />
        </form>
      )}
    </div>
  );
}

export default FormFilter;
