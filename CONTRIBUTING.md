# Contributing

Thanks for helping improve this Electron boilerplate. Please follow the [Code of Conduct](CODE_OF_CONDUCT.md) in all project discussions.

## Before you start

- Search existing issues and pull requests to avoid duplicate work. For a substantial change, open an issue first to discuss the approach.
- Report suspected vulnerabilities privately as described in [SECURITY.md](SECURITY.md), not in a public issue.
- Use Node.js 24.18.0 or newer and npm. Install dependencies with `npm ci`.

## Make a change

1. Fork the repository and create a branch for your change.
2. Run `npm run dev` to work on the app.
3. Keep the change focused. Update documentation when behavior or setup changes.
4. Before opening a pull request, run:

   ```bash
   npm run build
   npm run lint
   ```

   Check formatting on the files you changed with `npx prettier --check` followed by their paths.

5. Open a pull request using the repository template. Describe the change, link a related issue if there is one, and explain how you verified it. Add screenshots for visible UI changes.

There is currently no dedicated `test` script. If a check fails for a reason unrelated to your change, mention it in the pull request.

## Commit messages

Use a short, descriptive subject such as `fix: correct update banner state` or `docs: clarify release setup`. Explain the reason for a change in the body when the subject alone is not enough.
