import Hero from "../components/Hero";
import Services from "../components/Services";
import ContactForm from "../components/ContactForm";
import Testimonials from "../components/Testimonials";
// import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="">
      
      {/* Hero Section */}
      <Hero />

      {/* Services Section */}
      <section>
        <Services />
      </section>

      {/* Contact Form Section */}
      <section>
        <ContactForm />
      </section>

      {/* Testimonials Section */}
      <section>
        <Testimonials />
      </section>

    </main>
  );
}
