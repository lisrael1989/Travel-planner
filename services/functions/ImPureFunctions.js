// ImPure Functions
console.log('---------------------------- EX 1 Impure functions-------------------------------------');
let travelDestinations = [];

function initializeDestination() {
  travelDestinations = [];
  console.log('travel destinations Arr:', travelDestinations);
}

initializeDestination();

console.log('---------------------------- EX 2 Impure functions-------------------------------------');

function addDestination(destinationName, travelDate) {
  travelDestinations.push([destinationName, travelDate]);
  console.log('Added destination:', destinationName, travelDate);
}

addDestination('paris', '24.09.2024');
addDestination('London', '27.10.2024');

console.log('---------------------------- EX 3 Impure functions-------------------------------------');
function findTravelDate(destinationName) {
  for (const dest of travelDestinations) {
    if (dest[0].toLowerCase().includes(destinationName.toLowerCase())) {
      console.log(`The travel date for ${destinationName} is: ${dest[1]}`);
      return;
    }
  }
  console.log(`${destinationName} Destination was not found`);
}

findTravelDate('paris');
findTravelDate('israel');
findTravelDate('london');

console.log('---------------------------- EX 4 Impure functions-------------------------------------');

function updateTravelDate(destinationName, newTravelDate) {
  for (const dest of travelDestinations) {
    // console.log(travelDestinations);
    if (dest[0].toLowerCase() === destinationName.toLowerCase()) {
      dest.splice(1, 1, newTravelDate);
      console.log(`Updated Date : ${dest[1]}`);
      return;
    }
  }
  console.log('Destination not found');
}

updateTravelDate('israel', '24.10.2024'); // Example usage (not found)
updateTravelDate('paris', '11.11.2024');
console.log('travel destinations:', travelDestinations); // check the destinations arr;

console.log('---------------------------- EX 5 Impure functions-------------------------------------');
function removeDestination(destinationName) {
  for (const dest of travelDestinations) {
    if (dest[0].toLowerCase() === destinationName.toLowerCase()) {
      const i = travelDestinations.indexOf(dest);
      travelDestinations.splice(i, 1);
      console.log('travel Destination after remove:', travelDestinations);
      return;
    }
  }
  console.log('Destination not found');
}
// removeDestination('london');

console.log('---------------------------- EX 6 Impure functions-------------------------------------');

function listDestinations(travelDestinations) {
  if (travelDestinations.length === 0) {
    console.log('No destinations available.');
    return;
  }

  for (const dest of travelDestinations) {
    // const i = travelDestinations.indexOf(dest);
    // console.log(`${dest[i]} - ${dest[i + 1]}`);
    console.log(`${dest[0]} - ${dest[1]}`);
  }
}

listDestinations(travelDestinations);
console.log('---------------------------- EX 7 Impure functions-------------------------------------');

function parseDate(dateString) {
  const parts = dateString.split('.');
  const day = parseInt(parts[0], 10);
  const month = parseInt(parts[1], 10) - 1;
  const year = parseInt(parts[2], 10);

  return new Date(year, month, day);
}

function findNextDestination() {
  let currentDate = new Date();
  let nextDestination = null;
  let closestDate = null;

  for (const dest of travelDestinations) {
    let travelDate = parseDate(dest[1]);

    if (travelDate > currentDate && (closestDate === null || travelDate < closestDate)) {
      nextDestination = dest;
      closestDate = travelDate;
      console.log('travel date:', travelDate);
    }
  }

  if (nextDestination) {
    console.log(`Next destination is ${nextDestination[0]} on ${nextDestination[1]}`);
  } else {
    console.log('No upcoming destinations.');
  }
}
console.log(travelDestinations);

findNextDestination();
