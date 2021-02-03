function stopWatch() {
    let count = 0;
    return function() {
        count++;
        return count;
    }
}

const clock = stopWatch();
console.log(clock());
console.log(clock());
console.log(clock());
console.log(clock());

const clock2 = stopWatch();
console.log(clock2());
console.log(clock2());
console.log(clock2());

console.log(clock());