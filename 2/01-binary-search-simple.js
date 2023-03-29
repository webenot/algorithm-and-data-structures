// Teacher
const binarySearch = (inputArray, search) => {
  if (inputArray.length === 0) return -1;

  let left = 0;
  let right = inputArray.length - 1;

  while (left <= right) {
    let middle = Math.floor((left + right) / 2);
    if (inputArray[middle] < search) {
      left = middle + 1;
    } else if (inputArray[middle] > search) {
      right = middle - 1;
    } else {
      return middle;
    }
  }

  return -1;
};

const arr = [ 1, 2, 9, 20, 31, 42, 51, 55, 59, 60, 62, 63, 64, 65, 66, 69, 92, 98, 99, 100 ];
console.time('teacher');
const searchResult = binarySearch(arr, 31);
console.timeEnd('teacher');
console.log(searchResult);
