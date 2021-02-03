const students = [
    { id: 1, name: "raufu" },
    { id: 2, name: "prezens" },
    { id: 3, name: "eftykhar" },
    { id: 4, name: "rahman" }
]

const a = [];
for (let index = 0; index < students.length; index++) {
    const element = students[index];
    a.push(element.name)

}
console.log(a);

const ids = students.map(s => s.id)
const name = students.map(s => s.name)
console.log(ids);
console.log(name);

const bigger = students.filter(s => s.id > 2)
const bigger2 = students.find(s => s.id > 2)
console.log(bigger);
console.log(bigger2);