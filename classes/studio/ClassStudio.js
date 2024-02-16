//Declare a class called CrewCandidate with a constructor that takes three parameters—name, mass, and scores. Note that scores will be an array of test results.
class CrewCandidate {
    constructor(name,mass,scores)
    {
        this.name = name;
        this.mass = mass;
        this.scores = scores;    
    }
    addScore (newScore) {
        this.scores.push(newScore);
    }
    average () {
        let avgScore = 0;
        for (let i = 0;i < this.scores.length; i++) {
            avgScore += this.scores[i];    
        }
        return Math.round((avgScore / this.scores.length) *10)/10;
    }

    status () {
        let ave = this.average();
        let result = "";
        if (ave >= 90) {
            result = "Accepted";
        } else if (ave >= 80) {
            result = "Reserve";
        } else if (ave >= 70) {
            result = "Probationary";
        } else {
            result = "Rejected";
        }
        return result;

    }

}

let bubba = new CrewCandidate("Bubba Bear",135,[88,85,90]);
let mary = new CrewCandidate("Mary Maltese",1.5,[93,88,97]);
let glad = new CrewCandidate("Glad Gator",225,[75,78,62]);



console.log(bubba);
console.log(mary);
console.log(glad);

bubba.addScore(83);
console.log(bubba.scores);
// console.log(mary.average());
// console.log(mary.status());

console.log(`${bubba.name} earned an average test sore of ${bubba.average()} and has a status of ${bubba.status()}`);
console.log(`${mary.name} earned an average test sore of ${mary.average()} and has a status of ${mary.status()}`);
console.log(`${glad.name} earned an average test sore of ${glad.average()} and has a status of ${glad.status()}`);
//Add methods for adding scores, averaging scores and determining candidate status as described in the studio activity.

tryCounter = 0;
let addingScore = 101;

while (glad.average() < 90){
    glad.addScore(addingScore);
    console.log(glad.average());
    console.log(glad.status());
    if (glad.average() > 100) {
        glad.scores.pop();
        console.log(glad.average());
        break;
    }
        

    console.log(tryCounter++);
    
}

//Part 4 - Use the methods to boost Glad Gator’s status to Reserve or higher. How many tests will it take to reach Reserve status? How many to reach Accepted? Remember, scores cannot exceed 100%.