import { Route,Routes } from "react-router-dom";
import "./App.css";

import Layout from "./components/Layout/Layout";
import Home from "./components/Home/Home";
import NotFound from './components/NotFound/NotFound.jsx'
import PlacesList from "./components/PlacesList/PlacesList.jsx";
import About from "./components/About/About.jsx";
function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
        
          <Route path="/" element={<Home />} />
          <Route path="/lieux" element={<PlacesList />} />
          <Route path="/about" element={<About />} />
        </Route>


        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
