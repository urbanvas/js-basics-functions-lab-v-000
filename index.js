// Code your solution in this file!
function distanceFromHqInBlocks (block) {
  return Math.abs(42 - block)
}

function distanceFromHqInFeet (place) {
  return distanceFromHqInBlocks(place) * 264
}

function distanceTravelledInFeet(blockOne, blockTwo) {
  return Math.abs(blockOne - blockTwo) * 264
}
