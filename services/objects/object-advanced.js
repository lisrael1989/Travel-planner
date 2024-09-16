console.log('---------------------------- EX 1 objects-advanced-------------------------------------');

const TravelPlanner = {
  locations: [{ name: 'paris', description: 'city of light', bestTimeToVisit: 'spring', localCuisine: 'france' }],
};

console.log(TravelPlanner);

console.log('---------------------------- EX 2 objects-advanced-------------------------------------');

function addLocation(locationArray, name, description, bestTimeToVisit, localCuisine) {
  let locationExists = false;
  locationArray.forEach((location) => {
    if (location.name === name) {
      console.log(`Error: The location that you try to add ${name} already exists`);
      locationExists = true;
      return;
    }
  });
  if (locationExists) return;

  const newLocation = {
    name: name,
    description: description,
    bestTimeToVisit: bestTimeToVisit,
    localCuisine: localCuisine,
  };
  locationArray.push(newLocation);
}

addLocation(TravelPlanner.locations, 'paris', 'city of light', 'spring', 'france');
console.log(TravelPlanner.locations);

// // 4
// const destinations = [
//   { name: 'Eiffel Tower', details: { visitorsPerYear: 7000000, entryFee: '25 USD' } },
//   { name: 'Great Wall of China', details: { visitorsPerYear: 10000000, entryFee: '60 CNY' } },
// ];

// // 6
// const destinationDetails = {
//   name: 'Machu Picchu',
//   country: 'Peru',
//   yearVisited: 2019,
//   ratings: [9, 8.5, 9, 9.5],
// };

// // 7
// const destinationRatings = {
//   'Machu Picchu': 9,
//   'Great Wall of China': 8.5,
//   'Eiffel Tower': 7.5,
//   Colosseum: 6.5,
// };

// // 8
// const destinations2 = {
//   1: { name: 'Machu Picchu', yearVisited: 2019, rating: 9 },
//   2: { name: 'Stonehenge', yearVisited: 2010, rating: 8.5 },
//   3: { name: 'Great Wall of China', yearVisited: 2018, rating: 8.6 },
// };

// // 9
// const activityRatings = {
//   hiking: [9, 8, 10, 7, 8.5],
//   sightseeing: [8.5, 8, 9, 9.5, 7.5],
//   snorkeling: [7, 7.5, 8, 8.5, 9],
// };

// // 10
// const destinationAwards = {
//   'Machu Picchu': 'Most Visited',
//   'Great Wall of China': 'Most Visited',
//   'Eiffel Tower': 'Most Photographed',
//   Colosseum: 'Most Iconic',
// };
// //
