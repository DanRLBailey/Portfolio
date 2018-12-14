var modalTGPSolo = document.getElementById('modalTGPSolo');
var buttonTGPSolo = document.getElementById('buttonTGPSolo');

var modalGD = document.getElementById('modalGD');
var buttonGD = document.getElementById('buttonGD');

var modalTGPPair = document.getElementById('modalTGPPair');
var buttonTGPPair = document.getElementById('buttonTGPPair');

var modalFOGGS = document.getElementById('modalFOGGS');
var buttonFOGGS = document.getElementById('buttonFOGGS');

var spanTGPSolo = document.getElementsByClassName("closeTGPSolo")[0];
var spanGD = document.getElementsByClassName("closeGD")[0];
var spanTGPPair = document.getElementsByClassName("closeTGPPair")[0];
//var spanFOGGS = document.getElementsByClassName("closeFOGGS")[0];
var spanFOGGS = document.querySelector(".closeFOGGS");

buttonTGPSolo.onclick = function() {
    modalTGPSolo.style.display = "block";
}

buttonGD.onclick = function() {
    modalGD.style.display = "block";
}

buttonTGPPair.onclick = function() {
    modalTGPPair.style.display = "block";
}

buttonFOGGS.onclick = function() {
    modalFOGGS.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
spanTGPSolo.onclick = function() {
    modalTGPSolo.style.display = "none";
}

spanGD.onclick = function() {
    modalGD.style.display = "none";
}

spanTGPPair.onclick = function() {
    modalTGPPair.style.display = "none";
}

spanFOGGS.onclick = function() {
    modalFOGGS.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}