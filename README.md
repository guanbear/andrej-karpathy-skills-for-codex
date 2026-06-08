# Andrej Karpathy Skills For Codex

[![License: MIT](https://img.shields.io/badge/License-MIT-0f766e.svg)](LICENSE)
[![Codex Skill](https://img.shields.io/badge/Codex-Skill-111827.svg)](skills/karpathy-guidelines-for-codex/SKILL.md)
[![Plugin Ready](https://img.shields.io/badge/Codex-Plugin%20Ready-2563eb.svg)](.codex-plugin/plugin.json)
[![Release](https://img.shields.io/badge/Release-v0.1.0-7c3aed.svg)](CHANGELOG.md)

[简体中文](README.zh-CN.md)

Karpathy-inspired coding-agent discipline, packaged natively for Codex.

This project turns a small set of practical coding-agent principles into a reusable Codex skill: reason before editing, keep the solution small, edit surgically, and verify the goal. It is designed for day-to-day software work where the best agent is not the flashiest one, but the one that changes exactly what matters and can explain why.

> Independent project. Inspired by Andrej Karpathy's public observations and by community skill packages. Not affiliated with Andrej Karpathy, OpenAI, Multica AI, or Duola.

## Credits And Inspiration

This project is intentionally explicit about attribution.

Inspired by:

- Andrej Karpathy's public comments on coding-agent behavior, especially the need to think before changing code and avoid broad, ungrounded edits.
- [multica-ai/andrej-karpathy-skills](https://github.com/multica-ai/andrej-karpathy-skills), which packages Karpathy-style coding-agent guidance for Claude Code, Cursor, and reusable skill workflows.
- [duolahypercho/andrej-karpathy-skills](https://github.com/duolahypercho/andrej-karpathy-skills), a Codex-first community adaptation that helped validate the shape of a Codex-native package.

This repository is a fresh Codex-oriented rewrite. It does not claim ownership of the underlying ideas, and it avoids copying upstream wording wholesale.

## What It Gives Codex

The skill adds four working checks to coding tasks:

1. Reason before editing.
2. Keep the solution small.
3. Edit surgically.
4. Define and verify the goal.

Use it when writing, reviewing, debugging, or refactoring code.

## Install As A Local Skill

Copy or symlink the skill folder into a Codex-discovered skill location:

```bash
mkdir -p ~/.agents/skills
cp -R skills/karpathy-guidelines-for-codex ~/.agents/skills/
```

Restart Codex if the skill does not appear immediately.

Invoke it explicitly:

```text
$karpathy-guidelines-for-codex review this patch
```

Or ask naturally:

```text
Apply Karpathy-style coding-agent discipline while fixing this bug.
```

## Install As A Plugin

This repository includes a Codex plugin manifest:

```text
.codex-plugin/plugin.json
```

For local plugin development, add this repository to a Codex plugin marketplace or package it through your preferred Codex plugin workflow.

## Use As Custom Instructions

If you do not want to install a skill or plugin, paste [instruction.md](instruction.md) into Codex Custom Instructions.

## Project Layout

```text
.
├── .codex-plugin/plugin.json
├── skills/karpathy-guidelines-for-codex/SKILL.md
├── instruction.md
├── README.md
├── README.zh.md
├── CHANGELOG.md
├── CONTRIBUTING.md
├── SECURITY.md
└── NOTICE.md
```

## Why This Exists

Coding agents are powerful, but they can fail in boring ways:

- changing too much,
- solving a broader problem than the one asked,
- inventing abstractions before the codebase asks for them,
- skipping verification,
- burying important assumptions.

This skill keeps those failure modes visible. It does not make Codex slower or more ceremonial; it gives Codex a compact checklist for staying grounded.

## Name

The repository name `andrej-karpathy-skills-for-codex` is search-friendly and makes the inspiration clear. The skill name inside Codex is more cautious:

```text
karpathy-guidelines-for-codex
```

That split is intentional: discoverable repository name, non-official skill identity.

## Scope

This package is for Codex. It does not include `CLAUDE.md`, Cursor rules, Copilot instructions, or other runtime adapters.

## License

MIT. See [LICENSE](LICENSE).
