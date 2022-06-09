// Code your solution in this file!
// should return a new array containing the first two drivers from the passed-in array
function returnFirstTwoDrivers(passedInArray) {
  return passedInArray.slice(0, 2);
}

// should return an array of the last two drivers
const returnLastTwoDrivers = (passedInArray) => passedInArray.slice(-2);

/*
has the `returnFirstTwoDrivers` function to as its first element
has the `returnLastTwoDrivers` function to as its last elemen
allows us to invoke either function from the array
*/

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

/*
returns a function
should multiply a given value using the created multiplier
*/
const createFareMultiplier = () => {
  return (givenValue) => givenValue * givenValue;
};

/*
is a function
doubles fares
*/

function fareDoubler(fare) {
  return fare * 2;
}

/**
 is a function
 triples fares
 */

function fareTripler(fare) {
  return fare * 3;
}

const selectDifferentDrivers = (arrayOfDrivers, returnedDrivers) =>
  returnedDrivers(arrayOfDrivers);
