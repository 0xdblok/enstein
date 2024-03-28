import Image from "next/image";
import Navbar from "./component/navbar";
import Hero from "./component/hero";
import Footer from "./component/footer";
import Plan from "./component/plan";
import Cooking from "./component/cooking";

import Another from "./component/another";

export default function Home() {
  return (
    <main className="bg-[#E7DFD8]">
      <Another />
      <Navbar />
      <Hero />
      <Plan />
      <Cooking />
      <Footer />
    </main>
  );
}
