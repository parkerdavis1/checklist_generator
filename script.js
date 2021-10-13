const birdlists = {
  desert: [
    "Curve-billed Thrasher",
    "Verdin",
    "Black-tailed Gnatcatcher",
    "Cactus Wren",
    "Abert's Towhee",
    "House Finch",
    "Mourning Dove",
    "White-winged Dove",
    "Gila Woodpecker",
    "Anna's Hummingbird",
    "Gambel's Quail",
    "Inca Dove",
    "Lesser Goldfinch",
    "Costa's Hummingbird",
    "Rock Wren",
    "Greater Roadrunner",
    "Common Raven"
  ],
  forest: [
    "Dark-eyed Junco",
    "Steller's Jay",
    "Northern Flicker",
    "Mountain Chickadee",
    "Western Bluebird",
    "Pygmy Nuthatch",
    "White-breasted Nuthatch",
    "Red-breasted Nuthatch",
    "Yellow-rumped Warbler",
    "Ruby-crowned Kinglet",
    "Red-faced Warbler",
    "Lesser Goldfinch",
    "Pine Siskin",
    "American Robin",
    "Acorn Woodpecker",
    "Townsend's Solitaire",
    "Brown Creeper"
  ],
  wetlands: [
    "Mallard",
    "Green-winged Teal",
    "Black-necked Stilt",
    "American Avocet",
    "Neotropic Cormorant",
    "Double-crested Cormorant",
    "American Widgeon",
    "Canada Goose",
    "Belted Kingfisher",
    "Black-crowned Night-heron",
    "Ring-necked Duck",
    "Ruddy Duck",
    "Yellow-headed Blackbird",
    "Common Loon",
    "Clark's Grebe",
    "American White Pelican",
    "Killdeer",
    "Least Sandpiper",
    "Wilson's Snipe",
    "Great Blue Heron", 
    "Great Egret",
    "Least Bittern"
  ]
}

const getRandom = (max, min) => {
  if (min === undefined) {
    return Math.floor(Math.random() * max);
  } else {
    return Math.floor(Math.random() * (max - min) + min);
  }
}

const chooseRandomBird = array => array[getRandom(array.length)];

const createChecklistSpeciesArray = array => {
    let numOfBirds = getRandom(array.length, 1);
    let checklistArray = [];
    while (checklistArray.length < numOfBirds) {
        let bird = chooseRandomBird(array);
        if (!checklistArray.includes(bird)) {
            checklistArray.push(bird);
        }
    }
    return checklistArray;
};

const createChecklistArray = speciesArray => {
    let checklist = [];
    for (let species of speciesArray) {
        checklist.push(getRandom(10, 1) + ' ' + species);
    }
    return checklist;
};

const displayChecklist = habitat => {
  console.log(`\n~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\nYou went to the ${habitat} and saw: \n`);
  let listDisplay = createChecklistArray(createChecklistSpeciesArray(birdlists[habitat]));
  console.log(listDisplay.join('\n'));
  console.log('\n~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n')
  //console.log(createChecklistArray(createChecklistSpeciesArray(birdlists[habitat])));
}

displayChecklist('desert');

//add functionality to randomly select a habitat