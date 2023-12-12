
    let balloon = document.getElementById("balloon"); // or querySelector("#balloon")

    let size;              
//notes from class 
//using variables created above 

function setSize(newSize) {
    size = newSize;
    balloon.style.fontSize = size + "px";
}
setSize(30); //should change the size 

function handleArrows(event) {                  //e is used as an exception
    if (size > 80) {
        balloon.textContent = "💥";
        document.body.removeEventListener("keydown", handleArrows);
    } else  {
        setSize(size *1.1);
        event.preventDefault();
    } if (event.key == "ArrowDown") {
        setSize(size * 0.9);
        event.preventDefault(); //prevents scroll
    } else {
        console.log("key pressed not used");
    }
    
};      
document.body.addEventListener("keydown", handleArrows);










// default layout should be tab 1
// when click on each tab, that tab opens and the others are hidden
//prevent default action of links
//event listener to make tabs work
//add listener to each tab 


// document.getElementById("")

// Id --> tab1, etc or tab1Link ? or the div?

// (insert ID).addEventListener("mousedown", event) //this is for when tab is clicked


// switch () {
//     case () :
//         console.log();
//         break;
//     case () :
//         console.log();
//         break;
//     case () :
//         console.log();
//         break;
//     case () :
//         console.log();
//         break;
//     default:
//         console.log();
// }

"use strict" 

// let tabbedLayout = document.getElementById("#tabbed-layout");  // this is the div that starts the tab layout 
// let tabList = tabbedLayout.querySelector("ul"); // the list that hold the links for each tab
// let tabButtons = tabList.querySelectorAll("a"); //the actual links for the tabs 
// let tabPanels = tabbedLayout.querySelectorAll("#tabbed-contents > div"); // the > div means that it will add every div inside the tabbed-contents div


// //creating the tab buttons, switching to arrow functions to learn how to use them
// tabButtons.forEach((tab, index) => {

//     if (index == 0) {

//     } else {
//         tabPanels[index].setAttribute("hidden", " ");
//     } 
// });

// tabbedLayout.addEventListener("click", (e) => {       //e is the event, assuming because it state event is depricated 
//     e.preventDefault();
// });


//class notes
document.addEventListener("DOMContentLoad", function() {


//store the elements as variables 

const tab1 = document.getElementById("tab1");
const tab2 = document.getElementById("tab2");
const tab3 = document.getElementById("tab3");


const tab1Link = document.getElementById("tab1Link");
const tab2Link = document.getElementById("tab2Link");
const tab3Link = document.getElementById("tab3Link");

function hideAllContent() {
    tab1.style.display = "none";
    tab2.style.display = "none";
    tab3.style.display = "none";
}

hideAllContent ();
tab1.style.display = "block";


tab1link.addEventListener("click", function(event) {
    event.preventDefault();
    hideAllContent();
    tab1.style.display = "block";
});
tab2link.addEventListener("click", function(event) {
    event.preventDefault();
    hideAllContent();
    tab2.style.display = "block";
});
tab3link.addEventListener("click", function(event) {
    event.preventDefault();
    hideAllContent();
    tab3.style.display = "block";
});
});