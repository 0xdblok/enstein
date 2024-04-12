import React from "react";
import Image from "next/image";
import formula1 from "../asset/formula1.png";
import formula from "../asset/formula.png";
export default function Solution() {
  return (
    <div className="lg:px-12 px-6 pt-32">
      <div className="flex  justify-end ">
        <Image
          src={formula1}
          className="relative md:top-[80px] xl:w-[565px] xl:h-[160px] lg:w-[500px] lg:h-[130px] lg:top-[95px]  md:w-[384px] md:h-[108px] w-[200px] h-[70px] top-[48px] "
          alt="Elbert Ensten"
          width="450"
          height="450"
        />
      </div>
      <div className=" border-4 pt-32 lg:pt-52 lg:pb-52 md:pt-48 md:pb-48   rounded-lg pb-32 border-black bg-[#2BB697]">
        <div className="text-center  font-bold lg:text-2xl md:text-xl text-sm ">
          <h2>
            I, Elbert Ensten, a 12-year-old with a 37 IQ, reside on the planet
            Zekesenk. ONE OF THE CHOOSEN IS ME.
          </h2>
          <h2>
            Since I surpassed all expectations and the standard of having a high
            enough IQ to
          </h2>
          <h2>
            CREATED SOMETHINGS TO ASSIST THE NEXT GENERATION FOR THEIR FUTURE.
          </h2>
        </div>{" "}
      </div>{" "}
      <div className=" relative ">
        <Image
          src={formula}
          className="relative xl:w-[285px] xl:h-[305px] xl:bottom-[195px] lg:w-[260px] lg:h-[303px] lg:bottom-[195px]  md:w-[244px] md:h-[280px] md:bottom-[180px] w-[142px] h-[152px] bottom-[100px] "
          alt="Elbert Ensten"
          width="450"
          height="450"
        />
      </div>
    </div>
  );
}
