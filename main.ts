import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Jobs warned a touchscreen Mac would make your arm fall off. 15 years later Apple shipped it anyway: it collects more fingerprints than Touch ID — and a $19 cloth to wipe them, sold separately.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE);
