import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

function AdminLayout() {
  return (
    <div className="d-flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content Area */}
      <div className="flex-grow-1">
        {/* Navbar */}
        <Navbar />

        {/* Page Content */}
        <div className="p-3">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default AdminLayout;
