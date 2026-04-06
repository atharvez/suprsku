import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import TrustBar from "@/components/TrustBar";
import FAQ from "@/components/FAQ";
import ContactForm from "@/components/ContactForm";
import Waitlist from "@/components/Waitlist";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-24 space-y-24">
        <Hero />
        <Features />
        <Waitlist />
        <FAQ />
        <ContactForm />
        <FinalCTA />
      </div>
      <Footer />
    </main>
  );
}
