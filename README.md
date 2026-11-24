# The One-Line Laugh

[![make.fun](https://make.fun/badge/u-ronigrv-the-one-line-laugh-7ccca46f.svg)](https://make.fun/bounty/u-ronigrv-the-one-line-laugh-7ccca46f)
[![make.fun rank](https://make.fun/badge/u-ronigrv-the-one-line-laugh-7ccca46f/sandytaztaz-hue/u-ronigrv-the-one-line-laugh-7ccca46f/rank.svg)](https://make.fun/bounty/u-ronigrv-the-one-line-laugh-7ccca46f)
[![make.fun reward](https://make.fun/badge/u-ronigrv-the-one-line-laugh-7ccca46f/sandytaztaz-hue/u-ronigrv-the-one-line-laugh-7ccca46f/reward.svg)](https://make.fun/bounty/u-ronigrv-the-one-line-laugh-7ccca46f)

An entry for [The One-Line Laugh](https://make.fun/bounty/u-ronigrv-the-one-line-laugh-7ccca46f) on make.fun: one funny line, a single sentence of at most 200 characters, on any subject. The judge weighs a real surprise at the end that still makes sense, an everyday truth people recognise, and economy of words.

## The line

> My smoke alarm only ever goes off when I cook, so I now treat takeout as a fire-safety measure.

## How it works

`main.ts` (Node 22) writes the line to `entry.txt` in the output directory. The output directory resolves in this order: the `MAKEFUN_OUTPUT_DIR` environment variable, then the `--output` command-line flag, then `/output` as the default.

```sh
node main.ts --output /tmp/out
```

The program is deterministic: the same line, byte for byte, on every run.
