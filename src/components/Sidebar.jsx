import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaUserCircle, FaHome, FaSignOutAlt, FaCogs, FaBox, FaChartBar, FaUser, FaStar } from "react-icons/fa";

export default function Sidebar() {
  const [userName, setUserName] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    // Get user details from localStorage
    const user = JSON.parse(localStorage.getItem("user"));
    if (user && user.fullName) {
      setUserName(user.fullName); // Set the username
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    navigate("/"); // Redirect to login
  };

  return (
    <div style={styles.sidebar}>
      {/* Admin Info */}
      <div style={styles.userInfo}>
        <FaUserCircle size={50} color="#199FB1" />
        <h4 style={styles.userName}>{userName || "Admin"}</h4>
        <p style={styles.userRole}>Administrator</p>
      </div>

      {/* Navigation Links */}
      <nav>
        <ul style={styles.navList}>
          <li><Link to="/admin/models" style={styles.link}><FaBox /> Models</Link></li>
          <li><Link to="/admin/products" style={styles.link}><FaHome /> Products</Link></li>
          <li><Link to="/admin/ratings" style={styles.link}><FaStar /> Ratings and Reviews</Link></li>
          <li><Link to="/admin/settings" style={styles.link}><FaCogs /> Settings</Link></li>
          <li><Link to="/admin/reports" style={styles.link}><FaChartBar /> Reports</Link></li>
          <li><Link to="/admin/profile" style={styles.link}><FaUser /> Profile</Link></li>
          <li><button onClick={handleLogout} style={styles.logoutBtn}><FaSignOutAlt /> Logout</button></li>
        </ul>
      </nav>
    </div>
  );
}

const styles = {
  sidebar: {
    width: "250px",
    height: "100vh",
    backgroundColor: "white", // Background is white
    color: "#199FB1",
    padding: "20px",
    position: "fixed",
    top: 0,
    left: 0,
    boxShadow: "2px 0px 10px rgba(0,0,0,0.1)",
  },
  userInfo: {
    textAlign: "center",
    marginBottom: "20px",
  },
  userName: {
    margin: "10px 0 5px",
    fontSize: "18px",
    fontWeight: "bold",
    color: "#199FB1",
  },
  userRole: {
    fontSize: "14px",
    color: "#666",
  },
  navList: {
    listStyleType: "none",
    padding: 0,
  },
  link: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    padding: "12px",
    color: "#199FB1",
    textDecoration: "none",
    fontWeight: "bold",
    borderRadius: "5px",
    transition: "0.3s",
  },
  logoutBtn: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    width: "100%",
    padding: "12px",
    color: "white",
    backgroundColor: "#d9534f",
    border: "none",
    borderRadius: "5px",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "0.3s",
  },
};
