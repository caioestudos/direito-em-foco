import { useMemo, useState } from "react";
import { ArrowLeft, ArrowRight, CheckCircle, ShieldCheck } from "lucide-react";
import { SimulationWizardProvider } from "./WizardContext";
import { StepBasicData } from "./steps/StepBasicData";
import { StepImport } from "./steps/StepImport";
import { StepReview } from "./steps/StepReview";
import { StepSummary } from "./steps/StepSummary";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const steps = [
  {
    id: "A",
    title: "Dados básicos",
    subtitle: "Sexo, datas e benefício alvo",
    component: StepBasicData,
  },
  {
    id: "B",
    title: "Importação",
    subtitle: "CNIS, Contagem ou planilha",
    component: StepImport,
  },
  {
    id: "C",
    title: "Revisão",
    subtitle: "Períodos e remunerações",
    component: StepReview,
  },
  {
    id: "D",
    title: "Resultado",
    subtitle: "Resumo preliminar",
    component: StepSummary,
  },
];

const WizardShell = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const CurrentComponent = steps[currentIndex].component;

  const progress = useMemo(() => ((currentIndex + 1) / steps.length) * 100, [currentIndex]);

  const handlePrev = () => setCurrentIndex((prev) => Math.max(0, prev - 1));
  const handleNext = () => setCurrentIndex((prev) => Math.min(steps.length - 1, prev + 1));

  return (
    <div className="grid gap-8 lg:grid-cols-[320px,1fr]">
      <aside className="rounded-3xl border border-border/60 bg-gradient-to-b from-[#0D1B2A] to-[#19273c] p-6 text-white shadow-xl">
        <div className="space-y-6">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-white/70">Simule sua aposentadoria</p>
            <h3 className="mt-2 font-serif text-3xl text-white">Wizard avançado</h3>
            <p className="mt-1 text-sm text-white/80">
              Complete as etapas para gerar uma estimativa alinhada às regras da EC 103/2019.
            </p>
          </div>
          <div>
            <p className="text-xs text-white/70">Progresso</p>
            <div className="mt-2 h-2 w-full rounded-full bg-white/20">
              <div className="h-full rounded-full bg-[#C99700]" style={{ width: `${progress}%` }} />
            </div>
            <p className="mt-1 text-xs text-white/70">
              Etapa {currentIndex + 1} de {steps.length}
            </p>
          </div>
          <Separator className="border-white/20" />
          <div className="space-y-4">
            {steps.map((step, index) => {
              const status =
                index < currentIndex ? "completed" : index === currentIndex ? "current" : ("upcoming" as const);
              return (
                <button
                  key={step.id}
                  className={cn(
                    "flex w-full items-start gap-3 rounded-2xl border px-4 py-3 text-left transition",
                    status === "current"
                      ? "border-[#C99700]/70 bg-white/10"
                      : "border-white/10 bg-transparent hover:bg-white/5",
                  )}
                  onClick={() => setCurrentIndex(index)}
                >
                  <div
                    className={cn(
                      "flex h-8 w-8 items-center justify-center rounded-full border text-sm font-semibold",
                      status === "completed"
                        ? "border-emerald-200 bg-emerald-400 text-[#0D1B2A]"
                        : status === "current"
                          ? "border-[#C99700] text-[#C99700]"
                          : "border-white/40 text-white/70",
                    )}
                  >
                    {status === "completed" ? <CheckCircle className="h-4 w-4" /> : step.id}
                  </div>
                  <div>
                    <p className="text-sm font-semibold">{step.title}</p>
                    <p className="text-xs text-white/70">{step.subtitle}</p>
                  </div>
                </button>
              );
            })}
          </div>
          <div className="rounded-2xl border border-white/20 bg-white/5 p-4 text-xs text-white/80">
            <p className="font-semibold text-white">LGPD & segurança</p>
            <p className="mt-1">
              Arquivos são processados de forma temporária, criptografados e descartados em até 24h.
            </p>
          </div>
        </div>
      </aside>

      <section className="space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-border/60 bg-card/80 px-4 py-3 text-sm">
          <p className="font-medium text-foreground">
            Etapa {steps[currentIndex].id} · {steps[currentIndex].title}
          </p>
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <ShieldCheck className="h-4 w-4 text-[#C99700]" />
            Dados salvos automaticamente
          </div>
        </div>
        <CurrentComponent />
        <div className="flex flex-col gap-3 rounded-2xl border border-border/60 bg-muted/30 p-4 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3 text-sm text-muted-foreground">
            <Badge variant="outline">Rascunho salvo</Badge>
            <span>Você pode sair a qualquer momento e continuar depois.</span>
          </div>
          <div className="flex gap-3">
            <Button variant="outline" onClick={handlePrev} disabled={currentIndex === 0}>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Voltar
            </Button>
            <Button onClick={handleNext} disabled={currentIndex === steps.length - 1}>
              Avançar
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export const SimulationWizard = () => (
  <SimulationWizardProvider>
    <WizardShell />
  </SimulationWizardProvider>
);
