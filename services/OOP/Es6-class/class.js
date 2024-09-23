class trip {
  #destination;
  #duration;
  #distance;
  #activities = [];
  #fixedCost = 10;

  constructor(destination, duration, distance) {
    this.destination = destination;
    this.duration = duration;
    this.distance = distance;
    this.activities = [];
  }
  addActivity(activity) {
    if (typeof activity === 'string' && activity.length > 0) {
      this.#activities.push(activity);
    } else {
      console.log('Invalid activity');
    }
  }
  printActivities() {
    console.log(`🚀 ~ activities:`, this.#activities);
  }

  #calcCost() {
    return this.#fixedCost * this.#duration * this.#distance;
  }

  get totalCost() {
    return this.#calcCost();
  }

  displayDetails() {
    return `
    Destination: ${this.#destination}
    Duration: ${this.#duration} Days 
    Distance: ${this.#distance} miles 
    Activities: ${this.#activities.length > 0 ? this.#activities.join(', ') : 'None'}
    Total Cost: $${this.totalCost.toFixed(2)}
`;
  }

  get tripInfo() {
    return `Destination: ${this.#destination} , Duration: ${this.#duration} Days , Distance: ${this.#distance} miles`;
  }

  set destination(newDestination) {
    if (typeof newDestination === 'String' || newDestination.length > 0) {
      this.#destination = newDestination;
    } else {
      console.log('invalid destination');
    }
  }

  set duration(newDuration) {
    if (newDuration > 0) {
      this.#duration = newDuration;
    } else {
      console.log('invalid duration, must to be a positive number');
    }
  }

  set distance(newDistance) {
    if (newDistance > 0) {
      this.#distance = newDistance;
    } else {
      console.log('invalid distance, must to be a positive number');
    }
  }
}

const trips = new trip('Milano', 7, 400);
console.log('🚀 ~ trips:', trips.tripInfo);

console.log('------------- Getters and setters 1.3 + 1.4 ---------------');

trips.destination = 'Las-vegas';
trips.duration = 3;
trips.distance = 500;

console.log('🚀 ~ trips information:', trips.tripInfo);
console.log('------------- Add activities 1.5----------------');

trips.addActivity('play golf');
trips.addActivity('go shopping');
trips.printActivities();

console.log('------------- total cost 1.6 ----------------');

console.log('total cost:', trips.totalCost);
console.log('------------- display details 1.7 ----------------');

console.log('🚀 ~ displayDetails():', trips.displayDetails());

console.log('----------------------------- Exercise 2--------------------------------');

class adventureTrip extends trip {
  #difficultyLevel;
  #gearList = [];

  constructor(destination, duration, distance, difficultyLevel, gearList) {
    super(destination, duration, distance);
    this.difficultyLevel = difficultyLevel;
    this.gearList = gearList;
  }

  get difficultyLevel() {
    return this.#difficultyLevel;
  }

  set difficultyLevel(newDifficultyLevel) {
    switch (newDifficultyLevel) {
      case 'easy':
        this.#difficultyLevel = newDifficultyLevel;
        break;
      case 'moderate':
        this.#difficultyLevel = newDifficultyLevel;
        break;
      case 'hard':
        this.#difficultyLevel = newDifficultyLevel;
        break;
      default:
        console.log('Invalid difficulty level');
        break;
    }
  }

  get gearList() {
    return this.#gearList;
  }

  set gearList(newGearList) {
    if (Array.isArray(newGearList)) {
      this.#gearList = newGearList;
    } else {
      console.log('invalid gear list');
    }
  }

  displayDetails() {
    return `${super.displayDetails()}
    Difficulty Level: ${this.#difficultyLevel}
    Gear List: ${this.gearList.length > 0 ? this.gearList.join(', ') : 'None'}`;
  }
}

const myTrip = new adventureTrip('Italy', 7, 400, 'easy', ['Hiking Boots', 'Backpack']);
myTrip.addActivity('Hiking');
myTrip.addActivity('Camping');
myTrip.addActivity('Swimming');
console.log('Our adventure trip:', myTrip.displayDetails());

console.log('----------------------------- ex 2.4 --------------------------------');
class culturalTrip extends trip {
  language;
  historicalSites = [];
  constructor(destination, duration, distance, language, historicalSites) {
    super(destination, duration, distance);
    this.language = language;
    this.historicalSites = historicalSites;
  }

  get language() {
    return this.language;
  }

  set language(newLanguage) {
    if (typeof newLanguage === 'string' || newLanguage.length > 0) {
      this.language = newLanguage;
    } else {
      console.log('invalid language');
    }
  }

  get historicalSites() {
    return this.historicalSites;
  }

  set historicalSites(newHistoricalSites) {
    if (Array.isArray(newHistoricalSites)) {
      this.historicalSites = newHistoricalSites;
    } else {
      console.log('invalid historical sites');
    }
  }

  displayDetails() {
    return `${super.displayDetails()}
    Language: ${this.language}
    Historical Sites: ${this.historicalSites.length > 0 ? this.historicalSites.join(', ') : 'None'}`;
  }
}

const myCulturalTrip = new culturalTrip('Italy', 7, 400, 'Italian', ['Colosseum', 'Trevi Fountain']);
myCulturalTrip.addActivity('Cultural Show');
myCulturalTrip.addActivity('Cultural Dance');
myCulturalTrip.addActivity('Cultural Art');

console.log('Our cultural trip:', myCulturalTrip.displayDetails());
