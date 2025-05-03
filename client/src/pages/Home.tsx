import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Benefits from "@/components/Benefits";
import CallToAction from "@/components/CallToAction";
import Recipes from "@/components/Recipes";
import Videos from "@/components/Videos";
import InHomeDemo from "@/components/InHomeDemo";
import Testimonials from "@/components/Testimonials";
import Schedule from "@/components/Schedule";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import { useLocation } from "wouter";

export default function Home() {
  const [location] = useLocation();
  
  // Handle hash navigation on page load
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const id = hash.replace('#', '');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [location]);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <About />
        <Benefits />
        <CallToAction />
        <Recipes />
        <Videos />
        <InHomeDemo />
        <Testimonials />
        <Schedule />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
