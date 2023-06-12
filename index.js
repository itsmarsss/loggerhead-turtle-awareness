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
    const pctg = amt * 25;
    document.getElementById("section-container").style.transform = `translateX(-${pctg}%)`

    setTimeout(function () {
        gen.style.display = "none";
        bio.style.display = "none";
        chem.style.display = "none";
        phys.style.display = "none";

        if (amt == 0) {
            gen.style.display = "flex";
        } else if (amt == 1) {
            bio.style.display = "flex";
        } else if (amt == 2) {
            chem.style.display = "flex";
        } else if (amt == 3) {
            phys.style.display = "flex";
        }
    }, 200);
}