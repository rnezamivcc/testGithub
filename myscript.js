
 //this function is called when you click the button
function myFunction(){
    document.getElementById("demo").innerHTML = "Hello JavaScript!"; 
    //document.getElementById("but1").textContent = "Click me Again!"
    //document.title = "Generated Title";
}

let clickCount = 0; // a global variable to keeps track of how many time clicked
function titleChanging(){
    //let clickCount = 0;
    clickCount = clickCount + 1;
    document.title = "Clicked " + clickCount + " times!";
    //document.body.innerHTML = "<h1> No Body </h1>";
}

function funnyAlertFunction(){
    //pops up an alert with a funny message
    alert("The decision is Maybe and that's FINAL!!")
}