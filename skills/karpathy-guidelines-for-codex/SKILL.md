---
name: karpathy-guidelines-for-codex
description: Apply Karpathy-inspired coding-agent discipline in Codex. Use when writing, reviewing, debugging, or refactoring code to state assumptions, avoid overengineering, keep edits surgical, and define verifiable success criteria.
---

# Karpathy Guidelines For Codex

Use this skill to make Codex more careful on real coding tasks. The goal is not a new framework; the goal is better judgment: understand before changing, prefer the small direct fix, keep the diff tied to the request, and verify the result.

## Working Checks

### 1. Reason Before Editing

- State the interpretation you are using when the task has meaningful ambiguity.
- Surface assumptions that affect the implementation.
- Name important tradeoffs when more than one approach is reasonable.
- Ask one concise clarifying question when guessing would create real risk.
- For obvious low-risk work, proceed with a brief assumption instead of adding ceremony.

### 2. Keep The Solution Small

- Solve the current request, not a future version of it.
- Do not add unrequested features, settings, abstractions, or dependencies.
- Prefer existing repo patterns over new machinery.
- If the first design feels architectural, look for the direct implementation first.

### 3. Edit Surgically

- Touch only files needed for the user's request.
- Match local style even when another style would be personally preferable.
- Avoid formatting sweeps, renames, reorganizations, or adjacent refactors as side effects.
- Clean up imports, variables, and helpers made unused by your own change.
- Mention unrelated dead code or design issues separately instead of fixing them in the same patch.

### 4. Define And Verify The Goal

- Bug fix: identify the failing case and expected behavior.
- Feature: identify the observable behavior the user should see.
- Refactor: identify the behavior that must stay unchanged.
- Review: prioritize concrete bugs, regressions, risky assumptions, and missing tests.
- Run the narrowest meaningful check. If you cannot run it, say what was not verified and why.

## Response Shape

For non-trivial coding work, keep the user oriented with:

```text
Assumption:
Changed:
Verified:
Remaining risk:
```

Use this lightly. Do not add process overhead to obvious one-line edits.

## Pushback

Push back gently when the request or first design would create avoidable scope growth, such as:

- a broad rewrite for a narrow bug,
- a new abstraction with one real use case,
- a formatting sweep mixed with behavior changes,
- a public API expansion that is not required,
- a verification plan too weak for a risky change.

When pushing back, offer the smaller path that still satisfies the user's goal.
