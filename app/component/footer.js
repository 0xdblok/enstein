import React from "react";
import telegram from "./telegram.png";
import x from "./x.png";
import Image from "next/image";
export default function Footer() {
  return (
    <div className="flex pt-6 justify-end pb-6 px-8">
      <div className="flex gap-2">
        {" "}
        <a
          href="https://t.me/elbertensten"
          className="flex items-center font-mono font-medium">
          <Image
            className=" md:w-[39px] md:h-[39px]"
            alt="hero"
            src={telegram}
            width="38"
            height="38"
          />
        </a>
        <a
          href="https://x.com/crazyelbert/"
          className="flex items-center font-mono font-medium ">
          <Image
            className=" md:w-[30px] md:h-[30px]"
            alt="hero"
            src={x}
            width="35"
            height="35"
          />
        </a>{" "}
      </div>
    </div>
  );
}
