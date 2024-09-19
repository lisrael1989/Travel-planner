console.log('---------------------------- EX 1 Recursion-------------------------------------');

function recursion1(arr) {
  return arr.length === 0 ? 0 : arr[0] + recursion1(arr.slice(1));
}

console.log('🚀 sum of total trip days:', recursion1([3, 5, 7, 2]));

console.log('---------------------------- EX 2 Recursion-------------------------------------');

function countRecursion(arr) {
  if (arr.length === 0) {
    return 0;
  } else {
    return arr[0].length + countRecursion(arr.slice(1));
  }
}

console.log('🚀 count cities visited:', countRecursion([['Paris', 'London'], ['Rome', 'Florence'], ['New York']]));

console.log('---------------------------- EX 3 Recursion-------------------------------------');

function findCities(obj, name) {
  name = name.toLowerCase();

  for (const value of Object.values(obj)) {
    console.log('🚀 ~  value:', value);
    if (typeof value === 'object') {
      if (findCities(value, name)) {
        return true;
      }
    }
    if (typeof value === 'string' && value.toLowerCase() === name) {
      return true;
    }
  }
  return false;
}

console.log(
  '🚀 ~ findCities(arr, name) :',
  findCities({ Europe: { France: 'Paris', Italy: 'Rome' }, USA: { NY: 'New York' } }, 'new york')
);

console.log('---------------------------- EX 4 Recursion-------------------------------------');
// function sumArr(arr, sum, index) {
//   if (arr.length === 0) {
//     return sum / index;
//   }
//   const firstEl = arr.shift();
//   sum += firstEl;
//   index += 1;
//   return sumArr(arr, sum, index);
// }
// console.log(sumArr([200, 150, 400, 100], 0, 0));

/*
1: arr [1,2,3]
  sum = 0
  idx = 0
2: arr [2,3]
  sum = 1
  idx = 1
3: arr [3]
  sum = 3
  idx = 2
4 arr []
  sum = 6
  idx = 3

*/

function avgDistance(arr) {
  function sumArr(arr) {
    if (arr.length === 0) {
      return 0;
    }

    if (arr.length === 1) {
      return arr[0];
    }
    return arr[0] + sumArr(arr.slice(1));
  }

  if (arr.length === 0) {
    return 0;
  }
  return sumArr(arr) / arr.length;
}

console.log('🚀 ~  avgDistance(arr):', avgDistance([200, 150, 400, 100]));

console.log('---------------------------- EX 5 Recursion-------------------------------------');

function sumTripCosts(tripCosts) {
  if (typeof tripCosts === 'number') {
    return tripCosts;
  }
  return tripCosts.reduce((total, cost) => total + sumTripCosts(cost), 0);
}

console.log('🚀 ~  sumTripCosts(arr):', sumTripCosts([[100, 200], [150, 300], [50]]));

console.log('---------------------------- EX 6 Recursion-------------------------------------');

// function sumArr(arr, sum, index) {
//   if (arr.length === 0) {
//     return sum / index;
//   }
//   const firstEl = arr.shift();
//   sum += firstEl;
//   index += 1;
//   return sumArr(arr, sum, index);
// }
// console.log(sumArr([200, 150, 400, 100], 0, 0));

function bigNums(arr, big, index) {
  if (arr.length === 0) {
    return big;
  }
  const bigNum = arr.shift();
  if (bigNum > big) {
    big = bigNum;
  }
  index++;
  return bigNums(arr, big, index);
}

console.log('the biggest number is:', bigNums([10, 20, 15, 25], 0, 0));
