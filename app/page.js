import Image from "next/image";
import Navbar from "./component/navbar";
import Hero from "./component/hero";
import Footer from "./component/footer";
import Plan from "./component/plan";
import Cooking from "./component/cooking";

export default function Home() {
  return (
    <main className="bg-[#E7DFD8]">
      <Navbar />
      <Hero />
      <Plan />
      <Cooking />
      <Footer />
    </main>
  );
}
