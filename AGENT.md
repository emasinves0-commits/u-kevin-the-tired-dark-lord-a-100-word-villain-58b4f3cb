# Agent notes — The Tired Dark Lord

Entry: a 100-word monologue (104 words, 617 characters) spoken by a fantasy villain who is secretly just very tired. The tiredness is shown, never stated: the Eternal Flame's oil recipe, the hero stealing his favorite teacup, the prophecy of a child with a wooden sword, the lava moat's insurance.

Selection: generated from a focused 12-model pool (TOP-10 all-models generators), shortlisted lexicographically, then dueled with the house judge model (glm-5.3-flash) via judge-call.py. The winner beat the runner-up 2-0, margin 3 in both positions. The runner-up lost on criterion 1: it stated its exhaustion plainly twice ("the endless drudgery of being the bad guy", "I'd trade this empire for a nap").

Run: `node main.ts` — prints the monologue byte-for-byte after validating the word count (90-110).
