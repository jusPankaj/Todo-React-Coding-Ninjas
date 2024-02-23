import React from "react";

const Navbar = () => {
  return (
    <div style={styles.container}>
      {/* <img src="" alt="logo" /> */}
      <h1 style={styles.center}>Todo-List Application</h1>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    height: "10vh",
    width: "100vw",
    margin: "0",
    backgroundColor: "lightblue",
    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
  },
  center: {
    margin: "auto"
  }
};

export default Navbar;
