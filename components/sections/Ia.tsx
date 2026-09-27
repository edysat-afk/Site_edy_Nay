"use client";

import { useState } from "react";
import { ShieldCheck } from "lucide-react";
import { ia } from "@/content/site";
import { SectionHeading } from "./SectionHeading";

const PIPELINE_DETAILS = [
  {
    step: 1,
    title: "Cidadão Pergunta",
    prompt: "Olá! Como faço para solicitar a emissão da minha certidão municipal ou agendar atendimento?",
    response: "Input recebido via canal de WhatsApp / Portal da Prefeitura. Início do processamento de linguagem natural.",
    status: "ENTRADA DE DADOS",
    color: "#4C82FF",
  },
  {
    step: 2,
    title: "IA Responde & Orienta",
    prompt: "Processando solicitação com base nas normas do município...",
    response: "Você pode solicitar a certidão informando seu CPF ou acompanhando a guia pelo protocolo online.",
    status: "IA GERATIVA ATIVA",
    color: "#00F2FE",
  },
  {
    step: 3,
    title: "Demanda Classificada",
    prompt: "Triagem automática do pedido por grau de urgência e secretaria responsável.",
    response: "Demanda etiquetada como [Secretaria de Finanças] · Prioridade Média · Protocolo #2026-984A.",
    status: "TRIAGEM LGPD OK",
    color: "#B7E96B",
  },
  {
    step: 4,
    title: "Relatório Gerencial",
    prompt: "Compilação automatizada de métricas de atendimento diário.",
    response: "Dashboard atualizado: 84% das dúvidas sanadas diretamente pela IA sem sobrecarregar os guichês.",
    status: "DASHBOARD ATUALIZADO",
    color: "#B060F5",
  },
  {
    step: 5,
    title: "Ação Humana Direcionada",
    prompt: "Casos complexos ou que exigem análise de parecer técnico são encaminhados.",
    response: "Servidor público atua apenas nos casos que demandam decisão administrativa individualizada.",
    status: "SUPERVISÃO HUMANA",
    color: "#E5B26B",
  },
];

export function Ia() {
  const [activeStep, setActiveStep] = useState(0);
  const current = PIPELINE_DETAILS[activeStep];

  return (
    <section id="ia" className="relative border-t border-border/70 py-28 md:py-36">
      <div className="mx-auto max-w-[1550px] px-6 md:px-10 lg:px-12">
        <SectionHeading eyebrow={ia.eyebrow} titulo={ia.titulo} />

        {/* Live Simulator Widget */}
        <div className="mt-16 overflow-hidden rounded-2xl border border-border bg-bg-glass backdrop-blur-xl shadow-2xl">
          {/* Widget Header Bar */}
          <div className="flex items-center justify-between border-b border-border/70 bg-bg-elevated px-6 py-4.5">
            <div className="flex items-center gap-2.5">
              <div className="h-3.5 w-3.5 rounded-full bg-red-500/80" />
              <div className="h-3.5 w-3.5 rounded-full bg-yellow-500/80" />
              <div className="h-3.5 w-3.5 rounded-full bg-green-500/80" />
              <span className="ml-2 font-mono text-xs font-bold text-text-muted tracking-wider">
                SIMULADOR DE FLUXO DE IA · PREFEITURA INTELIGENTE
              </span>
            </div>
            <span
              className="rounded-full px-3.5 py-1.5 font-mono text-xs font-bold uppercase tracking-wider"
              style={{
                backgroundColor: `${current.color}15`,
                color: current.color,
                borderColor: `${current.color}40`,
                borderWidth: 1,
              }}
            >
              ● {current.status}
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Step Selection Tabs */}
            <div className="border-b border-border/70 bg-bg-elevated/50 p-5 lg:col-span-5 lg:border-r lg:border-b-0">
              <p className="mb-4 font-mono text-xs font-bold uppercase tracking-wider text-text-muted">
                ETAPAS DO PIPELINE (CLIQUE PARA TESTAR):
              </p>

              <div className="flex flex-col gap-2.5">
                {PIPELINE_DETAILS.map((item, idx) => {
                  const isActive = idx === activeStep;
                  return (
                    <button
                      key={item.step}
                      onClick={() => setActiveStep(idx)}
                      className={`flex items-center justify-between rounded-xl p-4 text-left transition-all duration-200 ${
                        isActive
                          ? "border border-accent/50 bg-accent/15 text-accent shadow-[0_0_20px_rgba(0,242,254,0.2)]"
                          : "border border-transparent hover:bg-bg-elevated hover:border-border"
                      }`}
                    >
                      <div className="flex items-center gap-3.5">
                        <span
                          className={`font-mono text-sm font-extrabold ${
                            isActive ? "text-accent" : "text-text-muted"
                          }`}
                        >
                          0{item.step}
                        </span>
                        <span
                          className={`font-display text-base font-semibold ${
                            isActive ? "text-text" : "text-text-muted"
                          }`}
                        >
                          {item.title}
                        </span>
                      </div>

                      {isActive && <span className="text-sm text-accent">●</span>}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Simulated Terminal Screen Output */}
            <div className="p-8 lg:col-span-7 flex flex-col justify-between min-h-[340px]">
              <div>
                <div className="flex items-center justify-between font-mono text-xs font-semibold text-text-muted border-b border-border/60 pb-3.5">
                  <span>PROMPT DE SIMULAÇÃO</span>
                  <span className="text-accent font-bold">PASSO {activeStep + 1} DE 5</span>
                </div>

                <div className="mt-5 rounded-xl border border-border/70 bg-bg/90 p-6 font-mono text-sm md:text-base leading-relaxed text-text">
                  <p className="text-accent-blue">{"// "}{current.prompt}</p>
                  <p className="mt-4 text-accent font-bold text-base md:text-lg">› {current.response}</p>
                </div>
              </div>

              <div className="mt-6 rounded-xl border border-accent-lime/40 bg-accent-lime/10 p-4.5 text-xs md:text-sm font-mono text-accent-lime font-semibold flex items-center gap-3.5">
                <ShieldCheck className="h-5 w-5 shrink-0" aria-hidden="true" />
                <span>{ia.nota}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
