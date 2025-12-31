import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadPlaces } from "../PlacesSlice";

export default function PlacesList() {
  const dispatch = useDispatch();
  const { list, status, error } = useSelector(state => state.places);

  useEffect(() => {
    dispatch(loadPlaces({ term: "cafe", lat: 35.7595, lng: -5.8339 }));
  }, [dispatch]);

  if (status === "loading") return <p>Chargement...</p>;
  if (status === "failed") return <p>Erreur: {error}</p>;

  return (
    <div>
      {list.map(place => (
        <div key={place.id}>
          <h3>{place.name}</h3>
          <p>⭐ {place.rating}</p>
          <img src={place.image} width="200" alt={place.name} />
          <p>{place.address}</p>
          <p>{place.categories}</p>
        </div>
      ))}
    </div>
  );
}


