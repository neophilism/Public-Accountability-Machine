# Public Accountability Machine

Country-neutral downstream application for the independent accountability engine suite. **Foundation only; operational implementation is on hold.**

The first push establishes the repository before upstream completion, as explicitly authorized by the owner. Application work stops after this checkpoint; independent dependency-engine development continues.

## What exists

- Architecture and data-ownership boundaries for downstream composition.
- Static inventory of fourteen independent upstream engine repositories.
- Original fifteen-engine design, 122-task suite backlog, requirements and proposed contracts, retained byte-for-byte.
- A canonical registry preserving all eight original M07 orchestration task IDs and a separate PAM-000 foundation unit.
- A zero-dependency Node 24 metadata validator, rejection tests and GitHub CI.

## Check the foundation

```sh
npm ci --ignore-scripts
npm run check
```

These commands validate checked-in development metadata. They do not connect to engines, run an investigation, generate legal filings, produce media, send messages, publish, spend or deploy. No upstream connection or live acceptance is claimed.

## Read next

- [Architecture](docs/ARCHITECTURE.md)
- [Foundation checkpoint and stopping point](docs/FOUNDATION_CHECKPOINT.md)
- [Dependency inventory](config/foundation.json)
- [Application work registry](registry/prs.json)
- [Original approved design](docs/approved-design/engine_catalog.json)
- [Original suite backlog](docs/approved-design/development_backlog.json)
- [Recovery provenance](docs/approved-design/provenance.json)
- [Contributor instructions](AGENTS.md)

All AM-07 operational tasks remain planned. White labeling, localization, verified legal workflows, creative production and hosted application acceptance remain future downstream work. Country-specific data and private deployment policies are excluded from this public source.
