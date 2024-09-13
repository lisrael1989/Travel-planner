// // Pure Functions

// console.log('------------------------------ Pure functions-------------------------------------');
// console.log('---------------------------------- EX 1 -------------------------------------------');

// // 1. Determine the Average Rating of Trips
// let tripsRating = [8.5, 7.9, 6.3, 9.2, 8.1];

// function calcAvgRating() {
//   let sum = 0;
//   for (let i = 0; i < tripsRating.length; i++) {
//     sum += tripsRating[i];
//   }
//   const avg = sum / tripsRating.length;
//   console.log('avg:', avg);
// }

// // calcAvgRating();
// console.log('---------------------------------- EX 2 -------------------------------------------');

// // 2. Extract Organizer Names from Trip Names

// let tripNames = [
//   'Europe Exploration (2020) - Organized by Wanderlust Travel',
//   'Asian Adventure (2019) - Organized by Globe Trotters',
//   'Caribbean Cruise (2022) - Organized by Cruise Experts',
// ];

// function extractOrganizerNames(tripNames) {
//   let organizers = [];

//   for (const name of tripNames) {
//     let organizer = name.split(' - Organized by')[1];
//     organizers.push(organizer);
//   }

//   return organizers;
// }

// console.log('The new arr of trips names:', extractOrganizerNames(tripNames));

// console.log('---------------------------------- EX 3 -------------------------------------------');

// // 3. Check if a Trip Title Contains a Specific Word

// function containWordInTitle(title, keyword) {
//   return title.toLowerCase().includes(keyword.toLowerCase());
// }

// console.log('keyword inside title? ', containWordInTitle('European Adventure', 'Europe'));

// console.log('---------------------------------- EX 4 -------------------------------------------');

// // 4. Check if All Trip Titles Start with the Same Letter
// // input = ['paris Getaway', 'Prairie Expedition', 'Portugal Experience'];

// const tripTitles = ['Paris Getaway', 'Prairie Expedition', 'Portugal Experience'];
// const otherTripTitles = ['Paris Getaway', 'London Adventure', 'Portugal Experience'];

// function allTitlesStartWithSameLetter(titles) {
//   if (titles.length === 0) return true;

//   const firstLetter = titles[0][0].toLowerCase();

//   for (const title of titles) {
//     if (title[0].toLowerCase() !== firstLetter) {
//       return false;
//     }
//   }

//   return true;
// }

// console.log(`all first letter the same?  ${allTitlesStartWithSameLetter(tripTitles)}`);
// console.log(` all first letter the same? ${allTitlesStartWithSameLetter(otherTripTitles)}`);

// console.log('---------------------------------- EX 5 -------------------------------------------');

// // 5. Concatenate All Trip Types into a Single String
// // Input: ['City', 'Beach', 'Mountain', 'Cruise']

// const tripType = ['City', 'Beach', 'Mountain', 'Cruise'];

// function concatenateTypes() {
//   let newTripTypesArr = tripType.join(', ');

//   console.log('New trip str:', newTripTypesArr);
// }

// concatenateTypes();

// console.log('---------------------------------- EX 6 -------------------------------------------');

// // 6. Check if Any Trip Title is Longer Than 15 Characters
// // Input: ['European Adventure', 'Exploring Asia', 'African Safari']

// const trips = ['European Adventure', 'Exploring Asia', 'African Safari'];

// function TitleLongerThanFifteenChars() {
//   for (const trip of trips) {
//     let numOfCharts = trip.length;

//     if (numOfCharts > 15) {
//       console.log(`${trip} have ${numOfCharts} chars`);
//       return true;
//     }
//   }
//   console.log('All trips with less then 15 chars');
//   return false;
// }

// console.log(TitleLongerThanFifteenChars());

// console.log('---------------------------------- EX 7 -------------------------------------------');

// // 7. Find Trips Organized by a Specific Organizer
// // Input Example: ['European Adventure', 'Asian Expedition', 'Caribbean Cruise'], ['Wanderlust Travel', 'Globe Trotters', 'Cruise Experts'], 'Wanderlust Travel'

// const trips2 = ['European Adventure', 'Asian Expedition', 'Caribbean Cruise'];
// const organizers = ['Wanderlust Travel', 'Globe Trotters', 'Cruise Experts'];

// function findTripsByOrganizer(tripTitles, organizers, specificOrganizer) {
//   let res = [];

//   for (let i = 0; i < tripTitles.length; i++) {
//     if (organizers[i].toLowerCase() === specificOrganizer.toLowerCase()) {
//       res.push(tripTitles[i]);
//     }
//   }
//   return res;
// }

// console.log('Res:', findTripsByOrganizer(trips2, organizers, 'wanderlust Travel'));

// console.log('---------------------------------- EX 8 -------------------------------------------');

// 8. Capitalize the First Letter of Each Trip Title
// Input: ['european adventure', 'asian expedition', 'caribbean cruise']

let tripTitles3 = ['european adventure', 'asian expedition', 'caribbean cruise'];

function capitalFirstLetter() {
  let capitalizedTrips = [];

  for (const trip1 of tripTitles3) {
    let titleWords = trip1.split(' ');
    let capitalizedWords = [];

    // console.log(titleWords);

    for (const word of titleWords) {
      let capitalLetter = word.charAt(0).toUpperCase() + word.slice(1);
      capitalizedWords.push(capitalLetter);
      //   console.log('words in capital letter:', capitalLetter);
      //   console.log(capitalizedWords);
    }
    capitalizedTrips.push(capitalizedWords.join(' '));
    // console.log(capitalizedTrips);
  }
  return capitalizedTrips;
}

console.log('New Trips Arr with capital first letter:', capitalFirstLetter());

console.log('---------------------------------- Bonus Exercises-------------------------------------------');

// 1. Sort Destination Ratings
// Input: [4, 2, 5, 3, 1]

// 2. Average Rating of Top N Destinations
// Input: ([2, 3, 5, 4, 1], 3)

// 3. Create Rating Frequency Map for Destinations
// Input: [3, 4, 3, 5, 4, 5, 5]

// 4. Normalize Destination Ratings
// Input: ([1, 2, 3, 4, 5], 0, 100)
