import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const OUTPUT_FILE = join(OUTPUT_DIR, "entry.txt");
const TEXT =
  "Day 1: scrape 3,000 US roofing firms off Google Maps; verify owner emails with Hunter ($49). Days 2-30: email 100/day, selling a 500-lead list of homeowners needing roof work for $49 on Gumroad \u2014 roofers normally pay $50 per lead. Cost $90. At 1% reply, ~15 sales = $735.";

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(OUTPUT_FILE, TEXT, "utf8");
