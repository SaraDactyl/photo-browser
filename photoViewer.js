// Global variables
var photosArrayGlobal;  // the array of photos to be displayed
var photoIndexGlobal;   // the index into photosArrayGlobal of the current image being displayed


//Receives the string representing the file path for the photo to be displayed & updates the <img> source to that path
function displayPhoto(photo) {
	document.getElementById('mainImage').src = photo;
}

//function for changing the text displayed under the photo
function displayText(text) {
	document.getElementById('imageLabel').innerHTML = text;
}
	
//displayPhoto("images/leaf2.jpg");
//debugging

// This function creates the file names for all photos specified by the user, using
// the current values for "folder", "base file name" and "number of photos".
// Stores these file names in the global array.
function onLoadPhotosButtonClick() {
    //alert('onLoadPhotosButtonClick function says hello'); debugging
    
    var folderName = document.getElementById('folderName').value; //because I'm really sick of writing 'document.getElementById'
    var baseName = document.getElementById('baseName').value;
    var numPhotos = document.getElementById('numPhotos').value;

	//checks that the user entered a valid number of photos.
	if (document.getElementById('numPhotos').value <= 0) {
		alert('Invalid number.') //if number is less than zero, alerts the user.
	} else {
		photosArrayGlobal = []; //sets photo global variable to an empty array
		for(var i = 0; i < numPhotos; i++) {
			photosArrayGlobal.push(folderName + '/' + baseName + i + '.jpg') //adds appropriate image strings to array
		}
		console.log(photosArrayGlobal); //debugging
	}
	//Initialize photoIndexGlobal to 0(the first array entry)
	photoIndexGlobal = photosArrayGlobal[0];
	console.log(photoIndexGlobal); //debugging
	
	//calls displayPhoto to show the first photo in the array
	displayPhoto(folderName + '/' + baseName + '0.jpg');
	
	//displays file name of current image being displayed
	displayText(photoIndexGlobal);
}

//displays next photo in photosArrayGlobal
function onNextButtonClick() {
	var i = photosArrayGlobal.indexOf(photoIndexGlobal) + 1; //set i to the index of photoIndexGlobal

	if(i < photosArrayGlobal.length) {
		photoIndexGlobal = photosArrayGlobal[i];
	} else {
		photoIndexGlobal = photosArrayGlobal[0];
	}

	console.log(photoIndexGlobal);
	displayPhoto(photoIndexGlobal);
	displayText(photoIndexGlobal);
}


function onPreviousButtonClick() {
	var i = photosArrayGlobal.indexOf(photoIndexGlobal) - 1;
	var l = photosArrayGlobal.length - 1;
	
	if(i >= 0) {
		photoIndexGlobal = photosArrayGlobal[i];
	} else {
		photoIndexGlobal = photosArrayGlobal[l];
	}

	console.log(photoIndexGlobal);
	displayPhoto(photoIndexGlobal);
	displayText(photoIndexGlobal);
}
	

// This initialization function is only used to set up some of the click handling functionality
function init() {
    // When the user clicks the loadPhotosButton, the "loadPhotos" function will be called
    document.getElementById('loadPhotosButton').onclick = onLoadPhotosButtonClick;
    document.getElementById('nextButton').onclick = onNextButtonClick;
    document.getElementById('previousButton').onclick = onPreviousButtonClick;
    document.getElementById('mainImage').onclick = onNextButtonClick;
    
    // Once you create functions to be called when other elements are clicked (e.g., the
    // previous button, next button, image), you should assign the function names to the
    // onclick properties of each element that will respond when the user clicks.
    // Follow the pattern used above for the loadPhotosButton.
}


/**
 * No need to edit below this line to meet the assignment requirements.
 */

// Set it up so the init function is called as soon as the document finishes loading
window.onload = init;
