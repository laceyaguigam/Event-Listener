
//     let balloon = document.getElementById("balloon"); // or querySelector("#balloon")

//     let size;              
// //notes from class 
// //using variables created above 

// function setSize(newSize) {
//     size = newSize;
//     balloon.style.fontSize = size + "px";
// }
// setSize(30); //should change the size 

// function handleArrows(event) {                  //e is used as an exception
//     if (size > 80) {
//         balloon.textContent = "💥";
//         document.body.removeEventListener("keydown", handleArrows);
//     } else  {
//         setSize(size *1.1);
//         event.preventDefault();
//     } if (event.key == "ArrowDown") {
//         setSize(size * 0.9);
//         event.preventDefault(); //prevents scroll
//     } else {
//         console.log("key pressed not used");
//     }
    
// };      
// document.body.addEventListener("keydown", handleArrows);











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
    };

    hideAllContent ();
    tab1.style.display = "block";


    tab1Link.addEventListener("click", function(event) {
        event.preventDefault();
        hideAllContent();
        tab1.style.display = "block";
    });

    tab2Link.addEventListener("click", function(event)  {
        event.preventDefault();
        hideAllContent();
        tab2.style.display = "block";
    });

    tab3Link.addEventListener("click", function(event)  {
        event.preventDefault();
        hideAllContent();
        tab3.style.display = "block";
    });
