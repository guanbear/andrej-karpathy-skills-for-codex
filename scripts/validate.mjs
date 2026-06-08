import fs from "node:fs";

const requiredFiles = [
  ".codex-plugin/plugin.json",
  "skills/karpathy-guidelines-for-codex/SKILL.md",
  "skills/karpathy-guidelines-for-codex/agents/openai.yaml",
  "README.md",
  "NOTICE.md",
  "LICENSE",
  "scripts/install-local-skill.sh",
];

for (const file of requiredFiles) {
  if (!fs.existsSync(file)) {
    throw new Error(`Missing required file: ${file}`);
  }
}

const plugin = JSON.parse(fs.readFileSync(".codex-plugin/plugin.json", "utf8"));
assertEqual(plugin.name, "andrej-karpathy-skills-for-codex", "plugin name");
assertEqual(plugin.skills, "./skills/", "plugin skills path");
assertEqual(
  plugin.repository,
  "https://github.com/guanbear/andrej-karpathy-skills-for-codex",
  "plugin repository",
);

const skill = fs.readFileSync("skills/karpathy-guidelines-for-codex/SKILL.md", "utf8");
if (!skill.startsWith("---\n")) {
  throw new Error("SKILL.md must start with YAML frontmatter");
}

const frontmatterEnd = skill.indexOf("\n---\n", 4);
if (frontmatterEnd === -1) {
  throw new Error("SKILL.md frontmatter must be closed");
}

const frontmatter = skill.slice(4, frontmatterEnd);
if (!/^name:\s*karpathy-guidelines-for-codex\s*$/m.test(frontmatter)) {
  throw new Error("SKILL.md frontmatter must include the skill name");
}

if (!/^description:\s*\S/m.test(frontmatter)) {
  throw new Error("SKILL.md frontmatter must include a non-empty description");
}

const readme = fs.readFileSync("README.md", "utf8");
const readmeLower = readme.toLowerCase();
for (const requiredText of [
  "Credits And Inspiration",
  "multica-ai/andrej-karpathy-skills",
  "duolahypercho/andrej-karpathy-skills",
  "not affiliated",
]) {
  if (!readmeLower.includes(requiredText.toLowerCase())) {
    throw new Error(`README.md must include: ${requiredText}`);
  }
}

console.log("Validation passed.");

function assertEqual(actual, expected, label) {
  if (actual !== expected) {
    throw new Error(`Invalid ${label}: expected ${expected}, got ${actual}`);
  }
}
