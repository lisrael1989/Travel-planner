//switch case 5/9/2024

//01

let dayOfWeek = 4;

switch (dayOfWeek) {
  case 1:
    console.log('Monday- football game');
    break;
  case 2:
    console.log('Tuesday- basketball game');
    break;
  case 3:
    console.log('Wednesday- visit the zoo');
    break;
  case 4:
    console.log('Thursday- visit the beach');
    break;
  case 5:
    console.log('Friday- go to the movies');
    break;
  case 6:
    console.log('Saturday- go to the gym');
    break;
  case 7:
    console.log('Sunday -go to party');
    break;
  default:
}

//02

let themeColor = 'light';

switch (themeColor) {
  case 'light':
    console.log('light theme');
    break;
  case 'dark':
    console.log('dark theme');
    break;
  case 'sea ':
    break;
  default:
    console.log('this color is not supporting');
}

//03

let notificationStatus = 'new';

switch (notificationStatus) {
  case 'new':
  case 'unread':
  case 'unopened':
    console.log('You have new travel notifications!');
    break;
  case 'read':
  default:
    console.log('You have no new notifications.');
}

//04

let packageRating = 'basic';

switch (packageRating) {
  case 'basic':
    console.log('basic package');

    break;
  case 'standard':
    console.log('standard package');

    break;
  case 'premium':
    console.log('premium package');

    break;
  case 'luxury':
    console.log('luxury package');

    break;

  default:
    console.log('invalid package');
}

//05

let meatPlan = 'breakfast';

switch (meatPlan) {
  case 'breakfast':
    console.log('eat breakfast');

  case 'lunch':
    console.log('eat lunch');

  case 'dinner':
    console.log('eat dinner');

  default:
    console.log('meat included');
}

//06

let satisfactionScore = 85;

switch (true) {
  case satisfactionScore >= 90:
    console.log('Highly Satisfied');
    break;
  case satisfactionScore >= 70 && satisfactionScore < 90:
    console.log('Satisfied');
    break;
  case satisfactionScore >= 50 && satisfactionScore < 70:
    console.log('Neutral');
    break;
  default:
    console.log('Dissatisfied');
    break;
}
