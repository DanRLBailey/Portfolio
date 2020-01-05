var modalTGPSolo = document.getElementById('modalTGPSolo');
var buttonTGPSolo = document.getElementById('buttonTGPSolo');

var modalGD = document.getElementById('modalGD');
var buttonGD = document.getElementById('buttonGD');

var modalMGD = document.getElementById('modalMGD');
var buttonMGD = document.getElementById('buttonMGD');

var modalFOGGS = document.getElementById('modalFOGGS');
var buttonFOGGS = document.getElementById('buttonFOGGS');

var spanTGPSolo = document.getElementsByClassName("closeTGPSolo")[0];
var spanGD = document.getElementsByClassName("closeGD")[0];
var spanMGD = document.getElementsByClassName("closeMGD")[0];
//var spanFOGGS = document.getElementsByClassName("closeFOGGS")[0];
var spanFOGGS = document.querySelector(".closeFOGGS");

buttonTGPSolo.onclick = function() {
    modalTGPSolo.style.display = "block";
}

buttonGD.onclick = function() {
    modalGD.style.display = "block";
}

buttonMGD.onclick = function() {
    modalMGD.style.display = "block";
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

spanMGD.onclick = function() {
    modalMGD.style.display = "none";
}

spanFOGGS.onclick = function() {
    modalFOGGS.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
//window.onclick = function(event) {
    //if (event.target == modal) {
        //modal.style.display = "none";
    //}
//}