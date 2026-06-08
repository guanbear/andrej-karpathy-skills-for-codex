# Andrej Karpathy Skills For Codex

A Codex-native skill package inspired by Andrej Karpathy's public observations about coding-agent failure modes and by community packages that turned those ideas into reusable agent guidance.

This is not an official Andrej Karpathy project and is not an official OpenAI project.

## Name

`andrej-karpathy-skills-for-codex` is understandable and search-friendly, but it can sound more official than it is. If you publish this publicly, a slightly safer display name is:

```text
karpathy-guidelines-for-codex
```

The repository can still use `andrej-karpathy-skills-for-codex` if the README and attribution stay explicit.

## What It Does

The skill teaches Codex four working checks:

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

Then invoke it explicitly:

```text
$karpathy-guidelines-for-codex review this patch
```

## Install As A Plugin

This repository includes a Codex plugin manifest at:

```text
.codex-plugin/plugin.json
```

For local plugin development, add this repository to a Codex plugin marketplace or package it through your preferred Codex plugin workflow.

## Use As Custom Instructions

If you do not want to install a skill or plugin, paste the block in `instruction.md` into Codex Custom Instructions.

## Attribution

This package is independently written for Codex and intentionally avoids copying upstream wording wholesale.

It is inspired by:

- Andrej Karpathy's public comments on coding-agent behavior and failure modes.
- `multica-ai/andrej-karpathy-skills`, which packages those ideas for Claude Code, Cursor, and reusable skill workflows.
- `duolahypercho/andrej-karpathy-skills`, a Codex-first community adaptation.

The original community packages are MIT licensed. This project is also MIT licensed.

## Scope

This package is for Codex. It does not include `CLAUDE.md`, Cursor rules, Copilot instructions, or other runtime adapters.
