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
createBird(21, "Osprey", "wetlands", 1);
createBird(22, "Lesser Nighthawk", "desert", 3);
createBird(23, "Anna's Hummingbird", "desert", 1);
createBird(24, "Costa's Hummingbird", "desert", 1);
createBird(25, "Greater Roadrunner", "desert", 1);
createBird(26, "Elegant Trogon", "forest", 1);
createBird(27, "Belted Kingfisher", "wetlands", 1);
createBird(28, "Red-naped Sapsucker", "forest", 1);
createBird(29, "Acorn Woodpecker", "forest", 1);
createBird(30, "Gila Woodpecker", "desert", 1);
createBird(31, "Ladder-backed Woodpecker", "desert", 1);
createBird(32, "Northern Flicker", "forest", 1);
createBird(33, "Gilded Flicker", "desert", 1);
createBird(34, "Black Phoebe", "wetlands", 2);
createBird(35, "Ash-throated Flycatcher", "desert", 1);
createBird(36, "Loggerhead Shrike", "desert", 1);
createBird(37, "Curve-billed Thrasher", "desert", 2);
createBird(38, "Western Bluebird", "forest", 2);
createBird(39, "Hermit Thrush", "forest", 1);
createBird(40, "American Robin", "forest", 2);
createBird(41, "Phainopepla", "desert", 1);
createBird(42, "Verdin", "desert", 2);
createBird(43, "Mountain Chickadee", "forest", 1);
createBird(44, "Mountain Chickadee", "forest", 1);
createBird(45, "Red-breasted Nuthatch", "forest", 1);
createBird(46, "White-breasted Nuthatch", "forest", 1);
createBird(47, "Pygmy Nuthatch", "forest", 3);
createBird(48, "Brown Creeper", "forest", 1);
createBird(49, "Rock Wren", "desert", 1);
createBird(50, "Marsh Wren", "wetlands", 1);
createBird(51, "Cactus Wren", "desert", 1);
createBird(52, "Black-tailed Gnatcatcher", "desert", 1);
createBird(53, "Golden-crowned Kinglet", "forest", 1);
createBird(54, "Ruby-crowned Kinglet", "forest", 1);
createBird(55, "Plumbeous Vireo", "forest", 1);
createBird(56, "Lucy's Warbler", "desert", 2);
createBird(57, "Common Yellowthroat", "wetlands", 2);
createBird(58, "Grace's Warbler", "forest", 2);
createBird(59, "Red-faced Warbler", "forest", 1);
createBird(60, "Painted Redstart", "forest", 1);
createBird(61, "Chipping Sparrow", "forest", 1);
createBird(62, "Black-throated Sparrow", "desert", 2);
createBird(63, "Dark-eyed Junco", "forest", 2);
createBird(64, "Song Sparrow", "wetlands", 2);
createBird(65, "Abert's Towhee", "desert", 2);
createBird(66, "Spotted Towhee", "forest", 2);
createBird(67, "Evening Grosbeak", "forest", 1);
createBird(68, "Pine Siskin", "forest", 3);
createBird(69, "Lesser Goldfinch", "forest", 2);
createBird(70, "Hepatic Tanager", "forest", 1);
createBird(71, "Western Tanager", "forest", 1);
createBird(72, "Pyrrhuloxia", "desert", 1);
createBird(73, "Black-headed Grosbeak", "forest", 1);
createBird(74, "Yellow-headed Blackbird", "wetlands", 4);
createBird(75, "Red-winged Blackbird", "wetlands", 3);

const habitatArray = ['wetlands', 'desert', 'forest']

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
const createChecklistCLI = speciesArray => {
    let checklist = [];
    for (let species of speciesArray) {
      checklist.push(abundance(species.abundanceClass) + ' ' + species.name);
    }
    return checklist.join('\n')
};

const createChecklistHTML = speciesArray => {
    let checklist = [];
    for (let species of speciesArray) {
      checklist.push(abundance(species.abundanceClass) + ' ' + species.name);
    }
    return checklist;
};

const displayChecklistCLI = () => {
  let habitat = habitatArray[getRandom(3)];
  console.log('\n~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n' + 
  `\nYou went to the ${habitat} and saw: \n \n` +
  createChecklistCLI(createChecklistSpeciesArray(habitat)) +
  '\n\n~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n'
  );
};

displayChecklistCLI();

const displayChecklistHTML = () => {
    let habitat = habitatArray[getRandom(3)]
    let checklistArray = createChecklistHTML(createChecklistSpeciesArray(habitat))
    let display = '~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ <br><br>';
    display += `You went to the ${habitat} and saw: <br> <br>`;
    display += checklistArray.join(' <br>');
    display += '<br><br> ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ <br>';
    return display;
}

let elChecklist = document.getElementById('checklist');
elChecklist.innerHTML = displayChecklistHTML(habitatArray[getRandom(3)]);
