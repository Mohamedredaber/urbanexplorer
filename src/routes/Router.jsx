import { Route, Routes } from "react-router-dom";
import Home from "../Home";
import PlacesList from "../components/PlacesList/PlacesList";
import MapView from "../components/MapView/MapView";
import About from "../components/About/About";
function Router() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lieux" element={<PlacesList />} />
        <Route path="/map" element={<MapView />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default Router;
