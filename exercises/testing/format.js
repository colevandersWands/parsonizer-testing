function reverseStringArrayMethods(str) {
  const arrayOfLetters = str.split('');
  const reversedArray = arrayOfLetters.reverse();
  const joinedString = reversedArray.join('');
  return joinedString;
}

/* a simple solution to reversing a string using array methods

this exercise demonstrates an important problem solving strategy:
  - embedding

Embedding is when you take a problem with, for example, strings
convert the problem to another format, for example, arrays
solve the problem in the different format
then translate back to the original
*/

[
  { name: 'first', args: ['asdf'], expected: 'fdsa' },
  { name: 'second', args: ['rewq'], expected: 'qwer' },
  { name: 'third', args: ['racecar'], expected: 'racecar' },
];