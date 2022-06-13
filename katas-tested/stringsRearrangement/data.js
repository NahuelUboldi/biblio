const tests = [
  {
    input: ['aba', 'bbb', 'bab'],
    outputExpected: false,
  },
  {
    input: ['ab', 'bb', 'aa'],
    outputExpected: true,
  },
  {
    input: ['q', 'q'],
    outputExpected: false,
  },
  {
    input: ['zzzzab', 'zzzzbb', 'zzzzaa'],
    outputExpected: true,
  },
  {
    input: ['ab', 'ad', 'ef', 'eg'],
    outputExpected: false,
  },
  {
    input: ['abc', 'bef', 'bcc', 'bec', 'bbc', 'bdc'],
    outputExpected: true,
  },
  {
    input: ['abc', 'abx', 'axx', 'abc'],
    outputExpected: false,
  },
  {
    input: ['abc', 'abx', 'axx', 'abx', 'abc'],
    outputExpected: true,
  },
  {
    input: ['f', 'g', 'a', 'h'],
    outputExpected: true,
  },
  {
    input: ['ff', 'gf', 'af', 'ar', 'hf'],
    outputExpected: true,
  },
  {
    input: ['a', 'b', 'c'],
    outputExpected: true,
  },
];

module.exports = tests;
