// OverpassFetch.js
import React, { useEffect, useState } from "react";
import osmtogeojson from "osmtogeojson";

export default function OverpassFetch() {
  const [geojson, setGeojson] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      setError(null);

      // 1) La "question" Overpass (bbox d'exemple)
      const query = `
        [out:json][timeout:25];
        node["amenity"="cafe"](34.75,-6.80,34.80,-6.72);
        out body;
      `;

      try {
        // 2) Envoi en POST à l'instance publique Overpass
        const res = await fetch("https://overpass-api.de/api/interpreter", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: "data=" + encodeURIComponent(query),
        });

        if (!res.ok) throw new Error("HTTP " + res.status);

        const overpassJson = await res.json();

        // 3) Conversion Overpass -> GeoJSON
        const gj = osmtogeojson(overpassJson);

        setGeojson(gj);
        console.log("GeoJSON:", gj); // regarde dans la console pour vérifier
      } catch (err) {
        setError(err.message);
        console.error("Erreur Overpass:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  return (
    <div>
      <h3>Récupération Overpass (cafés)</h3>
      {loading && <p>Chargement…</p>}
      {error && <p style={{ color: "red" }}>Erreur : {error}</p>}
      {geojson && <p>Résultats reçus — regarde la console (console.log)</p>}
    </div>
  );
}
