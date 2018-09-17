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

/*DECLARATION*/

// Get the modal
var modal = document.getElementById('myModal');

//Get the overlay
var overlay = document.getElementById('modalOverlay');

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// Get the button that opens the modal
var btn = document.getElementById("popupButton");

// Get the mode of the window
var mode = localStorage.getItem('mode')

// Get the button that make psychadelic mode
var btnPsy = document.getElementById("psyMode");

// Get all paragraph
var paragraph = document.getElementsByTagName('p');



var headings = document.querySelectorAll('h1,h2,h3');

/*FUNCTION*/

//Changer le style pour le mettre en mode psychadélique
function psyMode(){
    mode='psy';
    localStorage.setItem('mode', mode);
    //Ici, mettre style à jour
    document.body.style.backgroundColor='#f0f';
    for(let i=0;i<paragraph.length;i++){
        paragraph[i].style.color='#00f';
        paragraph[i].style.fontFamily='Papyrus';
    }
    for(let i=0;i<headings.length;i++){
        headings[i].style.color='#0f0';
        headings[i].style.fontFamily='Comic Sans';
    }
}

//Changer le style pour retourner au mode standard (noir sur blanc)
function standardMode(){
    mode='standard';
    localStorage.setItem('mode',mode);
    //Ici remettre style standard
    document.body.style.backgroundColor='#fff';

    for(let i=0;i<paragraph.length;i++){
        paragraph[i].style.color='#444';
        paragraph[i].style.fontFamily='serif';
    }

    for(let i=0;i<headings.length;i++){
        headings[i].style.color='#444';
        headings[i].style.fontFamily='serif';
    }

}

// Function which loads the pop-up
var myFunc = function() {
    overlay.style.display="block";
    modal.style.display = "block";
}

//Function which open a link
function openLink(url){
    document.location.href = url;
    return true;
}


/*EXECUTION*/

//Execute the function "myFunc" after 10s the page is load.
//Execute the function psyMode if the user set in psy mode.
window.onload = function() {
    setTimeout(myFunc, 10000);
    if(mode=='psy'){
        psyMode();
    }
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

btnPsy.onclick=function(){
    if(mode=='psy'){
        standardMode();
    }
    else{
        psyMode();
    }
}