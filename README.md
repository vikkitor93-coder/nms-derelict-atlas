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

Hex digit to glyph: 0 sunset, 1 bird, 2 face, 3 diplo, 4 eclipse, 5 balloon, 6 boat, 7 bug, 8 dragonfly,
9 galaxy, A voxel, B fish, C tent, D rocket, E tree, F atlas.

Only systems sure to exist are listed. The game's own region star count gives the valid range; the last 8
systems below that edge are left out unless a visit confirmed them (see each file's header).

## Crate locations (top 1%)

For systems in the top 1% by salvage crates, `locations/g<galaxy>/<YY>/<ZZZ>/<REGION>/<glyphs>.json`
lists every crate and footlocker position per room. Positions are in layout space, in metres, relative to
the derelict's entrance grid origin. The threshold is recalculated as more regions are scanned, and
systems that later qualify get their locations added.

## Coordination

`claims/` holds regions a scanner is working on right now (each claim expires after 6 hours).
`atlas.json` sets the scan order.

Blind predictions at new systems have matched the live game, both the seed and preset in a live capture
and the first room's container count in-game.
