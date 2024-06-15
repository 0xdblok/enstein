import React from "react";
import hero from "../asset/hero.png";

import Image from "next/image";
export default function Hero() {
  return (
    <section className="pt-24 mx-auto max-w-screen-xl pb-12 px-4 items-center  md:px-8">
      <div className="flex-1 text-center mt-7 lg:mt-0 lg:ml-3">
        <Image
          className="mx-auto sm:w-10/12 lg:w-2/3 "
          src={hero}
          alt="Nikula Tisla"
          width={450}
          height={450}
        />{" "}
      </div>{" "}
      <div className="space-y-4 flex-1 sm:text-center lg:text-left ">
        <h1 className="bunge text-center  text-4xl xl:text-5xl">
          EL<span className="text-[#2055A4]">BERT</span>{" "}
          <span className="text-[#2055A4]">ENS</span>TEN
        </h1>
        <p className="bunge md:px-48 text-center text-lg font-medium leading-relaxed sm:mx-auto lg:ml-0">
          I, Elbert Ensten, a 12-year-old with a 37 IQ, reside on the planet
          base. ONE OF THE CHOOSEN IS ME. Since I surpassed all expectations and
          the standard of having a high enough IQ to CREATED SOMETHINGS TO
          ASSIST THE NEXT GENERATION FOR THEIR FUTURE.
        </p>
      </div>
      <div className="flex justify-center pt-8"></div>
    </section>
  );
}
