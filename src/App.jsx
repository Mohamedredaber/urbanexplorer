import { Route,Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout/Layout";
import Home from './pages/Home/Home.jsx'
import NotFound from './pages/NotFound/NotFound.jsx'
import Explore from "./pages/PlacesPage/Explore.jsx";
import About from './pages/About/About.jsx'
function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/about" element={<About />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
