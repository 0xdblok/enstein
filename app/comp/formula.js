import React from "react";

export default function Formula() {
  return (
    <div className="lg:px-12 font-  px-4 pt-2">
      <div className="flex gap-2 md:w-1/2   ">
        <div className="text-center md:h-[140px] lg:h-[180px] xl:h-[215px] h-[110px]  w-[140px]  bg-[#EDA1C7] lg:p-10 p-4  md:w-1/2  md:border-4 border-2 border-black rounded-xl">
          <h2 className="font-extrabold text-[11px]  md:text-[15px] lg:text-[19px] xl:text-[24px] text-nowrap">
            MAGIC FORMULA
          </h2>
          <p className="pt-3 ont-semibold text-[12px]  md:text-[15px] lg:text-[17px] xl:text-[20px]">
            1+1
          </p>
          <p className="text-[12px] md:text-[15px] lg:text-[17px] xl:text-[20px]">
            2=1=123?
          </p>
          <p className="text-[12px] md:text-[15px] lg:text-[17px] xl:text-[20px]">
            6^3+12=29
          </p>
        </div>
        <div className="text-center md:h-[140px] lg:h-[180px] xl:h-[215px] h-[110px] w-[140px] bg-[#2BB697] lg:p-10 p-4  md:w-1/2 md:border-4 border-2 border-black rounded-xl">
          <h2 className="font-extrabold text-[11px] md:text-[15px] lg:text-[19px] xl:text-[24px]">
            Solution
          </h2>
          <p className="pt-3 text-[12px] md:text-[15px] lg:text-[17px] xl:text-[20px]">
            E=MC^2
          </p>
        </div>
      </div>
    </div>
  );
}
