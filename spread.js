const numbers = [21, 32, 99, 45, 54, 67];
// console.log(numbers);
// console.log(...numbers);

const max = Math.max(24, 67, 87, 65);
const maxInArray = Math.max(...numbers);
// console.log(max, maxInArray);

const numbers2 = [55,...numbers];
numbers.push(88);
console.log(numbers, numbers2);

