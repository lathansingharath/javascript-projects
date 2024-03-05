//TODO: Add Your Code Below
window.addEventListener("load",function(){
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response){
        response.json().then(function(json){
            console.log(json);
            const astro = document.getElementById("bio");
            let indexLength = json.length;
            console.log(indexLength);
            
            for (let i = 0;i < indexLength;i++) {
            astro.innerHTML += `
                <div class="astronaut"> 
                    <div class="bio"
                        <h3>${json[i].firstName} ${json[i].lastName}</h3>
                         <ul>
                          <li>Hours in space:${json[i].hoursInSpace}</li>
                          <li>Active: ${json[i].active}</li>
                          <li>Skills: ${json[i].skills}</li>
                         </ul>
                    </div>
                    <img class="avatar" src=${json[i].picture}>
                </div>
               

            `
            }







        })//end of response.json block
        



    })//end of fetch blcok



})//end of the window.addEventListener block