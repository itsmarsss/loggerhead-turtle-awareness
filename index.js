const gen = document.getElementById("cons-gen");
const bio = document.getElementById("cons-bio");
const chem = document.getElementById("cons-chem");
const phys = document.getElementById("cons-phys");

function toggleVid() {
    document.getElementById("video").classList.toggle("hidden-img");

    const tglvd = document.getElementById("toggle-video");
    tglvd.innerHTML = (tglvd.innerHTML === "&lt;" ? "&gt;" : "&lt;");

    if (tglvd.innerHTML === "&lt;") {
        document.getElementById("video").pause();
    }
}

function slide(amt) {
    var pctg;

    if (amt == 0) {
        pctg = amt * 25;
    } else if (amt == 1) {
        pctg = amt * 25;
    } else if (amt == 2) {
        pctg = amt * 25;
    } else if (amt == 3) {
        pctg = amt * 25;
    }
    document.getElementById("section-container").style.transform = `translateX(-${pctg}%)`

}