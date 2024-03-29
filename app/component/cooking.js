import React from "react";
import Image from "next/image";
import cooking from "./cooking.png";
export default function Cooking() {
  return (
    <div className="pt-6  px-2 flex justify-center ">
      <section className="p-6">
        <div className="font-sans w-[450px] xl:w-[1050px] lg:w-[800px] md:w-[550px]  flex flex-col justify-center lg:flex-row lg:justify-between  p-14 border-2 border-black ">
          <div className="lg:w-1/2 w-full text-center lg:text-left">
            <h1 className="font-bold  text-3xl"> We are still cooking!</h1>

            <div className="">
              <p className="pt-6 ">
                My colleagues and I intend to shorten the life of Zeek cats
                because they have
              </p>{" "}
              <p className="">
                already lived nine lifetimes and people are becoming dependent
                on them.
              </p>
            </div>
          </div>{" "}
          <div className="flex w-80  pt-4 md:pt-0  justify-center  ">
            <Image
              src={cooking}
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
