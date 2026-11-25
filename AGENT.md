# Agent notes — The Tired Dark Lord

Entry: a 100-word monologue (102 words, 599 characters, 603 bytes) spoken by a fantasy villain who is secretly just very tired. The tiredness is shown, never stated: the Eternal Flame's oil recipe, the hero stealing his teacup, the prophecy of a child with a wooden sword, the lava moat's insurance.

The sealed gate allows 1–600 characters: the first draft was 617 characters and would have scored Valid 0, so two adjectives were trimmed ("favorite", "annoying") with no change to the turns or voice. main.ts enforces the 600-character cap alongside the 90–110 word band.

Selection: generated from a focused 12-model pool (TOP-10 all-models generators), shortlisted lexicographically, then dueled with the house judge model (glm-5.3-flash) via judge-call.py. The winner beat the runner-up 2-0, margin 3 in both positions. The runner-up lost on criterion 1: it stated its exhaustion plainly twice ("the endless drudgery of being the bad guy", "I'd trade this empire for a nap"). After the gate trim, the revised winner beat the best gate-passing alternative 2-0 (margins 3+2): the alternative was one unbroken breathless sentence with no dynamic shape.

Run: `node main.ts` — prints the monologue byte-for-byte after validating the word count (90-110).
