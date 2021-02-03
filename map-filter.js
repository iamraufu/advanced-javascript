const numbers = [2, 3, 4, 5, 6, 7]
const output = [];
for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    const result = element * element;
    output.push(result);
}
// console.log(output);

// function square(element) {
// return element * element;
// }
// const square = element => element * element
const result = numbers.map(x => x * x);

console.log(result)

const result2 = numbers.filter(x => x % 2 != 0)
const result3 = numbers.find(x => x % 2 != 0)
console.log(result2)
console.log(result3)