import React from "react";
import Image from "next/image";
import supply from "../asset/supply.png";
export default function Supply() {
  return (
    <div className="lg:px-12 px-4 pt-32">
      <div className="p-16 text-center font-semibold font-mono border-4 h-[630px] rounded-lg border-black bg-[#EDA1C7] ">
        <div className="flex justify-center pt-12 ">
          <Image
            src={supply}
            className=""
            alt="Elbert Ensten"
            width="470"
            height="470"
          />
        </div>
        <div>
          <h1 className="pt-28 font-bold md:font-semibold  text-nowrap text-center text-[9px]  md:text-[19px] font-serif   ">
            CA : 0X83C8EC69812460B6D139F6629BDB4C42417E4AAC
          </h1>

          <div className="font-serif">
            <p className="pt-12">TOTAL SUPPLY</p>
            <p>1,000,000,000</p>
            <p>LP BURNT</p>
            <p>80% LP</p>
            <p>15% COMMUNITY</p>
            <p>5% DEV</p>
          </div>
        </div>
      </div>
    </div>
  );
}
