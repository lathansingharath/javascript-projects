
let launchcode = {
    organization: "nonprofit",
    executiveDirector: "Jeff",
    percentageCoolEmployees: 100,
    programsOffered: ["java","science","math"],
  
};

const launchOutput = (num) => {
    if (num % 2 === 0) {
        if (num % 3 === 0){
            if (num % 5 ===0) {
                return "LaunchCode Rocks!";
            } else {
                return "LaunchCode!";
            }
           
        } else if (num % 5 === 0) {
            return "Launch Rocks! (CRASH!!!!)";
        } else {
            return "Launch!";
        }
    }
    if (num % 3 === 0) {
        if (num % 5 === 0) {
            return "Code Rocks!";
        } else {
            return "Code!";
        }
    }
    if (num % 5 === 0) {
        return "Rocks!";
    }
     
    return "Rutabagas! That doesn't work.";
};

module.exports = {
    launchcode: launchcode,
    launchOutput: launchOutput,
}

