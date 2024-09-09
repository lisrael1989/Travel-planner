// 1. Sum of All Activities' Durations
const activityDurations1 = [2, 3, 1];

let sum = 0;
for (let i = 0; i < activityDurations1.length; i++) {
  sum += activityDurations1[i];
}
console.log('TOTAL:', sum);

// 2. Activity with the Longest Duration
const activityDurations2 = [2, 3, 1];
let max = activityDurations2[0];

for (let i = 0; i < activityDurations2.length; i++) {
  if (activityDurations2[i] > max) {
    max = activityDurations2[i];
  }
}
console.log('MAX:', max);

// 3. Most Frequent Activity
const activityNames3 = ['Sightseeing', 'Hiking', 'Sightseeing'];
const count = {};
let mostFrequent = '';
let maxCount = 0;

for (let activity of activityNames3) {
  if (count[activity]) {
    count[activity]++;
  } else {
    count[activity] = 1;
  }

  if (count[activity] > maxCount) {
    maxCount = count[activity];
    mostFrequent = activity;
  }
}

console.log('Most Frequent Activity:', mostFrequent);

// 4. Shortest Activity Duration
const activityDurations4 = [2, 3, 1];
let min = activityDurations4[0];

for (let num of activityDurations4) {
  if (num < min) {
    min = num;
  }
}
console.log('MIN:', min);

// 5. Count Travel Segments by Transportation Type
const transportationTypes5 = ['Car', 'Train', 'Car', 'Flight'];

const countType = [];

for (let type of transportationTypes5) {
  if (countType[type]) {
    countType[type]++;
  } else {
    countType[type] = 1;
  }
}

console.log(countType);

// 6. Average Travel Expense
const travelExpenses6 = [50, 100, 75, 125, 200];

let num = 0;

for (let i = 0; i < travelExpenses6.length; i++) {
  num += travelExpenses6[i];
  sum = num / travelExpenses6.length;
}
console.log('AVERAGE:', sum);

// 7. Highest Single Travel Expense
const travelExpenses7 = [50, 100, 75, 125, 200];

let maxExpense = travelExpenses7[0];

for (let expense of travelExpenses7) {
  if (expense > maxExpense) {
    maxExpense = expense;
  }
}
console.log('HIGHEST EXPENSE:', maxExpense);

// 8. Expenses Under Budget
const travelExpenses8 = [50, 100, 75, 125, 200];

let Budget = {};

let inTheBudget = 0;
for (const key of travelExpenses8) {
  if (key < 150) {
    Budget[key] = true;
    inTheBudget++;
  } else {
    Budget[key] = false;
  }
}

console.log('BUDGET:', Budget);
console.log('IN THE BUDGET:', inTheBudget);

// 9. Calculate Total Expenses for Each Category
const categoryExpenses9 = [
  [100, 200],
  [150, 175],
  [120, 250],
];

for (const row of categoryExpenses9) {
  let sum = 0;

  for (const num of row) {
    sum += num;
  }
  console.log(` ${row} summed to ${sum}`);
}

// 10. Shortest Route in Each Travel Plan
const routeDistances10 = [
  [120, 300],
  [150, 175],
  [100, 250],
];

for (const row of routeDistances10) {
  let shortest = row[0];

  for (const num of row) {
    if (num < shortest) {
      shortest = num;
    }
  }
  console.log(` ${row} the shortest number: ${shortest}`);
}

// 11. Average Duration per Activity Type
const activityDurationsMatrix11 = [
  [2, 3],
  [1, 4],
  [3, 2],
];

for (const row of activityDurationsMatrix11) {
  let sum = 0;
  for (const num of row) {
    sum += num;
  }
  avg = sum / row.length;
  console.log(`${row}, the avg is ${avg}`);
}

// 12. Find the Destination with the Highest Rating in Each Category
const destinationRatingMatrix12 = [
  [4.5, 4.7],
  [4.8, 4.6],
  [4.9, 5.0],
];

for (const row of destinationRatingMatrix12) {
  let bigRating = row[0];

  for (const rating of row) {
    if (rating > bigRating) {
      bigRating = rating;
    }
  }
  console.log('bigRating', bigRating);
}

// 13. Count Highly Recommended Destinations in Each Region
const regionRecommendationMatrix13 = [
  [5, 7],
  [8, 6],
  [9, 7],
];

let goodRating = 7;
let HighlyRecommended = 0;

for (const row of regionRecommendationMatrix13) {
  for (const Recommended of row) {
    if (Recommended >= goodRating) {
      HighlyRecommended++;
    }
  }
}

console.log(`we have a ${HighlyRecommended} places that recommended`);

// 14. Sum of Ratings for Must-Visit Destinations by Region
const mustVisitRatingMatrix14 = [
  [4.5, 4.7],
  [4.9, 5.0],
  [4.8, 4.9],
];

let goodRate = 4.8;
let totalSum = 0;
for (const row of mustVisitRatingMatrix14) {
  let total = 0;
  for (const num of row) {
    if (num > goodRate) {
      total += num;
      totalSum += num;
    }
  }
  console.log(`The total sum of the rates that greater than 4.8 is: ${total}`);
}
console.log('Total sum:', totalSum);
