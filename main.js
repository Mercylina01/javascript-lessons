//returning a single heading using id

const mainHeading = document.querySelector("#main-heading");
console.log(mainHeading);

//only returns a single paragraph using id
const introParagraph = document.querySelector(".intro-paragraph");
console.log(introParagraph);

//returning all paragraphs using class
const allParagraphs = document.querySelectorAll("p");
console.log(allParagraphs);

//returning all paragraphs using class name 
const allParagraphs2 = document.getElementsByClassName("intro-paragraph");
console.log(allParagraphs2);

//manipulating the DOM
mainHeading.textContent = "Welcome to javascript in the  DOM";
mainHeading.style.color = "blue";
mainHeading.style.fontSize = "24px";

//event handling
//events are actions that occur in the browser, such as clicks, mouse movements, or keyboard input. We can use JavaScript to listen for these events and respond to them accordingly.
//examples
//click event , mouseover event, keydown event,input event, submit event, scroll event, resize event, focus event, blur event, change event, load event, unload event, error event, contextmenu event, drag and drop events, touch events, wheel event, animation events, transition events.    
const changeButton = document.querySelector("#change-paragraph");
changeButton.addEventListener("click", function() {
    introParagraph.textContent = "The paragraph has been changed!";
    introParagraph.style.color = "red";
    introParagraph.style.fontSize = "18px";
});
