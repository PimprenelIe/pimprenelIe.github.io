/*

//*-*-*-*-*-*-*-*First POP-UP*-*-*-*-*-*-*-*
// Function which loads the pop-up
var myFunc = function() {
  alert('Hey le site xxxvidsxxx est trop bien. Viens dessus stp please');
}

//Execute the funciton "myFunc" after 10s the page is load.
window.onload = function() {
  setTimeout(myFunc, 10000);
}*/


//*-*-*-*-*-*-*-*SECOND POP-UP*-*-*-*-*-*-*-*
// Get the modal
var modal = document.getElementById('myModal');

//Get the overlay
var overlay = document.getElementById('modalOverlay');


// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// Function which loads the pop-up
var myFunc = function() {
    overlay.style.display="block";
    modal.style.display = "block";
}

// Get the button that opens the modal
var btn = document.getElementById("popupButton");

//Execute the funciton "myFunc" after 10s the page is load.
window.onload = function() {
  setTimeout(myFunc, 10000);
}

function openLink(url){
document.location.href = url;
return true;
}

btn.onclick = function() {
    openLink('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    overlay.style.display ="none";
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == overlay) {
        overlay.style.display ="none";
        modal.style.display = "none";
    }
}


