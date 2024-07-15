# MoneyLot Admin

Preview on https://moneylot.vercel.app

## Local development

1.  Clone the repo
2.  Run `pnpm install` to install dependencies
3.  Run `pnpm dev` to start development server

## Scripts

- 👨‍💻 `dev` starts the development server
- 🏗️ `build` builds the app for production
- 🚀 `start` starts the production server
- 🔍 `lint` lints the code using ESLint
- 🛠️ `lint:fix` automatically fixes linting errors
- ✨ `format` automatically fixes formatting issues using Prettier
- 👯 `build:icons` generates an SVG sprite from the icons in `./src/icons`

## Project structure

```shell
.
├── .github                         # GitHub folder
├── .vscode                         # VSCode configuration
├── public                          # Static assets to be served
├── scripts                         # Scripts folder
├── src
│   ├── app                         # Next.js (App Router)
│   ├── components                  # React components
│   ├── helpers                     # App-specific utilities
│   ├── hooks                       # React hooks
│   ├── icons                       # SVG icons
│   ├── lib                         # 3rd party libraries configuration
│   ├── styles                      # Styles folder
│   ├── types                       # Type definitions
│   ├── utils                       # Generic functions
│   └── constants.ts                # App-wide constants
├── .editorconfig                   # Enforce `lf` line endings on Windows
├── .env.local                      # Local environment variables
├── .eslintrc.json                  # ESLint configuration
├── .gitattributes                  # Enforce `lf` line endings in repo
├── .gitignore                      # Git files and folders to ignore
├── .prettierrc                     # Prettier configuration
├── .package.json                   # Project dependencies and scripts
├── tailwind.config.js              # Tailwind CSS configuration
└── tsconfig.json                   # TypeScript configuration
```
