export default function Navbar() {
    return (
      <div style={styles.navbar}>
        <h1>Admin Panels Task</h1>
      </div>
    );
  }
  
  const styles = {
    navbar: {
      width: "100%",
      height: "60px",
      backgroundColor: "white",
      color: "#199FB1",
      display: "flex",
      alignItems: "center",
      paddingLeft: "20px",
      position: "fixed",
      top: 0,
      left: "250px",
      right: 0,
    },
  };
  