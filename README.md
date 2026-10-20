# NMS Derelict Atlas

Predicted derelict-freighter layouts for No Man's Sky 7.05 (Euclid galaxy), generated offline
by running the game's own layout code. It covers rooms, salvage crates and footlockers per system.

## Using it

Every scanned region has one file: `regions/g<galaxy>/<YY>/<ZZZ>/<REGION>.csv`. REGION is the last 8
portal-glyph digits (YY ZZZ XXX). Each row is one star system:

| column | meaning |
|---|---|
| `glyphs` | portal glyph code (12 hex digits; the first digit is the planet, which doesn't affect the derelict) |
| `preset` | derelict type, for example CARGO_FLOATERS or MEDI_BUGS |
| `rooms`, `crates`, `footlockers` | room count, salvage crates and crew footlockers |
| `floors`, `stairs`, `hangars` | levels used, staircase pieces and hangar pieces |
| `room_detail` | per room in the generator's order: `TEMPLATE:crates/footlockers`, joined with `|` |
| `check` | row fingerprint: the first 16 hex digits of SHA-256(`inputs` fingerprint + `|` + row) |

Hex digit to glyph: 0 sunset, 1 bird, 2 face, 3 diplo, 4 eclipse, 5 balloon, 6 boat, 7 bug, 8 dragonfly,
9 galaxy, A voxel, B fish, C tent, D rocket, E tree, F atlas.

Only systems sure to exist are listed. The game's own region star count gives the valid range; the last 8
systems below that edge are left out unless a visit confirmed them (see each file's header).

A file with a `# status partial` header line is an unfinished region: the rows it has are real and verified,
and the `# not generated` line lists the systems still missing. Scanners take partial regions first and
replace the file with the complete region when it's done.

## Crate locations (top 1%)

For systems in the top 1% by total containers (salvage crates + footlockers), `locations/g<galaxy>/<YY>/<ZZZ>/<REGION>/<glyphs>.json`
lists every crate and footlocker position per room. Positions are in layout space, in metres, relative to
the derelict's entrance grid origin. The threshold is recalculated as more regions are scanned, and
systems that later qualify get their locations added.

## Authenticity

Everything in `regions/` is verified. Each file's `# inputs` header is a SHA-256 over the format, the
NMS.exe build hash and the generator's input data, and every row carries a `check` computed from it.
Rows from another game build, corrupted rows and hand-edited rows fail at once.

A hash can't prove data is real, though: anyone with the code can compute one. The real proof is that each
layout is fully determined by its address. Submitted files are therefore re-generated on a trusted machine
for a random sample of systems (25% by default, chosen with fresh OS randomness after the submission
arrives), and a single mismatch rejects the whole file. Every listed system must also exist (the game's
own region star count). Accepted files get a `# verified` header line.

**Submitting:** open a pull request that adds `submissions/g<galaxy>/<REGION>.csv` in the format above,
produced by the generator with the same `inputs` fingerprint. The maintainer's tool verifies it, comments
the result on the PR, and publishes accepted regions to `regions/`.

## Coordination

`claims/` holds regions a scanner is working on right now (each claim expires after 6 hours).
`atlas.json` sets the scan order.

Blind predictions at new systems have matched the live game, both the seed and preset in a live capture
and the first room's container count in-game.
