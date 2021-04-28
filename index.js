// Code your solution in this file!
const Hq = 42

function distanceFromHqInBlocks(someValue){
    if (someValue > 42 ){
        return (someValue - 42)
    } else {
        return (42 - someValue)
    }
}


function distanceFromHqInFeet(someValue){
    return (distanceFromHqInBlocks(someValue) * 264)
}

function distanceTravelledInFeet(start, end){
    let someValue = start - end
    if (someValue > 0){
        return someValue * 264
    } else {
        return someValue * -264
    }
}

function calculatesFarePrice(start, destination){
    let someValue = Math.abs(destination - start) * 264
    if (someValue < 400){
        return 0
    } else if (someValue > 2500) {
        return "cannot travel that far"
    } else if (someValue > 2000){
        return 25
    } else {
        return ((someValue - 400) * 0.02)
    }
}