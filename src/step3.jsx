import React from "react";

export function Step3({ next, back, formData, setFormData }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const styles = {
    wrapper: {
      minHeight: "100vh",
      width: "100vw",
      backgroundColor: "#121212",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      margin: 0,
      padding: 0,
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
    progressBar: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "6px",
      backgroundColor: "rgba(255, 255, 255, 0.05)",
    },
    progressFill: {
      height: "100%",
      width: "100%", // 100% for the final step
      backgroundColor: "#FF1493",
      boxShadow: "0 0 15px #FF1493",
      transition: "width 0.5s ease",
    },
    textarea: {
      width: "100%",
      height: "120px",
      backgroundColor: "#262626",
      border: "1px solid #333",
      borderRadius: "16px",
      color: "white",
      padding: "15px 20px",
      fontSize: "16px",
      outline: "none",
      boxSizing: "border-box",
      resize: "none",
    }
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.card}>
        {/* Progress Bar */}
        <div style={styles.progressBar}>
          <div style={styles.progressFill}></div>
        </div>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "30px" }}>
          <p style={{ color: "#FF1493", fontSize: "11px", fontWeight: "900", letterSpacing: "2px", margin: 0 }}>STEP 3 OF 3</p>
          <h2 style={{ color: "white", fontSize: "36px", fontWeight: "800", margin: "10px 0" }}>Join Us! 😎</h2>
          <p style={{ color: "#8E8E8E", fontSize: "14px", margin: 0 }}>Almost there! Just one last step.</p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          
          <InputField 
            label="Date of Birth" 
            name="birthDate" 
            type="date" 
            value={formData?.birthDate} 
            onChange={handleChange} 
          />

          <div style={{ width: "100%" }}>
            <div style={{ display: "flex", gap: "4px", marginBottom: "8px", marginLeft: "4px" }}>
              <p style={{ color: "#8E8E8E", fontSize: "11px", fontWeight: "bold", margin: 0, letterSpacing: "1px" }}>ABOUT YOU</p>
              <p style={{ color: "#FF1493", margin: 0 }}>*</p>
            </div>
            <textarea
              name="bio"
              value={formData?.bio || ""}
              onChange={handleChange}
              placeholder="Tell us a bit about yourself"
              style={styles.textarea}
            />
          </div>

          {/* Navigation Buttons */}
          <div style={{ display: "flex", gap: "15px", marginTop: "10px" }}>
            <button
              onClick={back}
              style={{
                flex: 1,
                height: "60px",
                backgroundColor: "transparent",
                border: "1px solid #333",
                color: "#8E8E8E",
                borderRadius: "20px",
                fontWeight: "bold",
                cursor: "pointer"
              }}
            >
              Back
            </button>
            <button
              onClick={() => alert("Registration Complete!")}
              style={{
                flex: 2,
                height: "60px",
                backgroundColor: "#D81B60",
                border: "none",
                color: "white",
                borderRadius: "20px",
                fontWeight: "bold",
                fontSize: "18px",
                boxShadow: "0 10px 25px rgba(216, 27, 96, 0.3)",
                cursor: "pointer"
              }}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function InputField({ label, name, type, value, onChange }) {
  return (
    <div style={{ width: "100%" }}>
      <div style={{ display: "flex", gap: "4px", marginBottom: "8px", marginLeft: "4px" }}>
        <p style={{ color: "#8E8E8E", fontSize: "11px", fontWeight: "bold", margin: 0, letterSpacing: "1px" }}>{label.toUpperCase()}</p>
        <p style={{ color: "#FF1493", margin: 0 }}>*</p>
      </div>
      <input
        name={name}
        type={type}
        value={value || ""}
        onChange={onChange}
        style={{
          width: "100%",
          height: "56px",
          backgroundColor: "#262626",
          border: "1px solid #333",
          borderRadius: "16px",
          color: "white",
          padding: "0 20px",
          fontSize: "16px",
          outline: "none",
          boxSizing: "border-box",
          colorScheme: "dark" // Ensures the calendar icon and picker are dark
        }}
      />
    </div>
  );
}
