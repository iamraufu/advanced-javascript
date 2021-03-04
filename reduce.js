const numbers = [10, 20, 30, 40];

const map = numbers.map(num => num * 2)
console.log(map)

const filter = numbers.filter(num => num > 20)
console.log(filter)

const find = numbers.find(num => num > 10)
console.log(find)

const reduce = numbers.reduce((sum, num) => {
    console.log(sum, num)
    return sum + num;
}, 0)
console.log(reduce)

const names = [
    { name: 'Raufu', job: 'Bekar', money: 0 },
    { name: 'Prezens', job: 'Tutor', money: 6000 },
    { name: 'Eftykhar', job: 'Student', money: 0 },
    { name: 'Rahman', job: 'Programmer', money: 0 }
]

const money = names.reduce((sum, names) => sum + names.money, 0)
console.log(money)