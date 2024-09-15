console.log('---------------------------------- EX 6.1-------------------------------------------');

function mumbling(str) {
  //option 1 -  add space in let res and add + '-' to loop + add slice to return to remove the last '-'
  // option2 -  remove the space in let res and add "if' to  add '-' but not in the end of the str (remove the splice)

  let res = ' ';
  //   let res = '';

  for (let i = 0; i < str.length; i++) {
    res += str[i][0].toUpperCase() + str[i].repeat(i).toLowerCase() + '-';
    // if (i < str.length - 1) {
    //   res += '-';
    // }
  }

  return res.slice(1, res.length - 1);
  //   return res;
}

console.log('function Output:', mumbling('abcd'));
console.log('function Output:', mumbling('Rqaezty'));
console.log('function Output:', mumbling('cwAT'));

console.log('---------------------------------- EX 6.2-------------------------------------------');

function DuplicateLetters(str) {
  let countLetters = {};
  let count = 0;
  str = str.toLowerCase();
  let duplicates = [];

  for (let char of str) {
    countLetters[char] = (countLetters[char] || 0) + 1;
  }

  for (let key in countLetters) {
    if (countLetters[key] > 1) {
      count++;
      duplicates.push(`${key}: ${countLetters[key]} times`);
    }
  }
  console.log('Duplicate letters:', duplicates);
  return count;
}

console.log(DuplicateLetters('abcde'));
console.log(DuplicateLetters('aabbcde'));
console.log(DuplicateLetters('aabBcde'));
console.log(DuplicateLetters('indivisibility'));
console.log(DuplicateLetters('Indivisibilities'));
console.log(DuplicateLetters('aA11'));
console.log(DuplicateLetters('ABBA'));

console.log('---------------------------------- EX 6.3-------------------------------------------');

function organizeStrings(str1, str2) {
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();

  let newArr = str1 + str2;

  return [...new Set(newArr)].sort().join('');
}

console.log('OUTPUT:', organizeStrings('xyaabbcccdefww', 'xxxxyyyyabklmopq'));
