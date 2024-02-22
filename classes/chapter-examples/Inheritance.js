class Felidae {
	constructor() {
		this.claws = "retractable";
	}
}

class Panthera extends Felidae {
	constructor() {
    super();
		this.roar = "loud";
		this.testFunc = function() {
			return "hello";
		}
	}
	// testFunc() {
	// 	return "hello";
		
	// }

}

class Tiger extends Panthera {
	constructor() {
    super();
		this.hasStripes = "true";
	}
	// testFunc () {
	// 	return "hello";
	// }
	
}

let tigger = new Tiger();
let panther = new Panthera();

//console.log(panther);
console.log(tigger);