import { useMemo } from "react";
import { useSimulationWizard } from "../WizardContext";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ShieldCheck, UploadCloud, FileDown, FileText } from "lucide-react";
import { calculateSimulation } from "@/services/calculation-engine";
import type { RegraResultado } from "@/types/simulation";
import { downloadDraftJson, downloadResultCsv, downloadResultPdf } from "@/services/exporters";

const formatCurrency = (value?: number) =>
  value === undefined
    ? "-"
    : value.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
      });

const RuleCard = ({ rule }: { rule: RegraResultado }) => {
  const improvement =
    rule.rmiSemDescarte && rule.rmiComDescarte
      ? rule.rmiComDescarte - rule.rmiSemDescarte
      : 0;
  return (
    <div className="rounded-2xl border border-border/60 bg-muted/10 p-4 space-y-3">
      <div className="flex items-center justify-between gap-2">
        <div>
          <p className="text-sm font-semibold text-foreground">{rule.nome}</p>
          <p className="text-xs text-muted-foreground">
            Tempo: {(rule.tempoTotalMeses / 12).toFixed(1)} anos · Carência: {rule.carenciaMeses}/{rule.carenciaExigida} meses
          </p>
        </div>
        <Badge variant={rule.elegivel ? "default" : "outline"} className="text-xs">
          {rule.elegivel ? "Elegível" : "Pendente"}
        </Badge>
      </div>
      <div className="grid gap-2 md:grid-cols-2">
        <div className="rounded-xl bg-background/70 p-3 text-sm">
          <p className="text-xs text-muted-foreground">RMI sem descarte</p>
          <p className="text-lg font-semibold text-foreground">{formatCurrency(rule.rmiSemDescarte)}</p>
        </div>
        <div className="rounded-xl bg-background/70 p-3 text-sm">
          <p className="text-xs text-muted-foreground">RMI com descarte</p>
          <p className="text-lg font-semibold text-foreground">{formatCurrency(rule.rmiComDescarte)}</p>
          {improvement > 0 && (
            <p className="text-xs text-emerald-600">
              +{improvement.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })} ({rule.ganhoEstimado?.toFixed(2)}%)
            </p>
          )}
        </div>
      </div>
      {!rule.elegivel && rule.motivoNaoElegivel && (
        <p className="text-xs text-amber-700 rounded-lg bg-amber-50 p-2">{rule.motivoNaoElegivel}</p>
      )}
      {rule.competenciasDescartadas && rule.competenciasDescartadas.length > 0 && (
        <details className="text-xs">
          <summary className="cursor-pointer text-primary">Ver competências descartadas</summary>
          <ul className="mt-2 list-disc pl-5 space-y-1 text-muted-foreground">
            {rule.competenciasDescartadas.slice(0, 4).map((item) => (
              <li key={item.competencia}>
                {item.competencia}: {item.valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
              </li>
            ))}
            {rule.competenciasDescartadas.length > 4 && <li>+ outras {rule.competenciasDescartadas.length - 4} competências</li>}
          </ul>
        </details>
      )}
    </div>
  );
};

export const StepSummary = () => {
  const { draft } = useSimulationWizard();
  const result = useMemo(() => calculateSimulation(draft), [draft]);

  const resumo = [
    {
      label: "Períodos importados",
      value: draft.periodos.length,
      description: "Consolidados após remover concomitâncias",
    },
    {
      label: "Remunerações",
      value: draft.remuneracoes.length,
      description: "Competências válidas para o PBC",
    },
    {
      label: "Alertas críticos",
      value: result.alertas.length,
      description: "Pendências que podem afetar a elegibilidade",
    },
  ];

  return (
    <div className="space-y-6">
      <Card className="border-border/60 bg-card shadow-sm">
        <CardHeader>
          <CardTitle className="font-serif text-2xl">Resultado preliminar</CardTitle>
          <CardDescription>
            Aplicamos as regras da EC 103/2019, normalizamos os períodos e simulamos cenários com e sem DER reafirmada.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4 md:grid-cols-3">
          {resumo.map((item) => (
            <div key={item.label} className="rounded-2xl border border-border/60 bg-muted/20 p-4">
              <p className="text-xs uppercase tracking-wide text-muted-foreground">{item.label}</p>
              <p className="mt-2 text-2xl font-semibold text-foreground">{item.value}</p>
              <p className="text-xs text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </CardContent>
      </Card>

      {result.cenarios.map((cenario) => (
        <Card key={`${cenario.derTipo}-${cenario.der}`} className="border-border/60 bg-card shadow-md">
          <CardHeader>
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <CardTitle className="font-serif text-xl">
                  Cenário {cenario.derTipo === "atual" ? "DER Atual" : "DER Reafirmada"}
                </CardTitle>
                <CardDescription>DER considerada: {new Date(cenario.der).toLocaleDateString("pt-BR")}</CardDescription>
              </div>
              {cenario.melhorOpcao && (
                <Badge className="bg-[#C99700] text-[#0D1B2A]">
                  Regra mais vantajosa: {cenario.melhorOpcao.nome}
                </Badge>
              )}
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              {cenario.resultados.map((rule) => (
                <RuleCard key={rule.regraId} rule={rule} />
              ))}
            </div>
            {result.alertas.length > 0 && (
              <div className="rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900">
                <p className="font-semibold">Alertas que podem afetar o cenário</p>
                <ul className="mt-2 list-disc pl-5 space-y-1">
                  {result.alertas.map((alerta) => (
                    <li key={alerta}>{alerta}</li>
                  ))}
                </ul>
              </div>
            )}
          </CardContent>
        </Card>
      ))}

      <Card className="border-border/60 bg-card shadow-sm">
        <CardHeader>
          <CardTitle className="font-serif text-xl">Relatório e metodologia</CardTitle>
          <CardDescription>
            Gere um relatório em PDF ou CSV, exporte o rascunho JSON e compartilhe com o seu time jurídico.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="rounded-2xl border border-dashed border-border/70 bg-muted/10 p-4 text-sm text-muted-foreground">
            <p className="font-semibold text-foreground">Metodologia resumida</p>
            <p className="mt-1">{result.metodologiaResumo}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button variant="outline" className="gap-2" onClick={() => downloadDraftJson(draft)}>
              <UploadCloud className="h-4 w-4" />
              Exportar rascunho (JSON)
            </Button>
            <Button variant="outline" className="gap-2" onClick={() => downloadResultCsv(result)}>
              <FileText className="h-4 w-4" />
              Exportar CSV
            </Button>
            <Button className="gap-2" onClick={() => downloadResultPdf(draft, result)}>
              <FileDown className="h-4 w-4" />
              Baixar PDF
            </Button>
            <Button className="gap-2" variant="secondary">
              <ShieldCheck className="h-4 w-4" />
              Solicitar auditoria
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
