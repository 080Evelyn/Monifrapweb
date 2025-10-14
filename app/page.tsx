import Contact from "@/components/contact";
import Faq from "@/components/faq";
import Features from "@/components/features";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import HowItWorks from "@/components/how-it-works";
import Rating from "@/components/rating";
import Standout from "@/components/standout";
import Testimonials from "@/components/testimonials";

import Navbar from "@/components/navbar";

const Home = () => {
  return (
    <div className="overflow-x-hidden bg-background">
      <Navbar />
      <div className="md:mx-2 lg:mx-4">
        <Hero />
        <Rating />
        <HowItWorks />
        <Standout />
        <Features />
      </div>
      <Testimonials />
      <Faq />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
