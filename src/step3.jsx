import React from "react";

export function Step3({ next, back, formData, setFormData }) {
  
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    // Handle file upload differently than text/date
    if (name === "profileImage") {
      setFormData((prev) => ({ ...prev, [name]: files[0] }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  return (
    <div className="w-screen h-screen bg-gray-100 flex items-center justify-center">
      <div className="w-[480px] h-[655px] bg-white rounded-xl shadow-lg flex flex-col items-center p-8 gap-8">
        
        <div className="text-center">
          <p className="text-[26px] font-bold">Join Us! 😎</p>
          <p className="text-[18px] text-gray-500">
            Almost there! Just a few more details.
          </p>
        </div>

        <div className="flex flex-col w-full gap-10">
          
          {/* Date of Birth Field */}
          <div className="flex flex-col gap-2">
            <div className="flex gap-1">
              <p className="text-sm font-medium">Date of Birth</p>
              <p className="text-red-500">*</p>
            </div>
            <input
              name="dob"
              type="date"
              value={formData?.dob || ""}
              onChange={handleChange}
              className="border border-gray-300 focus:border-pink-600 outline-none rounded-md w-full h-[44px] px-3"
            />
          </div>

          {/* Profile Image Field */}
          <div className="flex flex-col gap-2">
            <div className="flex gap-1">
              <p className="text-sm font-medium">Profile Image</p>
              <p className="text-red-500">*</p>
            </div>
            <div className="relative w-full h-[180px] bg-gray-50 border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center hover:bg-gray-100 transition cursor-pointer">
              <input
                name="profileImage"
                type="file"
                accept="image/*"
                onChange={handleChange}
                className="absolute inset-0 opacity-0 cursor-pointer"
              />
              <span className="text-gray-400 text-4xl mb-2">+</span>
              <p className="text-gray-500 text-sm">
                {formData?.profileImage ? formData.profileImage.name : "Click to upload image"}
              </p>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex gap-3 mt-auto">
            <button
              onClick={back}
              className="w-32 h-11 border-2 border-gray-300 rounded-md hover:bg-gray-50 transition"
            >
              Back
            </button>
            <button
              onClick={next}
              className="flex-1 bg-black text-white h-11 rounded-md hover:bg-gray-800 transition font-semibold"
            >
              Submit 3/3
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}