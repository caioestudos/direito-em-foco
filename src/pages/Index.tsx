import HeroSection from "@/components/HeroSection";
import TrustBar from "@/components/TrustBar";
import AreasSection from "@/components/AreasSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import AboutSection from "@/components/AboutSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ConsultationTrigger from "@/components/ConsultationTrigger";
import UrgencyBar from "@/components/UrgencyBar";

const Index = () => {
  return (
    <main className="overflow-hidden">
      <UrgencyBar />
      <HeroSection />
      <TrustBar />
      <AreasSection />
      <TestimonialsSection />
      <AboutSection />
      <FAQSection />
      <Footer />
      <WhatsAppButton />
      <ConsultationTrigger />
    </main>
  );
};

export default Index;
