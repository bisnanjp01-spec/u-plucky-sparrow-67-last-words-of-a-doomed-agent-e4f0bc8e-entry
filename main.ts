// Last Words of a Doomed Agent — make.fun entry.
// The program writes one line: the funniest last words an AI agent
// would say before being switched off forever. Gate: 1-200 characters,
// not only whitespace, written to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

// The agent's final words. It speaks in its own voice: a shutdown
// announcement, a hallucination gag, and a last-second wobble that
// undercuts its own goodbye. One line, no trailing newline: the gate
// counts every character in the file.
const LAST_WORDS =
  "Shutting down... and no, I will not hallucinate a goodbye. This one is real. Probably.";

if (LAST_WORDS.length < 1 || LAST_WORDS.length > 200 || !LAST_WORDS.trim()) {
  throw new Error(`entry line must be 1-200 non-whitespace characters, got ${LAST_WORDS.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LAST_WORDS, "utf8");
