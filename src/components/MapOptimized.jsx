import React, { useMemo, useCallback } from 'react';
import { MapContainer, TileLayer, GeoJSON, useMapEvents } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import osmtogeojson from 'osmtogeojson';
import useOverpassDebounced from '../hooks/useOverpassDebounced';

const MOROCCO_BBOX = [29.0, -13.5, 35.9, -1.0];
    
function buildOverpassQueryFromBbox(bbox, tag){
  const [s,w,n,e] = bbox;
  return `
    [out:json][timeout:25][maxsize:1073741824];
    (
      node[${tag}](${s},${w},${n},${e});
      way[${tag}](${s},${w},${n},${e});
      relation[${tag}](${s},${w},${n},${e});
    );
    out center;
  `;
}

function MapController({ setQuery, tag }) {
  useMapEvents({
    moveend(e) {
      const m = e.target;
      const bounds = m.getBounds();
      const bbox = [bounds.getSouth(), bounds.getWest(), bounds.getNorth(), bounds.getEast()];
      const q = buildOverpassQueryFromBbox(bbox, tag);
      setQuery(q);
    }
  });
  return null;
}

export default function MapOptimized({ tag='amenity=cafe' }) {
  const { data: overpassJson, loading, error, setQuery } = useOverpassDebounced(null, 700);

  React.useEffect(() => {
    const initial = buildOverpassQueryFromBbox(MOROCCO_BBOX, tag);
    setQuery(initial);
  }, [tag, setQuery]);

  const geojson = useMemo(() => {
    if (!overpassJson) return null;
    try { return osmtogeojson(overpassJson); } 
    catch { return null; }
  }, [overpassJson]);

  const pointToLayer = useCallback((feature, latlng) => {
    return L.circleMarker(latlng, {
      radius: 6,
      weight: 0,
      fillOpacity: 0.8,
      renderer: L.canvas()
    });
  }, []);

  return (
    <div style={{height:'100%'}}>
      {loading && <div className="loader">Chargement…</div>}
      {error && <div className="loader" style={{background:'#fee'}}>Erreur: {error}</div>}

      <MapContainer center={[31.63, -7.99]} zoom={5} style={{height:'100%'}}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution="© OpenStreetMap contributors" />

        <MapController setQuery={setQuery} tag={tag} />

        {geojson && (
          <GeoJSON data={geojson} pointToLayer={pointToLayer} />
        )}
      </MapContainer>
    </div>
  );
}
