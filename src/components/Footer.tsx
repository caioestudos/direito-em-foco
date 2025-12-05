import { MapPin, Phone, Mail, Instagram, Clock } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy text-primary-foreground py-16">
      <div className="container">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Logo & Description */}
          <div className="lg:col-span-2 space-y-6">
            <img src={logo} alt="Thalita Melo Advocacia" className="h-20 brightness-0 invert" />
            <p className="text-primary-foreground/70 leading-relaxed max-w-md">
              Advocacia humanizada em Juazeiro do Norte (CE). Defendemos seus direitos 
              trabalhistas, previdenciários, civis e de família com dedicação e empatia.
            </p>
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary/50 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-serif font-semibold text-lg">Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-primary-foreground/70">
                <Phone className="w-5 h-5 shrink-0 mt-0.5" />
                <span>(88) 99999-9999</span>
              </li>
              <li className="flex items-start gap-3 text-primary-foreground/70">
                <Mail className="w-5 h-5 shrink-0 mt-0.5" />
                <span>contato@thalitamelo.adv.br</span>
              </li>
              <li className="flex items-start gap-3 text-primary-foreground/70">
                <Clock className="w-5 h-5 shrink-0 mt-0.5" />
                <span>Seg - Sex: 8h às 18h</span>
              </li>
            </ul>
          </div>

          {/* Address */}
          <div className="space-y-4">
            <h4 className="font-serif font-semibold text-lg">Endereço</h4>
            <div className="flex items-start gap-3 text-primary-foreground/70">
              <MapPin className="w-5 h-5 shrink-0 mt-0.5" />
              <div>
                <p>Rua São Pedro, 123, Sala 101</p>
                <p>Centro - Juazeiro do Norte/CE</p>
                <p>CEP: 63010-010</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-primary-foreground/50">
          <p>© {currentYear} Thalita Melo Advocacia. Todos os direitos reservados.</p>
          <p>OAB/CE 00.000</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
