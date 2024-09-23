// console.log('----------------------------Testing -------------------------------------');

// function Person(name) {
//   this.name = name;
//   this.greet = function () {
//     console.log('Hello, ' + this.name);
//   };
// }

// const person1 = new Person('Alice');
// const person2 = new Person('Bob');

// // שימוש ב-bind כדי לקבע את הערך של this
// const boundGreet = person1.greet.bind(person2);
// boundGreet(); // Hello, Bob

// // שימוש ב-call כדי לקרוא לפונקציה עם this שונה
// person1.greet.call(person2); // Hello, Bob

// // שימוש ב-apply כדי להעביר this וארגומנטים
// function introduce(age, city) {
//   console.log(this.name + ' is ' + age + ' years old from ' + city);
// }
// introduce.apply(person2, [30, 'New York']); // Bob is 30 years old from New York

console.log('----------------------------TRAVEL PLANNING APP-------------------------------------');

function TravelPlanner() {
  this.destinations = [];
  this.flights = [];
  this.accommodations = [];

  this.addDestination = function (destinations) {
    this.destinations.push(destinations);
    console.log(`${destinations} Added`);
  };

  this.addFlights = function (flight, cost) {
    this.flights.push({ flight, cost });
    console.log(`Flight ${flight} with a cost of $${cost} has been added to your flights.`);
  };
  this.addAccommodations = function (accommodation, cost) {
    this.accommodations.push({ accommodation, cost });
    console.log(`${accommodation} with a cost of $${cost} has been added to your accommodations.`);
  };

  this.getDestinationByName = function (name) {
    const destination = this.destinations.find((dest) => dest.toLowerCase() === name.toLowerCase());
    if (destination) {
      console.log(`Destination found: ${destination}`);
      return destination;
    } else {
      console.log(`Destination ${name} not found.`);
      return null;
    }
  };

  this.calculateTotalCost = function () {
    let totalFlightCost = this.flights.reduce((total, flight) => total + flight.cost, 0);
    let totalAccommodationCost = this.accommodations.reduce((total, accommodation) => total + accommodation.cost, 0);

    let totalCost = totalFlightCost + totalAccommodationCost;
    console.log(`Total trip cost: $${totalCost}`);
    return totalCost;
  };

  this.displayDetails = function () {
    console.log('Destinations: ', this.destinations);
    console.log('Flights: ', this.flights);
    console.log('Accommodations: ', this.accommodations);
  };
}

const myTrip = new TravelPlanner();

console.log('---------------------------- Add Destinations ------------------------------------');

myTrip.addDestination('Paris');
myTrip.addDestination('TLV');

console.log('---------------------------- Add Flights ------------------------------------');

myTrip.addFlights('1234', 500);
myTrip.addFlights('5558', 150);
console.log('---------------------------- Add Accommodations ------------------------------------');

myTrip.addAccommodations('Hotel', 500);
myTrip.addAccommodations('Hostel', 150);

console.log('---------------------------- Total cost-------------------------------------');
myTrip.calculateTotalCost();

console.log('---------------------------- destination list-------------------------------------');

myTrip.displayDetails();

console.log('---------------------------- Destination by name ------------------------------------');

myTrip.getDestinationByName('paris');
myTrip.getDestinationByName('tlv');
myTrip.getDestinationByName('haifa');
