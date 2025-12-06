import { MessageCircle } from "lucide-react";
import { Button } from "./ui/button";
import logo from "@/assets/logo.png";
import heroImage from "@/assets/thalita-hero.jpg";

const HeroSection = () => {
  const whatsappNumber = "5588996038447";
  const whatsappMessage = encodeURIComponent("Olá! Gostaria de agendar uma consulta.");
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <section className="relative min-h-screen bg-gradient-hero overflow-hidden">
      {/* Header */}
      <header className="relative z-20 pt-6 pb-4">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
          <img src={logo} alt="Thalita Melo Advocacia" className="h-28 md:h-36 mx-auto md:mx-0" />
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            (88) 99603-8447
          </a>
        </div>
      </header>

      {/* Hero Content */}
      <div className="container flex-1 flex items-center">
        <div className="grid lg:grid-cols-2 gap-12 items-center pb-12">
          {/* Text Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
              <span className="text-sm font-medium text-foreground">
                Atendimento imediato · Consulta gratuita
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold leading-tight text-foreground">
              Seus direitos{" "}
              <span className="text-gradient-gold">trabalhistas</span> e{" "}
              <span className="text-gradient-gold">previdenciários</span>{" "}
              defendidos com dedicação
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
              Advocacia humanizada em Juazeiro do Norte (CE). 
              Lutamos pelos seus direitos com honestidade, empatia e pontualidade.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-elegant hover:shadow-glow transition-all duration-300 text-base px-8 py-6"
              >
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Fale Agora no WhatsApp
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-foreground/20 text-foreground hover:bg-foreground/5 text-base px-8 py-6"
              >
                <a href="#areas">Conheça Nossas Áreas</a>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 pt-4">
              <div className="text-center sm:text-left">
                <p className="text-lg md:text-xl font-serif font-semibold text-foreground">Agenda disponível</p>
              </div>
              <div className="hidden sm:block w-px h-12 bg-border"></div>
              <div className="text-center sm:text-left">
                <p className="text-lg md:text-xl font-serif font-semibold text-foreground">Foco total no seu caso</p>
              </div>
              <div className="hidden sm:block w-px h-12 bg-border"></div>
              <div className="text-center sm:text-left">
                <p className="text-lg md:text-xl font-serif font-semibold text-foreground">+100 clientes atendidos este ano</p>
                <p className="text-sm text-muted-foreground">Advocacia com dedicação e olhar humano para o seu caso</p>
              </div>
            </div>

            {/* Mobile Hero Image */}
            <div className="relative animate-fade-in delay-200 lg:hidden mt-8">
              <div className="relative mx-auto max-w-sm">
                <div className="absolute -inset-3 bg-primary/10 rounded-2xl transform rotate-2"></div>
                <img
                  src={heroImage}
                  alt="Dra. Thalita Melo"
                  className="relative rounded-xl shadow-elegant w-full h-[350px] object-cover object-top"
                />
              </div>
            </div>
          </div>

          {/* Desktop Hero Image */}
          <div className="relative animate-fade-in delay-200 hidden lg:block">
            <div className="relative">
              <div className="absolute -inset-4 bg-primary/10 rounded-3xl transform rotate-3"></div>
              <img
                src={heroImage}
                alt="Dra. Thalita Melo"
                className="relative rounded-2xl shadow-elegant w-full h-[600px] object-cover object-top"
              />
            </div>
            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-card p-4 rounded-xl shadow-card animate-float">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-whatsapp/10 flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-whatsapp" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">Olá! Como posso ajudar?</p>
                  <p className="text-xs text-muted-foreground">Resposta em até 5 min</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default HeroSection;
