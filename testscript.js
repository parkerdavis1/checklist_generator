const birds = []


// "taxonomicRank" is a placeholder for now, subset of full checklist


const createBird = (taxonomicRank, name, habitat, abundanceClass) => {
  birds.push({
    taxonomicRank,
    name,
    habitat,
    abundanceClass
  })
}

/*
abundanceClass 
1: 0-5
2: 0-10
3: 0-20
4: 0-50
*/

createBird(1, "Canada Goose", "wetlands", 2);
createBird(2, "Wood Duck", "wetlands", 1);
createBird(3, "Blue-winged Teal", "wetlands", 1);
createBird(4, "American Widgeon", "wetlands", 1);
createBird(5, "Neotropic Cormorant", "wetlands", 3);
createBird(6, "Double-crested Cormorant", "wetlands", 3);
createBird(7, "Pied-billed Grebe", "wetlands", 1);
createBird(8, "Western Grebe", "wetlands", 1);
createBird(9, "American White Pelican", "wetlands", 2);
createBird(10, "Forester's Tern", "wetlands", 1);
createBird(11, "Black-necked Stilt", "wetlands", 3);
createBird(12, "American Avocet", "wetlands", 3);
createBird(13, "Killdeer", "wetlands", 2);
createBird(14, "Wilson's Snipe", "wetlands", 1);
createBird(15, "Least Bittern", "wetlands", 1);
createBird(16, "Sora", "wetlands", 1);
createBird(17, "Gambel's Quail", "desert", 2);
createBird(18, "Inca Dove", "desert", 1);
createBird(19, "White-winged Dove", "desert", 2);
createBird(20, "Mourning Dove", "desert", 3);
createBird(21, "Osprey", "wetlands", 3);
createBird(22, "Lesser Nighthawk", "desert", 3);
createBird(23, "Anna's Hummingbird", "desert", 1);
createBird(24, "Costa's Hummingbird", "desert", 1);

const getRandom = (max, min) => {
  if (min === undefined) {
    return Math.floor(Math.random() * max);
  } else {
    return Math.floor(Math.random() * (max - min) + min);
  }
}
const chooseRandomBird = array => array[getRandom(array.length)];

// How to create checklist length if all birds of any habitat are in the same array...

// If checklist length is larger than number of birds in selected habitat, it won't work...

// Grouping bird objects into habitat objects gets rid of the posibility for multiple

// Could create a habitat bird counter function

// Taxonomic order still feels a little squishy, prone to error, with this method...


// Returns number of birds in a given habitat
const birdInHabitatCount = habitat => {
  let counter = 0;
  for (let bird of birds) {
    if (bird.habitat === habitat) {
      counter++
    }
  }
  return counter;
}

// console.log(birdInHabitatCount('wetlands'));

const createChecklistSpeciesArray = (array, habitatIn) => {
    let numOfBirds = getRandom(birdInHabitatCount(habitatIn), 1);
    let checklistArray = [];
    while (checklistArray.length < numOfBirds) {
        let bird = chooseRandomBird(array);
        if (bird.habitat === habitatIn) {
          if (!checklistArray.includes(bird)) {
            checklistArray.push(bird);
          }
        }
    }
    return checklistArray;
};


//createChecklistArray needs to be refactored
const createChecklistArray = speciesArray => {
    let checklist = [];
    for (let species of speciesArray) {
      if (species.abundanceClass === 1) checklist.push(getRandom(5, 1) + ' ' + species.name);
      else if (species.abundanceClass === 2) checklist.push(getRandom(10, 1) + ' ' + species.name);
      else if (species.abundanceClass === 3) checklist.push(getRandom(20, 1) + ' ' + species.name);
      else if (species.abundanceClass === 4) checklist.push(getRandom(50, 1) + ' ' + species.name);
        // checklist.push(getRandom(10, 1) + ' ' + species);
    }
    return checklist;
};

// console.log(birds[getRandom(birds.length)]);

console.log(createChecklistArray(createChecklistSpeciesArray(birds, "wetlands")));
