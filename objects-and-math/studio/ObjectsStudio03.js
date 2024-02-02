// Code your crewMass function here:
function crewMass (totCrewArr) {
  let totMass =0;
  for (let i = 0;i < totCrewArr.length; i++) {
    totMass += totCrewArr[i].mass;
   // console.log("inside function ",totMass); //testing for debug
  }
  //console.log(totMass); //testing for debugging
  return Math.round(totMass*10)/10;
}

// Code your fuelRequired function here:
let shuttleMass = 75000;
function fuelRequired (crewArr, crewMassFunc) {
  let totCrewAndShuttleMass = shuttleMass + crewMassFunc(crewArr);
  let totRequiredFuel = totCrewAndShuttleMass * 9.5;

  for (let i = 0; i < crewArr.length; i ++) {
    if (crewArr[i].species === "dog" || crewArr[i].species === "cat") {
      totRequiredFuel += 200;
    } else {
      totRequiredFuel += 100;
    }
  }
  return Math.ceil(totRequiredFuel);
}

// The pre-selected crew is in the array at the end of this file.
// Feel free to add, remove, or switch crew members as you see fit.

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
 
 let crew = [candidateB,candidateD,candidateF];
 console.log(`The mission has a luanch mass of ${crewMass(crew)+shuttleMass} kg and requires ${fuelRequired(crew,crewMass)} kg of fuel`);



 