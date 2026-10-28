let knop = document.getElementById("fan-knop");
let antwoord = document.getElementById("fan-antwoord");

let fan = false;

knop.onclick = function() {
    if (fan == false) {
    antwoord.innerHTML = "Jaaa! Jij bent een echte Roxy-fan!";
    knop.style.color= "white";
    knop.style.backgroundColor= "#d63384";
    fan = true;
} else {
    antwoord.innerHTML = "Jammer";
    knop.style.color = "#d63384"
    knop.style.backgroundColor= "white";
    fan = false;
}
};