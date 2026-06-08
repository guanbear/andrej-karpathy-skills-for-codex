#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
REPO_ROOT="$(cd "$SCRIPT_DIR/.." && pwd)"
SKILL_SOURCE="$REPO_ROOT/skills/karpathy-guidelines-for-codex"
SKILL_TARGET_DIR="${CODEX_SKILLS_DIR:-$HOME/.agents/skills}"
SKILL_TARGET="$SKILL_TARGET_DIR/karpathy-guidelines-for-codex"

if [[ ! -f "$SKILL_SOURCE/SKILL.md" ]]; then
  echo "Missing skill source: $SKILL_SOURCE/SKILL.md" >&2
  exit 1
fi

mkdir -p "$SKILL_TARGET_DIR"
ln -sfn "$SKILL_SOURCE" "$SKILL_TARGET"

echo "Installed Codex skill:"
echo "  $SKILL_TARGET -> $SKILL_SOURCE"
echo
echo "Restart Codex if the skill does not appear immediately."
