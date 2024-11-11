// Get modal elements
document.addEventListener("DOMContentLoaded", function() {
    console.log("JavaScript is running");
var modal = document.getElementById("privacyPolicyModal");
var btn = document.getElementById("privacyPolicyButton");
var closeButton = document.getElementById("closeButton"); // Fixed here

btn.onclick = function() {
    modal.style.display = "block";
}

closeButton.onclick = function() { // Fixed here
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
});