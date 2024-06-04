/**
 * In this kata, your task is to create all permutations of a non-empty input string and remove duplicates, if present.

Create as many "shufflings" as you can!

Examples:

With input 'a':
Your function should return: ['a']

With input 'ab':
Your function should return ['ab', 'ba']

With input 'abc':
Your function should return ['abc','acb','bac','bca','cab','cba']

With input 'aabb':
Your function should return ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']
Note: The order of the permutations doesn't matter.

Good luck!
 */

function permutations(string) {
  const result = new Set();
  if (string.length === 1) {
    return [string];
  }
  for (let i = 0; i < string.length; i++) {
    const char = string[i];
    const remainingChars = string.slice(0, i) + string.slice(i + 1);
    for (const perm of permutations(remainingChars)) {
      result.add(char + perm);
    }
  }
  return Array.from(result);
}

console.log(permutations("a")); // ['a']
