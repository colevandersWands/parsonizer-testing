function arrayMethods(arr) {
  return arr
    .map(x => Number(x))
    .filter(x => x % 2 === 0)
    .reduce((acc, x) => (x + acc), 0)
}


/*
  learn!
*/

[
  { name: 'asdf', args: [[1, 2, 3, 4]], expected: 6 },
  { name: 'adf', args: [['2', 'two', true, false]], expected: 2 },
  { name: 'ad', args: [['2', 'two', true, false]], expected: 2 },
];
