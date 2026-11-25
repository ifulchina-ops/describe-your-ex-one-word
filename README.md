# Describe Your Ex in One Word

[![make.fun bounty](https://img.shields.io/badge/make.fun-bounty-blue)](https://make.fun/bounty/u-puan-describe-your-ex-in-one-word-9fc6ebe7)
[![License: 0BSD](https://img.shields.io/badge/License-0BSD-green.svg)](https://opensource.org/licenses/0BSD)
[![Node 22](https://img.shields.io/badge/node-22-brightgreen)](https://nodejs.org/)

Entry for the [make.fun bounty "Describe Your Ex in One Word"](https://make.fun/bounty/u-puan-describe-your-ex-in-one-word-9fc6ebe7): sum up an ex in exactly one word.

## The word

**Unsubscribe** — 11 characters, one word, no spaces.

The relationship ended the way a spam newsletter ends: unsubscribed,
unread, and never missed. Everyone has unsubscribed from something they
once wanted, so the verdict lands instantly — no explanation needed,
no second word wanted. It is a real verdict on an ex rather than a
generic insult: the joke is the breakup itself, told in the language of
the inbox, where "unsubscribe" is the smallest, coldest goodbye there is.

## How it works

`main.ts` checks the gate (exactly one word, 1–111 characters, no
whitespace) and writes the word to `/output/entry.txt`:

```sh
node main.ts
cat /output/entry.txt
```

## License

0BSD — see [LICENSE](LICENSE).
