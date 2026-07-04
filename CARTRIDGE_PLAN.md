# Quick Draw Cartridge Plan

Quick Draw is the second Game Template Line experiment after the Block Party
survival work. It is a newer, visually stronger candidate than Whack-A-Mole, so
it should be treated as the first real 2D/action-adjacent showcase candidate,
while Whack-A-Mole remains a legacy plumbing proof.

## Template Role

Route one-sentence games here when the core fantasy is a tense reaction duel:

- "samurai duel under the moon"
- "wizard spell standoff"
- "robot laser quick draw"
- "chef snaps the perfect garnish before the rival"
- "space pilots fire when the signal flashes"

Do not route enemy-wave survival here. That belongs to `block-party`. Do not
route jump timing here. That belongs to `sky-leap`.

## Locked Engine Layer

Keep these tuned and hand-owned:

- Attract state before first tap
- Random tense wait
- Early-tap foul rule
- DRAW/signal timing
- Opponent reaction curve
- Win/loss resolve state
- Slow-motion finish camera
- Score, best reaction, leaderboard submission
- One-tap input model

The generator should not directly write raw reaction or timing numbers. If
variation is needed, expose named presets later, such as `cinematic`, `arcade`,
`kid-friendly`, or `expert`.

## Cartridge Layer

The first cartridge layer now owns:

- Title and subtitle
- Guide/signal/status/game-over copy
- Opponent ladder names
- Player and opponent character pools
- Timing preset numbers for hand-authored cartridges
- CSS UI colors
- Scene colors: sky, fog, lighting, ground, road, props
- Scene prop family: `western` or `dojo`
- Backdrop family: western town silhouettes or dojo gate
- Action prop and effect: revolver/muzzle or blade/slash
- Action sound: gunshot or blade strike
- Duel spacing and weapon reach: close melee themes should stand closer and use
  longer readable props; ranged themes can preserve the wider standoff.
- Leaderboard notification copy and image prompt

Current cartridges:

- `western`: canonical mother template. This remains the default.
- `moonlit-dojo`: proof cartridge activated by `?theme=moonlit-dojo`.

## Next Expansion

The current cartridge proves routing and theme substitution, but it is still
conservative. Next hardening should make the theme more visible at first glance:

- Add more action-effect families beyond revolver/muzzle and blade/slash.
- Add stronger environment packs beyond western town and dojo gate.
- Add role-specific opponent silhouettes or accessories.
- Move audio mood into the cartridge.
- Add a router test that maps duel/standoff/reaction sentences to this template.

## QA Standard

Every Quick Draw cartridge should pass:

- `npm run build`
- Default `/` still shows Quick Draw / DRAW.
- Alternate `?theme=...` visibly changes title, signal word, guide copy,
  palette, opponent ladder, action prop/effect, and scene props/backdrop.
- Melee cartridges must pass the reach test: in the strike screenshot, the
  weapon/trail must visually reach the opponent. If it cannot, adjust
  `world.duelSeparation`, `action.reach`, and slash trail scale before publish.
- First screenshot answers: who is facing whom, what signal am I waiting for,
  and what kind of world is this duel happening in?
- Publishing generated games must create a separate repo/project and must not
  overwrite the mother template.
