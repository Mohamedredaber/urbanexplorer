
import PlacesList from "../../features/places/components/PlacesList";
function ExplorePage() {
  return (
    <div className="explore-page">
 
      <div style={{ display: "flex", gap: "20px" }}>
        <PlacesList  />
      </div>
    </div>
  );
}

export default ExplorePage;
