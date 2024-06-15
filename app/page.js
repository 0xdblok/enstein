import Image from "next/image";
import Navbar from "./component/navbar";
//import Hero from "./component/hero";
import Footer from "./component/footer";
import Plan from "./component/plan";
import Cooking from "./component/cooking";

import Another from "./component/another";
import Formula from "./comp/formula";
//aimport Tokenomics from "./comp/tokenomics";
import Solution from "./comp/solution";
import Supply from "./comp/supply";
import Partner from "./comp/partner";
import Buy from "./comp/buy";
import hero from "./asset/hero.png";

import Hero from "./component/hero";
import Tokenomics from "./component/tokenomics";

import Inventor from "./component/inventor";

export default function Home() {
  return (
    <div className=" bg-gray-100 md:px-24 px-12">
      <Hero />

      <Tokenomics />

      <Footer />
    </div>
  );
}
/*<main className="bg-[#F2F0F1] ">
      <Heroo />
      <Formula />

      <Solution />
      <Supply />
      <Buy />

      <Footer />
    </main>*/
