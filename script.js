//maybe change to object oriented?
const desertBirdsArray = [
  "Curve-billed Thrasher",
  "Verdin",
  "Black-tailed Gnatcatcher",
  "Cactus Wren",
  "Abert's Towhee",
  "House Finch",
  "Mourning Dove",
  "White-winged Dove",
  "Gila Woodpecker"
];
const forestBirdsArray = [
  "Dark-eyed Junco",
  "Steller's Jay",
  "Northern Flicker",
  "Mountain Chickadee",
  "Western Bluebird",
  "Pygmy Nuthatch",
  "White-breasted Nuthatch",
  "Red-breasted Nuthatch",
  "Yellow-rumped Warbler",
  "Ruby-crowned Kinglet"
];
const wetlandsBirdsArray = [
  "Mallard",
  "Green-winged Teal",
  "Black-necked Stilt",
  "American Avocet",
  "Neotropic Cormorant",
  "Double-crested Cormorant",
  "American Widgeon",
  "Canada Goose",
  "Belted Kingfisher",
  "Black-capped Night-heron"
];
//const habitatArray = [desertBirdsArray, forestBirdsArray, wetlandsBirdsArray];

const randomNumberOfSpecies = arr => Math.floor(Math.random() * arr.length);

const chooseRandomBird = arr => arr[Math.floor(Math.random() * arr.length)];

let randomNumberOfEachSpecies = max => Math.floor(Math.random() * max);

const createChecklistSpeciesArray = arr => {
    let numOfBirds = randomNumberOfSpecies(arr);
    let checklistArray = [];
    while (checklistArray.length < numOfBirds) {
        let bird = chooseRandomBird(arr);
        if (!checklistArray.includes(bird)) {
            checklistArray.push(bird);
        }
    }
    return checklistArray;
};

const createChecklistArray = speciesArray => {
    let checklist = [];
    for (let species of speciesArray) {
        checklist.push(randomNumberOfEachSpecies(50) + ' ' + species);
    }
    return checklist;
};


console.log(createChecklistArray(createChecklistSpeciesArray(desertBirdsArray)));