function capitalise(str) {
    if (
        str.slice(-1) === '.' || 
        str.slice(-1) === ',' ||
        str.slice(-1) === ';' ||
        str.slice(-1) === ':' ||
        str.slice(-1) === '.' ||
        str.slice(-1) === '?' ||
        str.slice(-1) === '!' ||
        str.slice(-1) === '-' ||
        str.slice(-1) === '""' ||
        str.slice(-1) === '...'
        ) {
        return str[0].toUpperCase() + str.slice(1)
    } else {
        return str[0].toUpperCase() + str.slice(1).concat('.') 
    }
}

console.log('Capitalise the first letter and add a full stop to the end:', capitalise('leonardo'))