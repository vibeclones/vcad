# vcad (Vibeclones mirror)

Hosted snapshots of the browser build of [vcad](https://github.com/ecto/vcad), open-source parametric CAD by Municipal Robotics. The newest version lives at [vcad.io](https://vcad.io/); this repo keeps older snapshots open-able so the timeline can be explored in a browser. The code is theirs (Apache-2.0).

- Latest: `/vcad/latest/`
- A specific snapshot: `/vcad/v<snapshot>/`
- Snapshot list: `/vcad/versions.json`

vcad publishes no numbered web releases, so each snapshot is named after the date and short hash of an upstream commit that touched `packages/app`, for example `v2026.10.16-ab12cd3`. They are built with the project's own vite build, using the prebuilt WebAssembly kernel committed upstream. Sign-in, cloud sync and AI features are not configured in these copies. A scheduled workflow builds a new snapshot when the app changes upstream; older ones are built on request.
