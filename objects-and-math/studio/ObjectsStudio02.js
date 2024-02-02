// Code your orbitCircumference function here:

let radius = 2000;
let orbSpeed = 28000;
function orbitCircumference (radius) {
  let circumference = Math.round(2*Math.PI*radius);
  return circumference;
}

// Code your missionDuration function here:
function missionDuration(completedOrbits,orbitRadius,orbitalSpeed) {
  let missionDistance = completedOrbits * orbitCircumference(orbitRadius);
  let missionTime = Math.round(((missionDistance / orbitalSpeed)) *100) / 100;  
  //console.log(`The mission will travel ${missionDistance} km around the planet, and it will take ${missionTime} hours to complete`);
  
  return missionTime;
}

//missionDuration(5,radius,orbSpeed);
// Copy/paste your selectRandomEntry function here:
function selectRandomEntry (arr) {
  let index = Math.floor(Math.random() * arr.length);
  return index;
}

// Code your oxygenExpended function here:
function oxygenExpended(candidate) {
  let spacewalHours = missionDuration(3,radius,orbSpeed);
  let oxyComsume = candidate.o2Used(spacewalHours);
  oxyComsume = (Math.round(oxyComsume * 1000)) / 1000;

  return (`${candidate.name} will perform the spacewalk, which will last ${spacewalHours} and require ${ oxyComsume} of oxygen`);
}

// Candidate data & crew array.
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
 
 let crew = [candidateA,candidateC,candidateE];
 console.log(oxygenExpended(crew[selectRandomEntry(crew)])); //calling the function with a random candidate from the crew array
 
 