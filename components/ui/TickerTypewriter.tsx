"use client";

import { useEffect, useState } from "react";

const MESSAGES = [
  "IA APLICADA AO SETOR PÚBLICO: ATENDIMENTO 24/7 E AUTOMAÇÃO DE TRIAGEM",
  "DISPENSA DE LICITAÇÃO LEGAL: ART. 75, II DA LEI Nº 14.133/2021",
  "INSTRUÇÃO FORMAL: DOD, ETP, TERMO DE REFERÊNCIA E MAPA DE RISCOS",
  "CONFORMIDADE TOTAL COM A LGPD E GOVERNANÇA DE DADOS MUNICIPAIS",
  "PROPOSTA FORMAL PRONTA PARA ENTRADA EM PROCESSO ADMINISTRATIVO",
];

export function TickerTypewriter() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fullText = MESSAGES[currentIdx];
    let timer: NodeJS.Timeout;

    if (!isDeleting) {
      if (text.length < fullText.length) {
        timer = setTimeout(() => {
          setText(fullText.slice(0, text.length + 1));
        }, 40);
      } else {
        timer = setTimeout(() => setIsDeleting(true), 3200);
      }
    } else {
      if (text.length > 0) {
        timer = setTimeout(() => {
          setText(fullText.slice(0, text.length - 1));
        }, 20);
      } else {
        timer = setTimeout(() => {
          setIsDeleting(false);
          setCurrentIdx((prev) => (prev + 1) % MESSAGES.length);
        }, 400);
      }
    }

    return () => clearTimeout(timer);
  }, [text, isDeleting, currentIdx]);

  return (
    <div className="w-full overflow-hidden border-y border-border/70 bg-bg-elevated/80 py-4 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1550px] items-center justify-between px-6 md:px-10 lg:px-12 font-mono text-sm">
        <div className="flex items-center gap-4 overflow-hidden">
          <span className="flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-3 py-1 text-xs uppercase font-bold text-accent">
            <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
            LIVE STATUS
          </span>
          <p className="truncate text-text-muted font-medium">
            <span className="text-accent font-bold">› </span>
            <span className="text-text">{text}</span>
            <span className="inline-block w-2 h-4 bg-accent ml-1 animate-pulse" />
          </p>
        </div>

        <div className="hidden items-center gap-5 text-xs font-semibold text-text-muted md:flex">
          <span className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-accent-lime" />
            Lei 14.133/2021
          </span>
          <span className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-accent-blue" />
            LGPD Ok
          </span>
        </div>
      </div>
    </div>
  );
}
