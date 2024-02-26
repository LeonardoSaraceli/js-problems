function numberGenerator(num1, num2) {
    return Math.floor(Math.random() * (num1 - num2) + num2)
}

console.log('Generating a random number between two other numbers:', numberGenerator(10, 1))