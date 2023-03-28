// Teacher
const ages = [10,6,15,93,42,7,32];
let maxAge = 0;
console.time('teacher');
for (const age of ages) {
  maxAge = Math.max(maxAge, age);
}
console.timeEnd('teacher');
console.log('Max age: ', maxAge);

// My
maxAge = ages[0];
console.time('my');
for (let i = 1; i < ages.length; i++) {
  maxAge = Math.max(maxAge, ages[i]);
}
console.timeEnd('my');
console.log('Max age my: ', maxAge);
