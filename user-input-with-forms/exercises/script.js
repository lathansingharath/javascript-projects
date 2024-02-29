//Code Your Solution Below
window.addEventListener("load", function() {

    let submitButton = document.getElementById("runSim");
    let form = document.getElementById("formID");
    //let inputName = document.getElementById("tName");
    let inputName = document.querySelector("input[name=testName");
    //let inputDate = document.getElementById("tDate");
    let inputDate = document.querySelector("input[name=testDate");
    

   
    form.addEventListener("submit", function(){
        
        if (inputName.value==="") {
            window.alert("Name cannot be blank");
            
        }
        if (inputDate.value ===""){
            window.alert("Date cannot be blank");
        }




    });

    
   









});