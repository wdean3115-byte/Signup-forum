import React from "react";

export function Step2({ next, back, formData, setFormData }) {
  
  // This is the function that makes typing work
  const handleChange = (e) => {
    const { name, value } = e.target;
    // It updates the state in the Parent component
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const styles = {
    wrapper: {
      minHeight: "100vh",
      width: "100vw",
      backgroundColor: "#121212",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "sans-serif",
    },
    card: {
      position: "relative",
      width: "100%",
      maxWidth: "480px",
      padding: "40px",
      backgroundColor: "#1e1e1e",
      borderRadius: "32px",
      border: "1px solid rgba(255, 255, 255, 0.05)",
      boxShadow: "0 20px 50px rgba(0, 0, 0, 0.5)",
      overflow: "hidden",
    },
    input: {
      width: "100%",
      height: "56px",
      backgroundColor: "#262626",
      border: "1px solid #333",
      borderRadius: "16px",
      color: "white",
      padding: "0 20px",
      fontSize: "16px",
      outline: "none",
      boxSizing: "border-box", // Important to keep input inside the card
    }
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.card}>
        
        {/* Progress Bar (66%) */}
        <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "6px", backgroundColor: "#333" }}>
          <div style={{ height: "100%", width: "66%", backgroundColor: "#FF1493", boxShadow: "0 0 15px #FF1493" }}></div>
        </div>

        <div style={{ textAlign: "center", marginBottom: "30px" }}>
          <p style={{ color: "#FF1493", fontSize: "11px", fontWeight: "bold", letterSpacing: "2px" }}>STEP 2 OF 3</p>
          <h2 style={{ color: "white", fontSize: "36px", margin: "10px 0" }}>Contact Info</h2>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          
          {/* Email Input */}
          <div>
            <label style={{ color: "#8E8E8E", fontSize: "11px", fontWeight: "bold", display: "block", marginBottom: "8px" }}>EMAIL *</label>
            <input
              style={styles.input}
              name="email"
              type="email"
              placeholder="example@mail.com"
              value={formData?.email || ""} // Pulls the value from Parent State
              onChange={handleChange}      // Updates the Parent State
            />
          </div>

          {/* Phone Input */}
          <div>
            <label style={{ color: "#8E8E8E", fontSize: "11px", fontWeight: "bold", display: "block", marginBottom: "8px" }}>PHONE NUMBER *</label>
            <input
              style={styles.input}
              name="phone"
              type="text"
              placeholder="+1 234 567 890"
              value={formData?.phone || ""}
              onChange={handleChange}
            />
          </div>

          {/* Password Input */}
          <div>
            <label style={{ color: "#8E8E8E", fontSize: "11px", fontWeight: "bold", display: "block", marginBottom: "8px" }}>PASSWORD *</label>
            <input
              style={styles.input}
              name="password"
              type="password"
              placeholder="••••••••"
              value={formData?.password || ""}
              onChange={handleChange}
            />
          </div>

          {/* Buttons */}
          <div style={{ display: "flex", gap: "15px", marginTop: "10px" }}>
            <button onClick={back} style={{ flex: 1, height: "60px", background: "none", border: "1px solid #333", color: "white", borderRadius: "20px", cursor: "pointer" }}>
              Back
            </button>
            <button onClick={next} style={{ flex: 2, height: "60px", backgroundColor: "#D81B60", border: "none", color: "white", borderRadius: "20px", fontWeight: "bold", cursor: "pointer" }}>
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
