import ApplyFilters from "../../features/places/components/Applyfilters.jsx";
import PlacesList from "../../features/places/components/PlacesList";
import "./ExplorePage.css"
function ExplorePage() {
  return (
    <div className="explore-page">
      <ApplyFilters/>
      <div style={{ display: "flex", gap: "20px" }}>
        <PlacesList  />
      </div>
    </div>
  );
}

export default ExplorePage;
