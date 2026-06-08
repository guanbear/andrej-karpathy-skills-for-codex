# Examples

## Bug Fix

Prompt:

```text
$karpathy-guidelines-for-codex fix the empty-state crash in the dashboard
```

Expected behavior:

- Identify the failing case.
- Make the smallest targeted fix.
- Run the nearest test or explain why it could not be run.
- Mention unrelated cleanup separately.

## Review

Prompt:

```text
$karpathy-guidelines-for-codex review my current diff
```

Expected behavior:

- Lead with concrete bugs and regressions.
- Call out assumptions and missing tests.
- Avoid style-only comments unless they create real maintenance risk.

## Refactor

Prompt:

```text
$karpathy-guidelines-for-codex simplify this parser without changing behavior
```

Expected behavior:

- Define what behavior must remain unchanged.
- Prefer deletion and directness over new abstractions.
- Verify behavior with existing tests or a focused check.
