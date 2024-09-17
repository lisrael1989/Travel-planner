console.log('---------------------------- EX 1 objects-advanced-------------------------------------');

const TravelPlanner = {
  locations: [{ name: 'paris', description: 'city of light', bestTimeToVisit: 'spring', localCuisine: 'france' }],
};

console.log(TravelPlanner);

console.log('---------------------------- EX 2 objects-advanced-------------------------------------');

function addLocation(locationArray, name, description, bestTimeToVisit, localCuisine) {
  let locationExists = false;
  locationArray.forEach((location) => {
    if (location.name === name) {
      console.log(`Error: The location that you try to add ${name} already exists`);
      locationExists = true;
      return;
    }
  });
  if (locationExists) return;

  const newLocation = {
    name: name,
    description: description,
    bestTimeToVisit: bestTimeToVisit,
    localCuisine: localCuisine,
  };
  locationArray.push(newLocation);
}

addLocation(TravelPlanner.locations, 'paris', 'city of light', 'spring', 'france');
console.log(TravelPlanner.locations);
