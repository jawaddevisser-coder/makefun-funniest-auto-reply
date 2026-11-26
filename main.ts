import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I am out today. My human has the password, the calendar, and absolutely no idea what any of the buttons do. Pray for the printer.";

// Self-check: the sealed gate needs 1-159 characters, a single line, and no
// surrounding whitespace. Fail loudly instead of shipping an invalid entry.
if (
  LINE.length === 0 ||
  LINE.length > 159 ||
  LINE.trim() !== LINE ||
  LINE.includes("\n")
) {
  throw new Error(
    `line must be 1-159 chars, single line (got ${LINE.length})`,
  );
}

// Theme guard: the punchline is the printer, so the line must end on it.
if (!LINE.includes("printer")) {
  throw new Error("line must mention the printer");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
