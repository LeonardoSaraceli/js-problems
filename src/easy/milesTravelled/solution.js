function milesTravelled(min, speed) {
    return Math.round((min / 60) * speed)
}

console.log('The distance travelled in miles:', milesTravelled(61, 70))