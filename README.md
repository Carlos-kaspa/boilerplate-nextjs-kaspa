# Boilerplate NextJS

A pre-configured frontend enviroment, to help you skip the boring (_for some people_) part.

## Using Docker

1. [Install Docker](https://docs.docker.com/get-docker/) on your machine.
1. Build your container: `docker build -t next-bp-kaspa .`.
1. Run your container: `docker run -p 3000:3000 next-bp-kaspa`.

You can view your images created with `docker images`.

> If you're using VSCode install the Docker extension from Microsoft for a better experience.

## Deploying to Google Cloud Run

1. Install the [Google Cloud SDK](https://cloud.google.com/sdk/docs/install) so you can use `gcloud` on the command line.
1. Run `gcloud auth login` to log in to your account.
1. [Create a new project](https://cloud.google.com/run/docs/quickstarts/build-and-deploy) in Google Cloud Run (e.g. `next-bp-kaspa`). Ensure billing is turned on.
1. Build your container image using Cloud Build: `gcloud builds submit --tag gcr.io/PROJECT-ID/helloworld --project PROJECT-ID`. This will also enable Cloud Build for your project.
1. Deploy to Cloud Run: `gcloud run deploy --image gcr.io/PROJECT-ID/helloworld --project PROJECT-ID --platform managed`. Choose a region of your choice.

    - You will be prompted for the service name: press Enter to accept the default name, `helloworld`.
    - You will be prompted for [region](https://cloud.google.com/run/docs/quickstarts/build-and-deploy#follow-cloud-run): select the region of your choice, for example `us-central1`.
    - You will be prompted to **allow unauthenticated invocations**: respond `y`.

Or click the button below, authorize the script, and select the project and region when prompted:

[![Run on Google Cloud](https://deploy.cloud.run/button.svg)](https://deploy.cloud.run/?git_repo=https://github.com/vercel/next.js.git&dir=examples/with-docker)

## Running Locally

### Using Docker + Hot Reload

```bash
npm run dev:docker
# or
yarn dev:docker
```

### Using regular Dev Server

```bash
npm run dev:docker
# or
yarn dev:docker
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## SonarQube Local Setup

> SonarQube is a code analyzer, not mandatory and not yet integrated with any of the CI workflows already configured in this project.
> We're using the community version, which is free, but only if you run if locally.

In order to use it locally run:

```bash
npm run sonar:build
```

If you get a memory limit error try increasing the vm memory limit by running

```bash
sysctl -w vm.max_map_count=262144
```

You need to leave this terminal running sonarqube during it's usage.

-   Access the dashboard on http://localhost:9000
-   Login using the credentials:

    > username: admin
    > password: admin

-   Create a new project
-   Give it a name, for default use `next-boilerplate`
-   Generate a token
-   Edit sonarqube.scanner.js with your project key and token

While SonarQube container is running, you can scan your code and send it to the dashboard running:

```bash
npm run sonar:scan
```

This script scans your code for codesmells and security issues and sends it automatically to the dashboard where you can get a full review.

### Installed Packages

#### Basic Enviroment

-   **React**- Latest react shinannigans with [**_Suspense_**](https://17.reactjs.org/docs/concurrent-mode-suspense.html) and some more QOL improvements.
-   **[NextJS](https://nextjs.org/)** - LTS version
-   **Typescript** - I mean, it's 2023...
-   **[React Icons](https://react-icons.github.io/react-icons/)** - Small, easy to use icon library.

#### CI/CD Tools

-   **[Docker](https://react-icons.github.io/react-icons/)** - Basic configuration for docker deployment.
-   **[GitHub Workflows](https://react-icons.github.io/react-icons/)** - Container integrity, build and testing CI scripts, already configured.

#### State Management Tools

-   [**Recoil**](https://recoiljs.org/): As good as redux with as little setup as the react context api.

#### Data Fetching

-   [**SWR**](https://swr.vercel.app/): A powerful wrapper hook for data-fetching with caching out of the box.

#### Testing

-   [**Jest**](https://jestjs.io/): For some unit testing
-   [**React Testing Library**](https://testing-library.com/docs/react-testing-library/intro/): For some Component AND hooks unit testing.

#### Project Management

-   **[Prettier](https://prettier.io/)**: Neat code identation is neat.
-   [**ESLint**](https://nextjs.org/docs/basic-features/eslint) No fancy rules, just the default NextJS ones, but it's already working with prettier.
-   [**Husky**](https://typicode.github.io/husky/#/): Commit linting hooks for good, organized commits. We're following [Convention Commits](https://www.conventionalcommits.org/en/v1.0.0-beta.2/) rules here.
-   **[Commitzen](https://commitizen-tools.github.io/commitizen/)**: A very helpful CLI tool for commiting. Just type `git cz` and do your thing.

## Quality of Life

> Already got you covered on all the config you'll need to start your project.
> pre-commit hooks, prettier and lint rules, commit and formatting on a script...

-   **Formatting On Commit**: Husky pre-commit hook to enforce eslint and prettier rules on commit, on all files to keep code organized.
-   **Commit Lint**: Husky rules apply to every commit, enforcing [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0-beta.2/) rules that you may fiddle with later on.
-   **Commitzen**: CLI to help you commit on the right format, type `git cz` in your terminal to use it.
-   **Global Error Boundary**: Already have a global error boundary setup, fully customizable with logging tools and a UI to your liking.
-   **Unit Testing**: Every component is unit tested, which may be a nice reference to how unit testing and coverage works.
-   **Test Coverage**: Already setup for coverage reports and coverage rules that may be customizable to your liking.
-   **Layouts**: Already using [NextJS Layout](https://nextjs.org/docs/basic-features/layouts) feature to help you set up a nice UI

## Future Versions

I'm still deciding on which styling library to use, if any. For now i'll leave it at css modules.
Still need to [integrate ESLint and Jest reports to SonarQube dashboard](https://javascript.plainenglish.io/how-to-set-up-sonarqube-locally-on-a-react-typescript-project-ec02cd8e2626)

> Last Updated - January 25 2023

##### Setup by Carlos-kaspa
