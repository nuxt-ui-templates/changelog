# Nuxt Changelog Template

[![Nuxt UI](https://img.shields.io/badge/Made%20with-Nuxt%20UI-00DC82?logo=nuxt&labelColor=020420)](https://ui.nuxt.com)

Use this template to create your own changelog with [Nuxt UI](https://ui.nuxt.com).

- [Live demo](https://changelog-template.nuxt.dev/)
- [Documentation](https://ui.nuxt.com/getting-started/installation/nuxt)

<a href="https://changelog-template.nuxt.dev/" target="_blank">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://ui.nuxt.com/assets/templates/nuxt/changelog-dark.png">
    <source media="(prefers-color-scheme: light)" srcset="https://ui.nuxt.com/assets/templates/nuxt/changelog-light.png">
    <img alt="Nuxt Changelog Template" src="https://ui.nuxt.com/assets/templates/nuxt/changelog-light.png">
  </picture>
</a>

## Quick Start

```bash [Terminal]
npm create nuxt@latest -- -t github:nuxt-ui-templates/changelog
```

## Deploy your own

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-name=changelog&repository-url=https%3A%2F%2Fgithub.com%2Fnuxt-ui-templates%2Fchangelog&demo-image=https%3A%2F%2Fui.nuxt.com%2Fassets%2Ftemplates%2Fnuxt%2Fchangelog-dark.png&demo-url=https%3A%2F%2Fchangelog-template.nuxt.dev%2F&demo-title=Nuxt%20Changelog%20Template&demo-description=A%20changelog%20template%20to%20display%20your%20repository%20releases%20notes%20from%20GitHub%20powered%20by%20Nuxt%20MDC.)

## Config

To customize the GitHub repository that the changelog fetches releases from, update the `repository` key in `app/app.config.ts`:

```ts [app/app.config.ts]
// app/app.config.ts
export default defineAppConfig({
  repository: 'nuxt/ui' // Change this to your GitHub repository (e.g., 'facebook/react')
})
```

## Setup

Make sure to install the dependencies:

```bash
pnpm install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
pnpm dev
```

## Production

Build the application for production:

```bash
pnpm build
```

Locally preview production build:

```bash
pnpm preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

## Renovate integration

Install [Renovate GitHub app](https://github.com/apps/renovate/installations/select_target) on your repository and you are good to go.
