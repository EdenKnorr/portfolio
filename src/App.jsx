import React, { useState, useEffect, useMemo } from 'react';
import {
  Code,
  Terminal,
  Cpu,
  Layers,
  Database,
  Globe,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  ChevronRight,
  Check,
  Copy,
  BookOpen,
  Award,
  Filter,
  X,
  Server,
  Shield,
  Clock,
  ArrowUpRight,
  User,
  Briefcase,
  GraduationCap,
  Sparkles,
  MapPin,
  CheckCircle2,
  Send,
  Binary,
  Languages
} from 'lucide-react';

// ==========================================
// TRANSLATIONS & DATA STRUCTURES (PT / EN)
// ==========================================

const TRANSLATIONS = {
  pt: {
    nav: {
      about: "01. Sobre",
      projects: "02. Projectos",
      cp: "03. Programação Competitiva",
      skills: "04. Competências",
      timeline: "05. Percurso",
      contact: "06. Contacto",
      contactBtn: "Contacto"
    },
    hero: {
      badge: "Cadete na 42 Luanda & Estudante de CC na UAN",
      greeting: "// OLÁ, EU SOU O",
      headline: "A construir software, a resolver problemas complexos e a explorar os fundamentos das Ciências da Computação.",
      location: "Luanda, Angola",
      exploreBtn: "Explorar Projectos",
      contactBtn: "Entrar em Contacto",
      profiles: "PERFIS:"
    },
    about: {
      number: "01 //",
      title: "Sobre Mim",
      p1: "Sou um programador angolano e estudante de Ciências da Computação na Universidade Agostinho Neto (UAN), sendo também cadete da 42 Luanda. O meu percurso é impulsionado por uma forte determinação em construir uma base rigorosa em teoria da computação, algoritmos e engenharia de software.",
      p2: "Na 42 Luanda, desenvolvo competências através de uma metodologia prática, baseada na resolução autónoma de problemas, aprendizagem peer-to-peer e projectos desafiantes. Esta vivência preparou-me para resolver problemas complexos em C e Python, gerir memória de forma estrita e escrever código limpo.",
      p3: "Em paralelo, a minha formação na Universidade Agostinho Neto consolida a minha base matemática e teórica em estruturas discretas, algoritmos e computação — garantindo uma compreensão profunda do funcionamento interno da tecnologia.",
      expTitle: "// Experiência Anterior & Competências Transversais",
      expDesc: "Anteriormente, desempenhei funções de professor de línguas, coordenador de período e director de turma no Colégio Constância e Filho (2017–2022). Esta experiência desenvolveu a minha capacidade de comunicação, responsabilidade, organização e coordenação de equipas.",
      cards: [
        { title: "Sistemas & Baixo Nível", desc: "Experiência prática em C, gestão de memória, chamadas de sistema POSIX e administração Linux via terminal." },
        { title: "Desenvolvimento Full Stack", desc: "Criação de aplicações web robustas utilizando Laravel, PHP, MySQL e interfaces modernas e responsivas." },
        { title: "Pensamento Algorítmico", desc: "Foco activo em programação competitiva (AtCoder, beecrowd) para aperfeiçoar a velocidade e a precisão lógica." }
      ]
    },
    projects: {
      number: "02 //",
      title: "Projectos em Destaque",
      allCat: "Todos",
      deepDive: "Análise Técnica",
      problem: "// O PROBLEMA",
      solution: "// A SOLUÇÃO E ARQUITECTURA",
      keyHighlights: "// DESTAQUES TÉCNICOS",
      techUsed: "// TECNOLOGIAS UTILIZADAS",
      viewRepo: "Ver Repositório no GitHub",
      privateCode: "Código de âmbito empresarial / privado",
      close: "Fechar"
    },
    cp: {
      number: "03 //",
      title: "Programação Competitiva",
      desc: "A programação competitiva é um dos meus principais interesses académicos e técnicos. Através da resolução contínua de problemas sob restrições estritas de tempo e memória, aprofundo a análise assimptótica, programação dinâmica e estruturas de dados avançadas.",
      viewProfile: "Ver Perfil",
      targetRoadmap: "Meta de Percurso",
      focusTitle: "// FOCO EM RESOLUÇÃO DE PROBLEMAS ALGORÍTMICOS",
      languages: "Linguagens Principais: C / C++ / Python",
      timeComplexity: "COMPLEXIDADE TEMPORAL",
      dataStructures: "ESTRUTURAS DE DADOS",
      memoryManagement: "GESTÃO DE MEMÓRIA",
      nextGoal: "PRÓXIMO OBJECTIVO"
    },
    skills: {
      number: "04 //",
      title: "Competências Técnicas"
    },
    timeline: {
      number: "05 //",
      title: "Educação e Percurso"
    },
    contactSection: {
      number: "06 //",
      title: "Entrar em Contacto",
      heading: "Vamos conversar e construir soluções.",
      desc: "Tem uma proposta de projecto, oportunidade profissional, iniciativa de código aberto ou um problema algorítmico desafiante? Entre em contacto directamente por email ou através das redes profissionais.",
      emailLabel: "Endereço de Email Directo",
      copy: "Copiar",
      copied: "Copiado",
      profilesLabel: "Perfis Profissionais:",
      formTitle: "// ENVIAR MENSAGEM DIRECTA",
      formDesc: "Abre o teu cliente de email com o assunto pré-configurado:",
      subjectLabel: "Assunto / Tópico",
      subjectPlaceholder: "Oportunidade de Software / Consulta sobre projecto",
      messageLabel: "A tua mensagem",
      messagePlaceholder: "Olá Helder, gostaria de falar sobre...",
      submitBtn: "Abrir Cliente de Email"
    },
    contactModal: {
      title: "// Contactar Helder Pedro",
      desc: "Dados de contacto directo e opções de mensagem rápida.",
      emailCopied: "Email Copiado!",
      copyBtn: "Copiar Endereço de Email",
      openMail: "Abrir Aplicativo de Email"
    },
    footer: {
      subtitle: "Software Developer • Luanda, Angola",
      tagline: "Desenhado com estética Editorial Engineering"
    }
  },
  en: {
    nav: {
      about: "01. About",
      projects: "02. Projects",
      cp: "03. Competitive Prog.",
      skills: "04. Skills",
      timeline: "05. Journey",
      contact: "06. Contact",
      contactBtn: "Contact"
    },
    hero: {
      badge: "Cadet at 42 Luanda & CS Student at UAN",
      greeting: "// HELLO WORLD, I AM",
      headline: "Building software, solving complex problems, and exploring the fundamentals of Computer Science.",
      location: "Luanda, Angola",
      exploreBtn: "Explore My Work",
      contactBtn: "Get in Touch",
      profiles: "PROFILES:"
    },
    about: {
      number: "01 //",
      title: "About Me",
      p1: "I am an Angolan programmer and Computer Science student at Agostinho Neto University (UAN), as well as a cadet at 42 Luanda. My path is driven by a strong determination to build a rigorous foundation in computational theory, dynamic algorithms, and software engineering principles.",
      p2: "At 42 Luanda, I develop skills through an intensive, peer-to-peer methodology built around practical deliverables, autonomous problem-solving, and peer code reviews. This environment has trained me to break down complex problems in C and Python, manage memory strictly, and write maintainable code.",
      p3: "In parallel, my studies at Agostinho Neto University reinforce my mathematical and theoretical base in discrete structures, algorithms, and computing fundamentals—ensuring a deep understanding of core technological mechanisms.",
      expTitle: "// Professional Background & Transversal Skills",
      expDesc: "Previously, I worked as a language teacher, period coordinator, and class director at Colégio Constância e Filho (2017–2022). This experience developed my communication, organizational responsibility, leadership, and team coordination capabilities.",
      cards: [
        { title: "Systems & Low-Level", desc: "Hands-on experience in C, memory allocation, POSIX APIs, static libraries, and Linux terminal administration." },
        { title: "Full Stack SaaS", desc: "Building robust web applications using Laravel, PHP, MySQL, and modern responsive frontends." },
        { title: "Algorithmic Mindset", desc: "Active focus on competitive programming (AtCoder, beecrowd) to sharpen logic speed and analytical precision." }
      ]
    },
    projects: {
      number: "02 //",
      title: "Featured Projects",
      allCat: "All",
      deepDive: "Technical Deep Dive",
      problem: "// THE PROBLEM",
      solution: "// THE SOLUTION & ARCHITECTURE",
      keyHighlights: "// TECHNICAL HIGHLIGHTS",
      techUsed: "// TECHNOLOGIES USED",
      viewRepo: "View GitHub Repository",
      privateCode: "Proprietary / Enterprise codebase",
      close: "Close"
    },
    cp: {
      number: "03 //",
      title: "Competitive Programming & Algorithms",
      desc: "Competitive programming is one of my central technical interests. Through structured problem solving under tight time and memory limits, I continuously strengthen my understanding of asymptotic analysis, dynamic programming, and data structures.",
      viewProfile: "View Profile",
      targetRoadmap: "Roadmap Target",
      focusTitle: "// ALGORITHMIC PROBLEM SOLVING FOCUS",
      languages: "Primary Languages: C / C++ / Python",
      timeComplexity: "TIME COMPLEXITY",
      dataStructures: "DATA STRUCTURES",
      memoryManagement: "MEMORY MANAGEMENT",
      nextGoal: "NEXT GOAL"
    },
    skills: {
      number: "04 //",
      title: "Technical Skills"
    },
    timeline: {
      number: "05 //",
      title: "Education & Journey"
    },
    contactSection: {
      number: "06 //",
      title: "Get In Touch",
      heading: "Let's connect and build together.",
      desc: "Have a project proposal, software opportunity, open-source initiative, or algorithmic problem to solve? Feel free to reach out directly via email or social links.",
      emailLabel: "Direct Email Address",
      copy: "Copy",
      copied: "Copied",
      profilesLabel: "External Profiles:",
      formTitle: "// SEND A DIRECT MESSAGE",
      formDesc: "Launch your mail client pre-populated with your topic:",
      subjectLabel: "Subject / Topic",
      subjectPlaceholder: "Software opportunity / Project inquiry",
      messageLabel: "Your Message",
      messagePlaceholder: "Hello Helder, I would like to discuss...",
      submitBtn: "Launch Email Application"
    },
    contactModal: {
      title: "// Contact Helder Pedro",
      desc: "Direct contact details and quick message options.",
      emailCopied: "Email Copied!",
      copyBtn: "Copy Email Address",
      openMail: "Open Default Mail Client"
    },
    footer: {
      subtitle: "Software Developer • Luanda, Angola",
      tagline: "Designed with Editorial Engineering style"
    }
  }
};

const PERSONAL_INFO = {
  fullName: "Helder Kilenda Jorge Pedro",
  preferredName: "Helder Pedro",
  title: "Software Developer | Computer Science Student",
  location: "Luanda, Angola",
  university: "Universidade Agostinho Neto (UAN)",
  school42: "42 Luanda",
  email: "hepedro@student.42luanda.com",
  socials: {
    github: "https://github.com/EdenKnorr",
    linkedin: "https://www.linkedin.com/in/helderpedro24/",
    atcoder: "https://atcoder.jp/users/Reboladas",
    beecrowd: "https://judge.beecrowd.com/pt/profile/906070"
  }
};

const PROJECTS_DATA = [
  {
    id: "iduca",
    title: { pt: "iDuca — School Management System", en: "iDuca — School Management System" },
    subtitle: { pt: "Plataforma SaaS de Gestão Escolar", en: "SaaS Educational Platform" },
    category: "Full Stack",
    tech: ["Laravel", "PHP", "MySQL", "JavaScript", "Bootstrap", "Blade"],
    featured: true,
    description: {
      pt: "O iDuca é uma plataforma SaaS abrangente de gestão escolar desenvolvida para escolas e colégios em Angola, optimizando fluxos administrativos, académicos e financeiros.",
      en: "iDuca is a comprehensive SaaS educational platform tailored for primary and secondary schools in Angola, streamlining administrative, academic, and financial workflows."
    },
    problem: {
      pt: "Instituições de ensino em Angola frequentemente enfrentam processos manuais fragmentados, controlo complexo de propinas e morosidade na compilação de pautas escolares.",
      en: "Educational institutions in Angola often face fragmented manual record-keeping, delayed tuition tracking, and complex grade compilation processes."
    },
    solution: {
      pt: "Desenvolvimento do iDuca como uma aplicação web monolítica Full Stack com controlo de acesso baseado em funções (RBAC), cálculo automático de pautas e acompanhamento de assiduidade em tempo real.",
      en: "Engineered iDuca as a monolithic full-stack web application with role-based access control (RBAC), automated pauta generation, and real-time student attendance tracking."
    },
    keyFeatures: {
      pt: [
        "Gestão de alunos, matrículas e confirmações anuais",
        "Atribuição de professores, turmas, cursos e disciplinas",
        "Controlo automatizado de propinas e relatórios financeiros",
        "Cálculo de pautas de avaliação de acordo com o sistema de ensino angolano",
        "Acompanhamento de faltas e gestão do ano lectivo"
      ],
      en: [
        "Student enrollment & annual re-registration management",
        "Teacher assignment, course routing & class schedule management",
        "Automated tuition fee tracking & payment history reporting",
        "Grade pauta calculation complying with Angolan academic standards",
        "Attendance tracking and academic year lifecycle management"
      ]
    },
    githubUrl: null,
    isPrivate: true,
    badge: "Featured SaaS"
  },
  {
    id: "push-swap",
    title: { pt: "push_swap", en: "push_swap" },
    subtitle: { pt: "Ordenação Algorítmica de Stacks", en: "Algorithmic Stack Sorting" },
    category: "Systems & Algorithms",
    tech: ["C", "Algorithms", "Data Structures", "Memory Optimization", "Makefile"],
    featured: true,
    description: {
      pt: "Projecto da 42 Luanda focado no cálculo e execução do menor conjunto de instruções para ordenar dados numa stack.",
      en: "Algorithmic project at 42 Luanda calculating and outputting the minimum sequence of instructions required to sort data on a stack."
    },
    problem: {
      pt: "Ordenar um conjunto aleatório de inteiros utilizando duas stacks (Stack A e Stack B) e um conjunto limitado de 11 operações com complexidade mínima.",
      en: "Sort a random set of integers using two stacks (Stack A & Stack B) and a restricted set of 11 stack operations with minimal complexity."
    },
    solution: {
      pt: "Implementação de algoritmo Radix Sort combinado com divisão por blocos (chunking) e selecção de pivôs pela mediana, alcançando os limites exigidos pelos benchmarks da 42.",
      en: "Implemented radix sort combined with chunking and median-pivot algorithms based on stack size, achieving optimal instruction counts compliant with strict 42 benchmarks."
    },
    keyFeatures: {
      pt: [
        "Implementação personalizada de estrutura de dados de stack dupla em C",
        "Optimização dinâmica de instruções reduzindo movimentos em conjuntos de 100 e 500 inteiros",
        "Garantia absoluta de ausência de fugas de memória (verificado com Valgrind)",
        "Gestão rigorosa de erros para argumentos inválidos, duplicados e int overflow"
      ],
      en: [
        "Custom implementation of dual stack data structure in low-level C",
        "Dynamic instruction optimization reducing total operations for 100 and 500 integer sets",
        "Zero memory leak guarantee verified via Valgrind",
        "Rigorous error management for invalid inputs, duplicates, and integer overflow"
      ]
    },
    githubUrl: "https://github.com/EdenKnorr",
    badge: "42 Core Project"
  },
  {
    id: "born2beroot",
    title: { pt: "Born2beRoot", en: "Born2beRoot" },
    subtitle: { pt: "Administração de Sistemas & Endurecimento", en: "System Administration & Hardening" },
    category: "Systems & Infrastructure",
    tech: ["Debian Linux", "LVM", "LUKS", "SSH", "UFW", "Bash", "VirtualBox"],
    featured: true,
    description: {
      pt: "Projecto de administração de sistemas focado na configuração e segurança de um servidor Linux virtualizado sob protocolos estritos.",
      en: "System administration and virtualization project focused on configuring a secure Linux server environment under strict security protocols."
    },
    problem: {
      pt: "Configurar um servidor seguro Debian com partições encriptadas, regras estritas de firewall e scripts de monitorização sem interface gráfica.",
      en: "Set up a standalone secure server running Debian with encrypted storage partitions, strict firewall rules, and automated monitoring scripts without graphical interfaces."
    },
    solution: {
      pt: "Configuração de VM Debian com encriptação LUKS sobre LVM, autenticação SSH por chave em porta não-padrão, firewall UFW e scripts em Bash para monitorização.",
      en: "Configured Debian VM with LUKS encryption over LVM partitions, configured SSH key authentication on non-standard ports, enforced UFW rules, and developed custom monitoring bash daemons."
    },
    keyFeatures: {
      pt: [
        "Particionamento LVM com camada de encriptação LUKS",
        "Política estrita de palavras-passe através do módulo PAM",
        "Configuração de firewall UFW limitando portas de acesso estritamente necessárias",
        "Regras de sudo e auditoria centralizada de utilizadores",
        "Script em Bash para transmissão de métricas do sistema a cada 10 minutos"
      ],
      en: [
        "LVM partitioning with LUKS disk encryption layer",
        "Strict password policy enforcement via PAM module",
        "UFW firewall deployment limiting access to essential ports only",
        "Sudo group policy restriction and centralized user audit logging",
        "Custom shell script broadcasting system metrics to all terminal sessions every 10 minutes"
      ]
    },
    githubUrl: "https://github.com/EdenKnorr",
    badge: "42 SysAdmin"
  },
  {
    id: "ft-printf",
    title: { pt: "ft_printf", en: "ft_printf" },
    subtitle: { pt: "Recriação da Função Variádica de I/O", en: "Variadic I/O Library Function" },
    category: "Systems & Algorithms",
    tech: ["C", "Variadic Functions", "Memory Management", "Pointers", "Format Strings"],
    featured: false,
    description: {
      pt: "Reimplementação da função `printf` da biblioteca padrão da linguagem C para compreensão profunda de argumentos variádicos e formatação.",
      en: "A custom reimplementation of libc's `printf` function to understand variable argument handling and low-level output formatting."
    },
    problem: {
      pt: "Recriar o comportamento do `printf` para os especificadores (%c, %s, %p, %d, %i, %u, %x, %X, %%) sem utilizar bibliotecas de formatação padrão.",
      en: "Recreate `printf` behavior handling standard specifiers (%c, %s, %p, %d, %i, %u, %x, %X, %%) without standard formatting libraries."
    },
    solution: {
      pt: "Utilização das macros variádicas nativas (`va_start`, `va_arg`, `va_end`) combinadas com conversores de bases numéricas e escrita por buffers.",
      en: "Utilized standard C variadic macros (`va_start`, `va_arg`, `va_end`) combined with hex convertors and buffered write primitives."
    },
    keyFeatures: {
      pt: [
        "Suporte a endereços de memória em ponteiros e formatação hexadecimal",
        "Parsing dinâmico de argumentos variádicos",
        "Conversão e formatação de inteiros, unsigned, caracteres e strings",
        "Retorno exacto do número de caracteres impressos"
      ],
      en: [
        "Support for pointer address printing and hexadecimal formatting",
        "Variadic argument parsing and conversion handling",
        "Formatted integer, unsigned, character, and string output handling",
        "Non-blocking return of exact character count written"
      ]
    },
    githubUrl: "https://github.com/EdenKnorr",
    badge: "42 C Library"
  },
  {
    id: "get-next-line",
    title: { pt: "get_next_line", en: "get_next_line" },
    subtitle: { pt: "Leitura de Ficheiros por Linha", en: "File Descriptor Line Reader" },
    category: "Systems & Algorithms",
    tech: ["C", "File I/O", "Static Variables", "Dynamic Memory Allocation"],
    featured: false,
    description: {
      pt: "Função em C que lê e retorna uma linha de cada vez a partir de um file descriptor de forma eficiente.",
      en: "A C function that reads and returns a single line ending in a newline character from a given file descriptor efficiently."
    },
    problem: {
      pt: "Ler linhas sequenciais de ficheiros sem saber a sua extensão antecipadamente e sem perder o conteúdo em buffer entre chamadas sucessivas.",
      en: "Read lines sequentially from files or standard input without knowing line length ahead of time and without losing buffered content between calls."
    },
    solution: {
      pt: "Utilização de variáveis estáticas em C para manter os fragmentos lidos entre chamadas de função e realocação dinâmica de memória.",
      en: "Leveraged C static buffers to persist remaining string fragments across sequential function calls alongside dynamic memory re-allocations."
    },
    keyFeatures: {
      pt: [
        "Suporte a múltiplos file descriptors simultaneamente",
        "Gestão dinâmica do tamanho do buffer através da macro `BUFFER_SIZE`",
        "Limpeza rigorosa de memória sem fugas no final do ficheiro (EOF) ou em caso de erro",
        "Manipulação optimizada de ponteiros em memória"
      ],
      en: [
        "Seamless processing across multiple file descriptors simultaneously",
        "Configurable buffer size macro compilation options (`BUFFER_SIZE`)",
        "Robust memory allocation and leak-free cleanup on EOF or reading errors",
        "Optimized string manipulation avoiding memory duplication"
      ]
    },
    githubUrl: "https://github.com/EdenKnorr",
    badge: "42 Utility"
  }
];

const SKILL_CATEGORIES = [
  {
    name: { pt: "Linguagens de Programação", en: "Programming Languages" },
    skills: [
      { name: "C", level: "Avançado", note: { pt: "Gestão de memória, ponteiros, chamadas de sistema", en: "Memory management, pointers, system calls" } },
      { name: "Python", level: "Avançado", note: { pt: "POO, automação, estruturas de dados", en: "OOP, scripting, data structures" } },
      { name: "PHP", level: "Usado em projecto", note: { pt: "Laravel, backend & aplicações SaaS", en: "Laravel backend & web platforms" } },
      { name: "JavaScript", level: "Usado em projecto", note: { pt: "DOM, ES6+, APIs Web", en: "DOM, ES6+, Web APIs" } },
      { name: "C++", level: "Em Estudo / Prog. Comp.", note: { pt: "Programação competitiva e STL", en: "Competitive programming & STL" } }
    ]
  },
  {
    name: { pt: "Desenvolvimento Web", en: "Web & Frameworks" },
    skills: [
      { name: "Laravel", level: "Avançado", note: { pt: "MVC, Eloquent, Autenticação, SaaS", en: "MVC, Eloquent, Authentication, SaaS" } },
      { name: "HTML5 & CSS3", level: "Avançado", note: { pt: "Layout semântico, design responsivo", en: "Semantic layout, responsive design" } },
      { name: "Bootstrap", level: "Usado em projecto", note: { pt: "Prototipagem rápida de interfaces", en: "Rapid UI prototyping" } },
      { name: "Electron", level: "Usado em projecto", note: { pt: "Aplicações desktop com SQLite", en: "Desktop applications with SQLite" } },
      { name: "Tailwind CSS", level: "Usado em projecto", note: { pt: "Estilização orientada a utilitários", en: "Utility-first styling" } }
    ]
  },
  {
    name: { pt: "Bases de Dados", en: "Databases & Storage" },
    skills: [
      { name: "MySQL", level: "Intermédio", note: { pt: "Modelação relacional, índices, chaves estrangeiras", en: "Relational modeling, indexing, foreign keys" } },
      { name: "SQLite", level: "Intermédio", note: { pt: "Armazenamento em bases de dados embutidas", en: "Embedded database storage" } }
    ]
  },
  {
    name: { pt: "Sistemas e Ferramentas", en: "Systems & Tools" },
    skills: [
      { name: "Linux / Debian", level: "Intermédio / Avançado", note: { pt: "CLI, permissões, LVM, UFW", en: "CLI, permissions, LVM, UFW" } },
      { name: "Git & GitHub", level: "Intermédio", note: { pt: "Controlo de versões, branches, workflows", en: "Version control, feature branching" } },
      { name: "VirtualBox", level: "Intermédio", note: { pt: "Isolamento de VMs e redes virtuais", en: "VM isolation & networking" } },
      { name: "VS Code & Vim", level: "Avançado", note: { pt: "Ambientes de desenvolvimento principais", en: "Primary development environments" } }
    ]
  },
  {
    name: { pt: "Ciências da Computação", en: "Computer Science Core" },
    skills: [
      { name: "Estruturas de Dados", level: "Foco Principal", note: { pt: "Stacks, Queues, Linked Lists, Árvores", en: "Stacks, Queues, Linked Lists, Trees" } },
      { name: "Algoritmos", level: "Foco Principal", note: { pt: "Ordenação, Pesquisa, Recursão, Complexidade", en: "Sorting, Searching, Recursion, Time Complexity" } },
      { name: "Programação Orientada a Objectos", level: "Base Sólida", note: { pt: "Encapsulamento, Polimorfismo, Abstracção", en: "Encapsulation, Polymorphism, Abstraction" } },
      { name: "Gestão de Memória", level: "Baixo Nível", note: { pt: "Stack vs Heap, Alocação Dinâmica, Ponteiros", en: "Stack vs Heap, Dynamic Allocation, Pointers" } },
      { name: "Resolução de Problemas", level: "Desenvolvimento Activo", note: { pt: "Pensamento algorítmico e competitivo", en: "Competitive programming mindset" } }
    ]
  }
];

const CP_PROFILES_DATA = [
  {
    platform: "AtCoder",
    username: "Reboladas",
    url: PERSONAL_INFO.socials.atcoder,
    status: { pt: "Participante Activo", en: "Active Contender" },
    description: {
      pt: "Participação em AtCoder Beginner Contests (ABC). Foco em rapidez, precisão lógica e algoritmos fundamentais.",
      en: "Regular participant in AtCoder Beginner Contests (ABC). Focus on speed, precision, and foundational mathematical algorithms."
    },
    badgeColor: "bg-blue-500/10 text-blue-400 border-blue-500/20"
  },
  {
    platform: "beecrowd",
    username: "Perfil 906070",
    url: PERSONAL_INFO.socials.beecrowd,
    status: { pt: "Treino Contínuo", en: "Active Practice" },
    description: {
      pt: "Resolução contínua de problemas de estruturas de dados, matemática e manipulação de strings para consolidação de bases.",
      en: "Solving algorithmic problems across string manipulation, math, and data structures to build foundational consistency."
    },
    badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20"
  },
  {
    platform: "AoCPC",
    username: "Olimpíada Angolana",
    url: "#",
    status: { pt: "Objectivo Próximo", en: "Target Competition" },
    description: {
      pt: "Preparação activa para participar no Angolan Collegiate Programming Contest e alcançar um excelente resultado.",
      en: "Actively training to compete in the Angolan Collegiate Programming Contest to represent university & cadet community."
    },
    badgeColor: "bg-amber-500/10 text-amber-400 border-amber-500/20"
  },
  {
    platform: "ICPC",
    username: "Meta de Longo Prazo",
    url: "#",
    status: { pt: "Plano Estratégico", en: "Strategic Roadmap" },
    description: {
      pt: "Meta de longo prazo para qualificação através do domínio rigoroso de algoritmos avançados e estruturas em C++.",
      en: "Long-term aspiration to qualify for regional stages through rigorous problem-solving in C++ and algorithmic mastery."
    },
    badgeColor: "bg-purple-500/10 text-purple-400 border-purple-500/20"
  }
];

const TIMELINE_DATA = [
  {
    period: { pt: "Em curso", en: "Ongoing" },
    title: { pt: "Estudante de Licenciatura em Ciências da Computação", en: "Undergraduate Student in Computer Science" },
    institution: "Universidade Agostinho Neto (UAN)",
    location: "Luanda, Angola",
    type: { pt: "Académico", en: "Academic" },
    description: {
      pt: "Consolidação dos fundamentos matemáticos e computacionais. O curso abrange matemática discreta, cálculo, álgebra linear, conceitos de orientação a objectos e fundamentos formais da computação.",
      en: "Consolidating mathematical and computational theoretical bases. Coursework covers discrete mathematics, calculus, linear algebra, object-oriented concepts, and formal computer science foundations."
    },
    highlights: ["Ciências da Computação Teórica", "Matemática Aplicada à Computação", "Pensamento Algorítmico"]
  },
  {
    period: { pt: "Em curso (Cadete)", en: "Ongoing Cadet Journey" },
    title: { pt: "Cadete de Engenharia de Software", en: "Software Engineering Cadet" },
    institution: "42 Luanda",
    location: "Luanda, Angola",
    type: { pt: "Prático / Engenharia", en: "Practical / Engineering" },
    description: {
      pt: "Formação prática e intensiva baseada na aprendizagem peer-to-peer e project-based learning. Desenvolvimento de projectos rigorosos em C e Python, administração de sistemas Unix, gestão estrita de memória e boas práticas de engenharia.",
      en: "Enrolled in 42 Luanda's rigorous peer-to-peer curriculum. Developing real-world software without lectures or teachers. Writing strict C projects, low-level algorithm implementations, unix system administration, and modular Python applications."
    },
    highlights: ["Programação em C & Sistemas", "Revisão de Código Peer-to-Peer", "Resolução Autónoma de Problemas", "Normas Estritas de Código"]
  },
  {
    period: { pt: "Março de 2017 – Fevereiro de 2022", en: "March 2017 – February 2022" },
    title: { pt: "Professor, Coordenador de Período & Director de Turma", en: "Teacher, Period Coordinator & Class Director" },
    institution: "Colégio Constância e Filho",
    location: "Luanda, Angola",
    type: { pt: "Experiência Profissional", en: "Professional Experience" },
    description: {
      pt: "Lecionação de Inglês, Português e Caligrafia. Desempenho de funções de gestão pedagógica, coordenação de período e direcção de turma, desenvolvendo elevada capacidade de organização, responsabilidade e comunicação.",
      en: "Taught English, Portuguese, and Calligraphy. Served as Period Coordinator and Class Director managing administrative operations, student development, and teacher communication."
    },
    highlights: ["Liderança & Coordenação", "Comunicação Clara", "Organização & Responsabilidade"]
  },
  {
    period: { pt: "Percurso Inicial", en: "Earlier Path" },
    title: { pt: "Técnico de Informática & Suporte", en: "IT Support & Technical Basics" },
    institution: "Aprendizagem Autónoma",
    location: "Luanda, Angola",
    type: { pt: "Fundamentos Técnicos", en: "Technical Foundations" },
    description: {
      pt: "Primeiro contacto prático com manutenção de sistemas informáticos, resolução de problemas de redes e suporte antes da dedicação exclusiva à Engenharia de Software.",
      en: "Early hands-on contact with computer systems maintenance, software setup, and network troubleshooting before committing fully to Software Engineering."
    }
  }
];

// ==========================================
// MAIN COMPONENT
// ==========================================

export default function App() {
  const [lang, setLang] = useState('pt'); // Default language PT-PT
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [activeNav, setActiveNav] = useState("hero");

  const t = TRANSLATIONS[lang];

  // Lock document class permanently to dark mode
  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  // Handle active navigation highlighting on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'projects', 'cp', 'skills', 'timeline', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveNav(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Filter projects by category
  const filteredProjects = useMemo(() => {
    if (activeCategory === "All" || activeCategory === "Todos") return PROJECTS_DATA;
    return PROJECTS_DATA.filter(p => p.category === activeCategory);
  }, [activeCategory]);

  const categories = ["All", "Systems & Algorithms", "Full Stack", "Systems & Infrastructure"];

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <div className="min-h-screen bg-[#0B0F14] text-[#E6EDF3] transition-colors duration-300">
      
      {/* BACKGROUND DECORATIVE GRID PATTERN */}
      <div 
        className="fixed inset-0 pointer-events-none opacity-[0.05] z-0" 
        style={{ backgroundImage: `radial-gradient(#ffffff 1px, transparent 1px)`, backgroundSize: '24px 24px' }} 
      />

      {/* HEADER / NAVIGATION BAR */}
      <header className="sticky top-0 z-40 backdrop-blur-md bg-[#0B0F14]/80 border-b border-[#30363D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <a href="#hero" className="flex items-center gap-2 font-mono font-bold text-sm tracking-tight group">
            <span className="text-[#A3E635] group-hover:rotate-12 transition-transform inline-block">›_</span>
            <span className="tracking-wider text-white">HELDER<span className="text-[#A3E635]">.PEDRO</span></span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 text-xs font-mono tracking-wider uppercase">
            {[
              { id: 'about', label: t.nav.about },
              { id: 'projects', label: t.nav.projects },
              { id: 'cp', label: t.nav.cp },
              { id: 'skills', label: t.nav.skills },
              { id: 'timeline', label: t.nav.timeline },
              { id: 'contact', label: t.nav.contact }
            ].map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`transition-colors duration-200 hover:text-[#A3E635] ${
                  activeNav === item.id ? 'text-[#A3E635] font-semibold' : 'text-slate-400'
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Header Controls: Language Switcher & Contact CTA */}
          <div className="flex items-center gap-3">
            {/* Language Switcher Toggle */}
            <div className="flex items-center bg-[#151B23] border border-[#30363D] rounded-lg p-0.5">
              <button
                onClick={() => setLang('pt')}
                className={`px-2.5 py-1 rounded text-[11px] font-mono font-semibold transition-all ${
                  lang === 'pt'
                    ? 'bg-[#A3E635] text-black shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                PT
              </button>
              <button
                onClick={() => setLang('en')}
                className={`px-2.5 py-1 rounded text-[11px] font-mono font-semibold transition-all ${
                  lang === 'en'
                    ? 'bg-[#A3E635] text-black shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                EN
              </button>
            </div>

            <button
              onClick={() => setContactModalOpen(true)}
              className="px-3 py-1.5 rounded-lg bg-[#A3E635] text-black font-mono font-semibold text-xs hover:bg-[#8ece28] transition-colors flex items-center gap-1.5"
            >
              <Mail size={13} />
              <span>{t.nav.contactBtn}</span>
            </button>
          </div>
        </div>
      </header>

      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24 md:space-y-32 py-12">

        {/* ==========================================
            SECTION 01: HERO / HOME
            ========================================== */}
        <section id="hero" className="pt-6 md:pt-16 pb-8 border-b border-[#30363D]/40">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Main Text Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono border border-[#30363D] bg-[#151B23]">
                <span className="w-2 h-2 rounded-full bg-[#A3E635] animate-pulse"></span>
                <span className="text-slate-300">{t.hero.badge}</span>
              </div>

              <div className="space-y-2">
                <p className="font-mono text-xs text-[#A3E635] uppercase tracking-widest">{t.hero.greeting}</p>
                <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight font-sans text-white">
                  Helder Pedro
                </h1>
                <p className="text-xl sm:text-2xl font-mono text-slate-400 font-medium">
                  Software Developer | Computer Science Student
                </p>
              </div>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-sans max-w-2xl">
                "{t.hero.headline}"
              </p>

              {/* Location & Quick Info */}
              <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400">
                <span className="flex items-center gap-1.5">
                  <MapPin size={14} className="text-[#A3E635]" />
                  {t.hero.location}
                </span>
                <span className="hidden sm:inline">•</span>
                <span className="flex items-center gap-1.5">
                  <GraduationCap size={14} className="text-[#A3E635]" />
                  Universidade Agostinho Neto
                </span>
                <span className="hidden sm:inline">•</span>
                <span className="flex items-center gap-1.5">
                  <Terminal size={14} className="text-[#A3E635]" />
                  42 Luanda Cadet
                </span>
              </div>

              {/* Primary Call-to-Actions */}
              <div className="pt-4 flex flex-wrap gap-4 items-center">
                <a
                  href="#projects"
                  className="px-6 py-3 rounded-lg bg-[#A3E635] text-black font-mono font-bold text-sm hover:bg-[#8ece28] transition-all flex items-center gap-2 shadow-lg shadow-[#A3E635]/10"
                >
                  {t.hero.exploreBtn}
                  <ChevronRight size={16} />
                </a>

                <button
                  onClick={() => setContactModalOpen(true)}
                  className="px-6 py-3 rounded-lg border border-[#30363D] bg-[#151B23] text-slate-200 font-mono font-semibold text-sm hover:bg-[#1C2128] hover:border-slate-500 transition-all flex items-center gap-2"
                >
                  <Mail size={16} />
                  {t.hero.contactBtn}
                </button>
                <a
                  href={`/cv/Helder-Pedro-CV-${lang.toUpperCase()}.pdf`}
                  download
                  className="px-6 py-3 rounded-lg border border-[#A3E635]/50 text-[#A3E635] font-mono font-semibold text-sm hover:bg-[#A3E635]/10 transition-all flex items-center gap-2"
                >
                  <BookOpen size={16} />
                  {lang === 'pt' ? 'Descarregar CV' : 'Download CV'}
                </a>
              </div>

              {/* Social / External Profile Links */}
              <div className="pt-2 flex items-center gap-3">
                <span className="text-xs font-mono text-slate-500 mr-2">{t.hero.profiles}</span>
                {[
                  { name: 'GitHub', icon: Github, url: PERSONAL_INFO.socials.github },
                  { name: 'LinkedIn', icon: Linkedin, url: PERSONAL_INFO.socials.linkedin },
                  { name: 'AtCoder', icon: Binary, url: PERSONAL_INFO.socials.atcoder },
                  { name: 'beecrowd', icon: Code, url: PERSONAL_INFO.socials.beecrowd }
                ].map((soc) => (
                  <a
                    key={soc.name}
                    href={soc.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-lg border border-[#30363D] bg-[#151B23] text-slate-400 hover:text-[#A3E635] hover:border-[#A3E635]/50 transition-all"
                    title={soc.name}
                  >
                    <soc.icon size={16} />
                  </a>
                ))}
              </div>
            </div>

            {/* Terminal Visual Widget */}
            <div className="lg:col-span-5">
              <div className="rounded-xl border border-[#30363D] bg-[#151B23] overflow-hidden shadow-2xl font-mono text-xs">
                <div className="bg-[#0D1117] px-4 py-3 border-b border-[#30363D] flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                    <span className="text-slate-400 text-[11px] ml-2 font-mono">helder@42luanda:~</span>
                  </div>
                  <span className="text-slate-500 text-[10px]">C / Python / Linux</span>
                </div>

                <div className="p-5 space-y-4 text-slate-300 font-mono leading-relaxed">
                  <div>
                    <span className="text-[#A3E635]">helder@42luanda</span>:<span className="text-blue-400">~</span>$ cat status.json
                    <pre className="mt-2 text-slate-400 bg-[#0B0F14] p-3 rounded border border-[#30363D]/60 overflow-x-auto text-[11px]">
{`{
  "developer": "Helder Pedro",
  "status": "Cadet @ 42 Luanda",
  "degree": "B.Sc. Computer Science @ UAN",
  "focus": [
    "Algorithms & Data Structures",
    "Low-level C Programming",
    "Linux Systems Administration",
    "Full Stack SaaS Development"
  ],
  "location": "Luanda, Angola",
  "compete": ["AtCoder", "beecrowd", "AoCPC Goal"]
}`}
                    </pre>
                  </div>

                  <div>
                    <span className="text-[#A3E635]">helder@42luanda</span>:<span className="text-blue-400">~</span>$ gcc -Wall -Wextra -Werror main.c -o solution
                  </div>

                  <div className="flex items-center gap-2 text-emerald-400">
                    <CheckCircle2 size={14} />
                    <span>Compilation successful (0 warnings, 0 leaks)</span>
                  </div>

                  <div className="pt-2 border-t border-[#30363D]/40 flex items-center justify-between text-slate-500 text-[10px]">
                    <span>STATUS: ACTIVE_LEARNER</span>
                    <span className="text-[#A3E635]">ONLINE</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>


        {/* ==========================================
            SECTION 02: ABOUT ME
            ========================================== */}
        <section id="about" className="scroll-mt-24 space-y-8">
          <div className="flex items-center gap-3">
            <span className="font-mono text-sm text-[#A3E635]">{t.about.number}</span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">{t.about.title}</h2>
            <div className="h-px bg-[#30363D] flex-1"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-8 space-y-5 text-slate-300 leading-relaxed font-sans text-base">
              <p>{t.about.p1}</p>
              <p>{t.about.p2}</p>
              <p>{t.about.p3}</p>

              <div className="p-4 rounded-xl border border-[#30363D] bg-[#151B23]/80 space-y-2 text-sm">
                <p className="font-mono text-xs text-[#A3E635] uppercase font-semibold">{t.about.expTitle}</p>
                <p className="text-slate-400">{t.about.expDesc}</p>
              </div>
            </div>

            {/* Quick Key Highlights Cards */}
            <div className="lg:col-span-4 space-y-4">
              {[
                { icon: Terminal, title: t.about.cards[0].title, desc: t.about.cards[0].desc },
                { icon: Globe, title: t.about.cards[1].title, desc: t.about.cards[1].desc },
                { icon: Binary, title: t.about.cards[2].title, desc: t.about.cards[2].desc }
              ].map((card, i) => (
                <div key={i} className="p-4 rounded-xl border border-[#30363D] bg-[#151B23] space-y-1.5 hover:border-slate-500 transition-colors">
                  <div className="flex items-center gap-2.5 text-[#A3E635]">
                    <card.icon size={18} />
                    <h3 className="font-mono text-sm font-bold text-white">{card.title}</h3>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">{card.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* ==========================================
            SECTION 03: PROJECTS
            ========================================== */}
        <section id="projects" className="scroll-mt-24 space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="font-mono text-sm text-[#A3E635]">{t.projects.number}</span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">{t.projects.title}</h2>
              <div className="hidden sm:block h-px bg-[#30363D] w-24"></div>
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap gap-2 text-xs font-mono">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3 py-1.5 rounded-lg border transition-all ${
                    activeCategory === cat
                      ? 'bg-[#A3E635] text-black border-[#A3E635] font-bold'
                      : 'border-[#30363D] bg-[#151B23] text-slate-300 hover:border-slate-500'
                  }`}
                >
                  {cat === "All" ? t.projects.allCat : cat}
                </button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group rounded-xl border border-[#30363D] bg-[#151B23] p-6 flex flex-col justify-between hover:border-[#A3E635]/60 transition-all duration-300 shadow-lg relative overflow-hidden"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full border border-[#30363D] bg-[#0B0F14] text-[#A3E635]">
                      {project.badge}
                    </span>
                    <span className="text-xs font-mono text-slate-500">{project.category}</span>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-[#A3E635] transition-colors">
                      {project.title[lang]}
                    </h3>
                    <p className="text-xs font-mono text-slate-400 mt-0.5">{project.subtitle[lang]}</p>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed line-clamp-3">
                    {project.description[lang]}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.tech.map((techName) => (
                      <span key={techName} className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#0B0F14] text-slate-400 border border-[#30363D]/60">
                        {techName}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-[#30363D]/60 flex items-center justify-between">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="text-xs font-mono text-[#A3E635] hover:underline flex items-center gap-1 font-semibold"
                  >
                    {t.projects.deepDive}
                    <ChevronRight size={14} />
                  </button>

                  <div className="flex items-center gap-2">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 rounded border border-[#30363D] text-slate-400 hover:text-white hover:border-slate-400 transition-colors"
                        title="GitHub Repository"
                      >
                        <Github size={14} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>


        {/* ==========================================
            SECTION 04: COMPETITIVE PROGRAMMING
            ========================================== */}
        <section id="cp" className="scroll-mt-24 space-y-8">
          <div className="flex items-center gap-3">
            <span className="font-mono text-sm text-[#A3E635]">{t.cp.number}</span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">{t.cp.title}</h2>
            <div className="h-px bg-[#30363D] flex-1"></div>
          </div>

          <div className="p-6 rounded-2xl border border-[#30363D] bg-[#151B23] space-y-6">
            <div className="max-w-3xl space-y-3">
              <p className="text-slate-300 leading-relaxed">{t.cp.desc}</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
              {CP_PROFILES_DATA.map((cp) => (
                <div key={cp.platform} className="p-4 rounded-xl border border-[#30363D] bg-[#0B0F14] space-y-3 flex flex-col justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <h3 className="font-mono font-bold text-white text-base">{cp.platform}</h3>
                      <span className={`text-[10px] font-mono px-2 py-0.5 rounded border ${cp.badgeColor}`}>
                        {cp.status[lang]}
                      </span>
                    </div>
                    <p className="text-xs font-mono text-slate-400">User: {cp.username}</p>
                    <p className="text-xs text-slate-300 leading-relaxed">{cp.description[lang]}</p>
                  </div>

                  {cp.url !== "#" ? (
                    <a
                      href={cp.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-mono text-[#A3E635] hover:underline flex items-center gap-1 pt-2 font-semibold"
                    >
                      {t.cp.viewProfile}
                      <ExternalLink size={12} />
                    </a>
                  ) : (
                    <span className="text-[11px] font-mono text-slate-500 pt-2 block">{t.cp.targetRoadmap}</span>
                  )}
                </div>
              ))}
            </div>

            <div className="p-4 rounded-xl border border-[#30363D]/60 bg-[#0B0F14]/50 space-y-3">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <span className="font-mono text-xs text-[#A3E635] font-semibold">{t.cp.focusTitle}</span>
                <span className="font-mono text-[11px] text-slate-400">{t.cp.languages}</span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-mono text-slate-300">
                <div className="p-2.5 rounded bg-[#151B23] border border-[#30363D]/40">
                  <p className="text-slate-400 text-[10px]">{t.cp.timeComplexity}</p>
                  <p className="font-bold text-white mt-0.5">O(N log N) / O(N)</p>
                </div>
                <div className="p-2.5 rounded bg-[#151B23] border border-[#30363D]/40">
                  <p className="text-slate-400 text-[10px]">{t.cp.dataStructures}</p>
                  <p className="font-bold text-white mt-0.5">Stacks, Queues, Graphs</p>
                </div>
                <div className="p-2.5 rounded bg-[#151B23] border border-[#30363D]/40">
                  <p className="text-slate-400 text-[10px]">{t.cp.memoryManagement}</p>
                  <p className="font-bold text-white mt-0.5">Strict Stack / Heap</p>
                </div>
                <div className="p-2.5 rounded bg-[#151B23] border border-[#30363D]/40">
                  <p className="text-slate-400 text-[10px]">{t.cp.nextGoal}</p>
                  <p className="font-bold text-white mt-0.5">AoCPC Preparation</p>
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* ==========================================
            SECTION 05: TECHNICAL SKILLS
            ========================================== */}
        <section id="skills" className="scroll-mt-24 space-y-8">
          <div className="flex items-center gap-3">
            <span className="font-mono text-sm text-[#A3E635]">{t.skills.number}</span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">{t.skills.title}</h2>
            <div className="h-px bg-[#30363D] flex-1"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SKILL_CATEGORIES.map((cat, idx) => (
              <div key={idx} className="p-6 rounded-xl border border-[#30363D] bg-[#151B23] space-y-4">
                <div className="flex items-center gap-2 border-b border-[#30363D]/60 pb-3">
                  <Code size={16} className="text-[#A3E635]" />
                  <h3 className="font-mono font-bold text-white text-base">{cat.name[lang]}</h3>
                </div>

                <div className="space-y-3">
                  {cat.skills.map((skill) => (
                    <div key={skill.name} className="space-y-1">
                      <div className="flex items-center justify-between text-xs font-mono">
                        <span className="font-semibold text-slate-200">{skill.name}</span>
                        <span className="text-[10px] text-[#A3E635] bg-[#0B0F14] px-2 py-0.5 rounded border border-[#30363D]">
                          {skill.level}
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-400 leading-snug">{skill.note[lang]}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>


        {/* ==========================================
            SECTION 06: EDUCATION & EXPERIENCE
            ========================================== */}
        <section id="timeline" className="scroll-mt-24 space-y-8">
          <div className="flex items-center gap-3">
            <span className="font-mono text-sm text-[#A3E635]">{t.timeline.number}</span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">{t.timeline.title}</h2>
            <div className="h-px bg-[#30363D] flex-1"></div>
          </div>

          <div className="relative border-l-2 border-[#30363D] ml-3 sm:ml-6 space-y-10 pl-6 sm:pl-8">
            {TIMELINE_DATA.map((item, index) => (
              <div key={index} className="relative group">
                <div className="absolute -left-[31px] sm:-left-[39px] top-0 w-6 h-6 rounded-full border-2 border-[#A3E635] bg-[#0B0F14] flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-[#A3E635]"></div>
                </div>

                <div className="p-6 rounded-xl border border-[#30363D] bg-[#151B23] space-y-3 hover:border-slate-400 transition-colors">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <span className="font-mono text-xs text-[#A3E635] font-semibold">{item.period[lang]}</span>
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#0B0F14] border border-[#30363D] text-slate-400 w-fit">
                      {item.type[lang]}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-white">{item.title[lang]}</h3>
                    <p className="text-xs font-mono text-slate-400">{item.institution} — {item.location}</p>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {item.description[lang]}
                  </p>

                  {item.highlights && (
                    <div className="flex flex-wrap gap-2 pt-2">
                      {item.highlights.map((hl) => (
                        <span key={hl} className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#0B0F14] text-slate-300 border border-[#30363D]">
                          ✓ {hl}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>


        {/* ==========================================
            SECTION 07: CONTACT
            ========================================== */}
        <section id="contact" className="scroll-mt-24 space-y-8">
          <div className="flex items-center gap-3">
            <span className="font-mono text-sm text-[#A3E635]">{t.contactSection.number}</span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">{t.contactSection.title}</h2>
            <div className="h-px bg-[#30363D] flex-1"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-6 p-8 rounded-2xl border border-[#30363D] bg-[#151B23] space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-white">{t.contactSection.heading}</h3>
                <p className="text-slate-300 text-sm leading-relaxed">{t.contactSection.desc}</p>

                <div className="p-4 rounded-xl border border-[#30363D] bg-[#0B0F14] space-y-2">
                  <span className="text-[11px] font-mono text-slate-500 uppercase">{t.contactSection.emailLabel}</span>
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-mono text-sm font-semibold text-[#A3E635] truncate">{PERSONAL_INFO.email}</span>
                    <button
                      onClick={handleCopyEmail}
                      className="p-2 rounded bg-[#151B23] border border-[#30363D] hover:border-slate-400 text-slate-300 transition-colors flex items-center gap-1 text-xs font-mono shrink-0"
                    >
                      {copiedEmail ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                      <span>{copiedEmail ? t.contactSection.copied : t.contactSection.copy}</span>
                    </button>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-[#30363D]/60 space-y-3">
                <span className="text-xs font-mono text-slate-400 uppercase">CV</span>
                <div className="flex flex-wrap gap-3">
                  <a href="/cv/Helder-Pedro-CV-PT.pdf" download className="px-3 py-2 rounded-lg border border-[#30363D] bg-[#0B0F14] text-xs font-mono text-slate-300 hover:text-[#A3E635] hover:border-[#A3E635] transition-all flex items-center gap-2">
                    <BookOpen size={14} />
                    CV (PT)
                  </a>
                  <a href="/cv/Helder-Pedro-CV-EN.pdf" download className="px-3 py-2 rounded-lg border border-[#30363D] bg-[#0B0F14] text-xs font-mono text-slate-300 hover:text-[#A3E635] hover:border-[#A3E635] transition-all flex items-center gap-2">
                    <BookOpen size={14} />
                    CV (EN)
                  </a>
                </div>
                <span className="text-xs font-mono text-slate-400 uppercase">{t.contactSection.profilesLabel}</span>
                <div className="flex flex-wrap gap-3">
                  <a
                    href={PERSONAL_INFO.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-2 rounded-lg border border-[#30363D] bg-[#0B0F14] text-xs font-mono text-slate-300 hover:text-[#A3E635] hover:border-[#A3E635] transition-all flex items-center gap-2"
                  >
                    <Github size={14} />
                    GitHub
                  </a>
                  <a
                    href={PERSONAL_INFO.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-2 rounded-lg border border-[#30363D] bg-[#0B0F14] text-xs font-mono text-slate-300 hover:text-[#A3E635] hover:border-[#A3E635] transition-all flex items-center gap-2"
                  >
                    <Linkedin size={14} />
                    LinkedIn
                  </a>
                  <a
                    href={PERSONAL_INFO.socials.atcoder}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-2 rounded-lg border border-[#30363D] bg-[#0B0F14] text-xs font-mono text-slate-300 hover:text-[#A3E635] hover:border-[#A3E635] transition-all flex items-center gap-2"
                  >
                    <ExternalLink size={14} />
                    AtCoder
                  </a>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 p-8 rounded-2xl border border-[#30363D] bg-[#151B23] space-y-4">
              <h3 className="text-lg font-bold text-white font-mono">{t.contactSection.formTitle}</h3>
              <p className="text-xs text-slate-400">{t.contactSection.formDesc}</p>

              <form 
                onSubmit={(e) => {
                  e.preventDefault();
                  const subject = encodeURIComponent(e.target.subject.value || "Portfolio Contact");
                  const body = encodeURIComponent(e.target.message.value || "");
                  window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;
                }} 
                className="space-y-4"
              >
                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-1">{t.contactSection.subjectLabel}</label>
                  <input
                    type="text"
                    name="subject"
                    required
                    placeholder={t.contactSection.subjectPlaceholder}
                    className="w-full px-4 py-2.5 rounded-lg border border-[#30363D] bg-[#0B0F14] text-slate-200 text-xs font-mono focus:outline-none focus:border-[#A3E635]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-1">{t.contactSection.messageLabel}</label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    placeholder={t.contactSection.messagePlaceholder}
                    className="w-full px-4 py-2.5 rounded-lg border border-[#30363D] bg-[#0B0F14] text-slate-200 text-xs font-mono focus:outline-none focus:border-[#A3E635] resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-lg bg-[#A3E635] text-black font-mono font-bold text-xs hover:bg-[#8ece28] transition-colors flex items-center justify-center gap-2"
                >
                  <Send size={14} />
                  {t.contactSection.submitBtn}
                </button>
              </form>
            </div>
          </div>
        </section>

      </main>

      {/* ==========================================
          SECTION 08: FOOTER
          ========================================== */}
      <footer className="mt-20 border-t border-[#30363D] py-12 bg-[#0B0F14]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6 text-xs font-mono text-slate-500">
          <div className="space-y-1 text-center md:text-left">
            <p className="text-slate-300 font-bold">{PERSONAL_INFO.fullName}</p>
            <p>{t.footer.subtitle}</p>
          </div>

          <p className="text-center">
            {t.footer.tagline} • {new Date().getFullYear()}
          </p>

          <div className="flex items-center gap-4">
            <a href={PERSONAL_INFO.socials.github} target="_blank" rel="noopener noreferrer" className="hover:text-[#A3E635] transition-colors">GitHub</a>
            <span>•</span>
            <a href={PERSONAL_INFO.socials.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-[#A3E635] transition-colors">LinkedIn</a>
            <span>•</span>
            <a href={PERSONAL_INFO.socials.atcoder} target="_blank" rel="noopener noreferrer" className="hover:text-[#A3E635] transition-colors">AtCoder</a>
          </div>
        </div>
      </footer>


      {/* ==========================================
          PROJECT MODAL DIALOG
          ========================================== */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
          <div className="relative w-full max-w-2xl rounded-2xl border border-[#30363D] bg-[#151B23] p-6 sm:p-8 space-y-6 shadow-2xl my-8">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 p-2 rounded-lg border border-[#30363D] bg-[#0B0F14] text-slate-400 hover:text-white hover:border-slate-400 transition-colors"
            >
              <X size={18} />
            </button>

            <div className="space-y-2 border-b border-[#30363D] pb-4">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono px-2.5 py-0.5 rounded border border-[#30363D] bg-[#0B0F14] text-[#A3E635]">
                  {selectedProject.badge}
                </span>
                <span className="text-xs font-mono text-slate-400">{selectedProject.category}</span>
              </div>
              <h3 className="text-2xl font-bold text-white">{selectedProject.title[lang]}</h3>
              <p className="text-xs font-mono text-slate-400">{selectedProject.subtitle[lang]}</p>
            </div>

            <div className="space-y-4 text-xs text-slate-300 leading-relaxed font-sans">
              <div>
                <h4 className="font-mono text-xs font-bold text-[#A3E635] uppercase mb-1">{t.projects.problem}</h4>
                <p className="bg-[#0B0F14] p-3 rounded border border-[#30363D]/60">{selectedProject.problem[lang]}</p>
              </div>

              <div>
                <h4 className="font-mono text-xs font-bold text-[#A3E635] uppercase mb-1">{t.projects.solution}</h4>
                <p className="bg-[#0B0F14] p-3 rounded border border-[#30363D]/60">{selectedProject.solution[lang]}</p>
              </div>

              <div>
                <h4 className="font-mono text-xs font-bold text-[#A3E635] uppercase mb-2">{t.projects.keyHighlights}</h4>
                <ul className="space-y-1.5 pl-2">
                  {selectedProject.keyFeatures[lang].map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-[#A3E635] font-mono">›</span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-mono text-xs font-bold text-slate-400 uppercase mb-2">{t.projects.techUsed}</h4>
                <div className="flex flex-wrap gap-1.5">
                  {selectedProject.tech.map((techName) => (
                    <span key={techName} className="text-[11px] font-mono px-2.5 py-1 rounded bg-[#0B0F14] text-slate-300 border border-[#30363D]">
                      {techName}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-[#30363D] flex items-center justify-between">
              {selectedProject.githubUrl ? (
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-lg bg-[#A3E635] text-black font-mono font-bold text-xs hover:bg-[#8ece28] transition-colors flex items-center gap-2"
                >
                  <Github size={14} />
                  {t.projects.viewRepo}
                </a>
              ) : (
                <span className="text-xs font-mono text-slate-500 italic">
                  {t.projects.privateCode}
                </span>
              )}

              <button
                onClick={() => setSelectedProject(null)}
                className="px-4 py-2 rounded-lg border border-[#30363D] bg-[#0B0F14] text-slate-300 font-mono text-xs hover:border-slate-400 transition-colors"
              >
                {t.projects.close}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ==========================================
          CONTACT DIRECT MODAL DIALOG
          ========================================== */}
      {contactModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="relative w-full max-w-md rounded-2xl border border-[#30363D] bg-[#151B23] p-6 space-y-6 shadow-2xl">
            <button
              onClick={() => setContactModalOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-lg border border-[#30363D] bg-[#0B0F14] text-slate-400 hover:text-white transition-colors"
            >
              <X size={18} />
            </button>

            <div className="space-y-1">
              <h3 className="text-xl font-bold text-white font-mono">{t.contactModal.title}</h3>
              <p className="text-xs text-slate-400">{t.contactModal.desc}</p>
            </div>

            <div className="space-y-3 font-mono text-xs">
              <div className="p-3 rounded-lg border border-[#30363D] bg-[#0B0F14] flex items-center justify-between">
                <span className="text-slate-400">Email:</span>
                <span className="text-[#A3E635] font-bold">{PERSONAL_INFO.email}</span>
              </div>

              <div className="p-3 rounded-lg border border-[#30363D] bg-[#0B0F14] flex items-center justify-between">
                <span className="text-slate-400">Location:</span>
                <span className="text-slate-200">{PERSONAL_INFO.location}</span>
              </div>
            </div>

            <div className="space-y-2 pt-2">
              <button
                onClick={handleCopyEmail}
                className="w-full py-2.5 rounded-lg border border-[#30363D] bg-[#0B0F14] text-slate-200 font-mono text-xs hover:border-[#A3E635] transition-colors flex items-center justify-center gap-2"
              >
                {copiedEmail ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                <span>{copiedEmail ? t.contactModal.emailCopied : t.contactModal.copyBtn}</span>
              </button>

              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="w-full py-2.5 rounded-lg bg-[#A3E635] text-black font-mono font-bold text-xs hover:bg-[#8ece28] transition-colors flex items-center justify-center gap-2 block text-center"
              >
                <Mail size={14} />
                {t.contactModal.openMail}
              </a>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}