	// TODO: create a handler
    let searchAction = {
        "google": "https://www.google.com/search",
        "duckDuckGo": "https://duckduckgo.com/",
        "bing": "https://www.bing.com/search",
        "ask": "https://www.ask.com/web",
    }


function setSearchEngine(event) {
    
    let pickedSearchEng = document.querySelector("input[name=engine]:checked");
    let formAction = document.getElementById ("searchForm");

    let searchUrl = "";
    let inputSearch = document.getElementById("inputSearch");
    if (inputSearch.value ==="" || pickedSearchEng === null) {
        
        window.alert("Please pick a search engine and/or search input");
        event.preventDefault();
    }

    for (prop in searchAction) {
        if (prop === pickedSearchEng.value) {
            searchUrl = searchAction[prop];
            formAction.setAttribute("action",searchUrl);
        
        }
    }
        
}

function resestButton() {
    let myGoogle = document.getElementById("myGoogle");
    myGoogle.checked =false; // testing
    let myDuck = document.getElementById("myDuck");
    myDuck.checked =false; // testing
    let myBing = document.getElementById("myBing");
    myBing.checked =false; // testing
    let myAsk = document.getElementById("myAsk");
    myAsk.checked =false; // testing

}

window.addEventListener("load", function(){
// TODO: register the handle
console.log("Window Loanding");
inputSearch.value="";

resestButton();
let form = document.getElementById("searchForm");
form.addEventListener("submit",function(event){
    
    setSearchEngine(event);
});


});