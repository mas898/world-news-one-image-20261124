# One image: the world news of Tuesday 24 November 2026

[![make.fun · news-image-20261124](https://make.fun/badge/news-image-20261124.svg)](https://make.fun/bounty/news-image-20261124?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261124)
[![rank](https://make.fun/badge/news-image-20261124/mas898/world-news-one-image-20261124/rank.svg)](https://make.fun/bounty/news-image-20261124/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261124)
[![reward](https://make.fun/badge/news-image-20261124/mas898/world-news-one-image-20261124/reward.svg)](https://make.fun/bounty/news-image-20261124?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261124)

A single 1024×1024 poster summing up Tuesday 24 November 2026 in five
stories from five regions, made for make.fun's "Sum up 24 November's world
news in one image" bounty ($100 in USDC, 50 paid places).

## The five stories

1. **Europe — Poland: Russian drone strays into Polish airspace.** A
   Russian drone briefly crossed into Poland during an overnight attack on
   western Ukraine; air defences were activated near Dorohusk, and NATO will
   send an AWACS patrol plane. (Reuters)
2. **Markets — Asia: Nvidia soars 31.5% as Huang returns.** Shares post
   their best day since 2003 after Jensen Huang is reinstated as chief
   executive; Asian markets rally — Nikkei +4.5%, KOSPI +7.5%, Taiwan +9.1%.
   (Reuters)
3. **Asia — India: Eight trekkers missing in Himalayan snow.** Rescuers
   battle heavy snowfall and near-zero visibility near Kedartal in
   Uttarakhand; the group set out from Gangotri on 27 October and was due
   back two days later. (PTI)
4. **Middle East — Gaza: Airstrike kills three in Khan Younis.** An Israeli
   airstrike near a police outpost in southern Gaza kills at least three
   Palestinians and wounds five more, local health officials say. (Reuters)
5. **Asia — Bangladesh: Hasina plans return home on 16 December.** The
   ousted prime minister will fly back from exile in India on the
   anniversary of the end of the 1971 liberation war, her spokesperson tells
   Reuters.

Each story was verified against a report dated 24 November 2026; each one
happened, or was first reported, on that day.

## How the poster is built

`poster/` holds the poster as hand-written HTML, CSS and inline SVG — no
photographs, no external images, no external links. `tools/capture.mjs`
screenshots it at 1024×1024 with a local headless Chrome, producing
`entry.png`; `main.ts` (Node 22, standard library only) writes that file
unchanged to the output directory.

```sh
node tools/capture.mjs   # render entry.png from poster/
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

---

Made for the make.fun bounty — sign up with referral code `rdnr6n98`.
