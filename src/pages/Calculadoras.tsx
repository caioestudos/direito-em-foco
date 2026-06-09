import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import CalculatorHub from "@/components/CalculatorHub";

const CalculadorasPage = () => {
  useEffect(() => {
    document.title = "Calculadoras Jurídicas | Thalita Melo Advocacia";
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Calculadoras Jurídicas | Thalita Melo Advocacia</title>
        <meta
          name="description"
          content="Calculadoras jurídicas gratuitas: simule sua aposentadoria do INSS e a rescisão trabalhista de forma rápida e prática."
        />
        <link rel="canonical" href="/calculadoras" />
        <meta property="og:title" content="Calculadoras Jurídicas | Thalita Melo Advocacia" />
        <meta property="og:description" content="Simule sua aposentadoria do INSS e a rescisão trabalhista gratuitamente." />
        <meta property="og:url" content="/calculadoras" />
      </Helmet>
      <CalculatorHub />
    </>
  );
};

export default CalculadorasPage;
