import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import ExplorePage from "./pages/explorepage/ExplorePage";
import Login from "./features/auth/components/Login";
import NotFound from "./pages/NotFound/NotFound";
import AdminDashboard from "./features/auth/components/AdminDashboard";
import UserDashboard from "./features/auth/components/UserDashboard";
import EntrepriseDashboard from "./features/auth/components/EntrepriseDashboard";
import ProtectedRoute from "./approutes/ProtectedRoute";
import AdminRoute from "./approutes/AdminRoute";
import UserRoute from "./approutes/UserRoute";
import EntrepriseRoute from "./approutes/EntrepriseRoute";
import Register from "./pages/register/Register";
import MapPage from "./pages/mappage/MapPage";
function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<ExplorePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/register" element={<Register />} />
         <Route path="/map" element={<MapPage />} />
        <Route path="/login" element={<Login />} />
           <Route element={<ProtectedRoute />}>
          <Route element={<UserRoute />}>
            <Route path="/user" element={<UserDashboard />} />
          </Route>
          <Route element={<EntrepriseRoute />}>
            <Route path="/entreprise" element={<EntrepriseDashboard />} />
          </Route>
          <Route element={<AdminRoute />}>
            <Route path="/admin" element={<AdminDashboard />} />
          </Route>
        </Route>
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
