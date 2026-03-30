---
name: No Co-Authored-By in commits
description: Never add Co-Authored-By Claude lines to git commit messages
type: feedback
---

Do not add "Co-Authored-By: Claude" lines to any git commit messages.

**Why:** User explicitly rejected a commit that included this line.

**How to apply:** Always omit the Co-Authored-By trailer from every commit message, regardless of default behavior.
