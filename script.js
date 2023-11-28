// 1. Create a page that displays a balloon (using the balloon emoji, 🎈). When you press
// the up arrow, it should inflate (grow) 10 percent, and when you press the down arrow,
// it should deflate (shrink) 10 percent. You can control the size of text (emoji are
// text) by setting the font-size CSS property (style.fontSize) on its parent element.
// Remember to include a unit in the value—for example, pixels (10px). The key names of
// the arrow keys are "ArrowUp" and "ArrowDown". Make sure the keys change only the
// balloon, without scrolling the page.


    // this is be using the key events on page 251 
    // the word "ArrowUp" is for up button and "ArrowDown" down button 
    // the id used is "balloon"
    // up key --> grow 10% 
    //down key --> shrink 10%
    // use css to change the text (balloon) size
    // the event object would "balloon"


    let balloon = document.getElementById("balloon");

    let size = ;                //need a variable for the size of the balloon 

    function balloonSize(newSize) {  //need a function to create the fluctuation of sizes
        size = newSize;
        ballon.style.fontSize = size + "px"; //changes the font? and has to add the px for the unit?
    }

    function balloonGrowth(event) {
        if ()      //size 
    } else (event.key === "ArrowUp") { // arrow up
           balloon.fontSize

} else if (event.key === "ArrowDown") {   // arrow down
      

}
               


// When that works, add a feature where, if you blow up the balloon past a certain size,
// it explodes. In this case, exploding means that it is replaced with a 💥 emoji, and
// the event handler is removed (so that you can’t inflate or deflate the explosion).
// Hint: keeping track of the size in percentage might be easier.
// Hint: Make sure you quote the emoji characters. They are strings, after all.
// Hint: document.getElementById("balloon") will get the balloon element on the page.







// 2. The index.html page has a tabbed layout. Make the default state of the layout show
// the first tab, and make it so that when you click the links at the top the correct
// tab's contents are displayed and the others are hidden. Prevent the default action of
// the links and set up an event listener with the logic necessary to make the tabs
// function as expected. There are many ways to accomplish this task, but you will need
// to at minimum add listeners to each link and toggle the display of the tab contents.
// Hint: display: none; hides an element, and display: block; will bring it



// default layout should be tab 1
// when click on each tab, that tab opens and the others are hidden
//prevent default action of links
//event listener to make tabs work
//add listener to each tab 


document.getElementById("")

// Id --> tab1, etc or tab1Link ? or the div?

(insert ID).addEventListener("mousedown", event) //this is for when tab is clicked


function 




switch () {
    case () :
        console.log();
        break;
    case () :
        console.log();
        break;
    case () :
        console.log();
        break;
    case () :
        console.log();
        break;
    default:
        console.log();
}