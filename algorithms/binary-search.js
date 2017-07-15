/**
 * Binary Search :
 * Runs in logarithmic time: O(log n)
 * For any sorted list of n, binary search will take log (base 2) n steps to run in the worst case.
 * For a list of 8 elements, log 8 = 3, that means 3 steps at most.
 */


'use strict';

function binary_search(list, item) {
  
  let low = 0;
  let high = list.length - 1;
  
  while (low <= high) {
    
    let mid = Math.floor((low + high) / 2);
    let guess = list[mid];
    
    if (guess === item) {
      return `${item} at index: ${mid}`;
    }

    if (guess > item) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  
  return null;
}

const my_list = [1, 3, 5, 7, 9];

console.log(binary_search(my_list, 3)); // 1
console.log(binary_search(my_list, -1)); // null
