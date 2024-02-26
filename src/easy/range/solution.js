function range(...num) {
    if (Math.min(...num) < 0) {
        return Math.max(...num) + Math.min(...num)
    }

    return Math.max(...num) - Math.min(...num)
}

console.log('The difference between the highest and lowest numbers in the list:', range(-1, 3, 8, 10, 7))