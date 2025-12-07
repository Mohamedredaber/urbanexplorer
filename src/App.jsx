import './App.css'
import places from "./data/Places.json"
import PlacesList from './components/PlacesList/PlacesList'
function App() {
  // console.log(places.length)
  return (
    <>
      <h1>hello hamid</h1>
      <PlacesList placesimport ={places}/>
    </>
  )
}

export default App
