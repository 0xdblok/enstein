import React from "react";
import Image from "next/image";
import supply from "../asset/supply.png";
import sync from "../asset/sync.png";
import eth from "../asset/eth.png";
import wallet from "../asset/wallet.png";
import wave from "../asset/wave.jpg";
export default function Buy() {
  return (
    <div className="px-4 md:px-0 pt-20 ">
      {" "}
      <div className="pt-20 pb-6  md:m-12 border-4 bg-[#2BB697] rounded-lg border-black">
        <p className="lg:text-4xl font-extrabold font-serif text-2xl text-center ">
          How to buy
        </p>
        <div className="lg:justify-between divide-x-2 divide-gray-600 text-center space-y-8 md:space-y-0 lg:flex pt-12 ">
          <div className="p-6 lg:w-1/4">
            <div className="justify-center flex">
              <Image
                className="h-[128px]"
                src={eth}
                alt="hero"
                width={100}
                height={100}
              />
            </div>
            <h2 className="text-lg pt-2 font-semibold font-sans md:text-xl">
              Create a Wallet
            </h2>
            <p className=" font-sans font-normal ">
              Download Metamask wallet from the app store or google play store
              for free. Desktop users, download the google chrome extension by
              going to metamask.io
            </p>
          </div>
          <div className="p-6 lg:w-1/4">
            <div className="justify-center flex ">
              <Image
                className="h-[128px]"
                src={wallet}
                alt="hero"
                width={100}
                height={100}
              />
            </div>
            <h2 className="text-lg pt-2 font-semibold font-sans md:text-xl">
              Get Some ETH
            </h2>
            <p className=" font-sans font-normal ">
              Have ETH in your wallet to switch to $ELBERT. If you don’t have
              any ETH, you can buy ETH from an exchange and send it to ZkSync or
              cross chain swap here zkswap.finance
            </p>
          </div>
          <div className="p-6 lg:w-1/4 ">
            <div className="justify-center  items-center flex">
              {" "}
              <Image
                className="lg:pt-16 "
                src={sync}
                alt="hero"
                width={200}
                height={150}
              />
            </div>
            <h2 className="text-lg pt-2 font-semibold font-sans md:text-xl lg:pt-6 ">
              Go to SyncSwap
            </h2>
            <p className=" font-sans font-normal ">
              Google syncswap.xyz website. Connect your wallet. Paste the $ELBERT
              token address into SyncSwap and then confirm the swap. Then sign.
            </p>
          </div>
          <div className="p-6 lg:w-1/4">
            <div className="justify-center flex">
              <Image
                className="h-[128px] rounded-lg border-2 border-black"
                src={wave}
                alt="hero"
                width={270}
                height={80}
              />
            </div>
            <h2 className="text-lg pt-2 font-semibold font-sans md:text-xl">
              Ride the wave
            </h2>
            <p className=" font-sans font-normal ">
              ZkSync Season is at its early stages. Just sit back and relax. The
              worst thing most people do, is they sell their bags early
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
