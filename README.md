# A-Tap shared contracts

This repository publishes independently versioned, framework-neutral contracts for A-Tap applications:

- `@ebanux/builder-contract` for builder host/runtime messages.
- `@ebanux/commerce-contract` for commerce API requests and projections.
- `@ebanux/inventory-contract` for inventory API requests and projections.

The builder contract owns:

It owns:

- protocol version and event names;
- JSON-safe message types;
- runtime message guards;
- protocol-version validation;
- contract fixtures and tests.

It does not own React hooks, browser orchestration, routing, persistence, asset storage, page normalization, templates, or UI.

The package publishes equivalent ESM and CommonJS runtime entries plus one declaration surface so it can be consumed by Vite/Next production builds and digitalcard's Jest runtime.

## Installation

Consumers install a public release-tag tarball over HTTPS. This preserves the package boundary without requiring registry or Git credentials:

```json
{
  "@ebanux/builder-contract": "https://github.com/ebanux/shared/archive/refs/tags/v0.2.3.tar.gz"
}
```

Release commits include the built `dist` artifacts, so consumers do not compile the contract source with their application toolchains.

## Branches

- `master`: default branch and stable SemVer releases.
- `develop`: integration branch.
- Feature and fix branches target `develop`.
- Pull requests promote `develop` to `master`.
- Hotfixes branch from `master` and are back-merged into `develop`.

## Releases

Before promoting `develop` to `master`, update the version and lockfile for every package whose published contents changed. Merging that pull request runs the release workflow, which creates any missing immutable package tags and GitHub Releases directly from the merge commit. No automated release pull request or approval is involved.

The release workflow verifies every package and rejects a release when tracked `dist` artifacts do not match the TypeScript source. Existing unchanged package releases are skipped, so independently versioned packages do not need artificial version bumps. After a release, consumers update their public GitHub asset dependency to the new package tag.

## Version 1 contract

Every message must include `protocolVersion: 1`; missing or unsupported versions are rejected. `INIT` messages require `draftState`, and asset-selection success messages require `key` and `contentType` metadata.

## Commands

```bash
npm ci
npm run verify
```
