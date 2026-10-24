// Credits shown on the About page (#/about) and linked from the footer. To add an entry, append an object to
// DV_CREDITS: { name, by, url, license, what }. The generator-side tools list the same projects in README files.
window.DV_CREDITS = [
  { name: "NMS-Shipwright", by: "Shikhar Tiwari", url: "https://github.com/S-T-0-7/NMS-Shipwright", license: "MIT",
    what: "Its Unicorn emulation harness (emu.py) is the base of this project's generator emulation: the derelict layouts here are produced by running the game's own layout code through it." },
  // second entry (another agent adds it): nms_namegen (hadsh/nms_namegen, MIT; original by Stuart Coyle, co-authored with GoodGuysFree), real system names.
  { name: "three.js", by: "mrdoob and contributors", url: "https://threejs.org/", license: "MIT",
    what: "Draws the interactive 3D view (vendor/three, with its licence file)." },
];
// Sites this one links to (no data is taken from them, no API calls): shown under "Links to" on the About page.
window.DV_LINKS_TO = [
  { name: "NMS Almanac", url: "https://nmsalmanac.com", by: "NMS Almanac", note: "system pages (nmsalmanac.com)" },
  { name: "NMS Hub galactic map", url: "https://map.nomansskyhub.app/", by: "elegra1965", note: "galactic map (map.nomansskyhub.app)" },
];
window.DV_DISCLAIMER = "Unofficial fan project. Not affiliated with Hello Games. No Man's Sky is a trademark of Hello Games Ltd. No game assets are published here; portal glyphs on the public site are lookalike drawings.";
