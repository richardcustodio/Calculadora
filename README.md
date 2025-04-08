# Calculadora React

Este é um projeto de uma calculadora web desenvolvida utilizando a biblioteca React. A calculadora oferece funcionalidades aritméticas básicas, histórico de cálculos e um sistema de temas claro e escuro para personalização da interface.

## Funcionalidades

* **Operações Básicas:** Realize adições (+), subtrações (-), multiplicações (\*) e divisões (/).
* **Entrada Decimal:** Insira números com casas decimais.
* **Histórico:** Acompanhe as operações realizadas.
* **Funções Extras:**
    * **Porcentagem (%)**
    * **Troca de Sinal (+/-)**
    * **Limpar Tudo (AC)**
    * **Memória (MC, MR, M+, M-)**: Funcionalidade lógica implementada.
    * **Copiar (Copy)**: Copia o valor do display para a área de transferência.
    * **Raiz Quadrada (√)**
    * **Quadrado (x²)**
* **Temas:** Alterne entre os modos claro e escuro para uma experiência visual confortável em diferentes ambientes. O botão de troca de tema está localizado no canto superior direito da tela.

## Tecnologias Utilizadas

* [React](https://react.dev/): Biblioteca JavaScript para construção de interfaces de usuário.
* [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS): Para a estilização dos componentes e temas.
* [Context API (React)](https://react.dev/learn/passing-data-deeply-with-context): Para gerenciar o estado do tema globalmente na aplicação.
* [Vite](https://vitejs.dev/): Ferramenta de construção e servidor de desenvolvimento.

## Como Executar

1.  **Clone o repositório:**

    ```bash
    git clone <URL_DO_REPOSITÓRIO>
    cd calculadora-react
    ```

    (Substitua `<URL_DO_REPOSITÓRIO>` pela URL do seu repositório no GitHub)

2.  **Instale as dependências:**

    ```bash
    npm install
    ```

    ou

    ```bash
    yarn install
    ```

3.  **Inicie o servidor de desenvolvimento:**

    ```bash
    npm run dev
    ```

    ou

    ```bash
    yarn dev
    ```

    Isso iniciará a aplicação em um servidor local (geralmente `http://localhost:5173/`).

## Estrutura de Pastas

calculadora-react/
├── src/
│   ├── components/
│   │   ├── Button.jsx
│   │   ├── ButtonGroup.jsx
│   │   ├── Display.jsx
│   │   ├── History.jsx
│   │   └── ThemeToggle.jsx
│   ├── contexts/
│   │   └── ThemeContext.jsx
│   ├── styles/
│   │   ├── App.css         (Estilos base - pode ser renomeado para dark.css)
│   │   ├── ButtonGroup.css
│   │   ├── Display.css
│   │   ├── History.css
│   │   ├── index.css       (Estilos globais)
│   │   └── themes/
│   │       ├── dark.css    (Estilos para o tema escuro)
│   │       └── light.css   (Estilos para o tema claro)
│   ├── App.jsx             (Componente principal da aplicação)
│   ├── main.jsx            (Ponto de entrada da aplicação)
│   └── ...               (outros arquivos)
├── index.html            (Arquivo HTML principal)
├── package.json          (Arquivo de configuração do projeto e dependências)
├── README.md             (Este arquivo)
└── ...                   (outros arquivos de configuração)

## Notas

Este projeto está em desenvolvimento e algumas funcionalidades podem não estar totalmente implementadas ou podem passar por melhorias futuras.
