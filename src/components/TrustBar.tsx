import { Shield, Heart, MapPin, Clock } from "lucide-react";

const benefits = [
  {
    icon: Shield,
    title: "Consulta",
    description: "Gratuita",
  },
  {
    icon: Heart,
    title: "Atendimento humanizado",
    description: "Você é nossa prioridade",
  },
  {
    icon: MapPin,
    title: "Região do Cariri",
    description: "E todo o Ceará",
  },
  {
    icon: Clock,
    title: "Resposta rápida",
    description: "Em até 24 horas",
  },
];

const TrustBar = () => {
  return (
    <section className="py-14 bg-cream relative">
      <div className="absolute inset-x-0 top-0 gold-divider opacity-60"></div>
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group flex flex-col items-center text-center space-y-3 rounded-2xl bg-gradient-card border border-border/50 p-6 hover-lift animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-accent/15 to-accent/5 ring-1 ring-accent/15 flex items-center justify-center transition-all duration-300 group-hover:ring-accent/30">
                <benefit.icon className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
