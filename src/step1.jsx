import React, { useState } from "react";

export function Step1({ next }) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const styles = {
    // THIS PART MAKES IT FULL SCREEN
    screenContainer: {
      backgroundColor: "#121212", // Dark background
      width: "100vw",             // 100% Viewport Width
      height: "100vh",            // 100% Viewport Height
      display: "flex",
      alignItems: "center",       // Vertical center
      justifyContent: "center",    // Horizontal center
      margin: 0,
      padding: 0,
      fontFamily: "'Inter', sans-serif",
      overflow: "hidden",         // Prevents scrolling
    },
    card: {
      backgroundColor: "#1e1e1e",
      width: "100%",
      maxWidth: "480px",
      padding: "48px",
      borderRadius: "32px",
      boxShadow: "0 0 60px rgba(255, 20, 147, 0.1)",
      border: "1px solid rgba(255, 255, 255, 0.05)",
      position: "relative",
      color: "white",
    },
    progressBar: {
      position: "absolute",
      top: 0,
      left: 0,
      height: "6px",
      width: "33%",
      backgroundColor: "#FF1493",
      boxShadow: "0 0 20px #FF1493",
      borderRadius: "32px 0 0 0",
    },
    inputGroup: {
      marginBottom: "20px",
      display: "flex",
      flexDirection: "column",
      gap: "8px",
    },
    label: {
      fontSize: "11px",
      fontWeight: "700",
      color: "#8E8E8E",
      letterSpacing: "1px",
      textTransform: "uppercase",
    },
    input: {
      width: "100%",
      height: "56px",
      backgroundColor: "#262626",
      border: "1px solid #333",
      borderRadius: "16px",
      padding: "0 20px",
      color: "white",
      fontSize: "16px",
      outline: "none",
      transition: "border 0.3s ease",
    },
    button: {
      width: "100%",
      height: "60px",
      background: "#D81B60",
      border: "none",
      borderRadius: "18px",
      color: "white",
      fontWeight: "bold",
      fontSize: "18px",
      cursor: "pointer",
      marginTop: "24px",
      boxShadow: "0 10px 20px rgba(216, 27, 96, 0.3)",
    }
  };

  return (
    <div style={styles.screenContainer}>
      <div style={styles.card}>
        <div style={styles.progressBar}></div>
        
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <p style={{ color: "#FF1493", fontSize: "12px", fontWeight: "800", letterSpacing: "2px" }}>STEP 1 OF 3</p>
          <h2 style={{ fontSize: "36px", fontWeight: "800", margin: "10px 0" }}>Join Us! 😎</h2>
          <p style={{ color: "#8E8E8E", fontSize: "15px" }}>Please provide all current information accurately.</p>
        </div>

        <div style={styles.inputGroup}>
          <label style={styles.label}>First Name *</label>
          <input
            style={styles.input}
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="Your first name"
          />
        </div>

        <div style={styles.inputGroup}>
          <label style={styles.label}>Last Name *</label>
          <input
            style={styles.input}
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Your last name"
          />
        </div>

        <div style={styles.inputGroup}>
          <label style={styles.label}>Username *</label>
          <input
            style={styles.input}
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="Username"
          />
        </div>

        <button 
          style={styles.button} 
          onClick={() => next(formData)}
          onMouseOver={(e) => e.target.style.filter = "brightness(1.1)"}
          onMouseOut={(e) => e.target.style.filter = "brightness(1)"}
        >
          Continue 1/3
        </button>
      </div>
    </div>
  );
}
