function factorial(num) {
    for (let i = num - 1; i >= 1; i--) {
        num *= i
    }

    if (num === 1 || num === 0) {
        return 1
    } 

    return num
}

console.log('Find the factorial:', factorial(6))