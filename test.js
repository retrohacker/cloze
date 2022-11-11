const test = require('tape')
const lib = require('.')

const tests = [
  {
    in: '{{c1::answer::hint}}',
    out: [
      {
        c: 1,
        answer: 'answer',
        hint: 'hint'
      }
    ]
  },
  {
    in: 'foo {{c2::bar}} beep {{c1::fizz::buzz}}boop',
    out: [
      'foo ',
      {
        c: 2,
        answer: 'bar',
        hint: undefined
      },
      ' beep ',
      {
        c: 1,
        answer: 'fizz',
        hint: 'buzz'
      },
      'boop'
    ]
  }
]

for (let i = 0; i < tests.length; i++) {
  const testCase = tests[i]
  test(`Test: ${testCase.in}`, function (t) {
    t.plan(1)
    t.same(lib(testCase.in), testCase.out, testCase.in)
  })
}
