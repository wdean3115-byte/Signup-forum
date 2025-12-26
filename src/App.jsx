import React, { useState } from "react";

export default function SignupApp() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: "", lastName: "", username: "",
    email: "", phone: "", password: "", confirmPassword: "",
    birthDate: "", bio: ""
  });

  const next = () => setStep(step + 1);
  const back = () => setStep(step - 1);

  return (
    <div style={globalStyles.screen}>
      {step === 1 && <Step1 next={next} formData={formData} setFormData={setFormData} />}
      {step === 2 && <Step2 next={next} back={back} formData={formData} setFormData={setFormData} />}
      {step === 3 && <Step3 back={back} formData={formData} setFormData={setFormData} />}
    </div>
  );
}

// --- STEP 1 ---
function Step1({ next, formData, setFormData }) {
  return (
    <div style={globalStyles.card}>
      <div style={{...globalStyles.progress, width: "33%"}}></div>
      <h2 style={globalStyles.title}>Join Us! 😎</h2>
      <p style={globalStyles.subtitle}>Step 1: Personal Info</p>
      
      <Input label="First Name" name="firstName" data={formData} setter={setFormData} />
      <Input label="Last Name" name="lastName" data={formData} setter={setFormData} />
      <Input label="Username" name="username" data={formData} setter={setFormData} />
      
      <button style={globalStyles.btn} onClick={next}>Continue 1/3</button>
    </div>
  );
}

// --- STEP 2 (The one that wasn't working) ---
function Step2({ next, back, formData, setFormData }) {
  return (
    <div style={globalStyles.card}>
      <div style={{...globalStyles.progress, width: "66%"}}></div>
      <h2 style={globalStyles.title}>Almost there! 🚀</h2>
      <p style={globalStyles.subtitle}>Step 2: Contact Details</p>
      
      <Input label="Email" name="email" type="email" data={formData} setter={setFormData} />
      <Input label="Phone" name="phone" data={formData} setter={setFormData} />
      <Input label="Password" name="password" type="password" data={formData} setter={setFormData} />
      
      <div style={{display: "flex", gap: "10px", marginTop: "20px"}}>
        <button style={globalStyles.backBtn} onClick={back}>Back</button>
        <button style={globalStyles.btn} onClick={next}>Continue 2/3</button>
      </div>
    </div>
  );
}

// --- STEP 3 ---
function Step3({ back, formData, setFormData }) {
  return (
    <div style={globalStyles.card}>
      <div style={{...globalStyles.progress, width: "100%"}}></div>
      <h2 style={globalStyles.title}>Finish! ✅</h2>
      <Input label="Birth Date" name="birthDate" type="date" data={formData} setter={setFormData} />
      <button style={globalStyles.backBtn} onClick={back}>Back</button>
      <button style={globalStyles.btn} onClick={() => alert("Done!")}>Submit</button>
    </div>
  );
}

// --- REUSABLE INPUT ---
function Input({ label, name, type = "text", data, setter }) {
  return (
    <div style={{marginBottom: "15px", textAlign: "left", width: "100%"}}>
      <label style={globalStyles.label}>{label.toUpperCase()}</label>
      <input
        type={type}
        value={data[name] || ""}
        onChange={(e) => setter({...data, [name]: e.target.value})}
        style={globalStyles.input}
      />
    </div>
  );
}

// --- GUARANTEED STYLES ---
const globalStyles = {
  screen: {
    backgroundColor: "#121212",
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "sans-serif",
    margin: 0
  },
  card: {
    backgroundColor: "#1e1e1e",
    padding: "40px",
    borderRadius: "24px",
    width: "400px",
    textAlign: "center",
    position: "relative",
    border: "1px solid #333",
    boxShadow: "0 10px 30px rgba(0,0,0,0.5)"
  },
  progress: {
    position: "absolute", top: 0, left: 0, height: "4px", backgroundColor: "#FF1493", boxShadow: "0 0 10px #FF1493"
  },
  title: { color: "white", marginBottom: "5px" },
  subtitle: { color: "#8E8E8E", fontSize: "14px", marginBottom: "25px" },
  label: { color: "#FF1493", fontSize: "10px", fontWeight: "bold", display: "block", marginBottom: "5px" },
  input: {
    width: "100%", height: "45px", backgroundColor: "#262626", border: "1px solid #444", borderRadius: "8px", color: "white", padding: "0 10px", boxSizing: "border-box"
  },
  btn: {
    width: "100%", height: "50px", backgroundColor: "#D81B60", color: "white", border: "none", borderRadius: "12px", fontWeight: "bold", cursor: "pointer", marginTop: "10px"
  },
  backBtn: {
    width: "100%", height: "50px", backgroundColor: "transparent", border: "1px solid #444", color: "#8E8E8E", borderRadius: "12px", cursor: "pointer", marginTop: "10px"
  }
};
