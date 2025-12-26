
import React from "react";
export function Step3({ next, back }) {
  return (
    <>
      <div className="w-screen h-screen bg-gray-100 flex items-center justify-center ">
        <div className="w-[480px] h-[655px] bg-white rounded-md flex flex-col items-center gap-2 ">
          <div className="formheader">
        
            <p className="text-[26px]">Join Us!😎</p>
            <p className="text-[18px] text-[#8E8E8E]">
              Please provide all current information accurately.
            </p>
          </div>
          <div className="flex flex-col gap-20">
            <div>
              <div className="flex gap-[4px]">
                <p>Date of Birth</p>
                <p className="text-[red]">*</p>
              </div>
              <input
                type="date"
                placeholder="Placeholder"
                className="border-2 border-gray-200 focus:border-pink-600 rounded-md w-[416px] h-[44px]"
              />
            </div>
            <div>
              <div className="flex gap-[4px]">
                <p>Profile image</p>
                <p className="text-[red]">*</p>
              </div>
              <input
                type="file"
                placeholder="Add image"
                className="border-2 border-gray-200 focus:border-pink-600 rounded-md w-104 h-45"
              />
            </div>
            <div className="flex gap-2">
              <button
                onClick={back}
                className="w-32 h-11 border-2 border-[#CBD5E1] rounded-md"
              >
                Back
              </button>
              <button
                onClick={next}
                className="bg-black text-white w-70 h-11 rounded-md items-center justify-center"
              >
                Sumbit 3/3
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
