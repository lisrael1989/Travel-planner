console.log('---------------------------- EX 1 Arrow Functions-------------------------------------');

// function getDestinationName(destination) {
//   return;
//   destination.name;
// }

const destinations = [
  { name: 'Paris', status: 'Visited', budget: 1500 },
  { name: 'London', status: 'Upcoming', budget: 1800 },
  { name: 'Tokyo', status: 'Wishlist', budget: 2000 },
  { name: 'Sydney', status: 'Visited', budget: 1600 },
  { name: 'New York', status: 'Upcoming', budget: 1700 },
];

const getDestinationName = (destination) => destination.name;

console.log(getDestinationName(destinations[0]));

console.log('---------------------------- EX 2 Arrow Functions-------------------------------------');

// function getTravelStatus(status) {
//   if (status === 'Visited') {
//     return;
//     ('You have visited this place');
//   } else if (status === 'Upcoming') {
//     return;
//     ('You are planning to visit this place');
//   } else {
//     return;
//     ('This place is in your wishlist');
//   }
// }

const getTravelStatus = (status) => {
  if (status === 'Visited') {
    return 'You have visited this place';
  } else if (status === 'Upcoming') {
    return 'You are planning to visit this place';
  } else {
    return 'This place is in your wishlist';
  }
};

console.log(getTravelStatus(destinations[0].status));

console.log('---------------------------- EX 3 Arrow Functions-------------------------------------');

// function getTotalBudget(destinations) {
//     let totalBudget = 0;
//     for (let i = 0; i < destinations.length; i++) {
//       totalBudget += destinations[i].budget;
//     }
//     return "Total travel budget is " + totalBudget;
//   }

const getTotalBudget = (destination) => {
  let totalBudget = 0;
  for (let i = 0; i < destinations.length; i++) {
    totalBudget += destinations[i].budget;
  }
  return 'Total travel budget is ' + totalBudget;
};

console.log(getTotalBudget(destinations.budget));

console.log('---------------------------- EX 4 Arrow Functions-------------------------------------');

// let sortedDestinations = destinations.sort(function (a, b) {
//
// });

let sortedDestinations = destinations.sort((a, b) => b.budget - a.budget);

console.log(sortedDestinations);

console.log('---------------------------- EX 5 Arrow Functions-------------------------------------');

// function getDestinationNames(destinations) {
//   return;
//   destinations.map(function (destination) {
//     return;
//     destination.name;
//   });
// }

const getDestinationNames = (destinations) => destinations.map((destination) => destination.name);

console.log(getDestinationNames(destinations));
