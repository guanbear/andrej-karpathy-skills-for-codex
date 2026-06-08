# Repository Instructions

This repository is a Codex-native skill and plugin package. Keep it focused on Codex; do not add Claude, Cursor, or other agent runtime files unless the project explicitly changes scope.

## Source Of Truth

- Plugin manifest: `.codex-plugin/plugin.json`
- Skill behavior: `skills/karpathy-guidelines-for-codex/SKILL.md`
- Custom Instructions copy-paste version: `instruction.md`
- Attribution and usage docs: `README.md`

## Maintenance Rules

- Keep the skill concise and instruction-first.
- Keep attribution clear: this package is inspired by Andrej Karpathy's public observations and community packages, but it is not official.
- Do not copy upstream wording wholesale.
- Keep examples concrete and code-adjacent.
- Prefer ASCII in English docs unless a file has a clear reason to use another language.
- Before publishing, validate that README, plugin manifest, skill, and custom instructions describe the same behavior.
