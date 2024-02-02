// Code your selectRandomEntry function here:
function selectRandomEntry (arr) {
  let index = Math.floor(Math.random() * arr.length);
  return index;
}

let idNumbers = [291, 414, 503, 599, 796, 890];

let selectedEntry = [];//holds the crew that will go to space
let tempIndex;
while ( selectedEntry.length < 3 ) {
  tempIndex = selectRandomEntry(idNumbers);
  if (selectedEntry.includes(idNumbers[tempIndex])) {
    tempIndex = selectRandomEntry(idNumbers);
  } else {
    selectedEntry.push(idNumbers[tempIndex]);
  }
 
}

//console.log("The IDs in the selectedEntry array: ",selectedEntry); //test for debugging
// Code your buildCrewArray function here:
function buildCrewArray (selectedArr,animalArr) {
  let crewArr = [];
  for (let i = 0;i < selectedArr.length; i++) {
    let j = 0;
    while (selectedArr[i] != animalArr[j].astronautID){
      j++;
    }
    crewArr.push(animalArr[j].name);

  }
  return crewArr;
}
//console.log("Here is the crew ",buildCrewArray(selectedEntry,animals)); //testig for debuging
//console.log(candidateA); //test for debugging

// Here are the candidates and the 'animals' array:
let candidateA = {
  'name':'Gordon Shumway',
  'species':'alf',
  'mass':90,
  'o2Used':function(hrs){return 0.035*hrs},
  'astronautID':414
};
let candidateB = {
  'name':'Lassie',
  'species':'dog',
  'mass':19.1,
  'o2Used':function(hrs){return 0.030*hrs},
  'astronautID':503
};
let candidateC = {
  'name':'Jonsey',
  'species':'cat',
  'mass':3.6,
  'o2Used':function(hrs){return 0.022*hrs},
  'astronautID':796
};
let candidateD = {
  'name':'Paddington',
  'species':'bear',
  'mass':31.8,
  'o2Used':function(hrs){return 0.047*hrs},
  'astronautID':291
};
let candidateE = {
  'name':'Pete',
  'species':'tortoise',
  'mass':417,
  'o2Used':function(hrs){return 0.010*hrs},
  'astronautID':599
};
let candidateF = {
  'name':'Hugs',
  'species':'ball python',
  'mass':2.3,
  'o2Used':function(hrs){return 0.018*hrs},
  'astronautID':890
};

let animals = [candidateA,candidateB,candidateC,candidateD,candidateE,candidateF];

crew = buildCrewArray(selectedEntry,animals);

//console.log("Here is the crew ",crew); //testig for debuging
// Code your template literal and console.log statements:
//'____, ____, and ____ are going to space!'
console.log(`${crew[0]}, ${crew[1]}, ${crew[2]} are going to space!`);

