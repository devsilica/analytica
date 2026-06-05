import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import SocialProof from "@/components/landing/SocialProof";
import ProblemSolution from "@/components/landing/ProblemSolution";
import Benefits from "@/components/landing/Benefits";
import Features from "@/components/landing/Features";
import HowItWorks from "@/components/landing/HowItWorks";
import ProductShowcase from "@/components/landing/ProductShowcase";
import Integrations from "@/components/landing/Integrations";
import Pricing from "@/components/landing/Pricing";
import Testimonials from "@/components/landing/Testimonials";
import Results from "@/components/landing/Results";
import FAQ from "@/components/landing/FAQ";
import CTA from "@/components/landing/CTA";
import Footer from "@/components/landing/Footer";

export default function HomePage() {

  return (

    <main
      className="
      min-h-screen

      overflow-hidden

      bg-slate-950

      text-white
      "
    >

      <Navbar />

      <Hero />

      <SocialProof />

      <ProblemSolution />

      <Benefits />

      <Features />

      <HowItWorks />

      <ProductShowcase />

      <Integrations />

      <Pricing />

      <Testimonials />

      <Results />

      <FAQ />

      <CTA />

      <Footer />

    </main>

  );

}