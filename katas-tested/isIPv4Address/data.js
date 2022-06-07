const tests = [
  {
    input: '172.16.254.1',
    expectedOutput: true,
  },
  {
    input: '172.316.254.1',
    expectedOutput: false,
  },
  {
    input: '.254.255.0',
    expectedOutput: false,
  },
  {
    input: '1.1.1.1a',
    expectedOutput: false,
  },
  {
    input: '1',
    expectedOutput: false,
  },
  {
    input: '0.254.255.0',
    expectedOutput: true,
  },
  {
    input: '1.23.256.255.',
    expectedOutput: false,
  },
  {
    input: '1.23.256..',
    expectedOutput: false,
  },

  {
    input: '0..1.0',
    expectedOutput: false,
  },
  {
    input: '64.233.161.00',
    expectedOutput: false,
  },
  {
    input: '64.00.161.131',
    expectedOutput: false,
  },
  {
    input: '01.233.161.131',
    expectedOutput: false,
  },
  {
    input: '35..36.9.9.0',
    expectedOutput: false,
  },
  {
    input: '1.1.1.1.1',
    expectedOutput: false,
  },
  {
    input: '1.256.1.1',
    expectedOutput: false,
  },
  {
    input: 'a0.1.1.1',
    expectedOutput: false,
  },
  {
    input: '0.1.1.256',
    expectedOutput: false,
  },
  {
    input: '129380129831213981.255.255.255',
    expectedOutput: false,
  },
  {
    input: '255.255.255.255abcdekjhf',
    expectedOutput: false,
  },
  {
    input: '7283728',
    expectedOutput: false,
  },
  {
    input: '0..1.0.0',
    expectedOutput: false,
  },
];

module.exports = tests;
