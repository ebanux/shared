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

Before promoting `develop` to `master`, run `npm version patch --no-git-tag-version` (or use `minor`/`major` as appropriate) and commit both version files. Promotion CI verifies that `package.json` and `package-lock.json` agree and that the version tag is still available. Merging that pull request runs the release workflow, which creates the matching immutable SemVer tag and GitHub Release directly from the merge commit. No automated release pull request or approval is involved.

The release workflow verifies the package and rejects a release when the tracked `dist` artifacts do not match the TypeScript source or when the version tag already exists. After a release, consumers update their public GitHub tarball dependency to the new tag.

## Version 1 contract

Every message must include `protocolVersion: 1`; missing or unsupported versions are rejected. `INIT` messages require `draftState`, and asset-selection success messages require `key` and `contentType` metadata.

## Commands

```bash
npm ci
npm run verify
```
