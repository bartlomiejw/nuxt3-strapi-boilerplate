# Nuxt Strapi App

This is a Nuxt.js application using Strapi as the backend.

A ready to use Nuxt 3 boilerplate

Live Demo: https://nuxt-boilerplate.onrender.com/

StackBlitz: ~/

## Quick start

```bash
git clone https://github.com/renegadevi/nuxt-boilerplate.git
cd nuxt-boilerplate
pnpm install
pnpm run dev
```

## Scripts

- `build`: Build the Nuxt application.
- `dev`: Run the Nuxt application in development mode.
- `dev-https`: Run the Nuxt application with HTTPS enabled.
- `generate`: Generate static files for the Nuxt application.
- `preview-https`: Start a preview server with HTTPS using Nitro.
- `preview`: Start a preview server for the Nuxt application.
- `start`: Start the Nuxt application in production.
- `postinstall`: Prepare the Nuxt application after installation.
- `lint`: Run ESLint to lint your code.
- `prettier:check`: Check if Prettier formatting is correct.
- `prettier:fix`: Automatically fix Prettier formatting issues.

## Dependencies

- **@babel/eslint-parser**: Babel parser for ESLint.
- **@dargmuesli/nuxt-cookie-control**: Cookie control module for Nuxt.
- **@nuxt/devtools**: Nuxt DevTools for browser debugging.
- **@nuxt/image**: Image module for Nuxt.
- **@nuxtjs/color-mode**: Color mode module for Nuxt.
- **@nuxtjs/device**: Device detection module for Nuxt.
- **@nuxtjs/eslint-config-typescript**: ESLint TypeScript configuration for Nuxt.
- **@nuxtjs/eslint-module**: ESLint module for Nuxt.
- **@nuxtjs/google-fonts**: Google Fonts module for Nuxt.
- **@nuxtjs/i18n**: Internationalization module for Nuxt.
- **@nuxtjs/tailwindcss**: Tailwind CSS module for Nuxt.
- **@pinia/nuxt**: Pinia state management for Nuxt.
- **@sentry/node**: Sentry SDK for Node.js.
- **@sentry/profiling-node**: Sentry profiling for Node.js.
- **@sentry/vue**: Sentry SDK for Vue.
- **@types/node**: TypeScript types for Node.js.
- **@typescript-eslint/parser**: TypeScript parser for ESLint.
- **dotenv**: Loads environment variables from a .env file.
- **eslint**: ESLint for linting your code.
- **eslint-config-prettier**: ESLint configuration for Prettier.
- **eslint-plugin-nuxt**: ESLint plugin for Nuxt.
- **eslint-plugin-prettier**: ESLint plugin for Prettier.
- **husky**: Git hooks made easy.
- **lint-staged**: Run linters on pre-committed files.
- **nuxt**: The Nuxt.js framework.
- **nuxt-graphql-client**: GraphQL client module for Nuxt.
- **nuxt-icon**: Icon module for Nuxt.
- **nuxt-primevue**: PrimeVue module for Nuxt.
- **postcss-import**: PostCSS plugin to inline @import rules.
- **prettier**: Opinionated code formatter.
- **prettier-plugin-tailwindcss**: Prettier plugin for Tailwind CSS.
- **primeicons**: PrimeIcons library.
- **primevue**: PrimeVue library.
- **quill**: Quill rich text editor.
- **sass**: Sass preprocessor.
- **typescript**: TypeScript language.
- **vee-validate**: Form validation library.
- **yup**: Object schema validation.
- **yup-password**: Yup plugin for password validation.

## Nuxt Modules included:

- [eslint](https://nuxt.com/modules/eslint)
- [pinia](https://nuxt.com/modules/pinia)
- [tailwindcss](https://nuxt.com/modules/tailwindcss)
- [i18n](https://nuxt.com/modules/i18n)
- [device](https://nuxt.com/modules/device)
- [devtools](https://nuxt.com/modules/devtools)
- [image](https://nuxt.com/modules/image)
- [google-fonts](https://nuxt.com/modules/google-fonts)
- [color-mode](https://nuxt.com/modules/color-mode)
- [icon](https://nuxt.com/modules/icon)
- [cookie-control](https://nuxt.com/modules/cookie-control)

## Setup

### Prerequisites:

- [pnpm](https://pnpm.io/)
- [mkcert](https://github.com/FiloSottile/mkcert) (Optional localhost HTTPS)

### Clone repo

```bash
git clone https://github.com/renegadevi/nuxt-boilerplate.git
cd nuxt-boilerplate
```

### Install dependencies:

   ```bash
   pnpm install
```

### Run the development server:

   ```bash
   pnpm run dev
```

### Build for production:

   ```bash
   pnpm run build
```

Visit http://localhost:3000 in your browser.

### Optional: `.env`

```ini
VITE_BASE_URL="https://localhost:3000/"
```

### Optional: Generate certificate for HTTPS for localhost

```bash
# mkdir certs
cd certs
mkcert localhost
```

## Start local server

### Start development server

```bash
# HTTP
pnpm run dev
# HTTPS
pnpm run dev-https
```

### Start production build server (HTTP)

```bash
# HTTP
pnpm run build;pnpm run preview
# HTTPS
pnpm run build;pnpm run preview-https
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
