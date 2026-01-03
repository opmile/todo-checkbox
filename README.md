# todo-checkbox

Aplicação de exemplo (React + Vite) para gerenciar tarefas simples com checkboxes. Projeto focado em componentes reutilizáveis e estilização com TailwindCSS.

## Resumo

* SPA mínima com criação de tarefas, marcação como concluída e separação em colunas "Pending" e "Completed".

* Arquitetura baseada em componentes pequenos e unifocados (Form, Modal, TaskList, TaskItem, etc.).

* Construída com Vite + React e estilizada totalmente com TailwindCSS (utilitários).

## Instalação e Execução

1. Instale dependências: `npm install`
2. Rode em modo desenvolvimento: `npm run dev`
3. Build para produção: `npm run build`
4. Preview da build: `npm run preview`

## Estrutura

```
| src/
    | `main.jsx` — bootstrapping React.
    | `App.jsx` — raiz da aplicação: estado das tasks, lógica de criação e toggle.
    | `index.css` — import de Tailwind + fonte Inter.
    |
    | components/
        | `Container.jsx` — wrapper visual.
        | `Toolbar.jsx` — botão que abre modal.
        | `Section.jsx` — layout de seção que contém as colunas.
        |
        | ui/
            | `Modal.jsx` — modal baseado em <dialog>.
            | `ModalTitle.jsx` — título do modal.
            | `Form.jsx` — formulário de criação de tarefas (usa FormData).
            | `InputText.jsx`, `InputCheckbox.jsx` — campos controlados por props.
            | `Button.jsx` — botão estilizado.
            | `TaskList.jsx` — lista de tarefas.
            | `TaskItem.jsx` — item com checkbox e título (strike quando concluído).
            | `SectionColumn.jsx` — coluna (Pending / Completed).
            | `Divider.jsx` — divisor visual.
            | `EmptyState.jsx` — visual quando não há tarefas.
```

## Stack

* React 19 + Vite
* TailwindCSS (configurado via @tailwindcss/vite)
* ESLint (configuração moderna)
* Fonte: Inter (Google Fonts)

## Decisões de Engenharia e Processo

* Requisitos funcionais foram levantados e guiados usando issues no repositório GitHub. Cada issue representou uma pequena unidade de trabalho (ex.: “criar modal de entrada”, “adicionar checkbox com toggle”), servindo como fio condutor que permitiu desenvolver o projeto de forma linear e previsível.

* O desenvolvimento guiado por pequenas issues, além de se incorporar muito bem como um processo de engenharia, promove clareza, rastreabilidade e incrementalidade, reduzindo a necessidade de grandes blocos de cópia/cola.

* Para acelerar o fluxo de trabalho, o uso de GitHub Copilot foi adotado de forma estratégica para gerar rascunhos de issues diretamente dentro do GitHub. Isso atuou como fator de produtividade massivo: sugestões de título/descrição e critérios de aceitação permitiram criar issues mais completas e com menos atrito, mantendo o ritmo de desenvolvimento e a qualidade do backlog.

## Limitações, boas práticas, pontos de melhoria

* IDs das tasks são gerados por tasks.length + 1 — isso é suficiente para protótipos, mas pode causar colisões em remoções/edições; considerar UUIDs ou um gerador de IDs mais robusto.

* Atualmente o estado é mantido em App.jsx; para escalas maiores, migrar para gerenciamento centralizado (Context) e persistência (localStorage ou backend).

---