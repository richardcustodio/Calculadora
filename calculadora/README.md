## Estrutura de Pastas

A seguinte estrutura de pastas organiza os arquivos e diretórios do projeto Calculadora React, facilitando a compreensão e manutenção do código:

---

calculadora-react/

├── src/

│   ├── components/

│   │   ├── Button.jsx: Componente funcional responsável por renderizar um botão individual da calculadora. Define a aparência e a ação ao ser clicado.

│   │   ├── ButtonGroup.jsx: Componente que agrupa vários componentes Button, organizando-os em linhas e colunas para formar o teclado numérico e de operações da calculadora.

│   │   ├── Display.jsx: Componente responsável por exibir o valor atual inserido pelo usuário e o resultado das operações.

│   │   ├── History.jsx: Componente que exibe o histórico das operações realizadas, permitindo ao usuário acompanhar seus cálculos anteriores.

│   │   └── ThemeToggle.jsx: Componente que implementa o botão de alternância entre os temas claro e escuro da aplicação.

│   ├── contexts/
│   │   └── ThemeContext.jsx: Define o Context API do React para gerenciar o estado global do tema da aplicação, permitindo que diferentes componentes acessem e alterem o tema atual.

│   ├── styles/
│   │   ├── App.css: Arquivo de estilos base para o componente principal App. Pode conter estilos gerais ou ser renomeado para dark.css caso se torne o ponto de partida para o tema escuro.

│   │   ├── ButtonGroup.css: Estilos específicos para o componente ButtonGroup, controlando o layout e a aparência dos grupos de botões.

│   │   ├── Display.css: Estilos específicos para o componente Display, definindo a aparência da área de exibição dos números e resultados.

│   │   ├── History.css: Estilos específicos para o componente History, formatando a apresentação do histórico de cálculos.

│   │   ├── index.css: Arquivo de estilos globais que são aplicados a toda a aplicação, como reset de estilos padrão ou definições de fontes.

│   │   └── themes/
│   │       ├── dark.css: Arquivo contendo os estilos específicos para o tema escuro da calculadora, sobrepondo ou estendendo os estilos base.

│   │       └── light.css: Arquivo contendo os estilos específicos para o tema claro da calculadora, definindo a aparência padrão da interface.

│   ├── App.jsx: Componente funcional que atua como o container principal da aplicação calculadora, gerenciando o estado geral e a renderização dos outros componentes.

│   ├── main.jsx: Ponto de entrada principal da aplicação React. É responsável por renderizar o componente App no elemento raiz do index.html.

│   └── ... (outros arquivos): Outros arquivos que podem incluir utilitários, hooks personalizados ou configurações adicionais.
├── index.html: Arquivo HTML principal que serve como a estrutura base da página web e o ponto de montagem para a aplicação React.
├── package.json: Arquivo de configuração do Node.js que contém informações sobre o projeto, scripts de build e as dependências (bibliotecas e pacotes) utilizadas.
├── README.md: Este arquivo (Markdown) que fornece uma descrição geral do projeto, suas funcionalidades, tecnologias utilizadas e instruções de como executar a aplicação.
└── ... (outros arquivos de configuração): Outros arquivos de configuração específicos para ferramentas como Vite, ESLint, Prettier, etc.
