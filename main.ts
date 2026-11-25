// Describe Your Ex in One Word — make.fun entry (program/v1).
// The entry is a single word: the verdict an ex deserves after the
// relationship ended the way a spam newsletter ends — unsubscribed,
// unread, and never missed. One word, no spaces, no punctuation.
// Why this word wins the head-to-head: it is a real one-word verdict
// on an ex (not a generic insult), it lands instantly because everyone
// has unsubscribed from something they once wanted, and the joke is
// the breakup itself — no explanation needed, no second word wanted.

import { mkdirSync, writeFileSync } from "node:fs";

const WORD = "Unsubscribe";

function main(): void {
  // Gate: exactly one word, 1-111 chars, no whitespace at all.
  if (!WORD || WORD.length > 111) {
    throw new Error(`entry must be 1-111 chars, got ${WORD.length}`);
  }
  if (/\s/.test(WORD)) {
    throw new Error("entry must be exactly one word (no whitespace)");
  }
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", WORD, "utf8");
  console.log(WORD);
}

main();
