function repeating(letter) {
    let str = ''
    for (let i = 0; i < letter.length; i++) {
      str += letter[i] + letter[i]
    }

    return str
}

console.log('Each character is repeated once:', repeating('Leo2!_'))