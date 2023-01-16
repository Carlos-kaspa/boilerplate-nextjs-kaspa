# Boilerplate NextJS

A pre-configured frontend enviroment, to help you skip the boring (_for some people_) part.

## What's in it?
This project starter-pack has some basic tooling for every project, while still leaving room for design choices of your own.
### Installed Packages
#### Basic Enviroment
- **React**- Latest react shinannigans with [***Suspense***](https://17.reactjs.org/docs/concurrent-mode-suspense.html) and some more QOL improvements.
- **[NextJS](https://nextjs.org/)** - LTS version
- **Typescript** - I mean, it's 2023...
- **[React Icons](https://react-icons.github.io/react-icons/)** - Small, easy to use icon library.

#### State Management Tools
- [**Recoil**](https://recoiljs.org/): As good as redux with as little setup as the react context api.
#### Data Fetching
- [**SWR**](https://swr.vercel.app/): A powerful wrapper hook for data-fetching with caching out of the box.

#### Testing
- [**Jest**](https://jestjs.io/): For some unit testing
- [**React Testing Library**](https://testing-library.com/docs/react-testing-library/intro/): For some Component AND hooks unit testing.

#### Project Management
- **[Prettier](https://prettier.io/)**: Neat code identation is neat.
- [**ESLint**](https://nextjs.org/docs/basic-features/eslint) No fancy rules, just the default NextJS ones, but it's already working with prettier.
- [**Husky**](https://typicode.github.io/husky/#/): Commit linting hooks for good, organized commits. We're following [Convention Commits](https://www.conventionalcommits.org/en/v1.0.0-beta.2/) rules here.
- **[Commitzen](https://commitizen-tools.github.io/commitizen/)**: A very helpful CLI tool for commiting. Just type `git cz` and do your thing.

## Quality of Life
> Already got you covered on all the config you'll need to start your project.
pre-commit hooks, prettier and lint rules, commit and formatting on a script...

- **Formatting On Commit**: Husky pre-commit hook to enforce eslint and prettier rules on commit, on all files to keep code organized.
- **Commit Lint**: Husky rules apply to every commit, enforcing [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0-beta.2/) rules that you may fiddle with later on.
- **Commitzen**: CLI to help you commit on the right format, type `git cz` in your terminal to use it. 
- **Global Error Boundary**: Already have a global error boundary setup, fully customizable with logging tools and a UI to your liking.
- **Unit Testing**: Every component is unit tested, which may be a nice reference to how unit testing and coverage works.
- **Test Coverage**: Already setup for coverage reports and coverage rules that may be customizable to your liking.
- **Layouts**: Already using [NextJS Layout](https://nextjs.org/docs/basic-features/layouts) feature to help you set up a nice UI

## Future Versions
I'm still deciding on which styling library to use, if any. For now i'll leave it at css modules.

> Last Updated - January 16 2023

##### Setup by Carlos-kaspa