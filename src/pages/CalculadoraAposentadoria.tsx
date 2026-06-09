import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { SimulationWizard } from "@/components/simulator/SimulationWizard";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const CalculadoraAposentadoriaPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Calculadora de Aposentadoria INSS | Thalita Melo Advocacia";
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Calculadora de Aposentadoria INSS | Thalita Melo Advocacia</title>
        <meta
          name="description"
          content="Simule sua aposentadoria do INSS seguindo as regras da Reforma da Previdência. Calculadora gratuita e detalhada."
        />
        <link rel="canonical" href="/calculadora-aposentadoria" />
        <meta property="og:title" content="Calculadora de Aposentadoria INSS | Thalita Melo Advocacia" />
        <meta property="og:description" content="Simule sua aposentadoria do INSS seguindo as regras da Reforma da Previdência." />
        <meta property="og:url" content="/calculadora-aposentadoria" />
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
          <SimulationWizard />
        </div>
      </section>
    </>
  );
};

export default CalculadoraAposentadoriaPage;
