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
import Users from "./features/admin/components/Users";
import Places from "./features/admin/components/Places";
import Settings from "./features/admin/components/Settings";
import AddPlace from "./features/admin/components/AddPlace";
import AddUser from "./features/admin/components/AddUser";
import Dashboard from "./features/admin/components/Dashboard";
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
      
            <Route element={<AdminRoute />}>
              <Route path="/admin" element={<AdminDashboard />}>
                <Route index element={<Dashboard />} />
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="users" element={<Users />} />
                <Route path="users/add" element={<AddUser />} />
                <Route path="places" element={<Places />} />
                <Route path="places/add" element={<AddPlace />} />
                <Route path="settings" element={<Settings />} />
              </Route>
            </Route>
          </Route>
        </Route>
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
