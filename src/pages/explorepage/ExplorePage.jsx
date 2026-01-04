// import ApplyFilters from "../../features/places/components/Applyfilters.jsx";
// import PlacesList from "../../features/places/components/PlacesList";
// import "./ExplorePage.css"
// function ExplorePage() {
//   return (
//     <div className="explore-page">

//       <ApplyFilters/>
//       <div style={{ display: "flex", gap: "20px" }}>
//         <PlacesList  />
//       </div>
//     </div>
//   );
// }

// export default ExplorePage;
import "./ExplorePage.css";
import { useDispatch, useSelector } from "react-redux";
import { setFilter, resetFilters } from "../../features/places/PlacesSlice";
import { applyFilters } from "../../features/places/filtersThunks";
import { toggleLike, toggleFavorite } from "../../features/places/likesThunks";
import {
  selectFilteredPlaces,
  selectCities,
  selectCategories,
} from "../../features/places/placesSelectors";
import { selectCurrentUser } from "../../features/auth/authSelectors";
function ExplorePage() {
  const dispatch = useDispatch();

  // Sélecteurs
  const places = useSelector(selectFilteredPlaces);
  const cities = useSelector(selectCities);
  const categories = useSelector(selectCategories);
  const user = useSelector(selectCurrentUser); // ← Récupérer l'utilisateur

  const handleCityChange = (city) => {
    dispatch(setFilter({ key: "city", value: city }));
    dispatch(applyFilters());
  };

  const handleCategoryChange = (category) => {
    dispatch(setFilter({ key: "category", value: category }));
    dispatch(applyFilters());
  };

  const handleLike = (placeId) => {
    if (!user) {
      alert("Connectez-vous pour liker");
      return;
    }
    dispatch(toggleLike({ placeId, userId: user.id })); // ← Utiliser le vrai user
  };

  const handleFavorite = (placeId) => {
    if (!user) {
      alert("Connectez-vous pour ajouter aux favoris");
      return;
    }
    dispatch(toggleFavorite({ placeId, userId: user.id }));
  };

  const handleReset = () => {
    dispatch(resetFilters());
    dispatch(applyFilters());
  };

  return (
    <div className="explore-page">
      <h1> Explorer les lieux</h1>

      <div className="filters">
        <select onChange={(e) => handleCityChange(e.target.value)}>
          <option value="all">Toutes les villes</option>
          {cities.map((city) => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
        </select>

        <select onChange={(e) => handleCategoryChange(e.target.value)}>
          <option value="all">Toutes les catégories</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>

        <button onClick={handleReset}>Réinitialiser les filtres</button>

        {user && (
          <div className="user-info">
            Connecté en tant que: <strong>{user.role}</strong>
          </div>
        )}
      </div>

      {/* Liste des lieux */}
      <div className="places-grid">
        {places.map((place) => (
          <div key={place.id} className="place-card">
            <h3>{place.name}</h3>
            <p>
              {place.city} • ⭐ {place.rating}
            </p>
            <p>{place.category}</p>
            <p>{place.description}</p>

            {/* Actions */}
            <div className="place-actions">
              <button
                onClick={() => handleLike(place.id)}
                className={`like-btn ${
                  place.userLikes?.includes(user?.id) ? "liked" : ""
                }`}
              >
                👍 {place.likes || 0}
              </button>

              <button
                onClick={() => handleFavorite(place.id)}
                className={`favorite-btn ${
                  place.favorites?.includes(user?.id) ? "favorited" : ""
                }`}
              >
                {place.favorites?.includes(user?.id) ? "❤️" : "🤍"} Favori
              </button>
            </div>

            {/* État */}
            {user ? (
              <small>
                Vous avez{" "}
                {place.userLikes?.includes(user.id) ? "liké" : "pas liké"} ce
                lieu •
                {place.favorites?.includes(user.id)
                  ? " Dans vos favoris"
                  : " Pas dans favoris"}
              </small>
            ) : (
              <small className="auth-required">
                Connectez-vous pour liker ou ajouter aux favoris
              </small>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ExplorePage;
