// Teacher
const ages = [10,6,15,93,42,7,32];
const findMaxUnderBoundary = (inputArray, topBoundary) => {
  let currentMax = -Infinity;
  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i] < topBoundary) {
      currentMax = Math.max(currentMax, inputArray[i]);
    }
  }

  return currentMax;
};

const findTopElements = (inputArray, numberOfElements) => {
  const topElements = [];
  let prevMax = Infinity;
  for (let i = 0; i < numberOfElements; i++) {
    const currentMax = findMaxUnderBoundary(inputArray, prevMax);
    prevMax = currentMax;
    topElements.push(currentMax);
  }

  return topElements;
};
console.time('teacher');
let top = findTopElements(ages, 3);
console.timeEnd('teacher');
console.log('top: ', top);

// My
const findMaxUnderBoundary1 = (inputArray, topBoundary = undefined) => {
  let currentMax = inputArray[0];
  for (let i = 1; i < inputArray.length; i++) {
    if ((topBoundary !== undefined && inputArray[i] < topBoundary) || topBoundary === undefined) {
      currentMax = Math.max(currentMax, inputArray[i]);
    }
  }

  return currentMax;
};

const findTopElements1 = (inputArray, numberOfElements) => {
  const topElements = [];
  let prevMax = undefined;
  for (let i = 0; i < numberOfElements; i++) {
    const currentMax = findMaxUnderBoundary1(inputArray, prevMax);
    prevMax = currentMax;
    topElements.push(currentMax);
  }

  return topElements;
};
console.time('my');
top = findTopElements1(ages, 3);
console.timeEnd('my');
console.log('top: ', top);
