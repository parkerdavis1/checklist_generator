const birds = [];

// "taxonomicRank" is a placeholder for now, subset of full checklist

const createBird = (taxonomicRank, name, habitat, abundanceClass) => {
  birds.push({
    taxonomicRank,
    name,
    habitat,
    abundanceClass
  })
};

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
};

// Returns number of birds in a given habitat
const birdInHabitatCount = habitat => {
  let counter = 0;
  for (let bird of birds) {
    if (bird.habitat === habitat) {
      counter++
    }
  }
  return counter;
};

const createChecklistSpeciesArray = habitat => {
    let numOfBirds = getRandom(birdInHabitatCount(habitat), 1);
    let checklistArray = [];
    while (checklistArray.length < numOfBirds) {
        let bird = birds[getRandom(birds.length)];
        if (bird.habitat === habitat) {
          if (!checklistArray.includes(bird)) {
            checklistArray.push(bird);
          }
        }
    }
    checklistArray.sort((a, b) => a.taxonomicRank - b.taxonomicRank)  //this line adds taxonomic ordering, option for alphabetical order could be added later
    return checklistArray;
};

// console.log(createChecklistSpeciesArray("wetlands"));

const abundance = aClass => {
      if (aClass === 1) return getRandom(5, 1);
      else if (aClass === 2) return getRandom(10, 1);
      else if (aClass === 3) return getRandom(20, 1);
      else if (aClass === 4) return getRandom(50, 1);
};

//createChecklistArray needs to be refactored
const createChecklist = speciesArray => {
    let checklist = [];
    for (let species of speciesArray) {
      checklist.push(abundance(species.abundanceClass) + ' ' + species.name);
    }
    return checklist.join('\n')
};

const habitatArray = ['wetlands', 'desert', 'forest']

const displayChecklist = () => {
  let habitat = habitatArray[getRandom(2)];
  console.log('\n~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n' + 
  `\nYou went to the ${habitat} and saw: \n \n` +
  createChecklist(createChecklistSpeciesArray(habitat)) +
  '\n\n~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n'
  );
};

displayChecklist();
// console.log(createChecklist(createChecklistSpeciesArray('desert')));