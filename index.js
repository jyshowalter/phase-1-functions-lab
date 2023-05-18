// Code your solution in this file!
function distanceFromHqInBlocks (current) {
    let hqBlock = 42;
    let distance = Math.abs(42 - current);
    return distance;
}

function distanceFromHqInFeet (distance) {
    return distanceFromHqInBlocks(distance) * 264;
}

function distanceTravelledInFeet(start, destination) {
    let distanceFt = Math.abs(start - destination) * 264;
    return distanceFt
}

function calculatesFarePrice(start, destination) {
    let distanceFt = distanceTravelledInFeet(start, destination);
    if (distanceFt <= 400) {
    return 0;
}   else if (distanceFt > 400 && distanceFt <= 2000) {
    return ((distanceFt - 400) * 0.02);
}   else if (distanceFt > 2000 && distanceFt <= 2500) {
    return 25;
}   else if (distanceFt > 2500) {
    return `cannot travel that far`;
}
} 

