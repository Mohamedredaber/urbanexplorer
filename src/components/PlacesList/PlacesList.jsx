import { useEffect, useState } from "react"
import "./PlacesList.css"
import PlacesListe from '../../data/Places.json'
function PlacesList() {
  const [places,setplaces]=useState([])
  useEffect(()=>{
    const setp = ()=>{
      setplaces(PlacesListe)
    }
    setp()
  },[])
  return (
    <div >

      <h2>Découvrez des lieux</h2>
        
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