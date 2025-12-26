import React, { useState } from "react";

export function Step2({ next, back, formData, setFormData }) {
  // Local state for basic validation or handling inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="w-screen h-screen bg-gray-100 flex items-center justify-center">
      <div className="w-[480px] h-[655px] bg-white rounded-xl shadow-lg flex flex-col items-center p-8 gap-8">
        
        <div className="text-center">
          <p className="text-[26px] font-bold">Join Us! 😎</p>
          <p className="text-[18px] text-gray-500">
            Please provide all current information accurately.
          </p>
        </div>

        <div className="flex flex-col w-full gap-6">
          {/* Input Fields Container */}
          <div className="flex flex-col gap-4">
            
            {/* Email Field */}
            <InputField 
              label="Email" 
              name="email" 
              type="email" 
              value={formData?.email} 
              onChange={handleChange} 
            />

            {/* Phone Number Field */}
            <InputField 
              label="Phone Number" 
              name="phone" 
              type="text" 
              value={formData?.phone} 
              onChange={handleChange} 
            />

            {/* Password Field */}
            <InputField 
              label="Password" 
              name="password" 
              type="password" 
              value={formData?.password} 
              onChange={handleChange} 
            />

            {/* Confirm Password Field */}
            <InputField 
              label="Confirm Password" 
              name="confirmPassword" 
              type="password" 
              value={formData?.confirmPassword} 
              onChange={handleChange} 
            />
          </div>

          {/* Navigation Buttons */}
          <div className="flex gap-3 mt-4">
            <button
              onClick={back}
              className="flex-1 h-11 border-2 border-gray-300 rounded-md hover:bg-gray-50 transition"
            >
              Back
            </button>
            <button
              onClick={next}
              className="flex-[2] bg-black text-white h-11 rounded-md hover:bg-gray-800 transition"
            >
              Continue 2/3
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// Reusable Input Component to keep code clean
function InputField({ label, name, type, value, onChange }) {
  return (
    <div className="w-full">
      <div className="flex gap-1 mb-1">
        <p className="text-sm font-medium text-gray-700">{label}</p>
        <p className="text-red-500">*</p>
      </div>
      <input
        name={name}
        type={type}
        value={value || ""}
        onChange={onChange}
        placeholder="Your information"
        className="border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none rounded-md w-full h-[44px] px-3 transition"
      />
    </div>
  );
}