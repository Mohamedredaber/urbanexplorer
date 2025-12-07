import { useEffect, useState } from "react"
import "./PlacesList.css"

function PlacesList({placesimport}) {
  const [places,setplaces]=useState([])
  useEffect(()=>{
    setplaces(placesimport)
  },[])
  return (
    <div >
      <h2>Liste des lieux</h2>
      <ul>
        {places.map((place) => (
          <li key={place.id}>
            <strong>{place.name}</strong> <br />
            Catégorie : {place.category} <br />
            Coordonnées : {place.coords.lat}, {place.coords.lng} <br />
            Description : {place.description} <br />
            Rating : {place.rating} ⭐
          </li>
        ))}
      </ul>
    </div>
  )
}

export default PlacesList