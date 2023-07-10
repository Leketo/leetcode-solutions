/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = function(x) {
    const intToArray = x.toString().split("");
    let left = 0;
    let right = intToArray.length - 1;
  
  while (left < right){
    const currentLetterLeft = intToArray[left];
    const currentLetterRight = intToArray[right];
    if (currentLetterLeft != currentLetterRight){
      return false;
    }
    left++;
    right--;
  }
    
  return true;
};

module.exports = isPalindrome;