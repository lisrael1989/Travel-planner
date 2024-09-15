// const trips = [
//   { id: 1, traveler: 'John Doe', destination: 'Paris', days: 5, cost: 1200 },
//   { id: 2, traveler: 'Jane Doe', destination: 'Paris', days: 7, cost: 1400 },
//   { id: 3, traveler: 'John Doe', destination: 'London', days: 3, cost: 900 },
// ];

// console.log('---------------------------- EX 1 -------------------------------------');

// function groupTrips(trips) {
//   const newGroup = {};

//   for (const trip of trips) {
//     if (!newGroup[trip.destination]) {
//       newGroup[trip.destination] = [];
//     }
//     newGroup[trip.destination].push(trip);
//   }
//   return newGroup;
// }

// console.log('The new Group of trips by city order:', groupTrips(trips));

// console.log('---------------------------- EX 2 -------------------------------------');

// const trips = [
//   { id: 1, traveler: 'John Doe', destination: 'Paris', days: 5, cost: 1200 },
//   { id: 2, traveler: 'Jane Doe', destination: 'Paris', days: 7, cost: 1400 },
//   { id: 3, traveler: 'John Doe', destination: 'London', days: 3, cost: 900 },
// ];

// function maxDays(trips) {
//   let longDay = trips[0];

//   for (const trip of trips) {
//     if (trip.days > longDay.days) {
//       longDay = trip;
//     }
//   }
//   return longDay;
// }

// const longestTrip = maxDays(trips);
// console.log(longestTrip);

console.log('---------------------------- EX 3 -------------------------------------');

const trips = [
  { id: 1, traveler: 'John Doe', destination: 'Paris', days: 5, cost: 1200 },
  { id: 2, traveler: 'Jane Doe', destination: 'Paris', days: 7, cost: 1400 },
  { id: 3, traveler: 'John Doe', destination: 'London', days: 3, cost: 2222 },
];

function expensiveTrip(trips) {
  let mostExpensive = trips[0];

  for (const trip of trips) {
    if (trip.cost > mostExpensive.cost) {
      mostExpensive = trip;
    }
  }
  return mostExpensive;
}

console.log(expensiveTrip(trips));
