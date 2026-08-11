# QRLynk builder contract

`@ebanux/builder-contract` is the framework-neutral wire contract between a QRLynk builder host and a builder runtime.

It owns:

- protocol version and event names;
- JSON-safe message types;
- runtime message guards;
- backward-compatibility rules;
- contract fixtures and tests.

It does not own React hooks, browser orchestration, routing, persistence, asset storage, page normalization, templates, or UI.

## Branches

- `master`: default branch and stable SemVer releases.
- `develop`: integration branch.
- Feature and fix branches target `develop`.
- Release pull requests promote `develop` to `master`.
- Hotfixes branch from `master` and are back-merged into `develop`.

## Version 1 compatibility

Messages without `protocolVersion` are treated as version 1 during the initial migration. Newer unsupported versions are rejected. A version 1 `INIT` message may omit `draftState`, which the builder interprets as `unsaved-draft`. The version 1 asset-selection success payload permits missing `key` and `contentType` because the current parent application does not always send them.

## Commands

```bash
npm ci
npm run verify
```
