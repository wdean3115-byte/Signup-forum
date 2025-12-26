import React from "react";
export function Step1({ next }) {
  return (
    <>
      <div className="w-screen h-screen bg-white flex items-center justify-center ">
        <div className="w-[480px] h-[655px] bg-white rounded-md flex flex-col items-center gap-8 ">
          <div className="formheader">
            {/* <PineconeLogo /> */}
            <p className="text-[26px]">Join Us!😎</p>
            <p className="text-[18px] text-[#8E8E8E]">
              Please provide all current information accurately.
            </p>
          </div>
          <div className="flex flex-col gap-40">
            <div className="flex flex-col gap-[20px]">
              <div>
                <div className="flex gap-[4px]">
                  <p>First Name</p>
                  <p className="text-[red]">*</p>
                </div>
                <input
                  type="text"
                  placeholder="Placeholder"
                  className="border-2 border-gray-200 focus:border-pink-600 rounded-md w-[416px] h-[44px]"
                />
              </div>
              <div>
                <div className="flex gap-[4px]">
                  <p>Last name</p>
                  <p className="text-[red]">*</p>
                </div>
                <input
                  type="text"
                  placeholder="Placeholder"
                  className="border-2 border-gray-200 focus:border-pink-600 rounded-md w-[416px] h-[44px]"
                />
              </div>
              <div>
                <div className="flex gap-[4px]">
                  <p>Username</p>
                  <p className="text-[red]">*</p>
                </div>
                <input
                  type="text"
                  placeholder="Placeholder"
                  className="border-2 border-gray-200 focus:border-pink-600 rounded-md w-[416px] h-[44px]"
                />
              </div>
            </div>

            <button
              className="bg-black text-white w-[416px] h-[44px] rounded-md items-center justify-center"
              onClick={next}
            >
              Continue 1/3
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
