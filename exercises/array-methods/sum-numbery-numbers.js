function arrayMethods(arr) {
  return arr
    .map(x => Number(x))
    .filter(x => x === x)
    .reduce((acc, x) => (x + acc), 0)
}


/* Array methods can be called one after the other.

This will cause multiple changes to be made before a new array is returned

Take some time to study what each method does, and how to use them in a chain
*/

[
  { name: 'asdf', args: [[1, 2, 3, 4, {}]], expected: 10 },
  { name: 'adf', args: [['2', 'two', true, false]], expected: 3 },
  { name: 'ad', args: [['2', 'two', true, false]], expected: 3 },
];
