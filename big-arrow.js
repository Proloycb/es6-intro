const add = (num1, num2) => num1 + num2 ;
const sum = add(12, 18);

const multiply = (num1, num2, num3) => num1 * num2 * num3 ;
const sum2 = multiply(12, 3, 4);

const tenTimes = (num) => num * 10 ;
const sum3 = tenTimes(10);

const fiveTimes = num => num * 5 ;
const sum4 = fiveTimes(10);

const doMath = (x, y) => {
    const sum = x + y;
    const diff = x - y;
    const result = sum * diff ;
    const output = result * 10;
    return output;
}
const result = doMath(12, 10);
console.log(result);