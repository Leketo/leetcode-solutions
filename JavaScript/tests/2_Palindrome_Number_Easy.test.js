const isPalindrome = require('../src/2_Palindrome_Number_Easy');

test('Example 1', () => {
  const x = 121;
  const expected = true;

  expect(isPalindrome(x)).toEqual(expected);
});

test('Example 2', () => {
  const x = -121;
  const expected = false;

  expect(isPalindrome(x)).toEqual(expected);
});

test('Example 3', () => {
  const x = 10;
  const expected = false;

  expect(isPalindrome(x)).toEqual(expected);
});
