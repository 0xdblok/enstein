import React from "react";
import Image from "next/image";
import hero from "../asset/hero.png";
export default function Heroo() {
  return (
    <div className="lg:px-12 px-4 pt-12">
      <div className="flex md:p-6 p-2 md:border-4 border-2 rounded-lg border-black bg-[#54A0F8] h-auto md:h-[280px] lg:h-[350px]">
        <div className="  ">
          <Image
            src={hero}
            className="md:border-4 border-2 rounded-lg border-black w-[150px] h-[120px]  lg:w-[380px] lg:h-full md:w-[290px] md:h-full "
            alt="Elbert Ensten"
            width="450"
            height="450"
          />
        </div>

        <div className="flex w-full justify-center items-center">
          <p className="lg:text-4xl font-extrabold text-2xl">ELBERT ENSTEN</p>
        </div>
      </div>
    </div>
  );
}
