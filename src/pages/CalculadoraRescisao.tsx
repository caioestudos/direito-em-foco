import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import RescisaoWizard from "@/components/rescisao-wizard/RescisaoWizard";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const CalculadoraRescisaoPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Calculadora de Rescisão Trabalhista | Thalita Melo Advocacia";
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Calculadora de Rescisão Trabalhista | Thalita Melo Advocacia</title>
        <meta
          name="description"
          content="Calcule suas verbas rescisórias trabalhistas gratuitamente: aviso prévio, férias, 13º, multa do FGTS e mais."
        />
        <link rel="canonical" href="/calculadora-rescisao-trabalhista" />
        <meta property="og:title" content="Calculadora de Rescisão Trabalhista | Thalita Melo Advocacia" />
        <meta property="og:description" content="Calcule suas verbas rescisórias trabalhistas gratuitamente." />
        <meta property="og:url" content="/calculadora-rescisao-trabalhista" />
      </Helmet>
      <div className="container">
        <div className="pt-6 pb-4">
          <Button
            onClick={() => navigate("/")}
            variant="outline"
            className="border-border/50 text-muted-foreground hover:text-foreground hover:bg-background"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar para Página Inicial
          </Button>
        </div>
      </div>
      
      <section className="py-20 bg-muted/30">
        <div className="container">
          <RescisaoWizard />
        </div>
      </section>
    </>
  );
};

export default CalculadoraRescisaoPage;
