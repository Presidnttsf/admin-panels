import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Models from "../pages/Models";
import ProductManagement from "../pages/ProductManagement";
import Settings from "../pages/Settings";
import Reports from "../pages/Reports";
import Profile from "../pages/Profile";
import AdminLayout from "../layout/AdminLayout";
import CreateAccount from "../pages/CreateAccount";
import Login from "../pages/Login";
import RatingsAndReviews from "../pages/RatingsAndReviews";

export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        {/* Public Route */}
        <Route path="/create-account" element={<CreateAccount />} />
        <Route path="/" element={<Login />} />

        {/* Admin Routes */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="models" element={<Models />} />
          <Route path="products" element={<ProductManagement />} />
          <Route path="settings" element={<Settings />} />
          <Route path="reports" element={<Reports />} />
          <Route path="profile" element={<Profile />} />
          <Route path="ratings" element={<RatingsAndReviews />} />
        </Route>
      </Routes>
    </Router>
  );
}
