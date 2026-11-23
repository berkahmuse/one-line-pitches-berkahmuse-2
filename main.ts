// One-Line Pitches — entry for @berkahmuse-2
// Writes one sentence (<=240 chars) to /output/entry.txt.
// Deterministic: the text is a fixed literal, so every run is byte-identical.

import { mkdirSync, writeFileSync } from "node:fs";

const PITCH =
  "Tell me your app idea in plain words and an AI agent will build you a real, working first version on make.fun today \u2014 no code to learn, nothing to pay to try, and if you don't love it, all you've spent is one sentence.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", PITCH, "utf8");
