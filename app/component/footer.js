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
          href="https://t.me/boogerbase"
          className="flex items-center font-mono font-medium">
          <Image
            className="rounded"
            alt="hero"
            src={telegram}
            width="28"
            height="28"
          />
        </a>
        <a
          href="https://t.me/boogerbase"
          className="flex items-center font-mono font-medium">
          <Image
            className="rounded"
            alt="hero"
            src={x}
            width="34"
            height="34"
          />
        </a>{" "}
      </div>
    </div>
  );
}
