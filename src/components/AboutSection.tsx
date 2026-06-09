import { Award, BookOpen, Heart, Scale } from "lucide-react";
import { Button } from "./ui/button";
import { MessageCircle } from "lucide-react";
import aboutImage from "@/assets/thalita-perfil-1.jpg";
const credentials = [{
  icon: Scale,
  text: "OAB/CE 53.837"
}, {
  icon: BookOpen,
  text: "Especialista em Direito Trabalhista"
}, {
  icon: Award,
  text: "Pós-graduada em Direito Previdenciário"
}, {
  icon: Heart,
  text: "Atendimento Humanizado"
}];
const AboutSection = () => {
  const whatsappNumber = "5588996017070";
  const whatsappMessage = encodeURIComponent("Olá! Gostaria de agendar uma consulta com a Dra. Thalita.");
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
  return <section id="sobre" className="py-20 md:py-28 bg-background">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative animate-fade-in order-2 lg:order-1">
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-gold-soft transform -rotate-3"></div>
              <div className="absolute -inset-1.5 rounded-2xl ring-1 ring-primary/20"></div>
              <img src={aboutImage} alt="Dra. Thalita Melo" className="relative rounded-2xl shadow-premium w-full h-[500px] object-cover object-top" />
            </div>
            {/* Credentials Card */}
            <div className="absolute -bottom-6 -right-6 bg-gradient-card border border-border/60 p-5 rounded-2xl shadow-premium max-w-xs hidden md:block">
              <div className="space-y-3">
                {credentials.slice(0, 2).map((cred, i) => <div key={i} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                      <cred.icon className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-sm font-medium text-foreground">{cred.text}</span>
                  </div>)}
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8 animate-fade-in delay-200 order-1 lg:order-2">
            <div>
              <p className="section-eyebrow mb-5">Sobre a Advogada</p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold text-foreground mb-6">
                Dra. Thalita Melo
              </h2>
              <div className="gold-divider max-w-[120px]"></div>
            </div>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>Natural de Barbalha, no Cariri, construí minha carreira com um propósito claro: <strong className="text-foreground">defender 
                os direitos de quem mais precisa</strong>.
              </p>
              <p>
                Com especialização em Direito Trabalhista e Previdenciário, atuo diariamente 
                para garantir que trabalhadores e segurados do INSS tenham acesso à justiça 
                de forma humanizada e acolhedora.
              </p>
              <p>
                Acredito que a advocacia vai além dos processos — é sobre <strong className="text-foreground">
                transformar vidas</strong> e devolver a dignidade a quem teve seus direitos violados.
              </p>
            </div>

            {/* Credentials Grid */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              {credentials.map((cred, i) => <div key={i} className="flex items-center gap-3 p-3.5 rounded-xl bg-gradient-card border border-border/50 hover-lift">{/* eslint-disable-line */}
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <cred.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-sm font-medium text-foreground">{cred.text}</span>
                </div>)}
            </div>

            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-elegant hover:shadow-glow transition-all duration-300">
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5 mr-2" />
                Agende sua Consulta
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>;
};
export default AboutSection;