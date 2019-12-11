'use strict';

// Complete this algo
const binarySearch = (
  array,
  target,
  arrStart = 0,
  arrEnd = array.length - 1
) => {
  let middle = Math.floor((arrEnd - arrStart) / 2 + arrStart);
  if (target === array[middle]) {
    return true;
  }
  if (arrEnd - arrStart === 0) {
    return false;
  }
  if (target < array[middle]) {
    return binarySearch(array, target, arrStart, middle);
  } else {
    return binarySearch(array, target, middle + 1, arrEnd);
  }
};

/*
	EXTRA CREDIT:

	Can you augment the function above to run in constant O(1) space?
	This means, you cannot edit/copy the original array!
	How can we use other pieces of data, like pointers, to avoid slicing?

*/

module.exports = binarySearch;
