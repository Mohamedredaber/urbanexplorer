import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useSelector } from "react-redux";

function MapView() {
    const places = useSelector(state =>state.places.list)
  return (
    <MapContainer
      center={[35.7595, -5.8339]}
      zoom={13}
      style={{ height: "400px", width: "100%" }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {places.map((p) => (
        <Marker key={p.id} position={[p.lat, p.lng]}>
          <Popup>
            <strong>{p.name}</strong> <br />
            {p.category} - ⭐ {p.rating}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
export default MapView;
