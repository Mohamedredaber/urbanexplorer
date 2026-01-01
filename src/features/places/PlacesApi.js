import axios from 'axios';
const API_URL ="http://localhost:5000/api/places" ; 
export const fetchPlaces = async (term ,lat,lng) =>{
  const response = await axios.get(API_URL,{
    params : {term , lat ,lng}
  })
  return response.data
}