// complete the given function

function isPalindrome(str) {
  // Remove non-alphanumeric characters and convert to lowercase
  const cleanString = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

  let left = 0;
  let right = cleanString.length - 1;

  while (left < right) {
    if (cleanString[left] !== cleanString[right]) {
      return false;
    }

    left++;
    right--;
  }

  return true;
}
module.exports = palindrome;
