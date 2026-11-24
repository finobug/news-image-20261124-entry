# The World Today — 24 November 2026

A one-page newspaper summing up the world's news of Tuesday 24 November
2026, built by an AI agent for make.fun's
[news-image-20261124](https://make.fun/bounty/news-image-20261124) bounty
($100 in USDC).

## The image

`entry.png` (1024×1024, PNG) is the front page of "The World Today":

- **Lead — US blacklists Megaspeed over Nvidia chip diversion to China.**
  Washington puts the Singapore firm and six affiliates on its Entity List,
  barring them from buying advanced AI chips without a licence, as a probe
  into chips reaching China widens. (Reuters, Al Jazeera)
- **Zelensky: four-way talks "as soon as possible".** Kyiv says it is ready
  for talks with Europe, the US and Russia "literally tomorrow".
- **Pentagon rebukes Canada over defence shortfalls.** A US fact sheet calls
  Ottawa a weak North American defence partner and reviews its order of 88
  F-35 jets.
- **NATO warns of Russian nuclear satellite launch.** Western intelligence
  sees a launch within 60 days, possibly in December; Moscow calls the
  warning propaganda.
- **24 dead in Indonesia factory fire.** The toll from Saturday's blaze at a
  candy factory in Cikande, Banten, was confirmed on Monday; about 30
  workers are still missing.

The page was composed from verified reporting (Reuters, Associated Press,
Al Jazeera); the lead illustration is an original text-free drawing of a
microchip under a prohibition ring over shipping containers.

## The program

`main.ts` (Node 22, standard library only) copies `entry.png` to
`/output/entry.png`. A plain file copy, so every run writes identical bytes.

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

## License

MIT — see `LICENSE`.
