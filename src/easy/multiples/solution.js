function multiples(num, length) {
    const arr = []
    for (let i = 1; arr.length < length; i++) {
        arr.push(num * i)
    }

    return arr
}
console.log('The length number of multiples of the number:', multiples(7, 5))