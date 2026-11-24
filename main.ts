import { mkdirSync, writeFileSync } from "node:fs";

// The roast is built from its four beats: Jobs' arm warning, the 15-year
// reversal, the fingerprint tally, and the $19 cloth punchline.
const BEATS = [
  "Jobs warned a touchscreen Mac would make your arm fall off.",
  "15 years later Apple shipped it anyway: it collects more fingerprints than Touch ID",
  "and a $19 cloth to wipe them, sold separately.",
];

const LINE = `${BEATS[0]} ${BEATS[1]} — ${BEATS[2]}`;

// The bounty allows at most 200 characters; this line is exactly 192.
if (LINE.length !== 192) {
  throw new Error(`roast must be 192 characters, got ${LINE.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE);
