import React from "react";
import Image from "next/image";
import plan from "./plan.png";
export default function Plan() {
  return (
    <div className="pt-6 lg:px-[80px] px-2 flex justify-center ">
      <section className="p-6">
        <div className="container font-sans mx-auto flex flex-col justify-center lg:flex-row lg:justify-between  p-14 border-2 border-black ">
          <div className="lg:w-1/2  w-full text-center lg:text-left">
            <h1 className="font-bold  text-3xl"> So what’s the plan?</h1>

            <div className="w-42">
              <p className="pt-6">
                I don’t know what to do yet maybe ELBERT in your universe is
                more <span>genius than me.</span>
              </p>{" "}
              <p className="">
                I have only 37 IQ but actually I really need to duplicate the
                sun<span>for aliens to get burnt.</span>
              </p>
            </div>
          </div>{" "}
          <div className="flex  pt-4 md:pt-0 justify-center  ">
            <Image
              src={plan}
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
