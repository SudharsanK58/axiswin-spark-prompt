import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Products from "@/components/Products";
import Training from "@/components/Training";
import Clients from "@/components/Clients";
import Testimonials from "@/components/Testimonials";
import About from "@/components/About";
import EnquiryForm from "@/components/EnquiryForm";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <Products />
      <Training />
      <Clients />
      <Testimonials />
      <About />
      <EnquiryForm />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
