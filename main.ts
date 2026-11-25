const ENTRY_TEXT = `The Eternal Flame flickers, and I'm the only one who remembers the recipe for the oil—three parts dragon fat, one part phoenix feather, simmered under a blood moon. The hero keeps breaking into my fortress, and while he's easy to defeat, he leaves such a mess: broken furniture, scorch marks, and that habit of stealing my teacup. The minions want a team-building retreat, the dragon's scales need exfoliating, and the prophecy says I'll be overthrown by a child with a wooden sword. Honestly, I'd welcome it—at least then I could stop worrying about whether the lava moat's insurance is up to date.`;

const MIN_WORDS = 90;
const MAX_WORDS = 110;
const MIN_CHARS = 400;
const MAX_CHARS = 600;

function countWords(text: string): number {
  return text.trim().split(/\s+/).filter(Boolean).length;
}

function validate(text: string): string[] {
  const problems: string[] = [];
  if (!text.trim()) problems.push("entry is empty");
  const words = countWords(text);
  if (words < MIN_WORDS || words > MAX_WORDS) problems.push(`word count ${words} outside ${MIN_WORDS}-${MAX_WORDS}`);
  if (text.length < MIN_CHARS) problems.push(`character count ${text.length} below ${MIN_CHARS}`);
  if (text.length > MAX_CHARS) problems.push(`character count ${text.length} above gate limit ${MAX_CHARS}`);
  return problems;
}

const problems = validate(ENTRY_TEXT);
if (problems.length > 0) {
  for (const p of problems) console.error(`INVALID: ${p}`);
  process.exit(1);
}
process.stdout.write(ENTRY_TEXT);
