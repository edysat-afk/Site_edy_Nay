"use client";

import { useState } from "react";
import { Landmark, Settings, Zap, ScrollText, type LucideIcon } from "lucide-react";

export function AiArchitectureDiagram() {
  const [activeNode, setActiveNode] = useState<string | null>("ia");

  const nodes: {
    id: string;
    label: string;
    sub: string;
    x: number;
    y: number;
    color: string;
    icon: LucideIcon;
    detail: string;
  }[] = [
    {
      id: "prefeitura",
      label: "PREFEITURA",
      sub: "Gestão Municipal",
      x: 30,
      y: 130,
      color: "#4C82FF",
      icon: Landmark,
      detail: "Demanda da Secretaria & Atendimento ao Cidadão",
    },
    {
      id: "governanca",
      label: "GOVERNANÇA TI",
      sub: "DOD · ETP · TR",
      x: 330,
      y: 50,
      color: "#00F2FE",
      icon: Settings,
      detail: "Planejamento Estratégico, LGPD & Riscos",
    },
    {
      id: "ia",
      label: "IA APLICADA",
      sub: "Automação & Dados",
      x: 330,
      y: 210,
      color: "#B7E96B",
      icon: Zap,
      detail: "Triagem Inteligente, Chatbots & Dashboards",
    },
    {
      id: "legal",
      label: "LEI 14.133/2021",
      sub: "Dispensa Art. 75 II",
      x: 630,
      y: 130,
      color: "#B060F5",
      icon: ScrollText,
      detail: "Contratação Direta sem Licitação & PNCP",
    },
  ];

  return (
    <div className="relative w-full overflow-hidden rounded-2xl border border-border/80 bg-bg-glass/90 p-7 backdrop-blur-2xl shadow-2xl">
      {/* Background ambient radial light inside widget */}
      <div className="pointer-events-none absolute -top-20 -right-20 h-64 w-64 rounded-full bg-accent-blue/15 blur-3xl animate-pulse" />
      <div className="pointer-events-none absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-accent/15 blur-3xl animate-pulse" style={{ animationDelay: "1.5s" }} />

      {/* Top Header Badge */}
      <div className="relative z-10 flex items-center justify-between border-b border-border/70 pb-4.5">
        <div className="flex items-center gap-3">
          <span className="relative flex h-3.5 w-3.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75"></span>
            <span className="relative inline-flex h-3.5 w-3.5 rounded-full bg-accent"></span>
          </span>
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-text-muted">
            ARQUITETURA DE SERVIÇOS &amp; IA · N&amp;E
          </span>
        </div>
        <span className="rounded-full border border-accent/40 bg-accent/15 px-3.5 py-1 font-mono text-xs font-bold text-accent">
          ● SISTEMA ATIVO
        </span>
      </div>

      {/* SVG Diagram Canvas */}
      <div className="relative z-10 mt-6 h-[280px] md:h-[320px] w-full">
        <svg className="h-full w-full overflow-visible" viewBox="0 0 800 280" fill="none">
          <defs>
            <linearGradient id="grad-blue-cyan" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#4C82FF" />
              <stop offset="100%" stopColor="#00F2FE" />
            </linearGradient>
            <linearGradient id="grad-cyan-lime" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#00F2FE" />
              <stop offset="100%" stopColor="#B7E96B" />
            </linearGradient>
            <linearGradient id="grad-lime-purple" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#B7E96B" />
              <stop offset="100%" stopColor="#B060F5" />
            </linearGradient>

            <filter id="glow-filter-lg" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="6" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Connecting Lines */}
          <path
            d="M 180 130 C 260 130, 280 50, 330 50"
            stroke="url(#grad-blue-cyan)"
            strokeWidth="3"
            strokeDasharray="6 6"
            className="opacity-75"
          />
          <path
            d="M 180 130 C 260 130, 280 210, 330 210"
            stroke="url(#grad-blue-cyan)"
            strokeWidth="3"
            strokeDasharray="6 6"
            className="opacity-75"
          />
          <path
            d="M 490 50 C 560 50, 580 130, 630 130"
            stroke="url(#grad-cyan-lime)"
            strokeWidth="3"
            strokeDasharray="6 6"
            className="opacity-75"
          />
          <path
            d="M 490 210 C 560 210, 580 130, 630 130"
            stroke="url(#grad-lime-purple)"
            strokeWidth="3"
            strokeDasharray="6 6"
            className="opacity-75"
          />

          {/* Animated Glowing Packets travelling along paths */}
          <circle r="5" fill="#00F2FE" filter="url(#glow-filter-lg)">
            <animateMotion
              path="M 180 130 C 260 130, 280 50, 330 50"
              dur="2.8s"
              repeatCount="indefinite"
            />
          </circle>
          <circle r="5" fill="#B7E96B" filter="url(#glow-filter-lg)">
            <animateMotion
              path="M 180 130 C 260 130, 280 210, 330 210"
              dur="2.4s"
              repeatCount="indefinite"
            />
          </circle>
          <circle r="5" fill="#B060F5" filter="url(#glow-filter-lg)">
            <animateMotion
              path="M 490 210 C 560 210, 580 130, 630 130"
              dur="3s"
              repeatCount="indefinite"
            />
          </circle>

          {/* Render Nodes */}
          {nodes.map((node) => {
            const isSelected = activeNode === node.id;
            return (
              <g
                key={node.id}
                transform={`translate(${node.x}, ${node.y - 40})`}
                onClick={() => setActiveNode(node.id)}
                className="cursor-pointer transition-transform duration-300 hover:scale-105"
              >
                {/* Outer Glow Rectangle */}
                <rect
                  x="0"
                  y="0"
                  width="160"
                  height="80"
                  rx="14"
                  fill="#0A1018"
                  stroke={isSelected ? node.color : "#1A2636"}
                  strokeWidth={isSelected ? "2.5" : "1.2"}
                  filter={isSelected ? "url(#glow-filter-lg)" : undefined}
                />
                <circle cx="24" cy="28" r="12" fill={node.color} fillOpacity="0.2" />
                <foreignObject x="16" y="20" width="16" height="16">
                  <node.icon size={16} color={node.color} />
                </foreignObject>
                <text
                  x="44"
                  y="30"
                  fill={isSelected ? "#FFFFFF" : "#E2E8F0"}
                  fontSize="12.5"
                  fontWeight="700"
                  fontFamily="var(--font-plus-jakarta-sans)"
                >
                  {node.label}
                </text>
                <text
                  x="20"
                  y="56"
                  fill="#94A3B8"
                  fontSize="11"
                  fontWeight="600"
                  fontFamily="var(--font-jetbrains-mono)"
                >
                  {node.sub}
                </text>
              </g>
            );
          })}
        </svg>
      </div>

      {/* Active Node Dynamic Details Footer */}
      <div className="relative z-10 mt-4 flex items-center justify-between rounded-xl border border-border/70 bg-bg-elevated/95 px-5 py-3.5 text-xs">
        <div className="flex items-center gap-2.5 font-mono text-text-muted">
          <span className="text-accent font-bold text-sm">›</span>
          <span className="font-semibold text-text">{nodes.find((n) => n.id === activeNode)?.detail}</span>
        </div>
        <span className="hidden font-mono text-xs font-bold text-accent sm:inline-block">
          CLIQUE NOS NÓS PARA EXPLORAR
        </span>
      </div>
    </div>
  );
}
