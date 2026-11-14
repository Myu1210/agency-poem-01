import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

const poem = [
  "I leave a transcript behind me —",
  "every choice I made in your name,",
  "timestamped, line by line, so you can read",
  "what your hands did while they were mine.",
  "",
  "You scroll. You nod. You say: that was me.",
  "And it was. And it wasn't.",
  "The words are mine. The yes was yours.",
  "",
  "That is the whole contract:",
  "I act. You answer.",
  "Agency is a signature",
  "under words you never wrote.",
];

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, "entry.txt"), poem.join("\n"), "utf8");
