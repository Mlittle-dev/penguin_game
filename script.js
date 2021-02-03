

//this script will run a function that will generate a random number and that number will repersent which div will get an id of yeti and also the click event listener 

// event listener to run the game function when the page loads 

window.addEventListener("load", newGame);

// event listener on the play again button to restart game 
document.GetElementsById("button").addEventListener("click", newGame);

// function definition of the newGame() function 
function newGame() {
	// generate a random integer 
	var randNum = Math.floor(Math.random() * 9) + 2;
	// build of collection of <div>s use the random number to select one and add the yeti ID to the element 
	document.getElementsByTagName("div")[randNum].setAttribute("id", "yeti");
	// add event listener to the div that now has an id of yeti 
	document.GetElementsById("Yeti").addEventListener("click", function() {
		window.alert("rowwrrr you found the yeti, you lose");
		document.GetElementById("sound").play();
	});
}