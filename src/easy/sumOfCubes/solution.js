function expo(...num) {
    let sum = 0
    for (let i = 0; i < num.length; i++) {
        sum += num[i] ** 3
    }

    return sum
}

console.log(expo(1, 5, 9))