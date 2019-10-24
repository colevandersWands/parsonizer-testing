function reverseStringArrayMethods(str) {
  const arrayOfLetters = str.split('');
  const reversedArray = arrayOfLetters.reverse();
  const joinedString = reversedArray.join('');
  return joinedString;
}

/*
  see how you can use array methods to reverse a string
*/

const testCases = [
  { name: 'first', args: ['asdf'], expected: 'fdsa' },
  { name: 'second', args: ['rewq'], expected: 'qwer' },
];
