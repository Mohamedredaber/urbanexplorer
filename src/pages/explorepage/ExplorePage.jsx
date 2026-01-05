import "./ExplorePage.css";
import FiltersPanel from "../../features/places/components/FiltersPanel";
import PlacesList from "../../features/places/components/PlacesList";

function ExplorePage() {
  return (
    <div className="explore-page">
      <h1>Explorer les lieux</h1>
      <div className="content-grid">
        <FiltersPanel />
        <PlacesList />
      </div>
    </div>
  );
}

export default ExplorePage;