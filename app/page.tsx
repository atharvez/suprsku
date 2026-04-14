import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProductGuide from "@/components/ProductGuide";
import TrustBar from "@/components/TrustBar";
import FAQ from "@/components/FAQ";
import ContactForm from "@/components/ContactForm";
import Waitlist from "@/components/Waitlist";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950">
      <Navbar />
      <div>
        <Hero />
        {/*<TrustBar />*/}
        <ProductGuide />
        <Waitlist />
        <FAQ />
        <ContactForm />
        <FinalCTA />
      </div>
      <Footer />
    </main>
  );
}
