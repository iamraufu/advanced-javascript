const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const part = nums.slice(2, 5);
//                   start end ->array never change
const part2 = nums.splice(2, 5);
//                    start next-how-many-to remove  -> array become changed
console.log(part);
console.log(part2);
console.log(nums);

const all = nums.join(" Raufu ")
console.log(all)