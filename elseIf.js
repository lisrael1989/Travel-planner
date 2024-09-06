//if-Else statements

//01

let travelBudget = 1000;

if (travelBudget > 1000) {
  console.log('Luxury travel option available');
} else {
  console.log('looking for budget travel');
}

//02

let destinationTemp = 32;

if (destinationTemp >= 15 && destinationTemp <= 27) {
  console.log('ideal weather for trip');
} else {
  console.log('Consider another destination or time');
}

//03

let flightBooked = true;
let hotelBooked = true;

if (flightBooked) {
  if (hotelBooked) {
    console.log('your travel plan is set');
  } else {
    console.log('you need to book a hotel ');
  }
} else {
  console.log('you need to book a flight');
}

//04

let chosenPackagePrice = 1000;
let alternativePackagePrice = 700;

if (chosenPackagePrice > alternativePackagePrice) {
  console.log('consider switching for a better price');
} else {
  console.log("you've chosen the best priced package");
}

//05
let travelAge = 16;

if (travelAge >= 65) {
  console.log('Eligible for senior citizen discount');
} else if (travelAge <= 18) {
  console.log('Eligible for student discount');
} else {
  console.log('Regular pricing applies');
}

//06
let satisFactionScore = 80;

if (satisFactionScore >= 80) {
  console.log('Highly satisfied traveler');
} else {
  console.log('Needs improvement');
}

//07

let groupSize = 10;

if (groupSize % 2 === 0) {
  console.log('Even number of people in group');
} else {
  console.log('Odd number of people in group');
}

//08

let travelerAge = 20;

if (travelerAge < 12) {
  console.log('child');
} else if (travelerAge >= 13 && travelerAge <= 19) {
  console.log('teenager');
} else {
  console.log('adult');
}

//09

let experienceLevel = 5;

if (experienceLevel > 5 ? console.log('experienced traveler') : console.log('new traveler'));

//10

let tripDuration = 1;

if (tripDuration <= 2) {
  console.log('short trip');
} else if (tripDuration >= 3 && tripDuration <= 14) {
  console.log('standard trip');
} else {
  console.log('extended trip');
}

//11

let travelerAge1 = 25;
let activityAge = 18;

if (
  travelerAge1 >= activityAge
    ? console.log(`traveler age of ${travelerAge1} , can attend`)
    : console.log(`traveler age of ${travelerAge1} , cannot attend`)
);

//12

let daysOfTravel = 'monday';

if (daysOfTravel === 'saturday' || daysOfTravel === 'sunday') {
  console.log('Special weekend offer available');
} else {
  console.log('Regular offer available');
}

//13

let destinationOpeningYear = 2024;

if (destinationOpeningYear >= 2001 && destinationOpeningYear <= 2100) {
  console.log('21st century');
} else {
  console.log('20th century');
}

//14

let destinationType = 'adventure';
let destinationRating = 6;

if (destinationType === 'adventure' && destinationRating >= 8) {
  console.log('must visit');
} else {
  console.log('not recommended');
}

//15

let packagePrice = 700;

if (packagePrice <= 1000) {
  console.log('Discounted price');
} else {
  console.log('Regular price');
}

//16

let travelerAge2 = 16;
let isAdultActivity = false;

if (travelerAge2 > 18 || isAdultActivity) {
  console.log('allowed to participant');
} else {
  console.log('not allowed to participant');
}

//17
let destinationName = 'israel top destination';

if (destinationName.includes('famous') || destinationName.includes('top destination')) {
  console.log('this destination is hot-spot');
} else {
  console.log('this destination is not hot-spot');
}
