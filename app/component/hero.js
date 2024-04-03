import React from "react";
import Image from "next/image";
import ensten from "./ensten.png";
export default function Hero() {
  return (
    <div className="pt-6 lg:px-54 px-2 flex justify-center ">
      <section className="p-6">
        <div className=" w-[450px] xl:w-[1050px] lg:w-[800px] md:w-[550px]  font-sans  flex flex-col justify-center lg:flex-row lg:justify-between  p-14 border-2 border-black ">
          <div className="lg:w-1/2 w-full text-center lg:text-left">
            <h1 className="font-bold  text-3xl"> ELBERT ENSTEN</h1>
            <p className="pt-6 ">Hello!</p>
            <div className="">
              <h1 className=" ">
                {" "}
                I’m Elbert Ensten and I don’t have anything to say cuz I don’t
                give a fuck.
              </h1>
              <p className="">
                By the way I’m living on planet Zekesenk, far away from universe
                7.
              </p>
            </div>
            <p className="align-bottom font-bold pt-28 text-lg ">
              {" "}
              CONTRACT ADDRESS : 0x83C8ec69812460b6d139f6629bdb4c42417E4AaC
            </p>
          </div>{" "}
          <div className="flex w-80 pt-4 md:pt-0 justify-center  ">
            <Image
              src={ensten}
              className="w-full h-full"
              alt="Elbert Ensten"
              width="350"
              height="100"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
/*<div className="pt-6  flex justify-center ">
      <section className="">
        <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
          <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
            <span>Hello!</span>
            <h1 className="font-bold leading-none ">
              {" "}
              I’m Elbert Ensten and I don’t have anything to say cuz I don’t
              give a fuck.
            </h1>
            <p className="">
              By the way I’m living on planet Zekesenk, far away from universe
              7.
            </p>
            <p className="mt-6 mb-8 text-lg sm:mb-12">
              {" "}
              CONTRACT ADDRESS : 0x...COMING SOON...
            </p>
          </div>
          <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
            <Image src={ensten} alt="Elbert Ensten" width="250" height="250" />
          </div>
        </div>
      </section>
    </div>*/
