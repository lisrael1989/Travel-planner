console.log('---------------------------------- EX 1.1 -------------------------------------------');

let myName = 'israssel';

if (myName === 'israel') {
  console.log(`"Yes"-- your name is ${myName}`);
} else {
  console.log(`"NO"- its not your name the name that you put is ${myName}`);
}

console.log('---------------------------------- EX 2.1 -------------------------------------------');

let arr = [19, 5, 42, 2, 77];

function SumNumbers() {
  if (arr.length < 2) {
    console.log('Enter arr with more then 2 numbers');
  }

  let newArr = arr.sort((a, b) => a - b);
  newArr = arr[0] + arr[1];
  return newArr;
}

console.log('The answer is:', SumNumbers());

console.log('---------------------------------- EX 2.2 -------------------------------------------');

let binaryArr = [0, 0, 0, 1];

function sumOfBinaryArr() {
  let sum = 0;

  for (let i = 0; i < binaryArr.length; i++) {
    let num = binaryArr[i];

    if (num !== 0 && num !== 1) {
      console.log('incorrect nums');
      return;
    }

    sum += num * Math.pow(2, binaryArr.length - 1 - i);
  }

  return sum;
}

console.log('the sum of binary array is:', sumOfBinaryArr());

console.log('---------------------------------- EX 2.3 -------------------------------------------');

function sqrtTest(sq) {
  let root = Math.sqrt(sq);
  //   console.log(root);

  if (root % 1 !== 0) {
    return -1;
  }

  let nextRoot = Math.floor(root) + 1;
  //   console.log(nextRoot);

  return nextRoot * nextRoot;
}

console.log('next sqrt from 121:', sqrtTest(121));
console.log('next sqrt from 625:', sqrtTest(625));
console.log('Not perfect sqrt:', sqrtTest(114));

console.log('---------------------------------- EX 2.4 -------------------------------------------');

function findDiffNum(arr) {
  return arr.find((num) => arr.indexOf(num) === arr.lastIndexOf(num));
}

console.log('the different number:', findDiffNum([1, 1, 12, 1, 1]));

console.log('---------------------------------- EX 2.5 -------------------------------------------');

function sumNumbers1(num) {
  if (num <= 0) {
    console.log('Enter number that bigger then 0');
  }

  let sum = 0;
  for (let i = 1; i <= num; i++) {
    sum += i;
  }
  return sum;
}

console.log('the sum of 2:', sumNumbers1(2));
console.log('the sum of 8:', sumNumbers1(8));
console.log('the sum of 0:', sumNumbers1(0));

console.log('---------------------------------- EX 2.6 -------------------------------------------');

function centuries(year) {
  if (!Number(year)) {
    console.log(`please enter number your input is "${year}" its not a number `);
  }

  return Math.ceil(year / 100);
}

console.log('Century:', centuries(1705));
console.log('Century', centuries(1900));
console.log('Century', centuries(1601));
console.log('Century', centuries(2000));
console.log('Century', centuries('israel'));

console.log('---------------------------------- EX 2.7 -------------------------------------------');

function basicMath(operator, num1, num2) {
  switch (operator) {
    case '+':
      return num1 + num2;

    case '-':
      return num1 - num2;

    case '*':
      return num1 * num2;

    case '/':
      return num1 / num2;

    default:
      return 'Invalid operator';
  }
}

console.log('the answer is:', basicMath('+', 4, 7));
console.log('the answer is:', basicMath('-', 15, 18));
console.log('the answer is:', basicMath('*', 5, 5));
console.log('the answer is:', basicMath('/', 49, 7));

console.log('---------------------------------- EX 3.1 -------------------------------------------');

function nb_year(p0, percent, aug, p) {
  let years = 0;
  let newPercent = percent / 100;
  let population = p0;

  if (p0 < 1 || percent < 1 || aug < 1 || p < 1) {
    return 'Enter positive numbers';
  }

  while (population <= p) {
    population += Math.floor(population * newPercent + aug);
    years++;
  }
  return years;
}

console.log('Number of years to get the population "p":', nb_year(1500, 5, 100, 5000));
console.log('Number of years to get the population "p":', nb_year(1500000, 2.5, 10000, 2000000));
console.log('Number of years to get the population "p":', nb_year(2222, 20, 400, 12000));

console.log('---------------------------------- EX 3.2 -------------------------------------------');

function NumOnTheBus(busStops) {
  let peopleInsideTheBus = 0;

  for (const stopStation of busStops) {
    let [peopleIn, peopleOut] = stopStation;

    if (peopleIn < 0 || peopleOut < 0) {
      return 'Number of people cannot be negative.';
    }
    if (peopleOut > peopleInsideTheBus) {
      return `More people cannot get off the bus `;
    }

    if (typeof peopleIn !== 'number' || typeof peopleOut !== 'number') {
      return `Both values in bus stop  must be numbers.`;
    }

    peopleInsideTheBus += peopleIn;
    peopleInsideTheBus -= peopleOut;
  }
  return peopleInsideTheBus;
}

console.log(
  'People in the bus in the last station:',
  NumOnTheBus([
    [10, 0],
    [3, 2],
    [5, 8],
  ])
);
console.log(
  'People in the bus in the last station:',
  NumOnTheBus([
    [22, 0],
    [1, 23],
    [1, 7],
  ])
);

console.log('---------------------------------- EX 4.1 -------------------------------------------');

function fibonacciSum(n) {
  if (n === 0) {
    return 0;
  }
  if (n === 1) {
    return 1;
  }

  let a = 1,
    b = 1;
  console.log(a);
  console.log(b);

  let next = a + b;

  for (let i = 3; i <= n; i++) {
    console.log(next);
    a = b;
    b = next;
    next = a + b;
  }
}

fibonacciSum(12);

console.log('---------------------------------- EX 5.1 -------------------------------------------');

//option 1
// function newStr(str) {
//   let newStr = str
//     .split('')
//     .slice(1, str.length - 1)
//     .join('');

//   console.log(newStr);
// }
// newStr('israel');

//option2
function newStr(str) {
  return str.slice(1, -1);
}

console.log(newStr('israel'));

console.log('---------------------------------- EX 5.2 -------------------------------------------');

function repeat_str(num, str) {
  return str.repeat(num);
}

console.log(repeat_str(5, 'hello'));

console.log('---------------------------------- EX 5.3 -------------------------------------------');

function toCamelCase(str) {
  let words = str.split(/[-_]/);

  for (let i = 1; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].slice(1);
  }

  console.log(words);
  return words.join('');
}

console.log('OUTPUT:', toCamelCase('the-stealth-warrior'));
console.log('OUTPUT:', toCamelCase('The_Stealth_Warrior'));

console.log('---------------------------------- EX 5.4 -------------------------------------------');

function toWeirdCase(str) {
  return str
    .split(' ')
    .map((word) => {
      return word
        .split('')
        .map((char, index) => {
          return index % 2 === 0 ? char.toUpperCase() : char.toLowerCase();
        })
        .join('');
    })
    .join(' ');
}

console.log('Output:', toWeirdCase('String'));
console.log('Output:', toWeirdCase('weird string case'));

console.log('---------------------------------- EX 5.5 -------------------------------------------');

function capitalLettersName(capital) {
  let names = capital.split(' ');
  //   console.log(names);

  let firstName = names[0][0].toUpperCase();
  let lastName = names[1][0].toUpperCase();
  //   console.log(firstName);
  //   console.log(lastName);

  return `${firstName}.${lastName}`;
}

console.log(capitalLettersName('Sam Harris'));
console.log(capitalLettersName('Patrck Feeney'));

console.log('---------------------------------- EX 5.6 -------------------------------------------');

function mask(str) {
  if (str.length <= 4) {
    return str;
  }

  let masked = '#'.repeat(str.length - 4);
  //   console.log(masked);
  let fourLastNumbers = str.slice(-4);
  //   console.log(fourLastNumbers);

  return masked + fourLastNumbers;
}

console.log(mask('4556364607935616'));
console.log(mask('43425555'));
console.log(mask('1'));
console.log(mask(''));
console.log(mask('skippy'));

// output: 5616

console.log('---------------------------------- EX 5.6 -------------------------------------------');

//option 1
function shortestWords(str) {
  let words = str.split(' ');
  let shortest = Infinity;

  for (const word of words) {
    if (word.length < shortest) {
      shortest = word.length;
    }
  }
  return shortest;
}

//option 2

function shortestWords(str) {
  let words = str.split(' ');
  console.log(words);
  let length = words.map((word) => word.length);
  return Math.min(...length);
}

console.log('shortest word:', shortestWords('Find the shortest word'));

console.log('---------------------------------- EX 5.7 -------------------------------------------');

function longestWords(str) {
  let words = str.split(' ');
  console.log('words:', words);
  let length = words.map((word) => word.length);

  return Math.max(...length);
}

console.log('longest word:', longestWords('Find the shortest word'));
