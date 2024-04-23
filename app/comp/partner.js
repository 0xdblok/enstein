import React from "react";
import Image from "next/image";
import hold from "../asset/hold.png";
import zk from "../asset/zk.png";
export default function Partner() {
  return (
    <section class=" pt-20">
      <div class=" lg:py-16 mx-auto max-w-screen-xl px-4">
        <h2 class="mb-8 lg:mb-16 text-3xl font-extrabold tracking-tight leading-tight font-serif text-center text-gray-900 md:text-4xl">
          Our Partner
        </h2>
        <div class="flex flex-cols-2 gap-20 justify-center text-gray-500 sm:gap-12 md:flex-cols-3  ">
          <a
            href="https://holdstation.com/"
            class="flex justify-center items-center rounded-xl">
            <Image
              className=" rounded-xl"
              src={hold}
              alt="hero"
              width={190}
              height={190}
            />
          </a>
          <a href="#" class="flex justify-center items-center">
            <Image src={zk} alt="hero" width={190} height={190} />
          </a>
        </div>
      </div>
    </section>
  );
}
