function toggleVid() {
    document.getElementById("video-content").classList.toggle("hidden");
    const tglvd = document.getElementById("toggle-video");
    tglvd.innerHTML = (tglvd.innerHTML === "&lt;" ? "&gt;" : "&lt;");

    if (tglvd.innerHTML === "&lt;") {
        document.getElementById("video").pause();
    }
}

function slide(amt) {
    const pctg = amt * 25;
    document.getElementById("section-container").style.transform = `translateX(-${pctg}%)`
}