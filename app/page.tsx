import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Introduction from "@/components/Introduction";
import ProblemSolution from "@/components/ProblemSolution";
import Differentiators from "@/components/Differentiators";
import Services from "@/components/Services";
import Achievements from "@/components/Achievements";
import Industries from "@/components/Industries";
import Testimonials from "@/components/Testimonials";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Introduction />
      <ProblemSolution />
      <Differentiators />
      <Services />
      <Achievements />
      <Industries />
      <Testimonials />
      <FinalCTA />
      <Footer />
    </main>
  );
}
