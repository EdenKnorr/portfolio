# Portfólio — Helder Pedro

React + Vite + TypeScript + Tailwind CSS 3.

## Executar localmente
    npm install
    npm run dev        # http://localhost:5173

## Build e deploy
    npm run build      # gera ./dist
    npm run preview
- **GitHub Pages:** Settings > Pages > Source: GitHub Actions; faz push para `main` (workflow em `.github/workflows/deploy.yml`; `base: './'` já configurado).
- **Vercel:** importar o repositório; Framework Vite; comando `npm run build`; output `dist`.

## Editar conteúdo
Tudo em `src/data/content.ts`: links (`null` mostra `[ADICIONAR ...]`), projectos, competências, timeline, concursos.
Para publicar, define os links e substitui os `[ADICIONAR ...]` / `[CONFIRMAR ...]`.
Falta ainda adicionar `og:image` e `og:url` ao `index.html` quando existir domínio.

## Melhorias futuras
1. Imagem OG e domínio próprio. 2. Formulário com serviço (Formspree/Resend). 3. Capturas reais de cada projecto. 4. Versão em inglês/português com alternância. 5. Testes de acessibilidade automatizados (axe) no CI.

## Checklist
- [ ] 320, 375, 768, 1280, 1920 px sem scroll horizontal
- [ ] Navegação só por teclado e foco visível
- [ ] Contraste AA nos dois temas
- [ ] prefers-reduced-motion activo
- [ ] Lighthouse (medir antes de afirmar resultados)
