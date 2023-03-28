// Teacher
const findUniqueSorted = (inputArray) => {
  const uniqueNumbers = [];
  let prevNumber = inputArray[0];
  for (let i = 1; i < inputArray.length; i++) {
    if (inputArray[i] !== prevNumber) {
      uniqueNumbers.push(prevNumber);
      prevNumber = inputArray[i];
    }
  }
  uniqueNumbers.push(prevNumber);
  return uniqueNumbers;
};

const phoneNumbers = [
  +79000000000, +79000000000,
  +79000000001,
  +79000000002, +79000000002,
  +79000000003, +79000000003, +79000000003, +79000000003,
  +79000000004,
];
console.time('Teacher');
let uniqueNumbers = findUniqueSorted(phoneNumbers);
console.timeEnd('Teacher');
console.log(uniqueNumbers);

// My
const findUniqueSorted1 = (inputArray) => {
  if (inputArray.length === 0) return [];

  const uniqueNumbers = [inputArray[0]];
  let prevNumber = inputArray[0];
  for (let i = 1; i < inputArray.length; i++) {
    if (inputArray[i] !== prevNumber) {
      uniqueNumbers.push(inputArray[i]);
      prevNumber = inputArray[i];
    }
  }
  return uniqueNumbers;
};
console.time('my');
uniqueNumbers = findUniqueSorted1(phoneNumbers);
console.timeEnd('my');
console.log(uniqueNumbers);
