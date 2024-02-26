function milesTravelled(min, speed) {
    const hours = min / 60
    const miles =  hours * speed
    return Math.round(miles)
}

console.log('The distance travelled in miles:', milesTravelled(61, 70))