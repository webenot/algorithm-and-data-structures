// Teacher
const removeDuplicates = (inputArray) => {
  let i = 0;
  while (i < inputArray.length) {
    let found = false;
    for (let j = i + 1; j < inputArray.length; j++) {
      if (inputArray[j] === inputArray[i]) {
        found = true;
        break;
      }
    }
    if (!found) {
      i++;
      continue;
    }
    inputArray.splice(i, 1);
  }

  return inputArray.length;
};

const arr = [15, 23, 20, 5, 15, 20, 15, 20];
console.time('teacher');
const result = removeDuplicates(arr);
console.timeEnd('teacher');
console.log('result', result);
console.log('arr', arr);
