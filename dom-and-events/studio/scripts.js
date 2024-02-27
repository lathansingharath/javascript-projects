// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener("load",function(){
    console.log("Window has loaded");

    let takeOffbutton = document.getElementById("takeoff")
    let shuttleBackColor = document.getElementById("shuttleBackground");
    let shuttleHeight = document.getElementById("spaceShuttleHeight");
    shuttleBackColor.style.position = "absolute";

    takeOffbutton.addEventListener("click",function(event){
        let confirmTakeOff = window.confirm("Confirm that the shuttle is ready for takeoff");
        
        if (confirmTakeOff) {
            document.getElementById("flightStatus").innerHTML = "Shuttle in flight";
            shuttleBackColor.style.backgroundColor = "blue";
            let numHeight = Number(shuttleHeight.innerHTML);
            numHeight += 10000;
            shuttleHeight.innerHTML = numHeight;

        }
    });

    let landButton = document.getElementById("landing");
    landButton.addEventListener("click",function(event){
        window.alert("The shuttle is landing. Landing gear engaged.");
        document.getElementById("flightStatus").innerHTML = "Shuttle has landed.";
        shuttleBackColor.style.backgroundColor = "green";
        shuttleHeight.innerHTML = 0;
    });

    let abortButton = document.getElementById("missionAbort");
    abortButton.addEventListener("click",function(event){
        let confirmAbort = window.confirm("Confirm that you want to abort the mission");
        if (confirmAbort) {
            document.getElementById("flightStatus").innerHTML = "Mission aborted.";
            shuttleBackColor.style.backgroundColor = "green";
            shuttleHeight.innerHTML = 0;

        }   

    });
    let rocketPos = document.getElementById("rocket");
    let leftButton = document.getElementById("left");
    leftButton.addEventListener("click",function(event){
        //shuttleImg.

        console.log("turn left");
        rocketPos.style.left = parseInt("20px");
        //rocketPos.style.position.left = 20+"px";

    });
    


});
