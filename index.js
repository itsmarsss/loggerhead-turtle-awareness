function toggleVid() {
    const vdcnt = document.getElementById("video-content");
    vdcnt.classList.toggle("hidden");
    setTimeout(function () {
        document.getElementById("video").classList.toggle("hidden-img");
    }, 500);

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