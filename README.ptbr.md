# Boilerplate NextJS

Um ambiente pré-configurado para te ajudar a pular a parte chata (para alguns rs).

## USando Docker

1. [Instale o Docker](https://docs.docker.com/get-docker/) na sua máquina.
1. Faça o build do container: `docker build -t next-bp-kaspa .`.
1. Rode o container: `docker run -p 3000:3000 next-bp-kaspa`.

Você pode conferir a imagem executando o comando `docker images` no seu terminal.

> Se você estiver usando o VSCode como seu editor, instale a extensão Docker da Microsoft para uma experiência melhor com o docker.

## Fazendo deploy no Google Cloud Run

1. Instale o [SDK da Google Cloud](https://cloud.google.com/sdk/docs/install) para que você tenha acesso ao CLI utilizando o comando `gcloud` no seu terminal.
1. Execute o comando `gcloud auth login` no seu terminal para logar na sua conta.
1. [Crie um novo projeto](https://cloud.google.com/run/docs/quickstarts/build-and-deploy) no Google Cloud Run (i.e. `next-bp-kaspa` ou o nome que quiser). E confirme que o billing está ativo.
1. Builde a imagem do seu container usando o Cloud Build: `gcloud builds submit --tag gcr.io/PROJECT-ID/helloworld --project PROJECT-ID`. Isto vai habilitar o serviço de Cloud Build para o seu projeto.
1. Faça o deploy no Cloud Run: `gcloud run deploy --image gcr.io/PROJECT-ID/helloworld --project PROJECT-ID --platform managed`. E escolha uma região da sua preferência.

    - Será perguntado o nome do seu projeto: pressione Enter para aceitar o nome padrão, `helloworld`.
    - Será perguntado qual [região](https://cloud.google.com/run/docs/quickstarts/build-and-deploy#follow-cloud-run) você deseja: Selecione a de sua preferência, por exemplo `us-central1`.
    - Será perguntado se você permite **invocações das cloud functions sem autenticação** (_allow unauthenticated invocations_): responda `y`.

Ou clique no botão abaixo, autorize o script e selecione o projeto e região quando perguntado:

[![Use no Google Cloud](https://deploy.cloud.run/button.svg)](https://deploy.cloud.run/?git_repo=https://github.com/vercel/next.js.git&dir=examples/with-docker)

## Rodando o projeto

### com Docker + Hot Reload

```bash
npm run dev:docker
# or
yarn dev:docker
```

### Localmente sem Docker

```bash
npm run dev
# or
yarn dev
```

Abra [http://localhost:3000](http://localhost:3000) no seu navegador para ver o resultado.

Você pode começar editando o `pages/index.js`. A página atualiza conforme as alterações.

O diretório `pages/api` é mapeado para a rota `/api/*`. Arquivos neste diretório são tratados como [Rotas de API](https://nextjs.org/docs/api-routes/introduction) ao invés de páginas React.

## SonarQube Configuração Local

> O SonarQube é um analizador de código, não é mandatório nem está integrado com nenhum workflow de CI deste projeto.
> Estamos usando a versão Community, que é de graça, mas só se você usar localmente.

Para usar localmente, execute o comando no terminal:

```bash
npm run sonar:build
```

Se um erro ocorrer, indicando que atingiu o limite de memória da vm, aumente para o necessário com o comando:

```bash
sysctl -w vm.max_map_count=262144
```

Durante o uso do SonarQube, é necessário deixar este terminal aberto.

-   Acesse o dashboard em http://localhost:9000
-   Faça login utilizando as credenciais:

    > username: admin
    > password: admin

-   Crie um projeto
-   Dê um nome ou utilize o nome padrão `next-boilerplate`
-   Gere um token
-   Edite o arquivo `sonarqube.scanner.js` na raiz deste projeto substituindo pelo seu project key e token

Enquanto o SonarQube estiver rodando no seu terminal, abra um novo terminal e execute o comando:

```bash
npm run sonar:scan
```

Este script escaneia do seu código e envia para o dashboard, gerando um relatório completo de code smells e falhas de segurança

### Pacotes NPM instalados

#### Ambiente Básico

-   **React**- Versão mais recente do react, com [**_Suspense_**](https://17.reactjs.org/docs/concurrent-mode-suspense.html) entre outras melhorias.
-   **[NextJS](https://nextjs.org/)** - Versão LTS atual do next.
-   **Typescript** - 2023 né meu man...tem que ter.
-   **[React Icons](https://react-icons.github.io/react-icons/)** - Biblioteca de ícones, leve e bem completa.

#### Gerenciamento de estados

-   [**Recoil**](https://recoiljs.org/): Tão bom quanto o redux, tão fácil de usar quanto o context.

#### Data Fetching

-   [**SWR**](https://swr.vercel.app/): A powerful wrapper hook for data-fetching with caching out of the box.

#### Testes

-   [**Jest**](https://jestjs.io/): Jest pra fazer nossos testes unitários de cada dia nos dai hoje.
-   [**React Testing Library**](https://testing-library.com/docs/react-testing-library/intro/): Para conseguirmos testar nossos componentes E hooks.

#### Gerenciamento do projeto

-   **[Prettier](https://prettier.io/)**: Código organizado é código organizado.
-   [**ESLint**](https://nextjs.org/docs/basic-features/eslint) Sem muita firula, só as regras padrões do NextJS
-   [**Husky**](https://typicode.github.io/husky/#/): Linting de commits para deixar nossos commits padronizados e organizados. Estamos usando a regras do [Convention Commits](https://www.conventionalcommits.org/en/v1.0.0-beta.2/) aqui.
-   **[Commitzen](https://commitizen-tools.github.io/commitizen/)**: Uma CLI muito boa para facilitar os commits, use`git cz` e faça o que vc precisa fazer.

## Qualidade de Vida

> Já configurei alguns negócios pra você, o básico de todo projeto...

-   **Formatar ao Commitar**: O Husky já está configurado para rodar o hook que formata usando as regras do prettier-eslint
-   **Commit Lint**: O Husky também vai verificar se o commit tá no formato do [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0-beta.2/), mas se vc não curtir... dá pra configurar.
-   **Commitzen**: Como eu disse, digite `git cz` no terminal para usar o CLI.
-   **Global Error Boundary**: Estratégia do react para handling de erros globais no frontend, já tem um exemplo aqui no projeto.
-   **Unit Testing**: Todos os componentes tem um teste unitário já feito, isso ajuda a ver o relatório de cobertura e a ter uma ideia de como implementar os testes, caso você ainda não esteja acostumado.
-   **Test Coverage**: Algumas regras de cobertura de testes já estão configuradas, você pode mudar caso precise.
-   **Layouts**: Estamos usando o [NextJS Layout](https://nextjs.org/docs/basic-features/layouts) fque é uma funcionalidade do Next para montar layouts de forma organizada.

## Versões Futuras

Ainda estou decidindo qual biblioteca ou pacote utilizar para estilização, mas no momento estou usando css modules.

> Última atualização - 25 de Janeiro de 2023

##### Setup by Carlos-kaspa
