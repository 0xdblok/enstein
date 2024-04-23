import React from "react";
import Image from "next/image";
import hold from "../asset/hold.png";
import zk from "../asset/zk.png";
export default function Partner() {
  return (
    <section className=" pt-20">
      <div className="- ">
        <div className="  lg:py-4 flex flex-col justify-center  bg-[#EDA1C7] border-4 border-black rounded-lg m-16 md:m-48  px-4 ">
          <h2 className="mb-8 pt-4 lg:mb-4 text-3xl font-extrabold tracking-tight leading-tight font-serif text-center text-gray-900 md:text-4xl">
            Our Partners
          </h2>
          <div className="flex flex-cols-2 gap-20 justify-center text-gray-500 sm:gap-12 md:flex-cols-3  ">
            <a
              href="https://holdstation.com/"
              className="flex justify-center items-center rounded-xl w-[100px] h-[100px]  md:w-[190px] md:h-[190px]">
              <Image
                className=" "
                src={hold}
                alt="hero"
                width={190}
                height={190}
              />
            </a>
            <a
              href="#"
              className="flex justify-center items-center w-[100px] h-[100px]  md:w-[190px] md:h-[190px]">
              <Image src={zk} alt="hero" width={190} height={190} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
