# Usage

Takes a string containing anki style cloze notation and returns an array.

```js
const cloze = require('@retrohack3r/cloze')

/* Returns:
[ { c: 1, answer: 'answer', hint: 'hint' } ]
*/
cloze('{{c1::answer::hint}}')

/* Returns:
[
  'foo ',
  { c: 2, answer: 'bar', hint: undefined },
  ' beep ',
  { c: 1, answer: 'fizz', hint: 'buzz' },
  'boop'
]
*/
cloze('foo {{c2::bar}} beep {{c1::fizz::buzz}}boop')
```

The returned array contains each "chunk" of the string, where a chunk is either a plaintext string or a cloze. You can reconstruct the original string from reading the array from left to right.
