// 1. Check if a Destination is in the Itinerary

console.log('------------------------------ EX1 -----------------------------------');

const travelItinerary1 = ['Paris', 'Tokyo', 'New York City'];
const destinationToCheck1 = 'Tokyo';

if (travelItinerary1.includes(destinationToCheck1)) {
  console.log(`${destinationToCheck1} in [${travelItinerary1}]`);
} else {
  console.log(`${destinationToCheck1}  not in [${travelItinerary1}]`);
}
console.log('------------------------------ EX 2-----------------------------------');

// 2. Reverse Travel Dates Order
const travelDates2 = ['2023-07-01', '2023-07-15', '2023-08-01'];

const newTravelDates = travelDates2.reverse();
console.log('new dates order:', newTravelDates);

console.log('---------------------------- EX 3-------------------------------------');

// 3. Create a String of Travel Activities
const travelActivities3 = ['Sightseeing', 'Hiking', 'Dining'];
const newTravelStr = travelActivities3.slice().join(', ');
console.log('new travel STR:', newTravelStr);

console.log('------------------------------- EX 4----------------------------------');

// 4. Check for a Specific Activity
const plannedActivities4 = ['Sightseeing', 'Hiking', 'Dining'];
const activityToCheck4 = 'Hiking';

console.log('---------------------------- EX 5-------------------------------------');

// 5. Find Index of a Specific Destination
const destinationList5 = ['Paris', 'Tokyo', 'New York City'];
const specificDestination5 = 'New York City';

const destinationFind = destinationList5.includes(specificDestination5);
console.log(` Did ${specificDestination5} inside [${destinationList5}] ? ${destinationFind} `);

console.log('--------------------------- EX 6--------------------------------------');

// 6. Remove the Last Destination
const upcomingTrips6 = ['Greece', 'Iceland', 'Japan'];

const newArrTrips = upcomingTrips6.pop();
console.log('Removed:', newArrTrips);
console.log('new Trip Arr:', upcomingTrips6);

console.log('--------------------------- EX 7--------------------------------------');

// 7. Insert a Destination at the Beginning
const bucketListDestinations7 = ['Machu Picchu', 'Great Wall of China'];
const newDestination7 = 'Aurora Australis in Antarctica';

bucketListDestinations7.unshift(newDestination7);
console.log('new destinations:', bucketListDestinations7);

console.log('--------------------------- EX 8--------------------------------------');

// 8. Remove First Destination and Log It
const europeanCapitals8 = ['Paris', 'Berlin', 'Madrid'];

europeanCapitals8.shift();
console.log('new destination after removing first str:', europeanCapitals8);

console.log('---------------------------- EX 9 -------------------------------------');

// 9. Concatenate Two Arrays of Destinations
const beachDestinations9 = ['Maldives', 'Bora Bora'];
const cityDestinations9 = ['New York', 'Tokyo'];

const ConnectedARR = beachDestinations9.concat(cityDestinations9);
console.log('connected arr:', ConnectedARR);

console.log('---------------------------- EX 10 -------------------------------------');

// 10. Sort Destinations Alphabetically
const destinationList10 = ['Paris', 'Tokyo', 'New York City'];
const sortDestination = destinationList10.sort();
console.log('sort destination list:0', sortDestination);

console.log('---------------------------- EX 11 -------------------------------------');

// 11. Create Array from Packing List Items
const packingListString11 = 'Passport,Sunscreen,Camera';
console.log('Str to Arr: ', packingListString11.split());

console.log('---------------------------- EX 12 -------------------------------------');

// 12. Slice Array to Get First Few Days of Trip Itinerary
const tripItinerary12 = ['Visit Louvre', 'Eiffel Tower', 'Seine River Cruise'];
const n12 = 2;

const newArr2 = tripItinerary12.slice(0, 2);
console.log('Unchanged Arr:', tripItinerary12);
console.log('Updated Arr:', newArr2);

console.log('---------------------------- EX 13 -------------------------------------');

// 13. Empty the Wishlist
const travelWishlist13 = ['Northern Lights in Norway', 'Safari in Kenya', 'Great Barrier Reef'];

travelWishlist13.splice(0, travelWishlist13.length);
console.log('Empty wishlist:', travelWishlist13);

console.log('---------------------------- EX 14 -------------------------------------');

// 14. Add a New Destination
const destinations14 = ['Paris', 'Tokyo'];
const newDestination14 = 'New York City';

destinations14.push(newDestination14);
console.log('Add New destination:', destinations14);

console.log('---------------------------- EX 15 -------------------------------------');
// 15. Remove the Last Destination
const destinations15 = ['Paris', 'Tokyo', 'New York City'];

destinations15.pop();
console.log('Remove the last destination:', destinations15);

console.log('---------------------------- EX 16 -------------------------------------');
// 16. Create a String of Destinations
const destinations16 = ['Paris', 'Tokyo', 'New York City'];

const StrFromArr = destinations16.join(' ,');
console.log('str from Arr:', StrFromArr);

console.log('---------------------------- EX 17 -------------------------------------');

// 17. Find Index of a Specific Destination
const destinations17 = ['Paris', 'Tokyo', 'New York City'];
const destinationToFind17 = 'Tokyo';

const destinationIndex = destinations17.indexOf(destinationToFind17);
console.log(`${destinationToFind17} index is ${destinationIndex} `);

console.log('---------------------------- EX 18 -------------------------------------');

// 18. Sort Destinations Alphabetically
const destinations18 = ['Paris', 'Tokyo', 'New York City'];

const newArr3 = destinations18.sort();
console.log(newArr3);

console.log('---------------------------- EX 19 -------------------------------------');

// 19. Sort Distances Numerically
const distances19 = [500, 150, 300, 200, 222];

distances19.sort((a, b) => b - a);
console.log('des order', distances19);
