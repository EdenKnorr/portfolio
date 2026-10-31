// Valores null = informação em falta. A interface mostra o placeholder [ADICIONAR ...] em vez de inventar dados.
export const links = {
  github: null as string | null,
  linkedin: null as string | null,
  atcoder: null as string | null,
  email: null as string | null,
}

export type Project = {
  name: string; summary: string; goal: string; stack: string[]; highlights: string[]
  github: string | null; demo: string | null; note?: string
}

export const projects: Project[] = [
  { name: 'School Management System', summary: 'Plataforma SaaS de gestão escolar para escolas e colégios em Angola.',
    goal: 'Digitalizar a administração escolar numa aplicação Full Stack.',
    stack: ['Laravel', 'JavaScript', 'Bootstrap', 'MySQL'],
    highlights: ['Alunos, matrículas e confirmações anuais', 'Turmas, cursos, professores e disciplinas', 'Propinas, faltas, avaliações e pautas', 'Gestão do ano lectivo'], github: null, demo: null },
  { name: 'push_swap', summary: 'Ordenação de inteiros com duas stacks e um conjunto limitado de operações.',
    goal: 'Ordenar com o menor número possível de movimentos.', stack: ['C'],
    highlights: ['Algoritmos de ordenação e estruturas de dados', 'Optimização de movimentos', 'Análise de complexidade', 'Gestão de memória'], github: null, demo: null, note: '42 Luanda' },
  { name: 'Born2beRoot', summary: 'Máquina virtual Debian configurada com foco em segurança.',
    goal: 'Administrar e proteger um sistema Linux de raiz.', stack: ['Debian', 'LVM', 'LUKS', 'SSH', 'UFW', 'VirtualBox'],
    highlights: ['Utilizadores, grupos e permissões', 'Cifragem de disco e firewall', 'Configuração de serviços'], github: null, demo: null, note: '42 Luanda' },
  { name: 'ft_printf', summary: 'Reimplementação da função printf em C.',
    goal: 'Replicar a formatação de saída da biblioteca standard.', stack: ['C'],
    highlights: ['Argumentos variádicos', 'Conversões de tipos e manipulação de strings', 'Programação de baixo nível'], github: null, demo: null, note: '42 Luanda' },
  { name: 'get_next_line', summary: 'Função que lê um ficheiro e devolve uma linha de cada vez.',
    goal: 'Ler de qualquer file descriptor com buffer arbitrário.', stack: ['C'],
    highlights: ['File descriptors e buffering', 'Alocação dinâmica', 'Gestão de memória'], github: null, demo: null, note: '42 Luanda' },
  { name: 'DataDeck (Python Module 07)', summary: 'Sistema modular de cartas com arquitectura orientada a objectos.',
    goal: 'Explorar abstracção e extensibilidade em Python.', stack: ['Python'],
    highlights: ['Classes abstractas e interfaces', 'Padrões de desenho [CONFIRMAR: Factory, Strategy]', 'Capabilities'], github: null, demo: null, note: '42 Luanda' },
  { name: 'Linux Desktop Alarm Application', summary: 'Aplicação de alarmes para o ambiente de trabalho Linux.',
    goal: '[ADICIONAR: finalidade]', stack: ['Python'],
    highlights: ['[ADICIONAR: funcionalidades implementadas]', '[ADICIONAR: bibliotecas utilizadas]'], github: null, demo: null },
]

export const skills: { title: string; items: { n: string; learning?: boolean }[] }[] = [
  { title: 'Programming Languages', items: [{ n: 'C' }, { n: 'C++', learning: true }, { n: 'Python' }, { n: 'PHP' }, { n: 'JavaScript' }] },
  { title: 'Web Development', items: [{ n: 'Laravel' }, { n: 'HTML5' }, { n: 'CSS3' }, { n: 'Bootstrap' }] },
  { title: 'Databases', items: [{ n: 'MySQL' }, { n: 'SQLite', learning: true }] },
  { title: 'Systems & Tools', items: [{ n: 'Linux' }, { n: 'Debian' }, { n: 'Git' }, { n: 'GitHub' }, { n: 'VirtualBox' }, { n: 'VS Code' }] },
  { title: 'Computer Science', items: [{ n: 'Algorithms' }, { n: 'Data Structures' }, { n: 'Object-Oriented Programming' }, { n: 'Memory Management' }, { n: 'Problem Solving' }, { n: 'Software Design' }] },
]

export const timeline = [
  { when: '[ADICIONAR DATAS]', title: 'Universidade Agostinho Neto', sub: 'Ciências da Computação', text: 'Consolidação dos fundamentos matemáticos e computacionais.' },
  { when: '[ADICIONAR DATAS]', title: '42 Luanda', sub: 'Cadete', text: 'Formação prática em engenharia de software: peer-to-peer learning e projectos em C e Python.' },
  { when: 'Mar 2017 – Fev 2022', title: 'Colégio Constância e Filho', sub: 'Professor de Inglês, Português e Caligrafia', text: 'Coordenador de período e director de turma.' },
  { when: '[ADICIONAR DATAS]', title: '[ADICIONAR EMPRESA]', sub: 'Técnico de informática', text: '[ADICIONAR DESCRIÇÃO]' },
]

export const contests = [
  { name: 'AtCoder', text: 'Participação em Beginner Contests.' },
  { name: 'AoCPC', text: 'Objectivo: participar e obter bons resultados.' },
  { name: 'ICPC', text: 'Objectivo de longo prazo.' },
  { name: 'Cloudflight Coding Contest', text: 'Participação em competições de programação.' },
]
