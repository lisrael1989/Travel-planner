console.log('---------------------------- EX 1 objects-basic-------------------------------------');

const destination = {
  name: 'tel aviv',
  country: 'israel',
  yearVisited: 2024,
  activities: ['football', 'party'],
  ratings: [4.5, 4.2],
};

const getAverageRating = () => {
  let sum = 0;
  let DestinationRatings = destination.ratings;
  for (let i = 0; i < DestinationRatings.length; i++) {
    sum += DestinationRatings[i];
  }
  console.log('🚀 sum:', sum);
  return sum / DestinationRatings.length;
};
console.log('🚀 getAverageRating:', getAverageRating());

console.log('---------------------------- EX 2 objects-basic-------------------------------------');

const NewProperty = (destination.landmarks = [
  { name: 'ali', description: 'love' },
  { name: 'yossi', description: 'good' },
]);
console.log('🚀 ~ NewProperty:', NewProperty);
const LandmarkSecondName = destination.landmarks[1].name;
// const landmarkSecondNameBracket = destination["landmarks"][1]["name"];

console.log('🚀 ~  LandmarkSecondName :', LandmarkSecondName);

destination.activities.push('sleep');
console.log('New destination object:', destination);

console.log('---------------------------- EX 3 objects-basic-------------------------------------');

destination.yearVisited = 1989;
destination.ratings.push(4.8);
delete destination.country;
// destination.landmarks[0].description = 'changed love';
destination['landmarks'][0]['description'] = 'changed love';

if (
  destination.ratings.length > 0
    ? console.log('You have rating here your destinations:', destination)
    : console.log('You not have any rating')
);

console.log('---------------------------- EX 4 objects-basic-------------------------------------');

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
