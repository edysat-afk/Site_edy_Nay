// Conteúdo do site, tipado, espelhando CONTENT.md.
// Placeholders entre colchetes permanecem até definição (ver README.md).

export const PLACEHOLDERS = {
  RAZAO_SOCIAL: "[RAZAO_SOCIAL]",
  CNPJ: "[CNPJ]",
  WHATSAPP: "[WHATSAPP]",
  DOMINIO: "[DOMINIO]",
  PRAZO_PROPOSTA: "[PRAZO_PROPOSTA]",
} as const;

export const LIMITE_DISPENSA = "R$ 65.492,11";
export const BASE_LEGAL = "art. 75, II, da Lei nº 14.133/2021";

export function whatsappLink(message: string): string {
  return `https://wa.me/${PLACEHOLDERS.WHATSAPP}?text=${encodeURIComponent(message)}`;
}

export const seo = {
  title: "N&E Consultoria Empresarial & Tecnologia — Soluções para Empresas e Prefeituras",
  description:
    "TI, inteligência artificial, desenvolvimento de sites/sistemas, finanças e segurança do trabalho para empresas em crescimento e órgãos da administração pública. Proposta formal e atendimento especializado.",
  keywords: [
    "consultoria de TI",
    "automação com IA",
    "desenvolvimento de sites",
    "sistemas sob medida",
    "empresas em crescimento",
    "dispensa de licitação",
    "Lei 14.133",
    "fornecedor prefeitura",
    "governança de TI",
  ],
  url: `https://${PLACEHOLDERS.DOMINIO}`,
} as const;

export const nav = {
  logo: "N&E",
  sub: "CONSULTORIA EMPRESARIAL · TECNOLOGIA",
  links: [
    { label: "Serviços", href: "#servicos" },
    { label: "Como contratar", href: "#processo" },
    { label: "IA na prática", href: "#ia" },
    { label: "Quem somos", href: "#quem-somos" },
    { label: "Perguntas", href: "#faq" },
  ],
  ctaLabel: "Solicitar proposta",
  ctaMessage: "Olá, N&E! Gostaria de solicitar uma proposta para meu projeto.",
} as const;

export const heroSlides = [
  {
    id: "privado",
    eyebrow: "EMPRESAS EM CRESCIMENTO · INOVAÇÃO & IA",
    heading: [
      { text: "Inteligência Artificial e Escala Técnica para ", accent: false },
      { text: "a sua Empresa Crescer.", accent: true },
    ],
    paragraph:
      "Automação de processos com IA, desenvolvimento de sites e sistemas sob medida, dashboards executivos em Power BI, gestão financeira e segurança do trabalho para empresas em fase de expansão acelerada.",
    ctaPrimary: {
      label: "Solicitar Orçamento Empresarial",
      message: "Olá, N&E! Gostaria de um orçamento para a minha empresa.",
    },
    ctaSecondary: { label: "Ver os Serviços", href: "#servicos" },
    bullets: [
      "Automação de atendimento e qualificação de clientes 24/7 com IA",
      "Desenvolvimento de sites e sistemas corporativos sob medida",
      "Dashboards executivos em Power BI e estruturação financeira/operacional",
    ],
    badge: "EMPRESAS PRIVADAS",
  },
  {
    id: "governo",
    eyebrow: "GOVERNO MUNICIPAL · LEI 14.133/2021",
    heading: [
      { text: "Tecnologia e Gestão para o seu Município. ", accent: false },
      { text: "Contratação direta, sem licitação.", accent: true },
    ],
    paragraph:
      "Serviços de TI, inteligência artificial, administração, finanças e segurança do trabalho para prefeituras, câmaras e autarquias — por dispensa de licitação (art. 75, II da Lei nº 14.133/2021).",
    ctaPrimary: {
      label: "Solicitar Proposta para Prefeitura",
      message: "Olá, N&E! Quero solicitar uma proposta para meu município.",
    },
    ctaSecondary: { label: "Ver os Serviços", href: "#servicos" },
    bullets: [
      "Dispensa por valor (Art. 75, II) — limite de R$ 65.492,11 por contratação",
      "Instrução formal completa com DOD, ETP, TR e Mapa de Riscos",
      "Regularidade fiscal garantida com certidões e transparência no PNCP",
    ],
    badge: "SETOR PÚBLICO",
  },
  {
    id: "multidisciplinar",
    eyebrow: "CONSULTORIA EMPRESARIAL & TECNOLOGIA",
    heading: [
      { text: "Experiência dos dois lados do balcão para ", accent: false },
      { text: "acelerar seus resultados.", accent: true },
    ],
    paragraph:
      "Equipe multidisciplinar com bagagem em liderança de TI, governança corporativa, engenharia de software com IA, gestão hospitalar e segurança do trabalho.",
    ctaPrimary: {
      label: "Falar com um Especialista",
      message: "Olá, N&E! Quero entender como vocês podem ajudar o meu negócio.",
    },
    ctaSecondary: { label: "Conhecer a Equipe", href: "#quem-somos" },
    bullets: [
      "Liderança de projetos de TI e inteligência artificial aplicada",
      "Soluções em rotinas administrativas, saúde e segurança do trabalho",
      "Acompanhamento direto e suporte dedicado",
    ],
    badge: "EQUIPE MULTIDISCIPLINAR",
  },
] as const;

export const hero = {
  eyebrow: "CONSULTORIA EMPRESARIAL & TECNOLOGIA",
  heading: [
    { text: "Tecnologia e Gestão para Empresas e Municípios. ", accent: false },
    { text: "Soluções sob medida.", accent: true },
  ],
  paragraph:
    "Serviços de TI, inteligência artificial, desenvolvimento web, finanças e segurança do trabalho para empresas em crescimento e órgãos da administração pública.",
  ctaPrimary: {
    label: "Solicitar proposta",
    message: "Olá, N&E! Gostaria de solicitar uma proposta.",
  },
  ctaSecondary: { label: "Ver os serviços", href: "#servicos" },
  stats: [
    { value: "07", label: "frentes de serviço especializadas" },
    { value: "100%", label: "foco em empresas & setor público" },
    { value: PLACEHOLDERS.PRAZO_PROPOSTA, label: "para receber proposta formal" },
  ],
} as const;

export const credencial = {
  texto:
    "Experiência dos dois lados do balcão: atuamos na liderança de projetos públicos e na estruturação técnica de empresas privadas em fase de crescimento acelerado.",
} as const;

export const servicos = {
  eyebrow: "SERVIÇOS",
  titulo: "Sete frentes, uma equipe multidisciplinar",
  intro:
    "Escopos sob medida para alavancar empresas privadas em expansão e atender demandas do setor público com agilidade e total conformidade.",
  itens: [
    {
      numero: "01",
      titulo: "Desenvolvimento de Sites e Portais",
      sub: "Empresas em Crescimento, Prefeituras e Câmaras",
      texto:
        "Criação de sites institucionais, e-commerces, portais da transparência, landing pages de conversão e hotsites com SEO técnico, carregamento ultrarrápido e acessibilidade eMAG/WCAG 2.1.",
      artefatos: ["Site / Portal Institucional Responsivo", "Landing Page de Alta Conversão", "Adequação à LAI / LGPD", "Painel CMS de Conteúdo"],
      beneficios: ["Posicionamento forte no Google (SEO)", "Captação automatizada de clientes/leads", "Infraestrutura segura e estável"],
      badge: "EMPRESAS & GOVERNO",
    },
    {
      numero: "02",
      titulo: "Governança e Gestão de TI",
      sub: "Planejamento, Riscos, LGPD e Contratações de TI",
      texto:
        "Planejamento estratégico de TI, governança corporativa, gestão de riscos, adequação à LGPD e apoio técnico à instrução de contratações (DOD, ETP, TR e mapa de riscos).",
      artefatos: ["Plano Diretor de TI (PDTI)", "Mapeamento de Riscos & Incidentes", "Programa de Adequação LGPD", "DOD, ETP, TR e Mapa de Riscos"],
      beneficios: ["Operação protegida contra ataques", "Conformidade total com a LGPD", "Processos técnicos padronizados"],
      badge: "TI ESTRATÉGICA",
    },
    {
      numero: "03",
      titulo: "Soluções e Modelagem de Sistemas",
      sub: "Levantamento, Arquitetura e Implantação Gerencial",
      texto:
        "Levantamento de requisitos, modelagem de processos (BPMN) e desenvolvimento de sistemas sob medida (ERP, CRM, portais) para empresas privadas e órgãos públicos.",
      artefatos: ["Especificação de Requisitos", "Modelagem BPMN de Processos", "Sistema Web Sob Medida", "Treinamento e Capacitação"],
      beneficios: ["Sistemas ajustados à sua rotina real", "Eliminação de tarefas manuais", "Escalabilidade operacional sem gargalos"],
      badge: "SISTEMAS SOB MEDIDA",
    },
    {
      numero: "04",
      titulo: "Inteligência Artificial Aplicada",
      sub: "Automação no WhatsApp, Atendimento 24/7 e Dados",
      texto:
        "Automação de rotinas no WhatsApp, agentes de atendimento com IA gerativa 24/7, qualificação de leads, triagem de demandas e relatórios automatizados de inteligência.",
      artefatos: ["Agente / Chatbot com IA no WhatsApp", "Pipeline de Triagem de Clientes", "Integrações via API com CRM/ERP", "Diretrizes de Governança de IA"],
      beneficios: ["Atendimento instantâneo 24 horas por dia", "Qualificação automática de vendas", "Uso ético e seguro de dados"],
      badge: "AUTOMAÇÃO & IA",
    },
    {
      numero: "05",
      titulo: "Administrativo e Financeiro",
      sub: "Rotinas, Contas a Pagar, Compras e Power BI",
      texto:
        "Organização documental, rotinas financeiras, contas a pagar, apoio a compras e almoxarifado, relatórios gerenciais e dashboards executivos em Excel e Power BI.",
      artefatos: ["Dashboards Executivos em Power BI", "Manual de Rotinas Financeiras", "Controle de Caixa e Compras", "Relatórios Gerenciais Diários"],
      beneficios: ["Visão clara de margem e despesas", "Decisões estratégicas baseadas em dados", "Organização total para auditoria"],
      badge: "GESTÃO & BI",
    },
    {
      numero: "06",
      titulo: "Segurança do Trabalho",
      sub: "Prontuários, Laudos Técnicos e Treinamentos",
      texto:
        "Gestão de documentos e prontuários técnicos, laudos, relatórios de segurança, treinamentos para equipes de empresas/órgãos e apoio em primeiros socorros.",
      artefatos: ["Laudos e Documentos Técnicos NRs", "Programa de Treinamento de Equipes", "Prontuários de Segurança", "Plano de Atendimento a Emergências"],
      beneficios: ["Conformidade total com NRs legais", "Proteção da saúde dos colaboradores", "Mitigação de multas e acidentes"],
      badge: "CONFORMIDADE NR",
    },
    {
      numero: "07",
      titulo: "Apoio à Saúde e Gestão Hospitalar",
      sub: "Faturamento TISS/TUSS, Unidades de Saúde e Guias",
      texto:
        "Rotinas administrativas de clínicas particulares e unidades de saúde municipais, faturamento nos padrões TISS e TUSS, emissão de guias e suporte ao corpo clínico.",
      artefatos: ["Faturamento Padrão TISS/TUSS", "Gestão de Guias e Agendamentos", "Fluxograma de Atendimento Clínico", "Manual de Rotinas Administrativas"],
      beneficios: ["Faturamento sem glosas nem erros", "Agilidade no atendimento ao paciente", "Suporte completo à equipe médica"],
      badge: "SAÚDE & CLÍNICAS",
    },
  ],
} as const;

export const processo = {
  eyebrow: "COMO CONTRATAR",
  titulo: "Quatro passos simples para o seu projeto",
  intro:
    "Processo transparente e ágil para empresas privadas e órgãos públicos. Cuidamos de toda a formalização para a sua operação fluir sem sobressaltos.",
  passos: [
    {
      numero: "01",
      titulo: "Demanda e proposta",
      texto:
        "Entendemos a necessidade da sua empresa ou secretaria e enviamos proposta formal com escopo claro e valores competitivos.",
    },
    {
      numero: "02",
      titulo: "Documentação",
      texto:
        "Entregamos CNPJ, certidões de regularidade fiscal e toda a documentação técnica exigida.",
    },
    {
      numero: "03",
      titulo: "Formalização",
      texto:
        "Contrato direto para empresas privadas ou dispensa por valor (art. 75, II) com publicação no PNCP para o setor público.",
    },
    {
      numero: "04",
      titulo: "Execução e entrega",
      texto:
        "Executamos com relatórios de acompanhamento, entregas documentadas e suporte contínuo.",
    },
  ],
} as const;

export const ia = {
  eyebrow: "IA NA PRÁTICA",
  titulo: "O que a IA já pode fazer pelo seu negócio ou município",
  etapas: [
    "Cliente/Cidadão pergunta (WhatsApp/Site)",
    "IA responde e orienta 24/7",
    "Demanda registrada e classificada",
    "Relatório e CRM atualizado",
    "Equipe humana atua apenas nos casos estratégicos",
  ],
  nota: "Implantação segura: dados protegidos (LGPD), supervisão humana e diretrizes claras de uso.",
} as const;

export const quemSomos = {
  eyebrow: "QUEM SOMOS",
  intro: "Experiência dos dois lados do balcão.",
  perfis: [
    {
      nome: "Edmilson Santos de Souza",
      cargo: "Tecnologia, governança e projetos",
      bio: "Líder de projetos de TI na Sonda/CTIS. Ocupou cargos de chefia na EMBRATUR entre 2009 e 2019 — Chefe da Divisão de Gestão e Sistemas e Coordenador-Geral de TI substituto — conduzindo contratações de tecnologia e sistemas corporativos. Tecnólogo em Gestão de TI, MBA em IA & Big Data, MBA em Cybersecurity & Cybercrimes e pós em Engenharia de Software com IA aplicada (em andamento).",
      pills: [
        "Gestão de projetos",
        "Governança de TI",
        "LGPD",
        "IA e dados",
        "Sistemas corporativos",
      ],
    },
    {
      nome: "Nayara Tamiris Alves Sobrinho",
      cargo: "Administrativo, saúde e segurança do trabalho",
      bio: "Auxiliar administrativa em centro clínico, com atuação em contas a pagar, faturamento em saúde (TISS/TUSS), emissão de guias e atendimento. Foi Técnica em Segurança do Trabalho na VPA Bioenergia (2020–2024), responsável por documentos técnicos, compras, relatórios gerenciais e treinamentos para grandes grupos. Graduanda em Gestão Hospitalar, Técnica em Segurança do Trabalho e em Enfermagem, com especialização em Enfermagem do Trabalho.",
      pills: [
        "Rotinas administrativas",
        "Financeiro",
        "Faturamento TISS/TUSS",
        "Segurança do trabalho",
        "Treinamentos",
      ],
    },
  ],
} as const;

export const faq = {
  eyebrow: "PERGUNTAS",
  titulo: "Dúvidas frequentes de quem contrata",
  itens: [
    {
      pergunta: "Vocês atendem empresas privadas em crescimento?",
      resposta:
        "Sim! Atendemos startups, PMEs e empresas em expansão acelerada que buscam inteligência artificial, desenvolvimento de sites e sistemas sob medida, dashboards em Power BI e reestruturação financeira/operacional.",
    },
    {
      pergunta: "A contratação para o setor público sem licitação é legal?",
      resposta:
        "Sim. O art. 75, II, da Lei nº 14.133/2021 autoriza a contratação direta de serviços e compras até o limite atualizado por decreto — R$ 65.492,11 em 2026. Entregamos proposta formal, certidões e toda a instrução necessária.",
    },
    {
      pergunta: "Quais documentos e certidões vocês fornecem?",
      resposta:
        "CNPJ ativo, certidões de regularidade fiscal (federal, estadual, municipal, FGTS e trabalhista) e a proposta formal detalhada com escopo, prazos e entregáveis.",
    },
    {
      pergunta: "Como funciona o orçamento para empresas privadas?",
      resposta:
        "Sem custo e sem compromisso. Após um alinhamento inicial das necessidades, enviamos uma proposta técnica detalhada com escopo fechado, cronograma e opções flexíveis de investimento.",
    },
    {
      pergunta: "Vocês desenvolvem sites e sistemas sob medida?",
      resposta:
        "Sim. Criamos desde sites institucionais e portais da transparência até sistemas corporativos completos (ERPs, CRMs, portais de atendimento e automações com IA).",
    },
    {
      pergunta: "Vocês atendem em todo o Brasil?",
      resposta:
        "Atendemos presencialmente o Entorno do DF e Goiás e, de forma remota e integrada via WhatsApp e portal, clientes em todo o Brasil.",
    },
  ],
} as const;

export const ctaFinal = {
  heading: [
    { text: "Envie a demanda da sua empresa ou município. ", accent: false },
    { text: `A proposta formal chega em ${PLACEHOLDERS.PRAZO_PROPOSTA}.`, accent: true },
  ],
  texto:
    "Sem custo e sem compromisso — proposta sob medida para acelerar seu negócio ou instruir o processo no setor público.",
  botao: {
    label: "Chamar no WhatsApp",
    message: "Olá, N&E! Gostaria de conversar sobre um projeto para minha empresa/município.",
  },
  contatos: [
    { nome: "Edmilson", telefone: "(61) 98478-9316", email: "edysat@gmail.com" },
    { nome: "Nayara", telefone: "(61) 9275-4233", email: "nayara.tamiris1711@gmail.com" },
  ],
  localidade: "Valparaíso de Goiás – GO · Atendimento Nacional",
} as const;

export const footer = {
  wordmark: "N&E — Consultoria Empresarial & Tecnologia",
  linhaLegal: `Empresas em Crescimento & Administração Pública · Lei nº 14.133/2021`,
  ano: 2026,
} as const;
