// import { useEffect, useState } from "react"
import "./PlacesList.css"
import PlacesListe from '../../data/Places.json'
import ListePlaces from "../Filter/listeplaces/ListePlaces"
import FormFilter from "../Filter/FormFilter"
function PlacesList() {

  return (
    <div >
        <FormFilter/>
        <ListePlaces/>
  
        
    </div>
  )
}

export default PlacesList