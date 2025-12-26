import React, { useState } from "react";

export function Step1({ next }) {
  // 1. Local state to handle input data
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="w-screen h-screen bg-[#F4F4F4] flex items-center justify-center font-sans">
      <div className="w-[480px] p-10 bg-white rounded-xl shadow-sm flex flex-col gap-8">
        
        {/* Header */}
        <div className="flex flex-col gap-2">
          <h2 className="text-[26px] font-semibold text-gray-900">Join Us! 😎</h2>
          <p className="text-[18px] text-[#8E8E8E]">
            Please provide all current information accurately.
          </p>
        </div>

        {/* Form Fields */}
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-5">
            
            {/* First Name */}
            <div className="flex flex-col gap-2">
              <label className="flex gap-1 text-sm font-medium text-gray-700">
                First Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="Your first name"
                className="px-3 border-2 border-gray-200 focus:border-pink-600 outline-none rounded-md w-full h-[44px] transition-all"
              />
            </div>

            {/* Last Name */}
            <div className="flex flex-col gap-2">
              <label className="flex gap-1 text-sm font-medium text-gray-700">
                Last Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Your last name"
                className="px-3 border-2 border-gray-200 focus:border-pink-600 outline-none rounded-md w-full h-[44px] transition-all"
              />
            </div>

            {/* Username */}
            <div className="flex flex-col gap-2">
              <label className="flex gap-1 text-sm font-medium text-gray-700">
                Username <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                placeholder="Username"
                className="px-3 border-2 border-gray-200 focus:border-pink-600 outline-none rounded-md w-full h-[44px] transition-all"
              />
            </div>
          </div>

          {/* Action Button */}
          <button
            className="mt-4 bg-black hover:bg-gray-800 text-white w-full h-[44px] rounded-md flex items-center justify-center font-medium transition-colors"
            onClick={() => next(formData)} // Passes data to the parent component
          >
            Continue 1/3
          </button>
        </div>
      </div>
    </div>
  );
}