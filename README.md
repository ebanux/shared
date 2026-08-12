# QRLynk builder contract

`@ebanux/builder-contract` is the framework-neutral wire contract between a QRLynk builder host and a builder runtime.

It owns:

- protocol version and event names;
- JSON-safe message types;
- runtime message guards;
- protocol-version validation;
- contract fixtures and tests.

It does not own React hooks, browser orchestration, routing, persistence, asset storage, page normalization, templates, or UI.

The package publishes equivalent ESM and CommonJS runtime entries plus one declaration surface so it can be consumed by Vite/Next production builds and digitalcard's Jest runtime.

## Branches

- `master`: default branch and stable SemVer releases.
- `develop`: integration branch.
- Feature and fix branches target `develop`.
- Release pull requests promote `develop` to `master`.
- Hotfixes branch from `master` and are back-merged into `develop`.

## Version 1 contract

Every message must include `protocolVersion: 1`; missing or unsupported versions are rejected. `INIT` messages require `draftState`, and asset-selection success messages require `key` and `contentType` metadata.

## Commands

```bash
npm ci
npm run verify
```
