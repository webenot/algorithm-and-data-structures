// Teacher
const findUnique = (phoneNumbers) => {
  const uniqueNumbers = [];
  for (const currentNumber of phoneNumbers) {
    let alreadyExists = false;
    for (const existingNumber of uniqueNumbers) {
      if (existingNumber === currentNumber) {
        alreadyExists = true;
        break;
      }
    }
    if (!alreadyExists) {
      uniqueNumbers.push(currentNumber);
    }
  }

  return uniqueNumbers;
};

const phoneNumbers = [+79161002030, +79255558877, +79219990000,
  +79161002030];
console.time('teacher');
let uniqueNumbers = findUnique(phoneNumbers);
console.timeEnd('teacher');
console.log(uniqueNumbers);

// My
const findUnique1 = (phoneNumbers) => {
  if (phoneNumbers.length === 0) return [];

  const uniqueNumbers = [phoneNumbers[0]];
  for (let i = 1; i < phoneNumbers.length; i++) {
    let alreadyExists = false;
    for (let j = 0; j < uniqueNumbers.length; j++) {
      if (uniqueNumbers[j] === phoneNumbers[i]) {
        alreadyExists = true;
        break;
      }
    }
    if (!alreadyExists) {
      uniqueNumbers.push(phoneNumbers[i]);
    }
  }

  return uniqueNumbers;
};

console.time('my');
uniqueNumbers = findUnique1(phoneNumbers);
console.timeEnd('my');
console.log(uniqueNumbers);
